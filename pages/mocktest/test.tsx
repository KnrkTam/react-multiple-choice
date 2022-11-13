export default function App() {
  let s = "MCMXCIV";
  let ans = 0;
  var romanToInt = function (s: string) {
    let arr = s.split("");

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "I":
          if (arr[i + 1] == "V" || arr[i + 1] == "X") {
            ans -= 1;
          } else {
            ans += 1;
          }
          break;
        case "V":
          ans += 5;
          break;
        case "X":
          if (arr[i + 1] == "L" || arr[i + 1] == "C") {
            ans -= 10;
          } else {
            ans += 10;
          }
          break;
        case "L":
          ans += 50;
          break;
        case "C":
          if (arr[i + 1] == "D" || arr[i + 1] == "M") {
            ans -= 100;
          } else {
            ans += 100;
          }
          break;
        case "D":
          ans += 500;
          break;
        case "M":
          ans += 1000;
          break;
      }
    }

    return ans;
  };

  const arry = [1, 2, 1, 3, 4, 3, 5];

  const toFindDuplicates = (arry: number[]) =>
    arry.filter((item, index) => arry.indexOf(item) !== index);
  
  console.log(toFindDuplicates(arry));

  console.log(romanToInt(s));
  return <div></div>;
}
