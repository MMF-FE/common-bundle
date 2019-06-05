/**
 * 异步加载 script
 * @author vfasky<vfasky@gmail.com>
 **/
export function loadScript(src: string, timeout = 10000) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        let _isReturn = false

        let loadTimeout = setTimeout(() => {
            if (_isReturn) return
            _isReturn = true
            resolve(false)
        }, timeout)

        script.onload = function() {
            if (_isReturn) return
            clearTimeout(loadTimeout)
            _isReturn = true
            resolve(true)
        }
        script.onerror = function() {
            if (_isReturn) return
            clearTimeout(loadTimeout)
            _isReturn = true
            resolve(false)
        }
        script.setAttribute('defer', 'defer')
        script.setAttribute('async', 'async')
        script.src = src
        if (document.head) {
            document.head.appendChild(script)
        }
    })
}

let _queue: { [key: string]: any } = {}

/**
 * 通过队列加载
 * @param src js 路径名称
 * @param timeout 超时时间
 */
export async function queueLoadScript(src: string, timeout = 10000) {
    if (_queue[src] === true) return true

    if (Array.isArray(_queue[src])) {
        return new Promise(resolve => {
            _queue[src].push({
                resolve
            })
        })
    }

    _queue[src] = []

    let res = await loadScript(src, timeout)

    // @ts-ignore
    _queue[src].forEach(promise => promise.resolve(res))

    if (res === true) {
        _queue[src] = true
    }

    return res
}
