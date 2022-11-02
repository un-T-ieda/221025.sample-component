// import "lit";
// import "vite-modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const getHTMLCollection = <T extends HTMLElement>(className: string) =>
  Array.from(document.getElementsByClassName(className) as HTMLCollectionOf<T>);

export const modal = () => {
  const buttons = getHTMLCollection<HTMLButtonElement>("js-button");
  const closeButtons = getHTMLCollection<HTMLButtonElement>("js-close-button");
  const dialogs = getHTMLCollection<HTMLDialogElement>("js-dialog");

  const openModal = (target: HTMLDialogElement) => {
    target.showModal();

    requestAnimationFrame(() => target.classList.remove("-closing"));
    disableBodyScroll(target);
  };

  const closeModal = (target: HTMLDialogElement) => {
    target.addEventListener(
      "transitionend",
      () => {
        target.close();
      },
      { once: true }
    );

    target.classList.add("-closing");
    enableBodyScroll(target);
  };

  dialogs.forEach((dialog) => {
    dialog.addEventListener("click", (e) => {
      // TODO: children に書き直す
      const dialogContent =
        document.getElementsByClassName("js-dialog-content")[0];

      if (e.target === dialogContent) {
        e.stopPropagation();
      }

      if (e.target === dialog) {
        // const targetId = dialog?.getAttribute("aria-controls") ?? "";
        // const target = document.getElementById(targetId) as HTMLDialogElement;

        console.log("test");

        closeModal(dialog);
      }
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button?.getAttribute("aria-controls") ?? "";
      const target = document.getElementById(targetId) as HTMLDialogElement;

      if (target) openModal(target);
    });
  });

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      const targetId = closeButton?.getAttribute("aria-controls") ?? "";
      const target = document.getElementById(targetId) as HTMLDialogElement;

      closeModal(target);
    });
  });
};

export const init = (() => {
  // TODO: init 時に値を調整できるようにする
  /*
   * showModal, close 時のコールバックを設定
   */

  modal();
})();
