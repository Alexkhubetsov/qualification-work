/* #region properties 
const menuBtns = document.querySelectorAll('.js-menu-btn');
const menuEl = document.querySelector('.menu-container');

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    menuEl.classList.toggle('is-open');
  });
});
*/
const openModalBtn = document.querySelector('.js-open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const backdrop = document.querySelector('.backdrop');

if (openModalBtn && closeModalBtn && backdrop) {
  openModalBtn.addEventListener('click', () => {
    backdrop.classList.add('is-open');
  });

  closeModalBtn.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('is-open');
    }
  });
}






const openModalLearn1Btn = document.querySelector('.js-open-modal-learn1-btn');
const closeModalLearn1Btn = document.querySelector('.close-modal-learn1-btn');
const backdrop1 = document.querySelector('.backdrop1');

if (openModalLearn1Btn && closeModalLearn1Btn && backdrop1) {
  openModalLearn1Btn.addEventListener('click', () => {
    backdrop1.classList.add('is-open');
  });

  closeModalLearn1Btn.addEventListener('click', () => {
    backdrop1.classList.remove('is-open');
  });

  backdrop1.addEventListener('click', (e) => {
    if (e.target === backdrop1) {
      backdrop1.classList.remove('is-open');
    }
  });
}



const tabButtons = document.querySelectorAll('.tab-btn');
  const tabItems = document.querySelectorAll('.tab-item');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Активуємо кнопку
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Активуємо контент
      const target = button.getAttribute('data-tab');
      tabItems.forEach(item => item.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });

  // При відкритті
  document.body.classList.add("modal-open");

  // При закритті
  document.body.classList.remove("modal-open");
  
  





  const openModalLearn2Btn = document.querySelector('.js-open-modal-learn2-btn');
  const closeModalLearn2Btn = document.querySelector('.close-modal-learn2-btn');
  const backdrop2 = document.querySelector('.backdrop2');
  
  if (openModalLearn2Btn && closeModalLearn2Btn && backdrop2) {
    openModalLearn2Btn.addEventListener('click', () => {
      backdrop2.classList.add('is-open');
      document.body.classList.add("modal-open");
    });
  
    closeModalLearn2Btn.addEventListener('click', () => {
      backdrop2.classList.remove('is-open');
      document.body.classList.remove("modal-open");
    });
  
    backdrop2.addEventListener('click', (e) => {
      if (e.target === backdrop2) {
        backdrop2.classList.remove('is-open');
        document.body.classList.remove("modal-open");
      }
    });
  }
  
  // Таби всередині модуль2
  const tabButtons2 = document.querySelectorAll('.modal2 .tab-btn');
  const tabItems2 = document.querySelectorAll('.modal2 .tab-item');
  
  tabButtons2.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons2.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      const target = button.getAttribute('data-tab');
      tabItems2.forEach(item => item.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });









  const openModalLearn3Btn = document.querySelector('.js-open-modal-learn3-btn');
const closeModalLearn3Btn = document.querySelector('.close-modal-learn3-btn');
const backdrop3 = document.querySelector('.backdrop3');

if (openModalLearn3Btn && closeModalLearn3Btn && backdrop3) {
  openModalLearn3Btn.addEventListener('click', () => {
    backdrop3.classList.add('is-open');
    document.body.classList.add("modal-open");
  });

  closeModalLearn3Btn.addEventListener('click', () => {
    backdrop3.classList.remove('is-open');
    document.body.classList.remove("modal-open");
  });

  backdrop3.addEventListener('click', (e) => {
    if (e.target === backdrop3) {
      backdrop3.classList.remove('is-open');
      document.body.classList.remove("modal-open");
    }
  });
}


const openModalLearn4Btn = document.querySelector('.js-open-modal-learn4-btn');
const closeModalLearn4Btn = document.querySelector('.close-modal-learn4-btn');
const backdrop4 = document.querySelector('.backdrop4');

if (openModalLearn4Btn && closeModalLearn4Btn && backdrop4) {
  openModalLearn4Btn.addEventListener('click', () => {
    backdrop4.classList.add('is-open');
    document.body.classList.add("modal-open");
  });

  closeModalLearn4Btn.addEventListener('click', () => {
    backdrop4.classList.remove('is-open');
    document.body.classList.remove("modal-open");
  });

  backdrop4.addEventListener('click', (e) => {
    if (e.target === backdrop4) {
      backdrop4.classList.remove('is-open');
      document.body.classList.remove("modal-open");
    }
  });
}



function highlightBlock(id) {
  document.querySelectorAll('.demo-box').forEach(el => {
    el.classList.remove('active');
  });
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}




document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("semanticsButton");
  const info = document.getElementById("semanticsInfo");

  if (btn && info) {
    btn.addEventListener("click", () => {
      info.style.display = info.style.display === "none" ? "block" : "none";
    });
  }
});







document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.css-apply-btn');
  const block = document.querySelector('.css-toggle-demo');

  if (btn && block) {
    btn.addEventListener('click', () => {
      block.classList.toggle('active');
      btn.textContent = block.classList.contains('active') ? 'Зняти стилі' : 'Застосувати CSS';
    });
  }
});





function checkOrder() {
  const correct = [
    '<!DOCTYPE html>',
    '<html lang="uk">',
    '<head>',
    '<meta charset="UTF-8">',
    '<title>Назва</title>',
    '<link rel="stylesheet" href="styles.css">',
    '</head>',
    '<body>',
    '<h1>Привіт!</h1>',
    '<script src="script.js"></script>',
    '</body>',
    '</html>'
  ];
  const user = Array.from(document.querySelectorAll('#dropzone li')).map(li => li.textContent.trim());
  const feedback = document.getElementById('feedback');
  if (JSON.stringify(user) === JSON.stringify(correct)) {
    feedback.textContent = '✅ Правильно!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = '❌ Є помилки. Спробуй ще.';
    feedback.style.color = 'red';
  }
}

document.querySelectorAll('.sortable li').forEach(item => {
  item.draggable = true;
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.innerText);
    e.target.classList.add('dragging');
  });
  item.addEventListener('dragend', e => {
    e.target.classList.remove('dragging');
  });
});

const dropzone = document.getElementById('dropzone');
dropzone.addEventListener('dragover', e => {
  e.preventDefault();
});
dropzone.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const li = document.createElement('li');
  li.textContent = data;
  dropzone.appendChild(li);
});
function resetSkeleton() {
  const skeletonZone = document.getElementById("dropzone");
  skeletonZone.innerHTML = ""; // очищає поле для складання
  document.getElementById("check-result").textContent = ""; // очищає результат
}





























