import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    HStack,
  } from "@chakra-ui/react";
  import { LANGUAGE_VERSIONS } from "../CodeEditor/constants";
  import { Helmet } from "react-helmet";
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue.400";
  
  const LanguageSelector = ({ language, onSelect }) => {
    return (
      <>
        <Helmet>
          <title>Advisions LMS</title>
          <meta name="description" content="Learning Management System" />
          <meta name="keywords" content="Advisions, LMS" />
        </Helmet>
        <Box ml={2} mb={4}>
          <HStack spacing={2} alignItems="center">
       
            <Menu isLazy>
              <MenuButton as={Button}  backgroundColor="blue.500" color="white"> Language: {language}</MenuButton>
              <MenuList>
                {languages.map(([lang, version]) => (
                  <MenuItem
                    key={lang}
                    color={lang === language ? ACTIVE_COLOR : ""}
                    _hover={{
               
                      bg: "blue.500",
                    }}
                    onClick={() => onSelect(lang)}
                  >
                    {lang}
                    &nbsp;
                    <Text as="span" color="gray.600" fontSize="sm">
                      ({version})
                    </Text>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      </>
    );
  };
  
  export default LanguageSelector;
  