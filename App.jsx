import Main from './src/Main';
import DFS from './src/assets/default_styles';
import {HardwareDatasProvider} from './src/contexts/HardwareDatas';
import {NotificationProvider} from './src/contexts/NotificationContext';
import {ThemeProvider} from './src/contexts/ThemeContext';
import Toast from 'react-native-toast-message';

function App() {
  
  return (
    <ThemeProvider>
      <NotificationProvider>
        <HardwareDatasProvider>
          <Main />
          <Toast />
        </HardwareDatasProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}
export default App;