let alignments = ["center", "space-between", "space-around", "flex-start", "flex-end"];
let currentAlign = 0;
function toggleFlexAlignment() {
  const container = document.getElementById("flex-demo");
  currentAlign = (currentAlign + 1) % alignments.length;
  container.style.justifyContent = alignments[currentAlign];
}

let directions = ["row", "column", "row-reverse", "column-reverse"];
let currentDir = 0;
function toggleDirection() {
  const container = document.getElementById("direction-demo");
  currentDir = (currentDir + 1) % directions.length;
  container.style.flexDirection = directions[currentDir];
}







let secretNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
  const guess = parseInt(document.getElementById("guess").value);
  const output = document.getElementById("guessResult");

  if (guess === secretNumber) {
    output.textContent = "🎉 Вірно! Ви вгадали число.";
    output.style.color = "green";
    // згенеруй нове число для повторної гри
    secretNumber = Math.floor(Math.random() * 10) + 1;
  } else {
    output.textContent = guess > secretNumber ? "📉 Занадто велике!" : "📈 Занадто мале!";
    output.style.color = "orange";
  }
}



function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
      document.getElementById("userResult").textContent = `👤 Ім'я: ${data.name}, 📧 Email: ${data.email}`;
    })
    .catch(() => {
      document.getElementById("userResult").textContent = "❌ Помилка завантаження даних";
    });
}







let is3cols = true;
function toggleGridCols() {
  const container = document.getElementById("grid-container");
  container.style.gridTemplateColumns = is3cols ? "1fr 1fr" : "1fr 1fr 1fr";
  is3cols = !is3cols;
}

let isSpan = false;
function toggleGridSpan() {
  const item = document.getElementById("first-grid-item");
  item.style.gridColumn = isSpan ? "span 1" : "span 2";
  isSpan = !isSpan;
}

function showWidth() {
  const result = document.getElementById("screen-width-result");
  result.textContent = `Поточна ширина екрану: ${window.innerWidth}px`;
}



function showAdvice() {
  const tips = [
    "Верстай мобілку — потім розширюй",
    "Перевір ширину через min-width, не max-width",
    "Думай про пальці: великі кнопки — зручно",
    "Тести — на реальному пристрої!"
  ];
  const output = document.getElementById("advice-output");
  const random = tips[Math.floor(Math.random() * tips.length)];
  output.textContent = random;
}





let layoutIndex = 0;
const layoutNames = ["Десктоп", "Планшет", "Мобільний"];
function nextLayout() {
  layoutIndex = (layoutIndex + 1) % 3;
  const layout = document.querySelector('.layout-switch');
  layout.className = 'layout-switch layout-' + layoutIndex;
  document.getElementById('layout-name').textContent = "Поточний: " + layoutNames[layoutIndex];
}




function resizeImage() {
  const img = document.getElementById("anim-img");
  img.style.maxWidth = img.style.maxWidth === "150px" ? "300px" : "150px";
}

function checkImgFormat() {
  const select = document.getElementById("img-format");
  const result = document.getElementById("img-result");
  switch (select.value) {
    case "jpg":
      result.textContent = "📸 Добре для фотографій!";
      break;
    case "png":
      result.textContent = "🧊 Прозорість — це PNG!";
      break;
    case "svg":
      result.textContent = "🖼️ Ідеально для іконок!";
      break;
    case "webp":
      result.textContent = "⚡ Сучасний формат з мінімальною вагою!";
      break;
    default:
      result.textContent = "❗ Оберіть варіант";
  }
}




function checkNavType() {
  const sel = document.getElementById("nav-check");
  const res = document.getElementById("nav-result");
  switch (sel.value) {
    case "header":
      res.textContent = "✅ Головна — це верхнє меню!";
      break;
    case "footer":
      res.textContent = "📌 Це дублююче меню внизу.";
      break;
    case "context":
      res.textContent = "🧩 Контекстна — локальна навігація.";
      break;
    default:
      res.textContent = "❗ Оберіть тип навігації.";
  }
}





function resizePreview() {
  const range = document.getElementById("rangeWidth");
  const preview = document.getElementById("previewFrame");
  const display = document.getElementById("widthDisplay");

  preview.style.width = range.value + "px";
  display.textContent = range.value;
}








const openModalLearn5Btn = document.querySelector('.js-open-modal-learn5-btn');
const closeModalLearn5Btn = document.querySelector('.close-modal-learn5-btn');
const backdrop5 = document.querySelector('.backdrop5');

if (openModalLearn5Btn && closeModalLearn5Btn && backdrop5) {
  openModalLearn5Btn.addEventListener('click', () => {
    backdrop5.classList.add('is-open');
    document.body.classList.add("modal-open");
  });

  closeModalLearn5Btn.addEventListener('click', () => {
    backdrop5.classList.remove('is-open');
    document.body.classList.remove("modal-open");
  });

  backdrop5.addEventListener('click', (e) => {
    if (e.target === backdrop5) {
      backdrop5.classList.remove('is-open');
      document.body.classList.remove("modal-open");
    }
  });
}

// Активація вкладок у модулі 5
const tabButtons5 = document.querySelectorAll('#learn-modal5 .tab-btn');
const tabItems5 = document.querySelectorAll('#learn-modal5 .tab-item');

tabButtons5.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons5.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const target = button.getAttribute('data-tab');
    tabItems5.forEach(item => item.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const demoElement = document.getElementById("demo");
  if (demoElement) {
    demoElement.textContent = "JS працює!";
  }
});



function greetByName() {
  const name = document.getElementById("nameInput").value;
  const result = document.getElementById("greetingResult");
  if (name.trim() !== "") {
    result.textContent = `Привіт, ${name}!`;
    result.style.color = "green";
  } else {
    result.textContent = "Будь ласка, введіть ім’я.";
    result.style.color = "red";
  }
}





function highlightModal5() {
  const modal5 = document.querySelector('.modal5');
  if (!modal5) return;

  modal5.classList.add('modal-highlight');

  setTimeout(() => {
    modal5.classList.remove('modal-highlight');
  }, 2000);
}


function detectJsType() {
  const input = document.getElementById("typeInput").value;
  let result;
  try {
    result = typeof eval(input);
  } catch {
    result = "не можна визначити";
  }
  document.getElementById("typeResult").textContent = `Тип: ${result}`;
}




