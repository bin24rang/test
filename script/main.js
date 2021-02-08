//Email validation
const sendCheckEmail = document.querySelector('#input-signup-email button');
const emailInputbox = document.querySelector('#input-signup-email input');
function emailCheck(e){
  const self = e.target;
  const errorText = document.querySelector('.valid-email-error');
  const emailVal = emailInputbox.value;
  const regExpEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (emailInputbox.value.length === 0) {
    errorText.classList.add('active');
    errorText.textContent = '이메일을 입력해주세요.';
  } else if (emailVal.match(regExpEmail) != null){
    codeCheckFeild.classList.add('active');
    errorText.classList.remove('active');
    self.textContent='인증 메일 재발송';
  } else {
    errorText.classList.add('active');
    errorText.textContent = '정확한 이메일 주소를 입력해주세요.';
  }
}
sendCheckEmail.addEventListener('click', emailCheck);

//Code validation
const validCodeBtn = document.querySelector('.code-check-wrapper button');
const codeCheckFeild = document.querySelector('.code-check-wrapper');
function codeCheck(){
  const codeInputbox = document.querySelector('.code-check-wrapper input');
  const errorText = document.querySelector('.valid-code-error');
  const passText = document.querySelector('.valid-email-pass');
  const labelPassed = document.querySelector('.label-passed');

  if (codeInputbox.value.length === 0) {
    errorText.classList.add('active');
    errorText.textContent = '인증 번호를 입력해주세요.';
  } else if (codeInputbox.value.length < 5) {
    errorText.classList.add('active');
    errorText.textContent = '인증 번호는 6자리입니다.';
  } else {
    codeCheckFeild.classList.remove('active');
    sendCheckEmail.style.display = "none";
    errorText.classList.remove('active');
    passText.classList.add('active');
    emailInputbox.disabled = true;
    labelPassed.style.display = "inline-block";
  }
}
validCodeBtn.addEventListener('click', codeCheck);

// Reset button
const inputBoxes = document.querySelectorAll('.input-box input');
function focusOn(e) {
  const self = e.target;
  const btnReset = self.nextElementSibling;
  const btnAction = self.nextElementSibling.nextElementSibling;

  if (self.value.length) {
    btnReset.style.display = 'inline-block';
    if (btnAction){
      btnAction.style.right = '32px';
    }
  } else {
    btnReset.style.display = 'none';
    btnAction.style.right = '0';
  }
  btnReset.addEventListener('click', () => {
    self.value ='';
    btnReset.style.display = 'none';
    if (btnAction) {
      btnAction.style.right = '0';
    }
  })
}
for (let i = 0; i < inputBoxes.length; i++) {
  inputBoxes[i].addEventListener('keyup', focusOn);
  // border line
  inputBoxes[i].addEventListener('focus', (e) => {
    const self = e.target;
    self.style.borderBottom = '2px solid #f5385d';
  });
  inputBoxes[i].addEventListener('blur', (e) => {
    const self = e.target;
    self.style.borderBottom = '2px solid #e9e9e9';
  });
}

// Tooltip show/hide
const showTooltip = document.querySelector('#btn-pwd-info');
const hideTooltip = document.querySelector('.tooltip-dimmed');
const tooltip = document.querySelector('.wrapper-tooltip');
showTooltip.addEventListener('click', () => tooltip.style.display = "block");
hideTooltip.addEventListener('click', () => tooltip.style.display = "none");

// Password
const inputPwd = document.querySelector('#input-pwd');
const inputPwdConfirm = document.querySelector('#input-pwd-confirm');
const pwdVal = inputPwd.value;
function pwdCheck(){
  const regExpPwd = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
  const errorText = document.querySelector('.valid-pwd-error');
  const passText = document.querySelector('.valid-pwd-pass');
  if (inputPwd.value.length === 0) {
    errorText.classList.add('active');
    errorText.textContent = '비밀번호를 입력해주세요.';
  } else if (pwdVal.match(regExpPwd) != null){
    passText.classList.add('active');
    errorText.classList.remove('active');
  } else {
    passText.classList.remove('active');
    errorText.classList.add('active');
    errorText.textContent = '비밀번호는 영문자와 숫자 또는 특수문자를 조합하여 6~20자 내로 설정 가능합니다.';
  }
}
function pwdConfirm(){
  const errorText = document.querySelector('.valid-pwd-confirm-error');
  const passText = document.querySelector('.valid-pwd-confirm-pass');
  if (inputPwdConfirm.value.length === 0){
    errorText.classList.add('active');
    errorText.textContent = '비밀번호를 다시 한 번 입력해주세요.';
  } else if (inputPwdConfirm.value === inputPwd.value) {
    errorText.classList.remove('active');
    passText.classList.add('active');
  } else {
    errorText.classList.add('active');
    passText.classList.remove('active');
  }
}
inputPwdConfirm.addEventListener('keyup', pwdConfirm);

// Sign up Button
const btnSignUp = document.querySelector('.btn-wrapper-join button');
btnSignUp.addEventListener('click', pwdCheck);
btnSignUp.addEventListener('click', pwdConfirm);