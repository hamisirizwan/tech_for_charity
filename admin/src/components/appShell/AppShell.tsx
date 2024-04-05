'use client';
import React, { useContext, useState, useEffect } from 'react';
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Overlay,
  ScrollArea,
} from '@mantine/core';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  IconHome,
  IconHome2,
  IconGauge,
  IconFingerprint,
  IconHeartHandshake,
  IconCarGarage,
  IconUserCheck,
  IconBuildingEstate,
  IconChecklist,
  IconAdjustmentsHorizontal,
  IconEngine,
  IconShoppingCart,
  IconCar,
  IconTerminal,
  IconBriefcase,
  IconUserCircle,
  IconUsersGroup,
  IconLogout,
} from '@tabler/icons-react';
import { useClickOutside } from '@mantine/hooks';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import Image from 'next/image';

const ApplicationShell = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  const handleLogOut = async () => {
 alert("logout button clicked")
  };
  return (
    <AppShell
      header={{ height: { base: 60, md: 60, lg: 60 } }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding='md'
    >
      {opened && (
        <div className='absolute top-0 bottom-0 right-0 left-[300px]'>
          <Overlay
            onClick={() => setOpened(false)}
            color='#000'
            backgroundOpacity={0.35}
            blur={2}
          />
        </div>
      )}
      {pathname != '/login' && pathname != '/forgot-password' && (
        <>
          <AppShell.Header>
            <Group h='100%' px='md'>
              <Burger
                opened={opened}
                onClick={() => {
                  setOpened(!opened);
                }}
                hiddenFrom='sm'
                size='sm'
              />
              <div>
                <h1>Humanity First Home</h1>
                {/* <Image
                  className='hidden md:block'
                  priority={true}
                  alt='Peslac Logo'
                  src='/peslac_dark.svg'
                  width={130}
                  height={130}
                />
                <Image
                  className='md:hidden'
                  priority={true}
                  alt='Peslac Logo'
                  src='/dark-logo.svg'
                  width={40}
                  height={40}
                /> */}
              </div>
              {/* <div className='absolute right-4'>
                <ColorSchemeToggle />
              </div> */}
            </Group>
          </AppShell.Header>
          <AppShell.Navbar w={300} p='md'>
            <AppShell.Section component={ScrollArea}>
              <NavLink
                component={Link}
                label='Overview'
                href='/dashboard'
                leftSection={<IconHome size='1rem' stroke={1.5} />}
                active={pathname === '/dashboard'}
                onClick={() => {
                  setOpened(false);
                }}
                color='rgba(3, 163, 168, 1)'
                variant='subtle'
              />
              <NavLink
                component={Link}
                href='/roles'
                label='User Access'
                leftSection={<IconTerminal size='1rem' stroke={1.5} />}
                active={pathname === '/roles'}
                onClick={() => {
                  setOpened(false);
                }}
                color='rgba(3, 163, 168, 1)'
                variant='subtle'
              />
        
              <NavLink
                label='Members'
                leftSection={
                  <IconAdjustmentsHorizontal size='1rem' stroke={1.5} />
                }
                childrenOffset={28}
                defaultOpened
                color='rgba(3, 163, 168, 1)'
                variant='subtle'
              >
                <NavLink
                  component={Link}
                  href='/members'
                  label='Active'
                  leftSection={<IconEngine size='1rem' stroke={1.5} />}
                  active={pathname === '/members'}
                  onClick={() => {
                    setOpened(false);
                  }}
                  color='rgba(3, 163, 168, 1)'
                  variant='subtle'
                />
                <NavLink
                  component={Link}
                  href='/join-requests'
                  label='Requests'
                  leftSection={<IconEngine size='1rem' stroke={1.5} />}
                  active={pathname === '/join-requests'}
                  onClick={() => {
                    setOpened(false);
                  }}
                  color='rgba(3, 163, 168, 1)'
                  variant='subtle'
                />
              </NavLink>
              <NavLink
                component={Link}
                href='/donations'
                label='Donations'
                leftSection={<IconTerminal size='1rem' stroke={1.5} />}
                active={pathname === '/members'}
                onClick={() => {
                  setOpened(false);
                }}
                color='rgba(3, 163, 168, 1)'
                variant='subtle'
              />
                  <NavLink
                component={Link}
                href='/campaigns'
                label='Campaigns'
                leftSection={<IconTerminal size='1rem' stroke={1.5} />}
                active={pathname === '/campaigns'}
                onClick={() => {
                  setOpened(false);
                }}
                color='rgba(3, 163, 168, 1)'
                variant='subtle'
              />
                <NavLink
                component={Link}
                href='/reports'
                label='Reports'
                leftSection={<IconTerminal size='1rem' stroke={1.5} />}
                active={pathname === '/reports'}
                onClick={() => {
                  setOpened(false);
                }}
                color='rgba(3, 163, 168, 1)'
                variant='subtle'
              />
            </AppShell.Section>
          </AppShell.Navbar>
        </>
      )}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default ApplicationShell;