function checkGrade() {
  const val = parseInt(document.getElementById("gradeInput").value);
  let result = "";

  if (isNaN(val)) {
    result = "Будь ласка, введіть число.";
  } else if (val >= 90) {
    result = "Відмінно!";
  } else if (val >= 70) {
    result = "Добре!";
  } else if (val >= 50) {
    result = "Задовільно!";
  } else {
    result = "Не зараховано.";
  }

  document.getElementById("gradeResult").textContent = result;
}





function calcSquare() {
  const num = parseFloat(document.getElementById("numInput").value);
  if (isNaN(num)) {
    document.getElementById("squareResult").textContent = "Введіть число!";
    return;
  }
  const square = num * num;
  document.getElementById("squareResult").textContent = `Результат: ${square}`;
}










const hoverBox = document.getElementById("hoverBox");

if (hoverBox) {
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.classList.add("hovered");
  });

  hoverBox.addEventListener("mouseout", () => {
    hoverBox.classList.remove("hovered");
  });

  hoverBox.addEventListener("click", () => {
    hoverBox.classList.toggle("clicked");
    hoverBox.textContent =
      hoverBox.classList.contains("clicked") ? "Натиснуто! Натисне ще раз." : "Наведи або натисни";
  });
}





function changeDomText() {
  const domText = document.getElementById("domText");
  if (domText) {
    domText.textContent = "DOM успішно змінено!";
    domText.style.backgroundColor = "#d4edda";
    domText.style.color = "#155724";
  }
}




function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = "Нова динамічна картка";
  document.getElementById("cardContainer").appendChild(card);
}


let count = 0;

function increase() {
  count++;
  document.getElementById("counter").textContent = count;
}

function decrease() {
  count--;
  document.getElementById("counter").textContent = count;
}







// Анімація
function animateBox() {
  const box = document.getElementById("animatedBox");
  box.style.transition = "all 0.5s ease";
  box.style.transform = "scale(1.4) rotate(360deg)";
  box.style.backgroundColor = "lime";

  setTimeout(() => {
    box.style.transform = "scale(1) rotate(0deg)";
    box.style.backgroundColor = "red";
  }, 1500);
}

function startAnimation() {
  const box = document.getElementById("animatedBox");
  box.classList.remove("animate"); // на випадок повторного запуску
  void box.offsetWidth; // перезапуск анімації
  box.classList.add("animate");
}





function checkUserCodeImproved() {
  const code = document.getElementById("userCode").value;
  const result = document.getElementById("codeResult");
  const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const loginResult = document.getElementById("loginResult");

if (!loginInput || !passwordInput || !loginResult) {
  result.textContent = "❌ Помилка: не знайдено HTML-елементи для перевірки (login, password, loginResult)";
  result.style.color = "red";
  return;
}
  result.textContent = "";
  result.style.color = "black";

  // Видалити попередній скрипт
  const oldScript = document.getElementById("user-login-script");
  if (oldScript) oldScript.remove();

  const script = document.createElement("script");
  script.id = "user-login-script";
  script.textContent = code;
  document.body.appendChild(script);

  try {
    if (typeof runLogin !== "function") {
      throw new Error("Функція runLogin не знайдена.");
    }

    // Емуляція 3 тестів
    const loginEl = document.getElementById("login");
    const passwordEl = document.getElementById("password");
    const resultEl = document.getElementById("loginResult");

    // Тест 1
    loginEl.value = "";
    passwordEl.value = "";
    runLogin();
    const res1 = resultEl.textContent.trim();

    // Тест 2
    loginEl.value = "user";
    passwordEl.value = "123";
    runLogin();
    const res2 = resultEl.textContent.trim();

    // Тест 3
    loginEl.value = "admin";
    passwordEl.value = "123456";
    runLogin();
    const res3 = resultEl.textContent.trim();

    if (res1 !== "Заповніть всі поля") {
      result.textContent = "❌ Помилка: при порожніх полях очікується 'Заповніть всі поля'";
      result.style.color = "red";
    } else if (res2 !== "Пароль занадто короткий") {
      result.textContent = "❌ Помилка: при короткому паролі має бути 'Пароль занадто короткий'";
      result.style.color = "red";
    } else if (res3 !== "Успішний вхід!") {
      result.textContent = "❌ Помилка: очікується 'Успішний вхід!'";
      result.style.color = "red";
    } else {
      result.textContent = "✅ Все вірно! Логіка працює ідеально.";
      result.style.color = "green";
    }
  } catch (e) {
    result.textContent = "❌ Синтаксична помилка: " + e.message;
    result.style.color = "red";
  }
}

