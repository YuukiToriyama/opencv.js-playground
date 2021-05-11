export const helloWorld: string = `
// Your code here
console.log("hello, world!");
`
export const threshold: string = `
// image thresholding sample
// https://docs.opencv.org/3.4/d7/dd0/tutorial_js_thresholding.html

// 読み込んだ画像にアクセス
const imgElement = document.getElementById('sample_1');

// 処理をするためにOpenCVに読み込みMat型の変数を作成
let src = cv.imread(imgElement);
// 同時に処理の出力先を作成
let dst = new cv.Mat();

// 画像をグレースケールに変換
// cv.cvtColor(src, dst, code, dstCn);
// src: 入力
// dst: 出力
// code: 色空間の変換式を指定するコード(詳しくは https://docs.opencv.org/master/d8/d01/group__imgproc__color__conversions.html#ga4e0972be5de079fed4e3a10e24ef5ef0)
// dstCn: dstのチャンネル数(srcとcodeにより自動的に計算されるので0を指定しておけば良い)
cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);

// 画像の2値化
// cv.threshold(src, dst, thresh, maxval, type)
// src: 入力
// dst: 出力
// thresh: しきい値
// maxval: 最大値
// type: しきい値処理の手法を指定することができます
cv.threshold(src, dst, 177, 200, cv.THRESH_BINARY);

// 処理結果をcanvasに表示する
cv.imshow('canvasOutput', dst);

// 後処理
// GCが働かないのでsrc,dstなどのMatオブジェクトは処理終了後削除する必要があります
src.delete();
dst.delete();
`