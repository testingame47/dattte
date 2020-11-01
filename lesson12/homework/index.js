/* Exersice-1
Chào mọi người, nhân vật chính hôm nay là Tèo. Má tèo là chủ của 1 đại lý vé số, sáng mới ngủ dậy chưa kịp làm gì đã bị má bắt kiểm tra đống vé số ở bên dưới
Mỗi 1 array là 1 tờ vé số việt lốt, chứa các số khác nhau, thứ tự có thể không sắp xếp tăng dần. Hãy so sánh 2 vé số bất kì, và cho biết có trùng nhau hoàn toàn hay không
VD:
const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 5]
const arr4 = [1, 2, 3, 4, 5]
isEqual(arr1, arr2) // true
isEqual(arr1, arr3) // false
isEqual(arr1, arr4) // false */
const checkEleSame = (array1, array2) => {
  return array1.every((value, index) => value === array2[index]);
}
const isEqual = (arr1, arr2) => {
  if (arr1.length === arr2.length && checkEleSame(arr1, arr2)) {
    return true
  } else {
    return false
  }
}

/* Bài 2
Nhà Tèo vừa bán vé số vừa bán đồ tạp hóa, ở trong kho, mặt hàng đồ chơi để không ngăn nắp cho lắm, mỗi 1 lần tìm đồ lại tốn rất nhiều thời gian. Má Tèo vừa mua các kệ để show mặt hàng đồ chơi cho dễ nhìn, dễ lựa.
Nhìn xem, array data bên dưới chính là cách mà má Tèo sắp xếp đồ trước đây, không có quy luật gì cả, trong cái lọ lại chứa cái chai, trong cái chai lại có thể chứa cái gì đấy khác nữa
Má Tèo muốn sắp xếp lại gọn gàng, đơn giản, dễ nhìn như ví dụ, giúp má Tèo nha
VD:
const data = [1, 2, [3, 4, [5]]]
flatten(data) // [1, 2, 3, 4, 5] */
const flatten = data => data.flat(Infinity)

/* Bài 3
Lại là Tèo, sau khi đã có array 1 chiều ở lần trước, Tèo muốn chia array ra thành nhiều đoạn nhỏ hơn, mỗi đoạn chứa n phần tử, giúp Tèo thêm lần nữa nha
Lại là má Tèo, sau khi bày 1024 đồ hàng lên 1 cái kệ, má Tèo phát hiện ra rằng: mình nên đặt đồ theo từng kệ 1, chẳng hạn kệ 1 sẽ để bàn là + bàn chải đánh răng, kệ 2 sẽ để ô mô và bột giặt, ... nghĩ là làm, má Tèo gọi ngay Tèo ra sai việc vặt
Kệ data chínhh là công sức lần trước của Tèo, việc bây giờ Tèo phải làm là vứt cái kệ cũ đi thay bằng những cái kệ mới.
Mỗi 1 kệ sẽ chứa tối đa 1 hay 2 hay 3 hay ... bao nhiêu tùy Tèo cho phép, vì quá mệt mỏi, Tèo đã chạy sang nhờ bạn code hộ output bên dưới
VD:
const data = [1, 2, 3, 4, 5, 6, 7];
chunk(data, 2) // [[1, 2], [3, 4], [5, 6], [7]]
chunk(data, 3) // [[1, 2, 3], [4, 5, 6], [7]] */
const selfChunk = (data, n) => {
  const result = []
  const newArr = []
  for (let i = 0; i < data.length; i++) {
    if (newArr.length < n) {
      newArr.push(data[i])
    }
    if (newArr.length === n) {
      const subArr = newArr.splice(0, n)
      result.push(subArr)
    }
  }
  result.push(newArr)
  return result.filter(ele => ele.length > 0)
}

/* Bài 4
Không sống nổi với má, Tèo quyết định đi làm ở 1 công ty ở Thạch Thất, và đang phải phân tích dựa vào các data đã có sẵn, mỗi 1 array là thông tin của 1 cái gì đó mà Tèo cũng không biết nữa, nhiệm vụ của Tèo là tìm ra điểm chung của 2 array với nhau, Tèo đang khóc ra tiếng mán vì quá khó, hãy giúp Tèo
VD:
const arr1 = [1, 2]
const arr2 = [2, 3]
const arr3 = ['a', 'b']
const arr4 = ['b', 'c']
const arr5 = ['b', 'e', 'c']
const arr6 = ['b', 'b', 'e']
const arr7 = ['b', 'c', 'e']
const arr8 = ['b', 'e', 'c']
intersection(arr1, arr2) // [2]
intersection(arr3, arr4, arr5) // ['b']
intersection(arr6, arr7, arr8) // ['b', 'e'] */