// Кнопка "Показати підказку"
function toggleHint2(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

function toggleHint1(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function toggleHint(id) {
  const el = document.getElementById(id);
  if (el.style.display === 'none') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}








// Відкриття/закриття модулю 6
const openModalLearn6Btn = document.querySelector('.js-open-modal-learn6-btn');
const closeModalLearn6Btn = document.querySelector('.close-modal-learn6-btn');
const backdrop6 = document.querySelector('.backdrop6');

if (openModalLearn6Btn && closeModalLearn6Btn && backdrop6) {
  openModalLearn6Btn.addEventListener('click', () => {
    backdrop6.classList.add('is-open');
    document.body.classList.add("modal-open");
  });

  closeModalLearn6Btn.addEventListener('click', () => {
    backdrop6.classList.remove('is-open');
    document.body.classList.remove("modal-open");
  });

  backdrop6.addEventListener('click', (e) => {
    if (e.target === backdrop6) {
      backdrop6.classList.remove('is-open');
      document.body.classList.remove("modal-open");
    }
  });
}























// =================== АВТОРИЗАЦІЯ ===================

function openLoginModal() {
  document.getElementById('authBackdrop').classList.add('is-open');
  document.getElementById('loginModal').classList.remove('hidden');
  document.getElementById('registerModal').classList.add('hidden');
}

function openRegisterModal() {
  document.getElementById('authBackdrop').classList.add('is-open');
  document.getElementById('registerModal').classList.remove('hidden');
  document.getElementById('loginModal').classList.add('hidden');
}

function closeAuthModal() {
  document.getElementById('authBackdrop').classList.remove('is-open');
  document.getElementById('loginModal').classList.add('hidden');
  document.getElementById('registerModal').classList.add('hidden');
}

function switchToRegister() {
  openRegisterModal();
}
function switchToLogin() {
  openLoginModal();
}

// =================== РЕЄСТРАЦІЯ ===================

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function registerUser() {
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();

  if (!name || !email) {
    alert("Будь ласка, заповніть всі поля.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Введіть коректний email.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find(u => u.email === email);

  if (exists) {
    alert("Користувач з таким email вже існує");
    return;
  }

  const newUser = { name, email, progress: {} };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  alert("Реєстрація успішна!");
  location.reload();
}

// =================== ВХІД ===================

function loginUser() {
  const name = document.getElementById("login-name").value.trim();
  const email = document.getElementById("login-email").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const matchedUser = users.find(u => u.name === name && u.email === email);

  if (matchedUser) {
    localStorage.setItem("currentUser", JSON.stringify(matchedUser));
    alert("Вхід виконано");
    closeAuthModal();
    updateCabinet();
  } else {
    alert("Користувача не знайдено");
  }
}

// =================== КАБІНЕТ ===================

function updateCabinet() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return;

  const topics = ["HTML", "CSS", "Структура сайту", "Адаптивність", "JavaScript"];
  const progress = user.progress || {};
  const controlTests = progress.control || {};
  const practicePassed = progress.practiceCompleted;

  // ===================== РОЗРАХУНОК ПРОГРЕСУ =====================
  const topicCount = topics.length;
  const controlCount = 5; // якщо у тебе 5 тестів
  const totalUnits = topicCount + controlCount; // 5 тем + 5 тестів
  let completedUnits = 0;


  
  // Прогрес по темах
  topics.forEach(topic => {
    const value = progress[topic];
    if (typeof value === "number" && value >= 60) completedUnits++;
  });

  // Прогрес по контрольних
  if (progress.control) {
    for (let key in progress.control) {
      const val = progress.control[key];
      if (typeof val === "number" && val >= 60) completedUnits++;
    }
  }





// ========== ПРОГРЕС ПРАКТИКИ ==========
const practiceList = document.getElementById("practiceProgressList");
if (practiceList) {
  practiceList.innerHTML = "";

  const practiceLabels = {
    "Практика HTML": "Практика HTML",
    "Практика CSS": "Практика CSS",
    "Практика Структура": "Практика Структура",
    "Практика Адаптивність": "Практика Адаптивність",
    "Практика JavaScript": "Практика JavaScript"
  };

  const practiceProgress = progress.practice || {};

  for (const key in practiceLabels) {
    const percent = practiceProgress[key] || 0;
    const status = percent >= 100 ? "✅" : "🔲";

    practiceList.innerHTML += `<li>${status} ${practiceLabels[key]} — ${percent}%</li>`;
  }
}









  const percentComplete = Math.round((completedUnits / totalUnits) * 100);

  // ===================== ВИВІД ДАНИХ =====================
  document.getElementById("cabinetName").textContent = user.name;
  document.getElementById("cabinetEmail").textContent = user.email;

  const list = document.getElementById("progressList");
  list.innerHTML = "";
  topics.forEach(topic => {
    const val = progress[topic];
    const text = typeof val === "number" ? `${val}%` : val ? "✅" : "🔲";
    list.innerHTML += `<li>${text} ${topic}</li>`;
  });
  // Вивід контрольних тестів
const controlList = document.getElementById("controlProgressList");
if (controlList) {
  controlList.innerHTML = "";
  const controlLabels = {
    "Контроль HTML": "HTML",
    "Контроль CSS": "CSS",
    "Контроль Структура": "Структура",
    "Контроль Адаптив": "Адаптивність",
    "Контроль JavaScript": "JavaScript"
  };

  Object.entries(controlTests).forEach(([key, val]) => {
    const name = controlLabels[key] || key;
    const percent = typeof val === "number" ? `${val}%` : "0%";
    const status = (val >= 60) ? "✅" : "🔲";
    controlList.innerHTML += `<li>${status} ${name} — ${percent}</li>`;
  });
  }



// 2. Вивід у DOM
const percentTextEl = document.getElementById("progressPercentText");
const progressBarEl = document.getElementById("progressBar");
if (percentTextEl) percentTextEl.textContent = `${percentComplete}%`;
if (progressBarEl) progressBarEl.style.width = `${percentComplete}%`;

  
const progressFill = document.querySelector('.progress-fill');
if (progressFill) {
  progressFill.style.width = `${percentComplete}%`;
}

const badge = document.getElementById("badgeInfo");
const practice = user.progress.practice || {};
let badges = [];

// === Теоретичні бейджі ===
if (percentComplete === 100) {
  badges.push("🏆 Мастер теорії — курс завершено!");
} else if (percentComplete >= 50) {
  badges.push("🥈 У процесі — вже 50% теорії!");
} else if (percentComplete >= 20) {
  badges.push("📘 Новачок — перший крок в теорії зроблено!");
}

const completedTopics = topics.filter(topic => progress[topic] >= 60).length;
if (completedTopics >= 3) {
  badges.push("📚 Ерудит — 3 теоретичні теми пройдено!");
}
const completedTopics2 = topics.filter(topic => progress[topic] >= 60).length;
if (completedTopics2 >= 5) {
  badges.push("🎓 Гуру знань — Всі теоретичні теми успішно завершені!");
}
// === Практичні бейджі ===
const practiceTopics = ["Практика HTML", "Практика CSS", "Практика Структура", "Практика Адаптивність", "Практика JavaScript"];
const practiceProgress = practiceTopics.map(topic => {
  const count = practice[topic] || 0;
  return Math.round((count / 3) * 100); // ⬅️ Конвертуємо у відсоток
});

if (practiceProgress.some(p => p >= 33)) {
  badges.push("🛠️ Перший крок у практиці!");
}
if (practiceProgress.every(p => p >= 33)) {
  badges.push("🔧 Майстер ремесла — базовий рівень у всіх практиках!");
}
if (practiceProgress.every(p => p === 100)) {
  badges.push("🏆 Практик-експерт — 100% усіх практик!");
}

// === Повне завершення ===
if (percentComplete === 100 && practiceProgress.every(p => p === 100)) {
  badges.push("💎 Повне завершення курсу — вітаємо!");
}

// Вивід у розмітку
badge.innerHTML = badges.length
  ? badges.map(text => `<li>${text}</li>`).join("")
  : "<li>Ще немає бейджів</li>";






  // UI перемикання
  document.getElementById("authControls")?.classList.add("hidden");
  document.getElementById("cabinetButtonWrapper")?.classList.remove("hidden");
}


// =================== ВИХІД ===================

function logoutUser() {
  localStorage.removeItem("currentUser");
  location.reload();
}







function markPracticeStep(topicKey) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress.practice) user.progress.practice = {};

  const done = user.progress.practice[topicKey] || 0;

  if (done < 3) {
    user.progress.practice[topicKey] = done + 1;
  }

  // Зберігаємо
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлюємо масив усіх користувачів
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = allUsers.map(u =>
    u.email === user.email ? user : u
  );
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  updateCabinet();
}



// =================== НА ЗАВАНТАЖЕННІ ===================

window.addEventListener("load", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  convertLegacyProgress(); // ДОДАЙ ЦЕ!
  if (user?.name && user?.email) {
    updateCabinet();
  } else {
    document.getElementById("cabinetButtonWrapper")?.classList.add("hidden");
    document.getElementById("authControls")?.classList.remove("hidden");
    document.getElementById("cabinetModal")?.classList.add("hidden");
  }
});

