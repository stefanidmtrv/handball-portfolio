'use client';

import { Button, Group, useMantineColorScheme, Image, ThemeIcon, rem } from '@mantine/core';
// import { IconMoon, IconBrightnessUp } from '@tabler/icons-react';
// import { useState } from 'react';

// interface Props {
//   icon: React.FC<any>;
//   variant: string;
// }

// export function ButtonIcon({icon: Icon, variant}: Props) {
//   return <ThemeIcon variant={variant}>
//           <Icon stroke={1.5} />
//         </ThemeIcon>

//   // return  <Icon stroke={1.5}/>
// }

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  // let [currentColourScheme, setCurrentColourScheme] = useState('light');

  // return (
  //   <Group justify="center">
  //     <Button 
  //     onClick={() => {
  //       if (currentColourScheme === 'light') {
  //         setColorScheme('dark');
  //         setCurrentColourScheme('dark');
  //       } else {
  //         setColorScheme('light');
  //         setCurrentColourScheme('light');
  //       }
  //     }}>
  //       <ButtonIcon icon={currentColourScheme === 'light' ? IconBrightnessUp : IconMoon} variant={currentColourScheme === 'light' ? 'dark' : 'light'}/>
  //     </Button>
  //   </Group>
  // );

  return (
    <Group justify="center">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}