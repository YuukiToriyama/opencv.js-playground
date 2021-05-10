# opencv.js-playground
環境構築なしにOpenCV.jsを試してみるにはこちら(開発中)

## 開発Memo
- 読み込んだ画像のサイズを知りたい場合、`width`,`height`の代わりに`naturalWidth`,`naturalHeight`を用いる必要がある
	- widthプロパティは実際に表示されているサイズを返すため
	- 画像本来のサイズを知りたい場合は`naturalWidth`,`naturalHeight`を用いる
```javascript
const image_h9a1o13onus = document.getElementById("h9a1o13onus"); // 読み込んだ画像にアクセス
console.log(image_h9a1o13onus.naturalWidth);
```