// --------------------------------
// createElement() Function Start

const createElement = (tagName, textContent) => {
  const element = document.createElement(tagName);

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------
// createCard() Function Start

const createCard = (src, alt, title, price, text) => {
  const section = document.getElementById(`cards`);

  // ELEMENTS
  const article = createElement(`article`);
  const figure = createElement(`figure`);
  const img = createElement(`img`);
  const div = createElement(`div`);
  const h2 = createElement(`h2`, title);
  const h3 = createElement(`h3`, `$ ${price}`);
  const p = createElement(`p`, text);
  const btnGroup = createElement(`div`);
  const btn = createElement(`button`);
  const btn2 = createElement(`button`);
  const a = createElement(`a`, `Order Now!`);
  const a2 = createElement(`a`, `Add to whislist`);

  // ATTRIBUTES
  img.src = src;
  img.alt = alt;
  img.loading = `lazy`;
  btnGroup.role = `group`;
  btnGroup.ariaLabel = `User Order`;
  btn.type = `button`;
  btn2.type = `button`;
  a.href = `#`;
  a2.href = `#`;

  // CLASSNAME
  article.className = `card`;
  figure.className = `card__figure`;
  img.className = `card__img-top`;
  div.className = `card__body`;
  h2.className = `card__title`;
  h3.className = `card__price`;
  p.className = `card__text`;
  btnGroup.className = `card__btn-group`;
  btn.className = `card__btn`;
  btn2.className = `card__btn`;
  a.className = `card__link`;
  a2.className = `card__link`;

  // APPEND ELEMENTS
  // article.append(img, h2, p);
  section.append(article);

  article.append(figure, div);
  figure.append(img);
  // h2.append(h3);
  div.append(h2, h3, p, btnGroup);
  btnGroup.append(btn, btn2);
  btn.appendChild(a);
  btn2.appendChild(a2);

  return section;
};

// createCard() Function End
// --------------------------------
// Card-group Start

createCard(
  `https://th.bing.com/th/id/R.c07a3ca111fcd565f5e470a7627e630c?rik=xAI9PPbtb06FuA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-hd-pizza-pizza-png-1538.png&ehk=eQaoh0abtf2UrAF9SnLYKG%2foa36maezHutx44uP%2bXpw%3d&risl=&pid=ImgRaw&r=0`,
  `pizza`,
  `Pizza`,
  `299`,
  `Pizza, originating from Italy, is a delightful dish that has captured hearts worldwide. It consists of a thin, round base made from leavened wheat-based dough.`,
);

createCard(
  `https://th.bing.com/th/id/R.71b1311c4068239ca265cf7f5adcc9fa?rik=aUOxD6h0xE4yxA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fBurger-Free-Download-PNG.png&ehk=D00joxClVX430Ov4HQkweUPKTfcewxvA8wz72NyOies%3d&risl=1&pid=ImgRaw&r=0`,
  `burger`,
  `Burger`,
  `50`,
  `A burger is a delicious food item that consists of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll12. It’s a popular choice for a quick and satisfying meal!`,
);

createCard(
  `https://www.cookingpitara.com/wp-content/uploads/2021/01/Momos-Recipe.png`,
  `momos`,
  `Momos`,
  `20`,
  `Momos are a delightful treat found in Tibetan, Nepali, and Bhutanese cuisines, as well as in various parts of India. These steamed or fried dumplings are filled with a savory mixture of ingredients.`,
);

createCard(
  `https://static.vecteezy.com/system/resources/previews/025/269/568/non_2x/samosa-with-ai-generated-free-png.png`,
  `samosa`,
  `Samosa`,
  `12`,
  `Samosa has been a popular food of the Indian subcontinent for centuries. It is assumed that it comes from Central Asia before the 10th century.`,
);

createCard(
  `https://static.vecteezy.com/system/resources/previews/027/144/745/original/gujarati-khaman-dhokla-isolated-on-transparent-background-png.png`,
  `dhokla`,
  `Dhokla`,
  `29`,
  `Dhokla is a common meal in many households but we undermine its ability as a superfood. It has all the macronutrients required by humans.`,
);

createCard(
  `https://png.pngtree.com/png-vector/20231001/ourmid/pngtree-indian-jalebi-sweet-deep-png-image_10133866.png`,
  `jalebi`,
  `Jalebi`,
  `9`,
  `Jalebi is a popular sweet snack in South Asia, the Middle East, Africa and Mauritius. It goes by many names, including jilapi, zelepi, jilebi, jilipi, zulbia, jerry, mushabak, z’labia, zengoula or zalabia.`,
);

// Card-group End
// --------------------------------
// currentYear Start
// Display the Current Year

{
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById(`currentYear`);
  yearElement.appendChild(document.createTextNode(currentYear));
}

// currentYear End
// --------------------------------
