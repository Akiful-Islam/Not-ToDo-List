import "./App.css";
import Start from "@/components/ui/custom/start";
import TodoBox from "./components/TodoBox";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Start>
        <TodoBox />
      </Start>
    </ThemeProvider>
  );
}

export default App;
