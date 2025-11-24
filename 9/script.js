function getFormData() {
    return{
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        about: document.getElementById("about").value,
        birth: document.getElementById("birth").value,
        portfolio: document.getElementById("portfolio").value,
        skills: Array.from(document.querySelectorAll("input[name='skills']:checked")).map(cb => cb.value),
        education: document.getElementById("education").value,
    };
}

function setFormData(data) {
    document.getElementById("fullName").value = data.fullName || "";
    document.getElementById("email").value = data.email || "";
    document.getElementById("phone").value = data.phone || "";
    document.getElementById("about").value = data.about || "";
    document.getElementById("birth").value = data.birth || "";
    document.getElementById("portfolio").value = data.portfolio || "";
    document.getElementById("education").value = data.education || "";
    document.querySelectorAll("input[name='skills']").forEach(ch => {
        ch.checked = data.skills?.includes(ch.value) || false;
    });
};

document.querySelector(".resumeForm").addEventListener("input", () => {
    const data = getFormData();
    localStorage.setItem("autosaveResume", JSON.stringify(data));
});

document.addEventListener("DOMContentLoaded", () => {
    updateProfileSelect();
    const saved = localStorage.getItem("autosaveResume");
    if (saved) {
        setFormData(JSON.parse(saved));
    }
});

function updateProfileSelect() {
    const select = document.getElementById("profileSelect");
    select.innerHTML = "";
    const savedProfiles = JSON.parse(localStorage.getItem("savedProfiles") || "{}");
    for (const name in savedProfiles) {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    }
};

document.getElementById("saveProfile").addEventListener("click", () => {
    const profileName = document.getElementById("profileName").value.trim();
    if (!profileName) return alert("Введите имя профиля!");
    const data = getFormData();
    const savedProfiles = JSON.parse(localStorage.getItem("savedProfiles") || "{}");
    savedProfiles[profileName] = data;
    localStorage.setItem("savedProfiles", JSON.stringify(savedProfiles));
    updateProfileSelect();
    document.getElementById("profileName").value = ""; // очистка поля
    alert("Профиль сохранён!");
});

document.getElementById("loadProfile").addEventListener("click", () => {
    const selected = document.getElementById("profileSelect").value;
    if (!selected) return alert("Выберите профиль!");
    const savedProfiles = JSON.parse(localStorage.getItem("savedProfiles") || "{}");
    const data = savedProfiles[selected];
    setFormData(data);
    localStorage.setItem("autosaveResume", JSON.stringify(data));
    alert("Профиль загружен!");
});

document.getElementById("deleteProfile").addEventListener("click", () => {
    const selected = document.getElementById("profileSelect").value;
    if (!selected) return alert("Выберите профиль!");
    if (!confirm("Удалить выбранный профиль?")) return;
    const savedProfiles = JSON.parse(localStorage.getItem("savedProfiles") || "{}");
    delete savedProfiles[selected];
    localStorage.setItem("savedProfiles", JSON.stringify(savedProfiles));
    updateProfileSelect();
    alert("Профиль удалён!");
});

document.getElementById("clearForm").addEventListener("click", () => {
    if (!confirm("Очистить форму?")) return;
    document.querySelector(".resumeForm").reset();
    localStorage.removeItem("autosaveResume");
    alert("Форма очищена!");
});


