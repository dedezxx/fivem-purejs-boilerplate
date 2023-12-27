const app = {
  shoUi: () => {

  },
  close: () => {

  }
}

window.addEventListener('message', ({ data }) => {
  if (data.action === 'shoUi') app.shoUi();
  if (data.action === 'close') app.close();
})