// =================== МОДАЛЬНЕ ВІКНО КАБІНЕТУ ===================

function toggleCabinetModal() {
  const modal = document.getElementById("cabinetModal");
  modal.classList.toggle("hidden");
  modal.classList.toggle("is-open");
}





const newUser = {
  name,
  email,
  progress: {
    HTML: 0,
    CSS: 0,
    "Структура сайту": 0,
    "Адаптивність": 0,
    JavaScript: 0,
    control: {},              // для тестів розділу "Контроль знань"
    practice: {
      HTML: 0,
      CSS: 0,
      Структура: 0,
      Адаптивність: 0,
      JavaScript: 0
    }}
};














function convertLegacyProgress() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.forEach(user => {
    if (!user.progress) return;
    for (let key in user.progress) {
      if (user.progress[key] === true) {
        user.progress[key] = 5;
      }
    }
  });

  localStorage.setItem("users", JSON.stringify(users));

  const current = JSON.parse(localStorage.getItem("currentUser"));
  const updatedCurrent = users.find(u => u.email === current.email);
  if (updatedCurrent) {
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrent));
    updateCabinet();
  }
}



function saveProgress(topic, percent) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  user.progress[topic] = percent;
  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  updateCabinet();
}















// ===================== CSS ТЕСТ =====================
function checkCssQuiz() {
  const form = document.getElementById("quiz-css");
  const answers = {
    q1: "link",
    q2: ".",
    q3: "background-color",
    q4: "font-family",
    q5: "зовнішній відступ"
  };

  let score = 0;
  for (let key in answers) {
    if (form.elements[key].value === answers[key]) score++;
  }

  const percent = score * 20;
  const result = document.getElementById("result-css");
  result.textContent = `CSS-тест: ${score} з 5 правильних`;
  result.style.color = percent >= 60 ? "green" : "red";

  saveProgress("CSS", percent);
}

// ===================== HTML ТЕСТ =====================
function checkHtmlQuiz() {
  const form = document.getElementById("quiz-html");
  const answers = {
    q1: "markup",
    q2: "title",
    q3: "meta",
    q4: "1",
    q5: "ul"
  };
  let score = 0;
  for (let key in answers) {
    if (form.elements[key].value === answers[key]) score++;
  }

  const percent = score * 20;
  const result = document.getElementById("result-html");
  result.textContent = `HTML-тест: ${score} з 5 правильних`;
  result.style.color = percent >= 60 ? "green" : "red";

  saveProgress("HTML", percent);
}

// ===================== АДАПТИВНІСТЬ =====================
function checkAdaptQuiz() {
  const form = document.getElementById("quiz-adapt");
  const answers = {
    q1: "grid",
    q2: "відстань між елементами",
    q3: "запит до пристрою",
    q4: "до 768px",
    q5: "відсоток ширини вікна",
    q6: "picture",
    q7: "rem",
    q8: "row",
    q9: "заповнити, обрізаючи",
    q10: "максимальну ширину"
  };
  let score = 0;
  for (let key in answers) {
    if (form.elements[key].value === answers[key]) score++;
  }

  const percent = score * 10;
  const result = document.getElementById("result-adapt");
  result.textContent = `Тест з адаптивності: ${score} з 10 правильних`;
  result.style.color = percent >= 80 ? "green" : "red";

  saveProgress("Адаптивність", percent);
}

// ===================== JAVASCRIPT ТЕСТ =====================
function checkJSQuiz() {
  const form = document.getElementById("quiz-js");
  const answers = {
    q1: "number",
    q2: "const",
    q3: "додає обробник подій",
    q4: "усі відповіді вірні",
    q5: "alert",
    q6: "===",
    q7: "getElementById",
    q8: "true/false",
    q9: "appendChild",
    q10: "console.log()"
  };

  let score = 0;
  for (let key in answers) {
    if (form.elements[key].value === answers[key]) score++;
  }

  const percent = score * 10;
  const result = document.getElementById("result-js");
  result.textContent = `JS-тест: ${score} з 10 правильних`;
  result.style.color = percent >= 70 ? "green" : "red";

  saveProgress("JavaScript", percent);
}


function checkBigTest() {
  const form = document.getElementById("big-test");
  const selects = form.querySelectorAll("select");
  let correct = 0;

  selects.forEach(select => {
    if (select.value === "correct") correct++;
  });

  const total = selects.length;
  const percent = Math.round((correct / total) * 100);

  // Показ результату
  const result = document.getElementById("big-test-result");
  result.textContent = `🧱 Тест «Структура сайту»: ${correct} з ${total}`;
  result.style.color = percent >= 60 ? "green" : "red";

  // Збереження прогресу
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  user.progress["Структура сайту"] = percent;
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлення масиву користувачів
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  updateCabinet();
}









// Переключення вкладок всередині модулю 6
const tabButtons1 = document.querySelectorAll('.tab-btn');
const tabItems1 = document.querySelectorAll('.tab-item');

// Таб-кнопки всередині модуля 6

