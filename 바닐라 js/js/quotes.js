const quotes = [
  {
    quote: "How cool is this",
    author: "Nomad Coder",
  },
  {
    quote: "나를 사랑해야 남도 사랑할 수 있다",
    author: "책에서 봄",
  },
  {
    quote: "자신이 필요한 언어와 기능을 찾아서 to do list를 만들어라.",
    author: "Nomad Coder",
  },
  {
    quote: "코딩은 결과에서 모든게 노력과 성취감을 느낄 수 있다",
    author: "Nomad Coder",
  },
  {
    quote: "만들고 생각하라",
    author: "Nomad Coder",
  },
  {
    quote: "초반에 너무 열심히 하지 말자. 요점은 꾸준히 하는 것",
    author: "Nomad Coder",
  },
  {
    quote: "누가 뭐라해도 결정은 다 자신이 했다.",
    author: "내가 말함",
  },
  {
    quote: "코딩 할때 체크리스트 만들지 말기 우린 “다 배우지 않았다”",
    author: "Nomad Coder",
  },
];
//quote는 "명언", author "말한 사람"
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;