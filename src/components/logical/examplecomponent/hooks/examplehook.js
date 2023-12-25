export default function useExampleHook() {
    
    function onClickHandler() {
        alert("Button was clicked");
    }

    return { onClick: onClickHandler };
}