tabButtons1.forEach(button => {
  button.addEventListener("click", () => {
    const isLocked = button.dataset.locked === "true";
    const target = button.getAttribute("data-tab");

    if (isLocked) {
      alert("🔒 Ця секція заблокована. Пройдіть попередній тест на 72% або більше, щоб її розблокувати.");
      return;
    }

    // Встановити активну вкладку
    tabButtons1.forEach(btn => btn.classList.remove("active"));
    tabItems1.forEach(item => item.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});


// У checkHtmlQuiz() після підрахунку percent















function checkHtmlQuiz1() {
  const form = document.getElementById("quiz1-html");
  const selects = form.querySelectorAll("select");
  let correct = 0;

  selects.forEach(select => {
    if (select.value === "correct") correct++;
  });

  const total = selects.length;
  const percent = Math.round((correct / total) * 100);

  // Показ результату
  const result = document.getElementById("result-html1");
  result.textContent = `📘 Тест з HTML: ${correct} з ${total} правильних — ${percent}%`;
  result.style.color = percent >= 72 ? "green" : "red";

  // Збереження результату
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.control) user.progress.control = {};
  user.progress.control["HTML"] = percent;
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлення масиву користувачів
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  // Оновлення кабінету
  if (typeof updateCabinet === "function") updateCabinet();
  if (percent >= 72) {
    const btn = document.querySelector('[data-tab="tab3-6"]');
    if (btn) btn.removeAttribute("data-locked");
  }

}





function checkCssQuiz1() {
  const form = document.getElementById("quiz2-css");
  const selects = form.querySelectorAll("select");
  let correct = 0;

  selects.forEach(select => {
    if (select.value === "correct") correct++;
  });

  const total = selects.length;
  const percent = Math.round((correct / total) * 100);

  // Показ результату
  const result = document.getElementById("result-css1");
  result.textContent = `🎨 Тест з CSS: ${correct} з ${total} правильних — ${percent}%`;
  result.style.color = percent >= 72 ? "green" : "red";

  // Збереження результату
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.control) user.progress.control = {};
  user.progress.control["CSS"] = percent;
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлення масиву користувачів
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  // Оновлення кабінету
  if (typeof updateCabinet === "function") updateCabinet();

  // Розблокування наступної вкладки
  if (percent >= 72) {
    const btn = document.querySelector('[data-tab="tab4-6"]');
    if (btn) btn.removeAttribute("data-locked");
  }
}




function checkStrQuiz() {
  const form = document.getElementById("quiz-structure");
  const selects = form.querySelectorAll("select");
  let correct = 0;

  selects.forEach(select => {
    if (select.value === "correct") correct++;
  });

  const total = selects.length;
  const percent = Math.round((correct / total) * 100);

  // Вивід результату
  const result = document.getElementById("result-str");
  result.textContent = `📐 Тест «Структура сайту»: ${correct} з ${total} — ${percent}%`;
  result.style.color = percent >= 72 ? "green" : "red";

  // Збереження в особистий кабінет
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.control) user.progress.control = {};
  user.progress.control["Структура"] = percent;
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлення масиву користувачів
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  // Оновлення кабінету, якщо така функція є
  if (typeof updateCabinet === "function") updateCabinet();

  // Розблокування вкладки 5 (Адаптив)
  if (percent >= 72) {
    const btn = document.querySelector('[data-tab="tab5-6"]');
    if (btn) btn.removeAttribute("data-locked");
  }
}











function checkadQuiz() {
  const form = document.getElementById("quiz-ad");
  const selects = form.querySelectorAll("select");
  let correct = 0;

  selects.forEach(select => {
    if (select.value === "correct") correct++;
  });

  const total = selects.length;
  const percent = Math.round((correct / total) * 100);

  // Вивід результату
  const result = document.getElementById("result-ad");
  result.textContent = `📱 Тест «Адаптивність»: ${correct} з ${total} — ${percent}%`;
  result.style.color = percent >= 72 ? "green" : "red";

  // Збереження результату в профіль
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress) user.progress = {};
  if (!user.progress.control) user.progress.control = {};
  user.progress.control["Адаптивність"] = percent;
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлення масиву користувачів
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  // Розблокування вкладки 6 (JavaScript)
  if (percent >= 72) {
    const nextTab = document.querySelector('[data-tab="tab6-6"]');
    if (nextTab) nextTab.removeAttribute("data-locked");
  }

  // Оновлення кабінету
  if (typeof updateCabinet === "function") updateCabinet();
}







function checkjavaQuiz() {
  const form = document.getElementById("quiz-java");
  const selects = form.querySelectorAll("select");
  let correct = 0;

  selects.forEach(select => {
    if (select.value === "correct") correct++;
  });

  const total = selects.length;
  const percent = Math.round((correct / total) * 100);

  // Показ результату
  const result = document.getElementById("result-java");
  result.textContent = `⚙️ Тест «JavaScript»: ${correct} з ${total} — ${percent}%`;
  result.style.color = percent >= 72 ? "green" : "red";

  // Збереження результату в профіль користувача
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.control) user.progress.control = {};
  user.progress.control["JavaScript"] = percent;
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлення масиву користувачів
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  if (typeof updateCabinet === "function") updateCabinet();
}




function closeModalAndScrollToPractice() {
  const modal = document.querySelector('.backdrop6');
  if (modal) {
    modal.classList.remove('is-open'); // ⬅ використовуємо правильний клас
    document.body.classList.remove("modal-open");
  }

  const section = document.getElementById("test");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}













function checkTask1Html() {
  const input = document.getElementById("task1-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /<h1[^>]*>.*мій перший сайт.*<\/h1>/,
    /<p[^>]*>.*<\/p>/,
    /<ul[^>]*>.*<li>.*<\/li>.*<\/ul>/s,
    /<img[^>]*alt="[^"]*"[^>]*>/
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task1-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Завантаження користувача
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "html1";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  // Оновлення загального прогресу "Практика HTML"
  const htmlTasks = ["html1", "html2", "html3"];
  const htmlProgress = htmlTasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(htmlProgress.reduce((a, b) => a + b, 0) / htmlTasks.length);
  user.progress.practice["Практика HTML"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлення глобального списку користувачів
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}



function checkTask2Html() {
  const input = document.getElementById("task2-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /<h2[^>]*>.*мій профіль.*<\/h2>/,
    /<a[^>]*href="https:\/\/example\.com"[^>]*>.*перейти.*<\/a>/,
    /<button[^>]*>.*натисни мене.*<\/button>/
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task2-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Завантаження користувача
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "html2";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  // Оновлення загального прогресу "Практика HTML"
  const htmlTasks = ["html1", "html2", "html3"];
  const htmlProgress = htmlTasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(htmlProgress.reduce((a, b) => a + b, 0) / htmlTasks.length);
  user.progress.practice["Практика HTML"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлення глобального списку користувачів
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}



function checkTask3Html() {
  const input = document.getElementById("task3-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /<h2[^>]*>.*розклад занять.*<\/h2>/,
    /<table.*?>.*<\/table>/s,
    /<tr>.*<th>.*<\/th>.*<th>.*<\/th>.*<\/tr>/s,
    /<tr>.*<td>.*<\/td>.*<td>.*<\/td>.*<\/tr>/s
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task3-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Завантаження користувача
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "html3";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  // Оновлення загального прогресу "Практика HTML"
  const htmlTasks = ["html1", "html2", "html3"];
  const htmlProgress = htmlTasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(htmlProgress.reduce((a, b) => a + b, 0) / htmlTasks.length);
  user.progress.practice["Практика HTML"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновлення глобального списку користувачів
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}








function checkTask4Css() {
  const input = document.getElementById("task4-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /body\s*{[^}]*background-color\s*:\s*#f0f0f0[^}]*}/,
    /h1\s*{[^}]*color\s*:\s*red[^}]*}/,
    /p\s*{[^}]*font-size\s*:\s*18px[^}]*}/
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task4-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Збереження прогресу
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "css1";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  const cssTasks = ["css1", "css2", "css3"];
  const cssProgress = cssTasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(cssProgress.reduce((a, b) => a + b, 0) / cssTasks.length);
  user.progress.practice["Практика CSS"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}







function checkTask5Css() {
  const input = document.getElementById("task5-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /\.main-title\s*{[^}]*color\s*:\s*blue[^}]*}/,
    /p\s*{[^}]*text-align\s*:\s*center[^}]*}/,
    /\.highlight\s*{[^}]*font-weight\s*:\s*bold[^}]*}/
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task5-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Збереження прогресу
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "css2";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  const cssTasks = ["css1", "css2", "css3"];
  const cssProgress = cssTasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(cssProgress.reduce((a, b) => a + b, 0) / cssTasks.length);
  user.progress.practice["Практика CSS"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}




function checkTask6Css() {
  const input = document.getElementById("task6-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /\.container\s*{[^}]*display\s*:\s*flex[^}]*}/,
    /\.container\s*{[^}]*justify-content\s*:\s*center[^}]*}/,
    /\.box\s*{[^}]*width\s*:[^}]*}/,
    /\.box\s*{[^}]*height\s*:[^}]*}/,
    /\.box\s*{[^}]*background[^}]*}/,
    /<div[^>]*class="container"[^>]*>.*<div[^>]*class="box"[^>]*>.*<\/div>.*<\/div>/s
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task6-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Збереження прогресу
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "css3";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  const cssTasks = ["css1", "css2", "css3"];
  const cssProgress = cssTasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(cssProgress.reduce((a, b) => a + b, 0) / cssTasks.length);
  user.progress.practice["Практика CSS"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}



