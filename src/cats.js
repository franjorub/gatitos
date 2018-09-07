import random from "random-name";
import randomInt from "random-int";

let cats = [];

for (let index = 0; index < 10; index++) {
  const first = random.first();
  const last = random.last();
  cats.push({
    image: `https://robohash.org/${randomInt(2048)}?set=set4`,
    name: `${first} ${last}`,
    email: `${first}.${last}@email.com`
  });
}

export default cats;
