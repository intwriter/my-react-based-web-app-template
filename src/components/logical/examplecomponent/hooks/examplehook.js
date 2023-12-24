export default function useExampleHook() {
    
    function buttonClick() {
        alert("Button was clicked")
    }

    return {onClick: buttonClick};
}