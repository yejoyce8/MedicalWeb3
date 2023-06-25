import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  chakra,
} from "@chakra-ui/react";

export function NavBar() {
  return (
    <Box>
      <Flex
        bg="white.100"
        color="grey.200"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="grey.100"
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        ></Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <StyledLink
            textStyle="heading3Gray"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            href={"/"}
          >
            EtherCare
          </StyledLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
        </Flex>
        <Box px={4}>
          <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label}>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Link
                      p={2}
                      href={navItem.href ?? "#"}
                      fontSize={"sm"}
                      fontWeight={500}
                      color="grey.100"
                      _hover={{
                        textDecoration: "none",
                        color: "grey.100",
                      }}
                    >
                      {navItem.label}
                    </Link>
                  </PopoverTrigger>

                  {navItem.children && (
                    <PopoverContent
                      border={0}
                      boxShadow={"xl"}
                      bg="grey.200"
                      p={4}
                      rounded={"xl"}
                      minW={"sm"}
                    >
                      <Stack>
                        {navItem.children.map((child) => (
                          <DesktopSubNav key={child.label} {...child} />
                        ))}
                      </Stack>
                    </PopoverContent>
                  )}
                </Popover>
              </Box>
            ))}
          </Stack>
        </Box>
        <Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.100"}
              href={"/appt-book"}
              _hover={{
                bg: "darkblue",
              }}
            >
              Book an Appointment
            </Button>
          </Stack>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        ></Stack>
      </Flex>
    </Box>
  );
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
        </Flex>
      </Stack>
    </Link>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/",
  },
];

const StyledLink = chakra(Link, {
  baseStyle: {
    _hover: {
      textDecoration: "none",
    },
  },
});

export default NavBar;
