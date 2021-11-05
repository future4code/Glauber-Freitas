export const goToLoginPage = (history) => {
    history.push("/login")
};
export const goToSignUpPage = (history) => {
    history.push("/cadastro")
};
export const goToPostDetailPage = (history, id) => {
    history.push(`/detalhe/${id}`)
};
export const goToPostsListPage = (history) => {
    history.push("/")
};