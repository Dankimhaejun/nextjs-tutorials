import useTheme from '@/hooks/useTheme';
import GlobalStyle from '@/styles/global-style';
import {theme} from '@/styles/theme';
import styled, {ThemeProvider} from 'styled-components';
import {RecoilRoot} from 'recoil';

interface Props {
  children: React.ReactNode;
}

const LayoutProvider = ({children}: Props) => {
  const {toggleTheme, isDarkMode} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledThemeButton onClick={toggleTheme}>{isDarkMode ? '라이트' : '다크'}</StyledThemeButton>
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  );
};

const StyledThemeButton = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  padding: 5px 10px;
  color: var(--bg-main);
  background-color: var(--text-main);
  border: 1px solid black;
  border-radius: 5px;
`;

export default LayoutProvider;
