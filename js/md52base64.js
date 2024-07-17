// 字符串转16 进制
function hexToString(hex) {
    if (!hex.match(/^[0-9a-fA-F]+$/)) {
        throw new Error('is not a hex string.');
    }
    if (hex.length % 2 !== 0) {
        hex = '0' + hex;
    }
    var bytes = [];
    for (var n = 0; n < hex.length; n += 2) {
        var code = parseInt(hex.substr(n, 2), 16)
        bytes.push(code);
    }
    return bytes;
}

/**
 * 计算文件的MD5
 * @param file 文件
 * @param chunkSize 分片大小
 * @returns Promise
 */
function md56(file, chunkSize) {
    return new Promise((resolve, reject) => {
        let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
        let chunks = Math.ceil(file.size / chunkSize);
        let currentChunk = 0;
        let spark = new SparkMD5.ArrayBuffer();
        let fileReader = new FileReader();

        fileReader.onload = function(e) {

            spark.append(e.target.result);

            currentChunk++;
            if (currentChunk < chunks) {
                loadNext();
            } else {
                let md5 = spark.end();
                resolve(md5);
            }
        };

        fileReader.onerror = function(e) {
            reject(e);
        };

        function loadNext() {
            let start = currentChunk * chunkSize;
            let end = start + chunkSize;
            if (end > file.size) {
                end = file.size;
            }
            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
        }
        loadNext();
    });
}

/**
 *     //   md56(node.files[0], 1024).then(e => {
    //     // 获取到文件的md5
    //     console.log("md5=" + e); //ba6a97dc5472310933d0840e909013ee
    //     // base64.encode(hexToString('ba6a97dc5472310933d0840e909013ee'), 'ba6a97dc5472310933d0840e909013ee')
    //     console.log("base64=" + base64.encode(hexToString(e), e))
    //     debugger
    // }).catch(e => {
    //     // 处理异常
    //     console.error(e);
    // });
 * 生成base64 16进制
 * @param file 文件
 * @returns Promise
 */
function md52base64(file) {
    return md56(file, 1024).then(e => {
        // 获取到文件的md5
        // base64.encode(hexToString('ba6a97dc5472310933d0840e909013ee'), 'ba6a97dc5472310933d0840e909013ee')
        return base64.encode(hexToString(e), e)
    }).catch(e => {
        // 处理异常
        console.error(e);
    });
}
console.log(base64.encode(hexToString(40208), 40208))