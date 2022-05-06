/*
const testfunc = async () => {
};

const testfunc2 = async function() {
};

async function testfunc3() {
};

function testfunc4() {
};

function test() {
//    const result = await testfunc3();
     return new Promise((resolve, reject) =>{
        const res = testfunc4();
        if (res) {
            resolve(res);
        } else {
            reject(new Error('err le'));
        }
     });
}

function testPro(){
    test().then((data)=> {
        // 
        // success
    }).catch((e)=> {
        // error
    });

    try {
        let res = await test();
    } catch (error) {
        // error
    }
}
*/

async function rejectionWithReturnAwait () {
    try {
      return await new Promise.reject(new Error());
    } catch (e) {
      return 'Saved';
    }
  }
//   rejectionWithReturnAwait().then((ret) => {
//     console.log(ret);    // "Saved"
//   }).catch((err)=>{
//     console.log(err);
//   })
var ret = rejectionWithReturnAwait()
ret.then((rr)=>{
    console.log(rr, "==", 12112);
})
console.log(ret);

/****
// nodejs文件操作
// 文件拷贝
var fs = require('fs')

function copy(src, dst){
    // fs.writeFileSync(dst, fs.readFileSync(src)); // 小文件
    fs.createReadStream(src).pipe(fs.createWriteStream(dst)); // 大文件
}
function main(argv){
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
****/

console.log("========");
console.log("代码开始执行");
setTimeout(()=>{
    console.log("代码 2秒后 执行");
}, 2000);
setTimeout(()=>{
    console.log("代码 0秒后 执行");
}, 0);
console.log("代码结束执行");


