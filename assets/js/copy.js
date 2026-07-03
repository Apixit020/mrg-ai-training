let copyInitialized = false;

function showToast(message) {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

async function handleCopyClick(button) {
  const promptBox = button.closest(".prompt-box");
  const promptContent = promptBox ? promptBox.querySelector(".prompt-content") : null;

  if (!promptContent) {
    return;
  }

  const originalText = button.textContent;

  try {
    await navigator.clipboard.writeText(promptContent.textContent.trim());
    button.textContent = "✅ Copied!";
    showToast("คัดลอก Prompt แล้ว!");
  } catch (error) {
    console.error("Copy failed:", error);
    showToast("คัดลอกไม่สำเร็จ");
    return;
  }

  window.setTimeout(() => {
    button.textContent = originalText;
  }, 1500);
}

export function initCopy() {
  if (copyInitialized) {
    return;
  }

  copyInitialized = true;

  const bindCopyButtons = () => {
    const buttons = document.querySelectorAll(".copy-btn");

    buttons.forEach((button) => {
      if (button.dataset.copyBound === "true") {
        return;
      }

      button.dataset.copyBound = "true";
      button.addEventListener("click", () => {
        handleCopyClick(button);
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindCopyButtons, { once: true });
    return;
  }

  bindCopyButtons();
}

initCopy();
window.initCopy = initCopy;
