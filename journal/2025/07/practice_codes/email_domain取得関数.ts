function upperCaseDomain(email: string): string {
  // メールアドレスのドメイン名を大文字で切り出す関数
  // '@'マークが含まれるているかチェック
  if (!email.includes("@")) {
    console.log("無効なメールアドレス形式です");
    return "";
  } else {
    const atIndex = email.indexOf("@");
    const domain = email.substring(atIndex + 1);
    return domain.toUpperCase();
  }
}
