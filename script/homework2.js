// switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.

let vegetables = "Broccoli";

switch(vegetables) {
    case "Broccoli":
        alert("Welcome");
      break;
    case "Carrot":
        alert("Hello");
      break;
      default:
        alert("Neither");
};