function checkTask7Structure() {
  const input = document.getElementById("task7-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /<header[^>]*>.*<h1>.*<\/h1>.*<\/header>/s,
    /<nav[^>]*>.*<\/nav>/s,
    /<main[^>]*>.*<\/main>/s,
    /<footer[^>]*>.*<\/footer>/s
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task7-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Збереження прогресу
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "structure1";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  const tasks = ["structure1", "structure2", "structure3"];
  const values = tasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(values.reduce((a, b) => a + b, 0) / tasks.length);
  user.progress.practice["Практика Структура"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}



function checkTask8Structure() {
  const input = document.getElementById("task8-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /<section[^>]*>.*<\/section>/s,
    /<article[^>]*>.*<h3>.*<\/h3>.*<p>.*<\/p>.*<\/article>/s,
    /(.*<article[^>]*>.*<h3>.*<\/h3>.*<p>.*<\/p>.*<\/article>.*){2}/s
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task8-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Збереження прогресу
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "structure2";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  const tasks = ["structure1", "structure2", "structure3"];
  const values = tasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(values.reduce((a, b) => a + b, 0) / tasks.length);
  user.progress.practice["Практика Структура"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}



function checkTask9Structure() {
  const input = document.getElementById("task9-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /<footer[^>]*>.*<\/footer>/s,
    /<footer[^>]*>.*<p[^>]*>.*<\/p>.*<\/footer>/s,
    /<footer[^>]*>.*<nav[^>]*>.*<a[^>]*>.*<\/a>.*<a[^>]*>.*<\/a>.*<\/nav>.*<\/footer>/s
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task9-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Збереження прогресу
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "structure3";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  const tasks = ["structure1", "structure2", "structure3"];
  const values = tasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(values.reduce((a, b) => a + b, 0) / tasks.length);
  user.progress.practice["Практика Структура"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}







function checkTask10Adaptive() {
  const input = document.getElementById("task10-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /display\s*:\s*flex/,
    /@media\s*\(max-width:\s*\d+px\)/,
    /flex-direction\s*:\s*column/,
    /<div[^>]*>.*колонка 1.*<\/div>/s
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task10-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "adaptive1";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  const tasks = ["adaptive1", "adaptive2", "adaptive3"];
  const values = tasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(values.reduce((a, b) => a + b, 0) / tasks.length);
  user.progress.practice["Практика Адаптивність"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}




function checkTask11Adaptive() {
  const input = document.getElementById("task11-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /<div[^>]*class=["']?banner["']?[^>]*>/,
    /@media\s*\(max-width:\s*768px\)/,
    /\.banner\s*{[^}]*display\s*:\s*none[^}]*}/s,
    /<p[^>]*>.*<\/p>/
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task11-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "adaptive2";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  const tasks = ["adaptive1", "adaptive2", "adaptive3"];
  const values = tasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(values.reduce((a, b) => a + b, 0) / tasks.length);
  user.progress.practice["Практика Адаптивність"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}

function checkTask12Adaptive() {
  const input = document.getElementById("task12-html").value.toLowerCase();
  let score = 0;

  const requirements = [
    /\.box\s*{[^}]*background\s*:\s*skyblue[^}]*}/s,
    /\.box\s*{[^}]*width\s*:\s*100%[^}]*}/s,
    /@media\s*\(min-width:\s*768px\)/,
    /\.box\s*{[^}]*width\s*:\s*600px[^}]*}/s,
    /<div[^>]*class=["']?box["']?[^>]*>.*<\/div>/s
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task12-html-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "adaptive3";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  const tasks = ["adaptive1", "adaptive2", "adaptive3"];
  const values = tasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(values.reduce((a, b) => a + b, 0) / tasks.length);
  user.progress.practice["Практика Адаптивність"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}



function checkTask13Js() {
  const input = document.getElementById("task13-js").value.toLowerCase();
  let score = 0;

  const requirements = [
    /<button[^>]*class="btn1"[^>]*>.*(привіт|показати).*<\/button>/s,
    /<button[^>]*class="btn2"[^>]*>.*(змінити|текст).*<\/button>/s,
    /<button[^>]*class="btn3"[^>]*>.*(сховати|приховати).*<\/button>/s,
    /addEventListener\s*\(\s*['"]click['"]\s*,\s*showalert\s*\)/i,
    /function\s+showalert\s*\(\)\s*{[\s\S]*?alert\s*\(/i,
    /addEventListener\s*\(\s*['"]click['"]\s*,\s*changetext\s*\)/i,
    /function\s+changetext\s*\(\)\s*{[\s\S]*?(innertext|textcontent)/i,
    /addEventListener\s*\(\s*['"]click['"]\s*,\s*hidebutton\s*\)/i,
    /function\s+hidebutton\s*\(\)\s*{[\s\S]*?(display\s*=\s*["']none["'])/i,
    /\.btn1\s*{[\s\S]*?}/,
    /\.btn2\s*{[\s\S]*?}/,
    /\.btn3\s*{[\s\S]*?}/
    
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task13-js-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Оновлення локального користувача
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "js1";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  // Підрахунок середнього прогресу для "Практика JavaScript"
  const jsTasks = ["js1", "js2", "js3"];
  const jsProgress = jsTasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(jsProgress.reduce((a, b) => a + b, 0) / jsTasks.length);
  user.progress.practice["Практика JavaScript"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  // Оновити глобальний список
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}








function checkTask14Js() {
  const input = document.getElementById("task14-js").value.toLowerCase();
  let score = 0;

  const requirements = [
    // HTML кнопки
    /<button[^>]*class=["']btn1["'][^>]*>.*?(тема|перемкнути).*?<\/button>/s,
    /<button[^>]*class=["']btn2["'][^>]*>.*?(додати|повідомлення).*?<\/button>/s,
    /<button[^>]*class=["']btn3["'][^>]*>.*?(видалити|повідомлення).*?<\/button>/s,

    // Контейнер повідомлень
    /<div[^>]*id=["']messages["'][^>]*><\/div>/,

    // CSS: стилі кнопок — або поелементно, або групово
    /(\.btn1\s*{[^}]*}|\.btn1\s*,\s*\.btn2\s*,\s*\.btn3\s*{[^}]*})/i,
    /(\.btn2\s*{[^}]*}|\.btn1\s*,\s*\.btn2\s*,\s*\.btn3\s*{[^}]*})/i,
    /(\.btn3\s*{[^}]*}|\.btn1\s*,\s*\.btn2\s*,\s*\.btn3\s*{[^}]*})/i,

    // CSS для темної теми
    /body\.dark-mode\s*{[^}]*?(background-color|color)[^}]*}/i,

    // JS: addEventListener
    /addEventListener\s*\(\s*['"]click['"]\s*,\s*toggletheme\s*\)/i,
    /addEventListener\s*\(\s*['"]click['"]\s*,\s*addmessage\s*\)/i,
    /addEventListener\s*\(\s*['"]click['"]\s*,\s*removemessage\s*\)/i,

    // JS: функції
    /function\s+toggletheme\s*\(\)\s*{[\s\S]*?classlist\.toggle\s*\(\s*['"]dark-mode['"]\s*\)/i,
    /function\s+addmessage\s*\(\)\s*{[\s\S]*?createelement\s*\(\s*['"]p['"]\s*\)[\s\S]*?appendchild\s*\(/i,
    /function\s+removemessage\s*\(\)\s*{[\s\S]*?removechild\s*\(/i,
  ];

  requirements.forEach(pattern => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task14-js-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Збереження прогресу
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "js2";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  // Підрахунок середнього
  const jsTasks = ["js1", "js2", "js3"];
  const jsProgress = jsTasks.map(id => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(jsProgress.reduce((a, b) => a + b, 0) / jsTasks.length);
  user.progress.practice["Практика JavaScript"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map(u => u.email === user.email ? user : u);
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}




function checkTask15Js() {
  const input = document.getElementById("task15-js").value.toLowerCase();
  let score = 0;

  const requirements = [
    // HTML: input, кнопки, список
    /<input[^>]*id=["']userinput["'][^>]*>/,
    /<button[^>]*class=["']btn1["'][^>]*>.*?(показати).*?<\/button>/s,
    /<button[^>]*class=["']btn2["'][^>]*>.*?(очистити).*?<\/button>/s,
    /<button[^>]*class=["']btn3["'][^>]*>.*?(додати).*?<\/button>/s,
    /<ul[^>]*id=["']itemlist["'][^>]*><\/ul>/,

    // CSS: стилі кнопок
    /(\.btn1\s*{[^}]*}|\.btn1\s*,\s*\.btn2\s*,\s*\.btn3\s*{[^}]*})/i,
    /(\.btn2\s*{[^}]*}|\.btn1\s*,\s*\.btn2\s*,\s*\.btn3\s*{[^}]*})/i,
    /(\.btn3\s*{[^}]*}|\.btn1\s*,\s*\.btn2\s*,\s*\.btn3\s*{[^}]*})/i,

    // JS: addEventListener
    /addEventListener\s*\(\s*['"]click['"]\s*,\s*showinput\s*\)/i,
    /addEventListener\s*\(\s*['"]click['"]\s*,\s*clearinput\s*\)/i,
    /addEventListener\s*\(\s*['"]click['"]\s*,\s*addtolist\s*\)/i,

    // JS: функції
    /function\s+showinput\s*\(\)\s*{[\s\S]*?alert\s*\(/i,
    /function\s+clearinput\s*\(\)\s*{[\s\S]*?(getelementbyid\s*\(\s*['"]userinput['"]\s*\)|\.value\s*=\s*['"]['"])/i,
    /function\s+addtolist\s*\(\)\s*{[\s\S]*?createelement\s*\(\s*['"]li['"]\s*\)[\s\S]*?appendchild\s*\(/i,
  ];

  requirements.forEach((pattern) => {
    if (pattern.test(input)) score++;
  });

  const percent = Math.round((score / requirements.length) * 100);
  const resultEl = document.getElementById("task15-js-result");
  resultEl.textContent = `Завдання виконано на ${percent}%.`;
  resultEl.style.color = percent >= 75 ? "green" : "red";

  // Збереження прогресу
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user.progress) user.progress = {};
  if (!user.progress.practice) user.progress.practice = {};
  if (!user.progress.practice.tasks) user.progress.practice.tasks = {};

  const taskId = "js3";
  const prev = user.progress.practice.tasks[taskId] || 0;
  if (percent > prev) {
    user.progress.practice.tasks[taskId] = percent;
  }

  // Підрахунок середнього
  const jsTasks = ["js1", "js2", "js3"];
  const jsProgress = jsTasks.map((id) => user.progress.practice.tasks[id] || 0);
  const avg = Math.round(jsProgress.reduce((a, b) => a + b, 0) / jsTasks.length);
  user.progress.practice["Практика JavaScript"] = avg;

  localStorage.setItem("currentUser", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updated = users.map((u) => (u.email === user.email ? user : u));
  localStorage.setItem("users", JSON.stringify(updated));

  if (typeof updateCabinet === "function") updateCabinet();
}