import React from 'react';
import Logo from '../small/logo/logo';
import Anchor from '../buttons/anchor';

// Add thousands divider
export function numberFormatter(number: number): string {
  return number.toLocaleString('en-US');
}

export const headerAndLogo =
  <header>
    <Logo />
  </header>

export const footer =
  <footer>
    Powered by <Anchor href='https://www.reed.co.uk/'>
      Reed
    </Anchor> and <Anchor href='https://www.numbeo.com/'>
      Numbeo
    </Anchor>.
  </footer>
