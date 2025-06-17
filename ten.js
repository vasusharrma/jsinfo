let i = 1;
outerLoop: while (i <= 10) {

  for (let j = 1; j <= 10; j++) {
    if (j === 5) {
      break outerLoop;
    }
    console.log(i, j);

  }

  i++;
}

for (let j = 1; j <= 20; j++) {
  if (!(j % 2)) {
    console.log(j);
  }
}

function nullishCollashing(nam, age) {
  console.log(nam, ":", age ?? "no age provided"); // age??"no age provided " working as default paramerter the nullish Coalescing operator is using the first define value like age is undefined or null it will ignore it and use " no age provided" elsewise it will use argument
}

nullishCollashing('Annie');
nullishCollashing('Danial', 22);
