import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
} from '@nextui-org/react';
import { MdCollectionsBookmark, MdOutlineSearch } from 'react-icons/md';

export default function NavBar() {
  return (
    <Navbar /*onMenuOpenChange={setIsMenuOpen}*/>
      <NavbarContent>
        <NavbarMenuToggle
          //aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand className='hidden sm:flex'>
          <MdCollectionsBookmark size={25} />
          <p className="font-bold text-inherit">Readify</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="w-full" justify="center">
        <NavbarItem className="w-full">
          <Input
            className="w-full"
            placeholder="Descubra novas histórias"
            endContent={
              <Button>
                <MdOutlineSearch size={25} />
              </Button>
            }
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex' justify="end">
        <NavbarItem>
          <Link href="#">Entrar</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Criar uma conta
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
      </NavbarMenu>
    </Navbar>
  );
}
