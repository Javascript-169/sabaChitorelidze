// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
//წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.


let email = prompt("Enter your email");

let dot = email.indexOf(".");
let at = email.indexOf("@");
let beforDot = email.substring(0,dot);
let afterAt = email.substring(at);
let dotToAt = email.substring(dot,at);
let hiddenEmail = dotToAt.replace(dotToAt,".").repeat(dotToAt.length);
let result = `${beforDot}${hiddenEmail}${afterAt}`

alert(result);

