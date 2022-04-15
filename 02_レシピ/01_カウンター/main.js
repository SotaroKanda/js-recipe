const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")


const plusButton1 = document.getElementById("plus-button1")


const plusButton2 = document.getElementById("plus-button2")

let count = 0

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}


let count1 = 0
// ボタンをクリックしたときの処理を登録
plusButton1.onclick = function () {
  // count を更新
  count1 == count1*2 
  // count を表示
  display.textContent = count1
}


let count2 = 0
// ボタンをクリックしたときの処理を登録
plusButton2.onclick = function () {
  // count を更新
  count2 += -1
  // count を表示
  display.textContent = count2
}