 import React from "react";
 
 import {
    ChakraProvider,
    Stack,
    Avatar,
    AvatarBadge,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage,
    Grid,
    Switch,
    InputGroup,
    InputRightElement,
    Icon,
    Flex,
    Box,
    Heading,
    Tag,
    Text
  } from "@chakra-ui/react";
 import "./trianglestyles.css";
 const paths = [
  <path
  style={{
    fill: "#8e7fbb",
    stroke: "#8e7fbb",
  }}
  d="m545 315 2 4 3-4z"
/>
,<path
  style={{
    fill: "#9a81b2",
    stroke: "#9a81b2",
  }}
  d="m547 319 5 2-2-6z"
/>
,<path
  style={{
    fill: "#a084bc",
    stroke: "#a084bc",
  }}
  d="m550 315-2-12-3 12z"
/>
,<path
  style={{
    fill: "#a086c2",
    stroke: "#a086c2",
  }}
  d="m556 320-2-7-4 2z"
/>
,<path
  style={{
    fill: "#a283b5",
    stroke: "#a283b5",
  }}
  d="m545 315-4 6 6-2z"
/>
,<path
  style={{
    fill: "#a88ecd",
    stroke: "#a88ecd",
  }}
  d="m547 319-2 13 7-11z"
/>
,<path
  style={{
    fill: "#9781be",
    stroke: "#9781be",
  }}
  d="m552 321 4-1-6-5z"
/>
,<path
  style={{
    fill: "#866e9a",
    stroke: "#866e9a",
  }}
  d="m556 320 2-5-4-2z"
/>
,<path
  style={{
    fill: "#a78dcd",
    stroke: "#a78dcd",
  }}
  d="m535 316 1 4 5 1z"
/>
,<path
  style={{
    fill: "#aa8ecd",
    stroke: "#aa8ecd",
  }}
  d="m545 315-10 1 6 5z"
/>
,<path
  style={{
    fill: "#aa8ecc",
    stroke: "#aa8ecc",
  }}
  d="m540 303-5 13 10-1z"
/>
,<path
  style={{
    fill: "#a287c4",
    stroke: "#a287c4",
  }}
  d="m554 313-6-10 2 12z"
/>
,<path
  style={{
    fill: "#9a79a6",
    stroke: "#9a79a6",
  }}
  d="M555 303h-7l6 10z"
/>
,<path
  style={{
    fill: "#8974a1",
    stroke: "#8974a1",
  }}
  d="m556 320 4 1-2-6z"
/>
,<path
  style={{
    fill: "#a98dcb",
    stroke: "#a98dcb",
  }}
  d="m557 332 3-11-4-1z"
/>
,<path
  style={{
    fill: "#997bab",
    stroke: "#997bab",
  }}
  d="M548 303h-8l5 12z"
/>
,<path
  style={{
    fill: "#9978a1",
    stroke: "#9978a1",
  }}
  d="M560 303h-5l-1 10z"
/>
,<path
  style={{
    fill: "#a68ac5",
    stroke: "#a68ac5",
  }}
  d="m560 303-6 10 4 2z"
/>
,<path
  style={{
    fill: "#a68bc6",
    stroke: "#a68bc6",
  }}
  d="m536 320-2 4 7-3z"
/>
,<path
  style={{
    fill: "#a78ac7",
    stroke: "#a78ac7",
  }}
  d="m541 321 4 11 2-13z"
/>
,<path
  style={{
    fill: "#a98dcb",
    stroke: "#a98dcb",
  }}
  d="m552 321 5 11-1-12z"
/>
,<path
  style={{
    fill: "#9e84bc",
    stroke: "#9e84bc",
  }}
  d="m531 317 3 7 2-4z"
/>
,<path
  style={{
    fill: "#9d84bf",
    stroke: "#9d84bf",
  }}
  d="M540 332h5l-4-11z"
/>
,<path
  style={{
    fill: "#9b81bb",
    stroke: "#9b81bb",
  }}
  d="M545 332h5l2-11z"
/>
,<path
  style={{
    fill: "#8570a2",
    stroke: "#8570a2",
  }}
  d="m560 321 4-5-6-1z"
/>
,<path
  style={{
    fill: "#8974ab",
    stroke: "#8974ab",
  }}
  d="m535 316-4 1 5 3z"
/>
,<path
  style={{
    fill: "#a388c4",
    stroke: "#a388c4",
  }}
  d="m527 316 4 1v-14z"
/>
,<path
  style={{
    fill: "#a88cca",
    stroke: "#a88cca",
  }}
  d="m534 324 6 8 1-11z"
/>
,<path
  style={{
    fill: "#a98dca",
    stroke: "#a98dca",
  }}
  d="m567 313-7-10-2 12z"
/>
,<path
  style={{
    fill: "#9e83be",
    stroke: "#9e83be",
  }}
  d="M550 332h7l-5-11z"
/>
,<path
  style={{
    fill: "#7e6a9e",
    stroke: "#7e6a9e",
  }}
  d="m560 321 5 1-1-6z"
/>
,<path
  style={{
    fill: "#a98dcc",
    stroke: "#a98dcc",
  }}
  d="m562 332 3-10-5-1z"
/>
,<path
  style={{
    fill: "#522416",
    stroke: "#522416",
  }}
  d="m560 303-2-3-3 3z"
/>
,<path
  style={{
    fill: "#27100d",
    stroke: "#27100d",
  }}
  d="M554 296h-7l1 7z"
/>
,<path
  style={{
    fill: "#2f130f",
    stroke: "#2f130f",
  }}
  d="m548 303-1-7-7 7z"
/>
,<path
  style={{
    fill: "#8c76b0",
    stroke: "#8c76b0",
  }}
  d="m564 316 3-3-9 2z"
/>
,<path
  style={{
    fill: "#532717",
    stroke: "#532717",
  }}
  d="M560 303h6l-8-3z"
/>
,<path
  style={{
    fill: "#7468a1",
    stroke: "#7468a1",
  }}
  d="M569 313h-2l3 4z"
/>
,<path
  style={{
    fill: "#937ab1",
    stroke: "#937ab1",
  }}
  d="m534 324 1 8h5z"
/>
,<path
  style={{
    fill: "#977db6",
    stroke: "#977db6",
  }}
  d="M530 332h5l-1-8z"
/>
,<path
  style={{
    fill: "#461f14",
    stroke: "#461f14",
  }}
  d="m554 296-6 7h7z"
/>
,<path
  style={{
    fill: "#9f84be",
    stroke: "#9f84be",
  }}
  d="M531 303v14l4-1z"
/>
,<path
  style={{
    fill: "#8d78ae",
    stroke: "#8d78ae",
  }}
  d="m531 317-7 4 10 3z"
/>
,<path
  style={{
    fill: "#9178ae",
    stroke: "#9178ae",
  }}
  d="M540 303h-9l4 13z"
/>
,<path
  style={{
    fill: "#090707",
    stroke: "#090707",
  }}
  d="m541 290-10 13h9z"
/>
,<path
  style={{
    fill: "#401c13",
    stroke: "#401c13",
  }}
  d="m558 300-4-4 1 7z"
/>
,<path
  style={{
    fill: "#9f84bf",
    stroke: "#9f84bf",
  }}
  d="M557 332h5l-2-11z"
/>
,<path
  style={{
    fill: "#8f729f",
    stroke: "#8f729f",
  }}
  d="m567 313-1-10h-6z"
/>
,<path
  style={{
    fill: "#a182b7",
    stroke: "#a182b7",
  }}
  d="m570 317-3-4-3 3z"
/>
,<path
  style={{
    fill: "#a689c4",
    stroke: "#a689c4",
  }}
  d="m570 317-6-1 1 6z"
/>
,<path
  style={{
    fill: "#9578a5",
    stroke: "#9578a5",
  }}
  d="m571 321-1-4-5 5z"
/>
,<path
  style={{
    fill: "#ac90d1",
    stroke: "#ac90d1",
  }}
  d="m569 313-3-10 1 10z"
/>
,<path
  style={{
    fill: "#150c0b",
    stroke: "#150c0b",
  }}
  d="m558 300 2-6-6 2z"
/>
,<path
  style={{
    fill: "#aa8ece",
    stroke: "#aa8ece",
  }}
  d="m524 321 6 11 4-8z"
/>
,<path
  style={{
    fill: "#8c739b",
    stroke: "#8c739b",
  }}
  d="m527 316-3 5 7-4z"
/>
,<path
  style={{
    fill: "#9882be",
    stroke: "#9882be",
  }}
  d="m521 318 3 3 3-5z"
/>
,<path
  style={{
    fill: "#a98dcc",
    stroke: "#a98dcc",
  }}
  d="m567 332 4-11-6 1z"
/>
,<path
  style={{
    fill: "#321f1b",
    stroke: "#321f1b",
  }}
  d="m554 296-3-4-4 4z"
/>
,<path
  style={{
    fill: "#070609",
    stroke: "#070609",
  }}
  d="m527 297-1 6h5z"
/>
,<path
  style={{
    fill: "#392a26",
    stroke: "#392a26",
  }}
  d="m560 294-9-2 3 4z"
/>
,<path
  style={{
    fill: "#9d82bd",
    stroke: "#9d82bd",
  }}
  d="M562 332h5l-2-10z"
/>
,<path
  style={{
    fill: "#937ab0",
    stroke: "#937ab0",
  }}
  d="M531 303h-5l1 13z"
/>
,<path
  style={{
    fill: "#170c0a",
    stroke: "#170c0a",
  }}
  d="m541 290-1 13 7-7z"
/>
,<path
  style={{
    fill: "#2f1510",
    stroke: "#2f1510",
  }}
  d="m566 303-6-9-2 6z"
/>
,<path
  style={{
    fill: "#8b73a6",
    stroke: "#8b73a6",
  }}
  d="m569 313 2-10h-5z"
/>
,<path
  style={{
    fill: "#9f83b7",
    stroke: "#9f83b7",
  }}
  d="m570 317 3-3-4-1z"
/>
,<path
  style={{
    fill: "#7572ba",
    stroke: "#7572ba",
  }}
  d="m571 321 2-7-3 3z"
/>
,<path
  style={{
    fill: "#52362b",
    stroke: "#52362b",
  }}
  d="m551 292-4-2v6z"
/>
,<path
  style={{
    fill: "#836456",
    stroke: "#836456",
  }}
  d="m548 285-1 5 4 2z"
/>
,<path
  style={{
    fill: "#84709f",
    stroke: "#84709f",
  }}
  d="m518 314 3 4 6-2z"
/>
,<path
  style={{
    fill: "#9b81bb",
    stroke: "#9b81bb",
  }}
  d="m524 321 1 11h5z"
/>
,<path
  style={{
    fill: "#1a0d0b",
    stroke: "#1a0d0b",
  }}
  d="m566 303-2-12-4 3z"
/>
,<path
  style={{
    fill: "#a388c4",
    stroke: "#a388c4",
  }}
  d="m573 314-2-11-2 10z"
/>
,<path
  style={{
    fill: "#402922",
    stroke: "#402922",
  }}
  d="M547 290h-6l6 6z"
/>
,<path
  style={{
    fill: "#9f84bf",
    stroke: "#9f84bf",
  }}
  d="M520 332h5l-1-11z"
/>
,<path
  style={{
    fill: "#060609",
    stroke: "#060609",
  }}
  d="m533 288-6 9 4 6z"
/>
,<path
  style={{
    fill: "#9f86c0",
    stroke: "#9f86c0",
  }}
  d="m517 308 1 6 9 2z"
/>
,<path
  style={{
    fill: "#9f84bf",
    stroke: "#9f84bf",
  }}
  d="M567 332h5l-1-11z"
/>
,<path
  style={{
    fill: "#8e77ab",
    stroke: "#8e77ab",
  }}
  d="m578 320-1-7-4 1z"
/>
,<path
  style={{
    fill: "#a58ac7",
    stroke: "#a58ac7",
  }}
  d="m517 308 10 8-1-13z"
/>
,<path
  style={{
    fill: "#a68bc8",
    stroke: "#a68bc8",
  }}
  d="m515 320 5 12 4-11z"
/>
,<path
  style={{
    fill: "#060508",
    stroke: "#060508",
  }}
  d="m527 297-6 6h5z"
/>
,<path
  style={{
    fill: "#ab8ecf",
    stroke: "#ab8ecf",
  }}
  d="m573 314 4-1-6-10z"
/>
,<path
  style={{
    fill: "#a88dcc",
    stroke: "#a88dcc",
  }}
  d="m578 320-5-6-2 7z"
/>
,<path
  style={{
    fill: "#0d0707",
    stroke: "#0d0707",
  }}
  d="m570 290-6 1 2 12z"
/>
,<path
  style={{
    fill: "#6c554a",
    stroke: "#6c554a",
  }}
  d="M560 294v-7l-9 5z"
/>
,<path
  style={{
    fill: "#030305",
    stroke: "#030305",
  }}
  d="m570 290-4 13h5z"
/>
,<path
  style={{
    fill: "#a187c2",
    stroke: "#a187c2",
  }}
  d="m581 323-3-3-7 1z"
/>
,<path
  style={{
    fill: "#77594d",
    stroke: "#77594d",
  }}
  d="m547 290 1-5-7 5z"
/>
,<path
  style={{
    fill: "#080709",
    stroke: "#080709",
  }}
  d="m541 290-8-2-2 15z"
/>
,<path
  style={{
    fill: "#8d6b5d",
    stroke: "#8d6b5d",
  }}
  d="m551 282-3 3 3 7z"
/>
,<path
  style={{
    fill: "#635277",
    stroke: "#635277",
  }}
  d="m521 303-4 5 9-5z"
/>
,<path
  style={{
    fill: "#8771a0",
    stroke: "#8771a0",
  }}
  d="m515 320 9 1-3-3z"
/>
,<path
  style={{
    fill: "#836ea5",
    stroke: "#836ea5",
  }}
  d="m515 320 6-2-3-4z"
/>
,<path
  style={{
    fill: "#32221e",
    stroke: "#32221e",
  }}
  d="m535 280-2 8 8 2z"
/>
,<path
  style={{
    fill: "#060507",
    stroke: "#060507",
  }}
  d="m511 293 5 10h5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m545 332 4 16 1-16z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m550 332-1 16 8-16zM557 332l2 21 3-21z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m562 332-3 21 8-21zM567 332l6 24-1-24zM540 332l9 16-4-16z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m537 356 12-8-9-16z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m545 356 4-8-8 9z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="M549 354v-6l-4 8z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m535 332 2 24 3-24z"
/>
,<path
  style={{
    fill: "#3b2520",
    stroke: "#3b2520",
  }}
  d="m564 291-4-4v7z"
/>
,<path
  style={{
    fill: "#836d9d",
    stroke: "#836d9d",
  }}
  d="M577 313v-10h-6z"
/>
,<path
  style={{
    fill: "#5c3727",
    stroke: "#5c3727",
  }}
  d="m564 291-1-7-3 3z"
/>
,<path
  style={{
    fill: "#a88dcb",
    stroke: "#a88dcb",
  }}
  d="m581 311-4-8v10z"
/>
,<path
  style={{
    fill: "#8876ad",
    stroke: "#8876ad",
  }}
  d="m513 315 2 5 3-6z"
/>
,<path
  style={{
    fill: "#9b81bb",
    stroke: "#9b81bb",
  }}
  d="M572 332h5l-6-11z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m573 356 4-24h-5z"
/>
,<path
  style={{
    fill: "#8c76a6",
    stroke: "#8c76a6",
  }}
  d="m578 320 3-4-4-3z"
/>
,<path
  style={{
    fill: "#a287c3",
    stroke: "#a287c3",
  }}
  d="M581 323v-7l-3 4z"
/>
,<path
  style={{
    fill: "#7d6998",
    stroke: "#7d6998",
  }}
  d="M581 316v-5l-4 2z"
/>
,<path
  style={{
    fill: "#645277",
    stroke: "#645277",
  }}
  d="M521 303h-5l1 5z"
/>
,<path
  style={{
    fill: "#9c84c0",
    stroke: "#9c84c0",
  }}
  d="m517 308-4 7 5-1z"
/>
,<path
  style={{
    fill: "#070709",
    stroke: "#070709",
  }}
  d="m511 293 10 10 6-6z"
/>
,<path
  style={{
    fill: "#a88dcb",
    stroke: "#a88dcb",
  }}
  d="m577 332 4-9-10-2z"
/>
,<path
  style={{
    fill: "#9f7a66",
    stroke: "#9f7a66",
  }}
  d="m560 287-9-5v10z"
/>
,<path
  style={{
    fill: "#0c090a",
    stroke: "#0c090a",
  }}
  d="m535 280-6 6 4 2z"
/>
,<path
  style={{
    fill: "#a68bc8",
    stroke: "#a68bc8",
  }}
  d="M507 315h6l-5-12z"
/>
,<path
  style={{
    fill: "#040406",
    stroke: "#040406",
  }}
  d="m577 303-7-13 1 13z"
/>
,<path
  style={{
    fill: "#82553e",
    stroke: "#82553e",
  }}
  d="m560 287-4-6-5 1z"
/>
,<path
  style={{
    fill: "#050508",
    stroke: "#050508",
  }}
  d="m533 288-4-2-2 11z"
/>
,<path
  style={{
    fill: "#7b5746",
    stroke: "#7b5746",
  }}
  d="m543 278-2 12 7-5z"
/>
,<path
  style={{
    fill: "#402217",
    stroke: "#402217",
  }}
  d="m570 290-7-6 1 7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m535 332-9 20 11 4z"
/>
,<path
  style={{
    fill: "#9d82bd",
    stroke: "#9d82bd",
  }}
  d="M515 320v12h5z"
/>
,<path
  style={{
    fill: "#9b81bb",
    stroke: "#9b81bb",
  }}
  d="M509 332h6v-12z"
/>
,<path
  style={{
    fill: "#341a16",
    stroke: "#341a16",
  }}
  d="m551 282-4-2 1 5z"
/>
,<path
  style={{
    fill: "#663e35",
    stroke: "#663e35",
  }}
  d="m554 276-7 4 4 2z"
/>
,<path
  style={{
    fill: "#865c45",
    stroke: "#865c45",
  }}
  d="m563 284-7-3 4 6z"
/>
,<path
  style={{
    fill: "#8973a3",
    stroke: "#8973a3",
  }}
  d="m581 316 4 1-4-6z"
/>
,<path
  style={{
    fill: "#7c6794",
    stroke: "#7c6794",
  }}
  d="m581 311 5-8h-9z"
/>
,<path
  style={{
    fill: "#040406",
    stroke: "#040406",
  }}
  d="m577 303-3-18-4 5z"
/>
,<path
  style={{
    fill: "#917bae",
    stroke: "#917bae",
  }}
  d="m581 323 4-6-4-1z"
/>
,<path
  style={{
    fill: "#a187c2",
    stroke: "#a187c2",
  }}
  d="m587 332-2-15-4 6z"
/>
,<path
  style={{
    fill: "#796999",
    stroke: "#796999",
  }}
  d="m513 315-3 4 5 1z"
/>
,<path
  style={{
    fill: "#977fb6",
    stroke: "#977fb6",
  }}
  d="m507 315 3 4 3-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m549 348 10 5-2-21zM530 332l-4 20 9-20z"
/>
,<path
  style={{
    fill: "#987fb8",
    stroke: "#987fb8",
  }}
  d="M577 332h5l-1-9z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m587 353-5-21h-5z"
/>
,<path
  style={{
    fill: "#6e4f3c",
    stroke: "#6e4f3c",
  }}
  d="m543 278-8 2 6 10z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m555 355 4-2-10-5z"
/>
,<path
  style={{
    fill: "#452017",
    stroke: "#452017",
  }}
  d="m547 280-4-2 5 7z"
/>
,<path
  style={{
    fill: "#774b3a",
    stroke: "#774b3a",
  }}
  d="m546 275-3 3 4 2z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m549 354 6 1-6-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M530 332h-5l1 20z"
/>
,<path
  style={{
    fill: "#94918f",
    stroke: "#94918f",
  }}
  d="m549 354 1 5 5-4z"
/>
,<path
  style={{
    fill: "#a68ac6",
    stroke: "#a68ac6",
  }}
  d="m508 303 5 12 4-7z"
/>
,<path
  style={{
    fill: "#9e85c1",
    stroke: "#9e85c1",
  }}
  d="m510 319-1 13 6-12z"
/>
,<path
  style={{
    fill: "#987fb6",
    stroke: "#987fb6",
  }}
  d="m585 317 1-14-5 8z"
/>
,<path
  style={{
    fill: "#512919",
    stroke: "#512919",
  }}
  d="m570 290-1-9-6 3z"
/>
,<path
  style={{
    fill: "#7f5344",
    stroke: "#7f5344",
  }}
  d="m556 281-2-5-3 6z"
/>
,<path
  style={{
    fill: "#9f7067",
    stroke: "#9f7067",
  }}
  d="m560 274-6 2 2 5z"
/>
,<path
  style={{
    fill: "#8d644d",
    stroke: "#8d644d",
  }}
  d="m565 279-9 2 7 3z"
/>
,<path
  style={{
    fill: "#050507",
    stroke: "#050507",
  }}
  d="m586 303-12-18 3 18z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m526 352-1-20h-5z"
/>
,<path
  style={{
    fill: "#050507",
    stroke: "#050507",
  }}
  d="m511 293-3 10h8z"
/>
,<path
  style={{
    fill: "#5d4c6f",
    stroke: "#5d4c6f",
  }}
  d="M516 303h-8l9 5z"
/>
,<path
  style={{
    fill: "#140d0c",
    stroke: "#140d0c",
  }}
  d="m535 280-5-1-1 7z"
/>
,<path
  style={{
    fill: "#523222",
    stroke: "#523222",
  }}
  d="m528 275 2 4 6-7z"
/>
,<path
  style={{
    fill: "#4f3021",
    stroke: "#4f3021",
  }}
  d="m530 279 5 1 1-8z"
/>
,<path
  style={{
    fill: "#663d27",
    stroke: "#663d27",
  }}
  d="m569 281-4-2-2 5z"
/>
,<path
  style={{
    fill: "#945d56",
    stroke: "#945d56",
  }}
  d="m554 276-7-1v5z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m537 356 4 1 8-9z"
/>
,<path
  style={{
    fill: "#848a92",
    stroke: "#848a92",
  }}
  d="m545 356 5 3-1-5z"
/>
,<path
  style={{
    fill: "#6d3e36",
    stroke: "#6d3e36",
  }}
  d="M547 275h-1l1 5z"
/>
,<path
  style={{
    fill: "#2e1711",
    stroke: "#2e1711",
  }}
  d="m574 285-5-4 1 9z"
/>
,<path
  style={{
    fill: "#a388c5",
    stroke: "#a388c5",
  }}
  d="m506 320 3 12 1-13z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m522 354 4-2-13-3z"
/>
,<path
  style={{
    fill: "#09080b",
    stroke: "#09080b",
  }}
  d="m511 293 16 4-15-9z"
/>
,<path
  style={{
    fill: "#756491",
    stroke: "#756491",
  }}
  d="m507 315-1 5 4-1z"
/>
,<path
  style={{
    fill: "#a98bc5",
    stroke: "#a98bc5",
  }}
  d="m492 315 14 5 1-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m526 352-6-20-7 17z"
/>
,<path
  style={{
    fill: "#967cb4",
    stroke: "#967cb4",
  }}
  d="M582 332h5l-6-9z"
/>
,<path
  style={{
    fill: "#9078ad",
    stroke: "#9078ad",
  }}
  d="m585 317 8-14h-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M587 353v-21h-5z"
/>
,<path
  style={{
    fill: "#6b757e",
    stroke: "#6b757e",
  }}
  d="m543 361 7-2-5-3z"
/>
,<path
  style={{
    fill: "#0a0605",
    stroke: "#0a0605",
  }}
  d="m561 358 4-2-6-3z"
/>
,<path
  style={{
    fill: "#020101",
    stroke: "#020101",
  }}
  d="m526 352 7 5 4-1z"
/>
,<path
  style={{
    fill: "#837364",
    stroke: "#837364",
  }}
  d="M537 361h6l-2-4z"
/>
,<path
  style={{
    fill: "#030103",
    stroke: "#030103",
  }}
  d="m541 357 2 4 2-5z"
/>
,<path
  style={{
    fill: "#08070b",
    stroke: "#08070b",
  }}
  d="m518 283 9 14 2-11z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m559 353 6 3 2-24z"
/>
,<path
  style={{
    fill: "#898380",
    stroke: "#898380",
  }}
  d="m561 358-2-5-4 2z"
/>
,<path
  style={{
    fill: "#020202",
    stroke: "#020202",
  }}
  d="m526 352 3 4 4 1z"
/>
,<path
  style={{
    fill: "#31140e",
    stroke: "#31140e",
  }}
  d="m525 359 4-3-3-4z"
/>
,<path
  style={{
    fill: "#6b686f",
    stroke: "#6b686f",
  }}
  d="m556 360 5-2-6-3z"
/>
,<path
  style={{
    fill: "#9e7564",
    stroke: "#9e7564",
  }}
  d="m565 279-5-5-4 7z"
/>
,<path
  style={{
    fill: "#a06f6f",
    stroke: "#a06f6f",
  }}
  d="m554 276-4-5-3 4z"
/>
,<path
  style={{
    fill: "#7f4841",
    stroke: "#7f4841",
  }}
  d="m547 275-1-5v5z"
/>
,<path
  style={{
    fill: "#613b2c",
    stroke: "#613b2c",
  }}
  d="m567 275-7-1 5 5z"
/>
,<path
  style={{
    fill: "#050508",
    stroke: "#050508",
  }}
  d="m530 279-12 4 11 3z"
/>
,<path
  style={{
    fill: "#7e7b73",
    stroke: "#7e7b73",
  }}
  d="m550 359 6 1-1-5z"
/>
,<path
  style={{
    fill: "#c6c7c9",
    stroke: "#c6c7c9",
  }}
  d="m551 363 5-3-6-1z"
/>
,<path
  style={{
    fill: "#875e5e",
    stroke: "#875e5e",
  }}
  d="m560 274-5-2-1 4z"
/>
,<path
  style={{
    fill: "#724e36",
    stroke: "#724e36",
  }}
  d="m536 272-1 8 8-2z"
/>
,<path
  style={{
    fill: "#7e7772",
    stroke: "#7e7772",
  }}
  d="m537 361 4-4-4-1z"
/>
,<path
  style={{
    fill: "#5d6067",
    stroke: "#5d6067",
  }}
  d="M537 361v-5l-4 1z"
/>
,<path
  style={{
    fill: "#875456",
    stroke: "#875456",
  }}
  d="m555 272-5-1 4 5z"
/>
,<path
  style={{
    fill: "#050506",
    stroke: "#050506",
  }}
  d="m530 279-2-4-10 8z"
/>
,<path
  style={{
    fill: "#08070b",
    stroke: "#08070b",
  }}
  d="m518 283-6 5 15 9z"
/>
,<path
  style={{
    fill: "#070709",
    stroke: "#070709",
  }}
  d="m511 293-4 1 1 9z"
/>
,<path
  style={{
    fill: "#d6dadc",
    stroke: "#d6dadc",
  }}
  d="M531 361h6l-4-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m513 349 7-17h-5z"
/>
,<path
  style={{
    fill: "#7a523d",
    stroke: "#7a523d",
  }}
  d="m536 272 7 6-2-8z"
/>
,<path
  style={{
    fill: "#65402a",
    stroke: "#65402a",
  }}
  d="m569 281-2-6-2 4z"
/>
,<path
  style={{
    fill: "#9e746c",
    stroke: "#9e746c",
  }}
  d="m560 274-2-6-3 4z"
/>
,<path
  style={{
    fill: "#673c26",
    stroke: "#673c26",
  }}
  d="M574 275h-7l2 6z"
/>
,<path
  style={{
    fill: "#855746",
    stroke: "#855746",
  }}
  d="m541 270 2 8 3-3z"
/>
,<path
  style={{
    fill: "#807f81",
    stroke: "#807f81",
  }}
  d="m531 361 2-4-4-1z"
/>
,<path
  style={{
    fill: "#371c13",
    stroke: "#371c13",
  }}
  d="m574 285 2-5-7 1z"
/>
,<path
  style={{
    fill: "#040406",
    stroke: "#040406",
  }}
  d="m586 303-10-23-2 5z"
/>
,<path
  style={{
    fill: "#2e2a29",
    stroke: "#2e2a29",
  }}
  d="m512 288-5 6 4-1z"
/>
,<path
  style={{
    fill: "#8b74a7",
    stroke: "#8b74a7",
  }}
  d="M508 303h-7l6 12z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m509 332 4 17 2-17z"
/>
,<path
  style={{
    fill: "#9f83be",
    stroke: "#9f83be",
  }}
  d="m506 320-2 12h5z"
/>
,<path
  style={{
    fill: "#9c82bc",
    stroke: "#9c82bc",
  }}
  d="M499 332h5l2-12z"
/>
,<path
  style={{
    fill: "#7a4848",
    stroke: "#7a4848",
  }}
  d="m550 271-4-1 1 5z"
/>
,<path
  style={{
    fill: "#87574b",
    stroke: "#87574b",
  }}
  d="m552 266-6 4 4 1z"
/>
,<path
  style={{
    fill: "#4e3021",
    stroke: "#4e3021",
  }}
  d="m536 272-10-1 2 4z"
/>
,<path
  style={{
    fill: "#683b36",
    stroke: "#683b36",
  }}
  d="M546 270h-5l5 5z"
/>
,<path
  style={{
    fill: "#71717f",
    stroke: "#71717f",
  }}
  d="m545 365 6-2-1-4z"
/>
,<path
  style={{
    fill: "#a4a8a9",
    stroke: "#a4a8a9",
  }}
  d="M565 362v-6l-4 2z"
/>
,<path
  style={{
    fill: "#73797c",
    stroke: "#73797c",
  }}
  d="m545 365 5-6-7 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M565 356h8l-6-24z"
/>
,<path
  style={{
    fill: "#a19e99",
    stroke: "#a19e99",
  }}
  d="m565 362 4-4-4-2z"
/>
,<path
  style={{
    fill: "#a1998f",
    stroke: "#a1998f",
  }}
  d="m560 362 1-4-5 2z"
/>
,<path
  style={{
    fill: "#050507",
    stroke: "#050507",
  }}
  d="m507 294-3 4 4 5z"
/>
,<path
  style={{
    fill: "#020406",
    stroke: "#020406",
  }}
  d="m569 358 4-2h-8z"
/>
,<path
  style={{
    fill: "#5d4d71",
    stroke: "#5d4d71",
  }}
  d="m598 305-5-2 8 11z"
/>
,<path
  style={{
    fill: "#050507",
    stroke: "#050507",
  }}
  d="m586 303 17-21-27-2z"
/>
,<path
  style={{
    fill: "#a19e93",
    stroke: "#a19e93",
  }}
  d="m555 365 5-3-4-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m501 346 12 3-4-17z"
/>
,<path
  style={{
    fill: "#959a98",
    stroke: "#959a98",
  }}
  d="m525 359 6 2-2-5z"
/>
,<path
  style={{
    fill: "#050503",
    stroke: "#050503",
  }}
  d="m540 367 5-2-2-4z"
/>
,<path
  style={{
    fill: "#6f7c85",
    stroke: "#6f7c85",
  }}
  d="m525 359 1-7-4 2z"
/>
,<path
  style={{
    fill: "#8f9499",
    stroke: "#8f9499",
  }}
  d="m519 358 6 1-3-5z"
/>
,<path
  style={{
    fill: "#010002",
    stroke: "#010002",
  }}
  d="m504 298-3 5h7z"
/>
,<path
  style={{
    fill: "#a5a69d",
    stroke: "#a5a69d",
  }}
  d="m540 367 3-6h-6z"
/>
,<path
  style={{
    fill: "#c2c4c2",
    stroke: "#c2c4c2",
  }}
  d="m551 363 4 2 1-5z"
/>
,<path
  style={{
    fill: "#6a5f56",
    stroke: "#6a5f56",
  }}
  d="m574 362 3-5-4-1z"
/>
,<path
  style={{
    fill: "#bbc2c3",
    stroke: "#bbc2c3",
  }}
  d="M560 362h5l-4-4z"
/>
,<path
  style={{
    fill: "#a9b4b9",
    stroke: "#a9b4b9",
  }}
  d="m561 366 4-4h-5z"
/>
,<path
  style={{
    fill: "#492517",
    stroke: "#492517",
  }}
  d="m576 280-2-5-5 6z"
/>
,<path
  style={{
    fill: "#a98879",
    stroke: "#a98879",
  }}
  d="M566 268h-8l2 6z"
/>
,<path
  style={{
    fill: "#9b6961",
    stroke: "#9b6961",
  }}
  d="m555 272-3-6-2 5z"
/>
,<path
  style={{
    fill: "#28120e",
    stroke: "#28120e",
  }}
  d="m578 272-4 3 2 5z"
/>
,<path
  style={{
    fill: "#a085c1",
    stroke: "#a085c1",
  }}
  d="M587 332h7l-9-15z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m587 353 7-21h-7z"
/>
,<path
  style={{
    fill: "#b9b4b0",
    stroke: "#b9b4b0",
  }}
  d="m549 367 6-2-4-2z"
/>
,<path
  style={{
    fill: "#856554",
    stroke: "#856554",
  }}
  d="m566 268-6 6 7 1z"
/>
,<path
  style={{
    fill: "#7c5946",
    stroke: "#7c5946",
  }}
  d="m544 265-7 2 4 3z"
/>
,<path
  style={{
    fill: "#050507",
    stroke: "#050507",
  }}
  d="m528 275-8-1-2 9z"
/>
,<path
  style={{
    fill: "#08080a",
    stroke: "#08080a",
  }}
  d="m518 283-8-1 2 6z"
/>
,<path
  style={{
    fill: "#867a68",
    stroke: "#867a68",
  }}
  d="M512 288h-14l9 6z"
/>
,<path
  style={{
    fill: "#492c1d",
    stroke: "#492c1d",
  }}
  d="M526 266v5l10 1z"
/>
,<path
  style={{
    fill: "#573424",
    stroke: "#573424",
  }}
  d="m537 267-1 5 5-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m573 356 14-3-10-21z"
/>
,<path
  style={{
    fill: "#a6a7a5",
    stroke: "#a6a7a5",
  }}
  d="m574 362-1-6-4 2z"
/>
,<path
  style={{
    fill: "#815748",
    stroke: "#815748",
  }}
  d="m544 265-3 5h5z"
/>
,<path
  style={{
    fill: "#040406",
    stroke: "#040406",
  }}
  d="m526 271-6 3 8 1z"
/>
,<path
  style={{
    fill: "#060607",
    stroke: "#060607",
  }}
  d="M507 294h-6l3 4z"
/>
,<path
  style={{
    fill: "#a68275",
    stroke: "#a68275",
  }}
  d="m558 268-6-2 3 6z"
/>
,<path
  style={{
    fill: "#a89b98",
    stroke: "#a89b98",
  }}
  d="m535 367 2-6h-6z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="M540 367h9l-4-2z"
/>
,<path
  style={{
    fill: "#0c1217",
    stroke: "#0c1217",
  }}
  d="m513 357 6 1 3-4z"
/>
,<path
  style={{
    fill: "#7c838d",
    stroke: "#7c838d",
  }}
  d="m545 365 4 2 2-4z"
/>
,<path
  style={{
    fill: "#95928f",
    stroke: "#95928f",
  }}
  d="m555 365 6 1-1-4z"
/>
,<path
  style={{
    fill: "#0e1a2b",
    stroke: "#0e1a2b",
  }}
  d="m540 367-3-6-2 6z"
/>
,<path
  style={{
    fill: "#070709",
    stroke: "#070709",
  }}
  d="m509 276 1 6 8 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m504 298-3-4v9zM501 346l9 6 3-3z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="M513 349v8l9-3z"
/>
,<path
  style={{
    fill: "#987eb7",
    stroke: "#987eb7",
  }}
  d="m495 330 4 2 7-12z"
/>
,<path
  style={{
    fill: "#2e3654",
    stroke: "#2e3654",
  }}
  d="m535 367-4-6v5z"
/>
,<path
  style={{
    fill: "#7b523e",
    stroke: "#7b523e",
  }}
  d="m552 266-8-1 2 5z"
/>
,<path
  style={{
    fill: "#494237",
    stroke: "#494237",
  }}
  d="m498 288 3 6h6z"
/>
,<path
  style={{
    fill: "#997fb8",
    stroke: "#997fb8",
  }}
  d="m501 303-6 3 12 9z"
/>
,<path
  style={{
    fill: "#040404",
    stroke: "#040404",
  }}
  d="m554 383 7-17-6-1z"
/>
,<path
  style={{
    fill: "#93b6c1",
    stroke: "#93b6c1",
  }}
  d="m569 365 5-3-5-4z"
/>
,<path
  style={{
    fill: "#80543a",
    stroke: "#80543a",
  }}
  d="m574 275-8-7 1 7z"
/>
,<path
  style={{
    fill: "#5c3a2c",
    stroke: "#5c3a2c",
  }}
  d="m558 268-1-5-5 3z"
/>
,<path
  style={{
    fill: "#0b0708",
    stroke: "#0b0708",
  }}
  d="M593 272h-15l-2 8z"
/>
,<path
  style={{
    fill: "#a78bc9",
    stroke: "#a78bc9",
  }}
  d="m601 314-8-11-8 14z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m501 346 8-14h-5z"
/>
,<path
  style={{
    fill: "#9e8e76",
    stroke: "#9e8e76",
  }}
  d="M531 366v-5l-6 3z"
/>
,<path
  style={{
    fill: "#a88cca",
    stroke: "#a88cca",
  }}
  d="m594 332 7-9-16-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m608 338-10-8-4 2z"
/>
,<path
  style={{
    fill: "#687072",
    stroke: "#687072",
  }}
  d="m525 364 6-3-6-2z"
/>
,<path
  style={{
    fill: "#696963",
    stroke: "#696963",
  }}
  d="m519 363 6 1v-5z"
/>
,<path
  style={{
    fill: "#8596a0",
    stroke: "#8596a0",
  }}
  d="m519 363 6-4-6-1z"
/>
,<path
  style={{
    fill: "#020102",
    stroke: "#020102",
  }}
  d="m577 357 10-4-14 3z"
/>
,<path
  style={{
    fill: "#d0d6d9",
    stroke: "#d0d6d9",
  }}
  d="M569 365v-7l-4 4z"
/>
,<path
  style={{
    fill: "#908c86",
    stroke: "#908c86",
  }}
  d="m565 368 4-3-4-3z"
/>
,<path
  style={{
    fill: "#110b06",
    stroke: "#110b06",
  }}
  d="m510 352 3 5v-8z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m491 293 4 13 6-3z"
/>
,<path
  style={{
    fill: "#9179b0",
    stroke: "#9179b0",
  }}
  d="m602 318-1-4-16 3z"
/>
,<path
  style={{
    fill: "#6a3e2a",
    stroke: "#6a3e2a",
  }}
  d="m574 275 4-3-12-4z"
/>
,<path
  style={{
    fill: "#060608",
    stroke: "#060608",
  }}
  d="m593 272-17 8 27 2z"
/>
,<path
  style={{
    fill: "#4d415e",
    stroke: "#4d415e",
  }}
  d="m598 330 3-7-7 9z"
/>
,<path
  style={{
    fill: "#020104",
    stroke: "#020104",
  }}
  d="m584 356 3-3-10 4z"
/>
,<path
  style={{
    fill: "#787879",
    stroke: "#787879",
  }}
  d="m580 362 4-6-7 1z"
/>
,<path
  style={{
    fill: "#0a070d",
    stroke: "#0a070d",
  }}
  d="M601 314v-5l-3-4z"
/>
,<path
  style={{
    fill: "#0a0708",
    stroke: "#0a0708",
  }}
  d="m593 272-14-4-1 4z"
/>
,<path
  style={{
    fill: "#643e2a",
    stroke: "#643e2a",
  }}
  d="m552 266-5-5-3 4z"
/>
,<path
  style={{
    fill: "#8c6553",
    stroke: "#8c6553",
  }}
  d="m566 268-9-5 1 5z"
/>
,<path
  style={{
    fill: "#9f705b",
    stroke: "#9f705b",
  }}
  d="m563 259-6 4 9 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m499 332 2 14 3-14z"
/>
,<path
  style={{
    fill: "#837b6f",
    stroke: "#837b6f",
  }}
  d="m510 352-1 6 4-1z"
/>
,<path
  style={{
    fill: "#987fb7",
    stroke: "#987fb7",
  }}
  d="m492 324 3 6 11-10z"
/>
,<path
  style={{
    fill: "#502a1d",
    stroke: "#502a1d",
  }}
  d="m557 263-6-1 1 4z"
/>
,<path
  style={{
    fill: "#4e3121",
    stroke: "#4e3121",
  }}
  d="m527 260-1 6 11 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m601 314 9-15-9 10z"
/>
,<path
  style={{
    fill: "#8972a6",
    stroke: "#8972a6",
  }}
  d="m601 323 1-5-17-1z"
/>
,<path
  style={{
    fill: "#7b8183",
    stroke: "#7b8183",
  }}
  d="m561 366 4 2v-6z"
/>
,<path
  style={{
    fill: "#6a747e",
    stroke: "#6a747e",
  }}
  d="m575 366 5-4h-6z"
/>
,<path
  style={{
    fill: "#9fa5af",
    stroke: "#9fa5af",
  }}
  d="M574 362h6l-3-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m554 383 11-15-4-2z"
/>
,<path
  style={{
    fill: "#020101",
    stroke: "#020101",
  }}
  d="m554 383 1-18-6 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m536 375 13-8h-9z"
/>
,<path
  style={{
    fill: "#68442c",
    stroke: "#68442c",
  }}
  d="m537 267-11-1 10 6z"
/>
,<path
  style={{
    fill: "#040406",
    stroke: "#040406",
  }}
  d="M526 271v-5l-6 8z"
/>
,<path
  style={{
    fill: "#070709",
    stroke: "#070709",
  }}
  d="m520 274-11 2 9 7z"
/>
,<path
  style={{
    fill: "#8e664c",
    stroke: "#8e664c",
  }}
  d="m530 256 7 11 7-2z"
/>
,<path
  style={{
    fill: "#292c2e",
    stroke: "#292c2e",
  }}
  d="m525 364 2 4 4-2z"
/>
,<path
  style={{
    fill: "#020102",
    stroke: "#020102",
  }}
  d="m513 362 6 1v-5z"
/>
,<path
  style={{
    fill: "#a186c2",
    stroke: "#a186c2",
  }}
  d="m495 306-2 4 14 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m495 330 6 16-2-14z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="M513 357v5l6-4z"
/>
,<path
  style={{
    fill: "#542c1d",
    stroke: "#542c1d",
  }}
  d="m551 262-4-1 5 5z"
/>
,<path
  style={{
    fill: "#7e5241",
    stroke: "#7e5241",
  }}
  d="M547 253v8l4 1z"
/>
,<path
  style={{
    fill: "#947bb2",
    stroke: "#947bb2",
  }}
  d="m493 310-1 5h15z"
/>
,<path
  style={{
    fill: "#020001",
    stroke: "#020001",
  }}
  d="m531 366 5 9-1-8z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m535 367 1 8 4-8z"
/>
,<path
  style={{
    fill: "#040303",
    stroke: "#040303",
  }}
  d="m521 367 6 1-2-4z"
/>
,<path
  style={{
    fill: "#060608",
    stroke: "#060608",
  }}
  d="m508 271 1 5 11-2z"
/>
,<path
  style={{
    fill: "#574f43",
    stroke: "#574f43",
  }}
  d="m510 282-5-2 7 8z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m501 294-10-1 10 10zM481 302l4 11 8-3z"
/>
,<path
  style={{
    fill: "#4d463d",
    stroke: "#4d463d",
  }}
  d="m509 276-4 4 5 2z"
/>
,<path
  style={{
    fill: "#937bb1",
    stroke: "#937bb1",
  }}
  d="M492 315v9l14-4z"
/>
,<path
  style={{
    fill: "#000003",
    stroke: "#000003",
  }}
  d="m497 357 3-3 1-8z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m501 346 5 8 4-2z"
/>
,<path
  style={{
    fill: "#7a776d",
    stroke: "#7a776d",
  }}
  d="m575 366-1-4-5 3z"
/>
,<path
  style={{
    fill: "#9c9d9e",
    stroke: "#9c9d9e",
  }}
  d="m584 356 6 1-3-4z"
/>
,<path
  style={{
    fill: "#323948",
    stroke: "#323948",
  }}
  d="m506 354 3 4 1-6z"
/>
,<path
  style={{
    fill: "#858780",
    stroke: "#858780",
  }}
  d="m519 363 2 4 4-3z"
/>
,<path
  style={{
    fill: "#161615",
    stroke: "#161615",
  }}
  d="m565 368 10-2-6-1z"
/>
,<path
  style={{
    fill: "#90826e",
    stroke: "#90826e",
  }}
  d="m505 280-7 8h14z"
/>
,<path
  style={{
    fill: "#04060a",
    stroke: "#04060a",
  }}
  d="m516 366 5 1-2-4z"
/>
,<path
  style={{
    fill: "#93795d",
    stroke: "#93795d",
  }}
  d="m509 358 4 4v-5z"
/>
,<path
  style={{
    fill: "#5d3829",
    stroke: "#5d3829",
  }}
  d="m578 272 1-4h-13z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="M586 303h7l10-21z"
/>
,<path
  style={{
    fill: "#bcbab2",
    stroke: "#bcbab2",
  }}
  d="m580 362 5-1-1-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m587 353 16-1-9-20z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m598 330 10 8-7-15z"
/>
,<path
  style={{
    fill: "#959287",
    stroke: "#959287",
  }}
  d="m586 367-1-6-5 1z"
/>
,<path
  style={{
    fill: "#656d6e",
    stroke: "#656d6e",
  }}
  d="m585 361 5-4-6-1z"
/>
,<path
  style={{
    fill: "#949495",
    stroke: "#949495",
  }}
  d="m511 367 5-1-3-4z"
/>
,<path
  style={{
    fill: "#362b24",
    stroke: "#362b24",
  }}
  d="m513 362 3 4 3-3z"
/>
,<path
  style={{
    fill: "#9e6f5a",
    stroke: "#9e6f5a",
  }}
  d="m569 255-6 4 3 9z"
/>
,<path
  style={{
    fill: "#9d7060",
    stroke: "#9d7060",
  }}
  d="m557 263-1-9-5 8z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m527 368 9 7-5-9z"
/>
,<path
  style={{
    fill: "#b6bcc2",
    stroke: "#b6bcc2",
  }}
  d="m579 371 1-4-5-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M536 386v-11l-4 12z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m525 387 2-19-6 18z"
/>
,<path
  style={{
    fill: "#060608",
    stroke: "#060608",
  }}
  d="m516 261-8 10 12 3z"
/>
,<path
  style={{
    fill: "#613e2b",
    stroke: "#613e2b",
  }}
  d="m530 256-3 4 10 7z"
/>
,<path
  style={{
    fill: "#966a53",
    stroke: "#966a53",
  }}
  d="m530 256 14 9-3-15z"
/>
,<path
  style={{
    fill: "#37312a",
    stroke: "#37312a",
  }}
  d="m509 276-1-5-3 9z"
/>
,<path
  style={{
    fill: "#6e6353",
    stroke: "#6e6353",
  }}
  d="m505 280-10 1 3 7z"
/>
,<path
  style={{
    fill: "#050507",
    stroke: "#050507",
  }}
  d="m516 261 4 13 6-8z"
/>
,<path
  style={{
    fill: "#7a7c7f",
    stroke: "#7a7c7f",
  }}
  d="m594 362 1-6-5 1z"
/>
,<path
  style={{
    fill: "#949799",
    stroke: "#949799",
  }}
  d="m575 366 5 1v-5z"
/>
,<path
  style={{
    fill: "#07090c",
    stroke: "#07090c",
  }}
  d="m579 371-4-5-10 2z"
/>
,<path
  style={{
    fill: "#d4c6b5",
    stroke: "#d4c6b5",
  }}
  d="M509 358v5l4-1z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m516 366-2 4 7-3z"
/>
,<path
  style={{
    fill: "#aa978f",
    stroke: "#aa978f",
  }}
  d="m503 358 6 5v-5z"
/>
,<path
  style={{
    fill: "#919096",
    stroke: "#919096",
  }}
  d="M503 358h6l-3-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m501 346-1 8h6zM497 357l4-11-33-12z"
/>
,<path
  style={{
    fill: "#0d090d",
    stroke: "#0d090d",
  }}
  d="m500 354 3 4 3-4z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m498 288-7 5 10 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m493 310-8 3 7 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m492 315-7-2 7 11zM495 281l-4 12 7-5z"
/>
,<path
  style={{
    fill: "#150f0a",
    stroke: "#150f0a",
  }}
  d="m590 357 5-1-8-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m601 323 7 15-6-20z"
/>
,<path
  style={{
    fill: "#a39689",
    stroke: "#a39689",
  }}
  d="M590 365v-8l-5 4z"
/>
,<path
  style={{
    fill: "#b09b87",
    stroke: "#b09b87",
  }}
  d="m509 363 2 4 2-5z"
/>
,<path
  style={{
    fill: "#50595f",
    stroke: "#50595f",
  }}
  d="M506 367h5l-2-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m481 302 12 8 2-4zM468 334l33 12-6-16z"
/>
,<path
  style={{
    fill: "#b08471",
    stroke: "#b08471",
  }}
  d="m563 259-2-4-4 8z"
/>
,<path
  style={{
    fill: "#936451",
    stroke: "#936451",
  }}
  d="m566 252-5 3 2 4z"
/>
,<path
  style={{
    fill: "#040406",
    stroke: "#040406",
  }}
  d="m527 260-11 1 10 5z"
/>
,<path
  style={{
    fill: "#8a5c43",
    stroke: "#8a5c43",
  }}
  d="m541 250 3 15 3-4z"
/>
,<path
  style={{
    fill: "#bd9483",
    stroke: "#bd9483",
  }}
  d="m561 255-5-1 1 9z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m574 385 5-14-14-3z"
/>
,<path
  style={{
    fill: "#c0c4c8",
    stroke: "#c0c4c8",
  }}
  d="M580 367h6l-6-5z"
/>
,<path
  style={{
    fill: "#8c7e6a",
    stroke: "#8c7e6a",
  }}
  d="m498 271-3 10 10-1z"
/>
,<path
  style={{
    fill: "#c09787",
    stroke: "#c09787",
  }}
  d="m556 254-9-1 4 9z"
/>
,<path
  style={{
    fill: "#5d5a5b",
    stroke: "#5d5a5b",
  }}
  d="m511 367 3 3 2-4z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m610 299-17 4 5 2z"
/>
,<path
  style={{
    fill: "#8a5d48",
    stroke: "#8a5d48",
  }}
  d="m580 260-11-5-3 13z"
/>
,<path
  style={{
    fill: "#040406",
    stroke: "#040406",
  }}
  d="m530 249-14 12 11-1z"
/>
,<path
  style={{
    fill: "#8d7e6a",
    stroke: "#8d7e6a",
  }}
  d="M508 271h-10l7 9z"
/>
,<path
  style={{
    fill: "#c7b29a",
    stroke: "#c7b29a",
  }}
  d="m583 370 3-3h-6z"
/>
,<path
  style={{
    fill: "#080608",
    stroke: "#080608",
  }}
  d="m593 272-12-10-2 6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m603 352 5-14-14-6zM602 318l8-19-9 15zM601 309l9-10-12 6z"
/>
,<path
  style={{
    fill: "#a49f9b",
    stroke: "#a49f9b",
  }}
  d="m579 371 4-1-3-3z"
/>
,<path
  style={{
    fill: "#020203",
    stroke: "#020203",
  }}
  d="M511 367h-5l8 3z"
/>
,<path
  style={{
    fill: "#b4b8c0",
    stroke: "#b4b8c0",
  }}
  d="M503 358v5h6z"
/>
,<path
  style={{
    fill: "#c0bbb9",
    stroke: "#c0bbb9",
  }}
  d="m498 361 5 2v-5z"
/>
,<path
  style={{
    fill: "#948f95",
    stroke: "#948f95",
  }}
  d="m497 357 6 1-3-4z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m595 356 8-4-16 1z"
/>
,<path
  style={{
    fill: "#a1a9ad",
    stroke: "#a1a9ad",
  }}
  d="m586 367 4-2-5-4z"
/>
,<path
  style={{
    fill: "#08090d",
    stroke: "#08090d",
  }}
  d="m596 367-6-2 6 7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m633 313-23-14-8 19zM468 334l27-4-3-6z"
/>
,<path
  style={{
    fill: "#a97c67",
    stroke: "#a97c67",
  }}
  d="m561 255-1-4-4 3z"
/>
,<path
  style={{
    fill: "#b48c78",
    stroke: "#b48c78",
  }}
  d="m556 254-5-5-4 4z"
/>
,<path
  style={{
    fill: "#714837",
    stroke: "#714837",
  }}
  d="m580 260-14 8h13z"
/>
,<path
  style={{
    fill: "#130a08",
    stroke: "#130a08",
  }}
  d="m581 262-1-2-1 8z"
/>
,<path
  style={{
    fill: "#12090a",
    stroke: "#12090a",
  }}
  d="M580 257v3l1 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m610 299-7-17-10 21z"
/>
,<path
  style={{
    fill: "#c1afa0",
    stroke: "#c1afa0",
  }}
  d="m590 365 4-3-4-5z"
/>
,<path
  style={{
    fill: "#94939c",
    stroke: "#94939c",
  }}
  d="m503 363 3 4 3-4z"
/>
,<path
  style={{
    fill: "#05050b",
    stroke: "#05050b",
  }}
  d="m501 368 5-1-3-4z"
/>
,<path
  style={{
    fill: "#74706c",
    stroke: "#74706c",
  }}
  d="m594 362 5-5-4-1z"
/>
,<path
  style={{
    fill: "#08070a",
    stroke: "#08070a",
  }}
  d="m603 253-23 4 1 5z"
/>
,<path
  style={{
    fill: "#070709",
    stroke: "#070709",
  }}
  d="m603 282-6-9-4-1z"
/>
,<path
  style={{
    fill: "#010102",
    stroke: "#010102",
  }}
  d="m599 357 4-5-8 4z"
/>
,<path
  style={{
    fill: "#09080b",
    stroke: "#09080b",
  }}
  d="m516 261-9 3 1 7z"
/>
,<path
  style={{
    fill: "#09090b",
    stroke: "#09090b",
  }}
  d="m508 258-1 6 9-3z"
/>
,<path
  style={{
    fill: "#7f4e37",
    stroke: "#7f4e37",
  }}
  d="m566 252-6-1 1 4z"
/>
,<path
  style={{
    fill: "#9a6f59",
    stroke: "#9a6f59",
  }}
  d="m547 253-6-3 6 11z"
/>
,<path
  style={{
    fill: "#0a0606",
    stroke: "#0a0606",
  }}
  d="M530 256v-7l-3 11z"
/>
,<path
  style={{
    fill: "#8b5e45",
    stroke: "#8b5e45",
  }}
  d="m545 247-4 3 6 3z"
/>
,<path
  style={{
    fill: "#878699",
    stroke: "#878699",
  }}
  d="m497 357 1 4 5-3z"
/>
,<path
  style={{
    fill: "#02041c",
    stroke: "#02041c",
  }}
  d="m497 365 1-4-1-4z"
/>
,<path
  style={{
    fill: "#875845",
    stroke: "#875845",
  }}
  d="m569 255-3-3-3 7z"
/>
,<path
  style={{
    fill: "#56281f",
    stroke: "#56281f",
  }}
  d="m571 251-5 1 3 3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m465 287 16 15 10-9z"
/>
,<path
  style={{
    fill: "#796b5a",
    stroke: "#796b5a",
  }}
  d="m507 264-9 7h10z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m542 385 12-2-5-16z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m579 371 10 11-6-12z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m542 385 7-18-13 8z"
/>
,<path
  style={{
    fill: "#c7a092",
    stroke: "#c7a092",
  }}
  d="m560 251-9-2 5 5z"
/>
,<path
  style={{
    fill: "#5c3021",
    stroke: "#5c3021",
  }}
  d="m545 247 6 2-3-6z"
/>
,<path
  style={{
    fill: "#4e271a",
    stroke: "#4e271a",
  }}
  d="m580 260-5-6-6 1z"
/>
,<path
  style={{
    fill: "#08080b",
    stroke: "#08080b",
  }}
  d="m603 253-22 9 12 10z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m491 293-10 9 14 4zM494 370l3-5-8 7z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m493 275-2 18 4-12z"
/>
,<path
  style={{
    fill: "#2a130e",
    stroke: "#2a130e",
  }}
  d="m580 257-5-3 5 6z"
/>
,<path
  style={{
    fill: "#595249",
    stroke: "#595249",
  }}
  d="m498 271-5 4 2 6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m536 386 6-1-6-10zM536 375l-11 12h7z"
/>
,<path
  style={{
    fill: "#754e39",
    stroke: "#754e39",
  }}
  d="m541 250-11-1v7z"
/>
,<path
  style={{
    fill: "#86573e",
    stroke: "#86573e",
  }}
  d="m551 249-6-2 2 6z"
/>
,<path
  style={{
    fill: "#996c56",
    stroke: "#996c56",
  }}
  d="m552 245-1 4 9 2z"
/>
,<path
  style={{
    fill: "#5a2d20",
    stroke: "#5a2d20",
  }}
  d="m565 248-5 3 6 1z"
/>
,<path
  style={{
    fill: "#402018",
    stroke: "#402018",
  }}
  d="m575 254-4-3-2 4z"
/>
,<path
  style={{
    fill: "#1e0d0c",
    stroke: "#1e0d0c",
  }}
  d="m577 250-6 1 4 3z"
/>
,<path
  style={{
    fill: "#623c2b",
    stroke: "#623c2b",
  }}
  d="m537 244-7 5 11 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m554 383 4 2 7-17z"
/>
,<path
  style={{
    fill: "#40473d",
    stroke: "#40473d",
  }}
  d="m553 390 5-5-4-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m506 367 6 16 2-13z"
/>
,<path
  style={{
    fill: "#595152",
    stroke: "#595152",
  }}
  d="m497 365 4 3 2-5z"
/>
,<path
  style={{
    fill: "#010102",
    stroke: "#010102",
  }}
  d="m599 357 1 5 3-10z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m603 352 7-5-2-9z"
/>
,<path
  style={{
    fill: "#706559",
    stroke: "#706559",
  }}
  d="M594 362h6l-1-5z"
/>
,<path
  style={{
    fill: "#9f958c",
    stroke: "#9f958c",
  }}
  d="m596 367 4-5h-6z"
/>
,<path
  style={{
    fill: "#acacac",
    stroke: "#acacac",
  }}
  d="m596 367-2-5-4 3z"
/>
,<path
  style={{
    fill: "#030202",
    stroke: "#030202",
  }}
  d="m590 365-4 2 10 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m608 338 25-25-31 5zM626 353l-16-6-7 5z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m542 385 7 1 5-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m474 321 18 3-7-11z"
/>
,<path
  style={{
    fill: "#80839c",
    stroke: "#80839c",
  }}
  d="m498 361-1 4 6-2z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m596 372-10-5-3 3z"
/>
,<path
  style={{
    fill: "#09080a",
    stroke: "#09080a",
  }}
  d="m507 254 1 4 8 3z"
/>
,<path
  style={{
    fill: "#514942",
    stroke: "#514942",
  }}
  d="m492 266 1 4 5 1z"
/>
,<path
  style={{
    fill: "#6f675d",
    stroke: "#6f675d",
  }}
  d="m498 271-5-1v5z"
/>
,<path
  style={{
    fill: "#3a1c19",
    stroke: "#3a1c19",
  }}
  d="m571 251-6-3 1 4z"
/>
,<path
  style={{
    fill: "#5e3021",
    stroke: "#5e3021",
  }}
  d="m565 248-4-1-1 4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m536 375-9-7-2 19z"
/>
,<path
  style={{
    fill: "#050303",
    stroke: "#050303",
  }}
  d="m542 385 5 6 2-5z"
/>
,<path
  style={{
    fill: "#83543c",
    stroke: "#83543c",
  }}
  d="m561 247-9-2 8 6z"
/>
,<path
  style={{
    fill: "#5c3626",
    stroke: "#5c3626",
  }}
  d="m543 243-6 1 4 6z"
/>
,<path
  style={{
    fill: "#8e7e69",
    stroke: "#8e7e69",
  }}
  d="m500 259-2 12 9-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m470 271-5 16 26 6z"
/>
,<path
  style={{
    fill: "#020203",
    stroke: "#020203",
  }}
  d="m603 282 3-7-9-2z"
/>
,<path
  style={{
    fill: "#0e0a0b",
    stroke: "#0e0a0b",
  }}
  d="m596 244-19 6 3 7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m615 279-9-4-3 7zM558 385l8 1-1-18zM562 387l4-1-8-1z"
/>
,<path
  style={{
    fill: "#484442",
    stroke: "#484442",
  }}
  d="m558 390 4-3-4-2z"
/>
,<path
  style={{
    fill: "#494846",
    stroke: "#494846",
  }}
  d="m553 390 1-7-5 3z"
/>
,<path
  style={{
    fill: "#7a7674",
    stroke: "#7a7674",
  }}
  d="M537 390h5v-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m527 368-6-1v19z"
/>
,<path
  style={{
    fill: "#27110e",
    stroke: "#27110e",
  }}
  d="m580 257-3-7-2 4z"
/>
,<path
  style={{
    fill: "#42231a",
    stroke: "#42231a",
  }}
  d="m571 251 1-6-7 3z"
/>
,<path
  style={{
    fill: "#603021",
    stroke: "#603021",
  }}
  d="m565 248 2-8-6 7z"
/>
,<path
  style={{
    fill: "#512c20",
    stroke: "#512c20",
  }}
  d="m543 238 5 5 1-8z"
/>
,<path
  style={{
    fill: "#0f0a0c",
    stroke: "#0f0a0c",
  }}
  d="m578 244-1 6 19-6z"
/>
,<path
  style={{
    fill: "#08080a",
    stroke: "#08080a",
  }}
  d="m508 250-1 4 9 7z"
/>
,<path
  style={{
    fill: "#683c2b",
    stroke: "#683c2b",
  }}
  d="m543 243-2 7 4-3z"
/>
,<path
  style={{
    fill: "#5f3320",
    stroke: "#5f3320",
  }}
  d="m552 245-4-2 3 6z"
/>
,<path
  style={{
    fill: "#572f20",
    stroke: "#572f20",
  }}
  d="m548 243 4 2-3-10z"
/>
,<path
  style={{
    fill: "#3b1c16",
    stroke: "#3b1c16",
  }}
  d="M548 243h-5l2 4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m481 302-7 19 11-8zM566 386l8-1-9-17zM570 387l4-2-8 1z"
/>
,<path
  style={{
    fill: "#030102",
    stroke: "#030102",
  }}
  d="m596 367 4 5v-10z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m626 353 1-10-17 4zM589 382l7-10-13-2z"
/>
,<path
  style={{
    fill: "#251e17",
    stroke: "#251e17",
  }}
  d="m537 390 5-5-6 1z"
/>
,<path
  style={{
    fill: "#353d45",
    stroke: "#353d45",
  }}
  d="m547 391 6-1-4-4z"
/>
,<path
  style={{
    fill: "#534d4d",
    stroke: "#534d4d",
  }}
  d="m567 390 3-3-4-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M521 386v-19l-7 3z"
/>
,<path
  style={{
    fill: "#53585e",
    stroke: "#53585e",
  }}
  d="m532 387 5 3-1-4z"
/>
,<path
  style={{
    fill: "#020201",
    stroke: "#020201",
  }}
  d="m521 386-7-16-2 13z"
/>
,<path
  style={{
    fill: "#4a4e56",
    stroke: "#4a4e56",
  }}
  d="m567 390-1-4-4 1z"
/>
,<path
  style={{
    fill: "#6f6351",
    stroke: "#6f6351",
  }}
  d="m508 258-8 1 7 5z"
/>
,<path
  style={{
    fill: "#050507",
    stroke: "#050507",
  }}
  d="m508 250 8 11 14-12z"
/>
,<path
  style={{
    fill: "#83755e",
    stroke: "#83755e",
  }}
  d="m501 254-1 5 8-1z"
/>
,<path
  style={{
    fill: "#696668",
    stroke: "#696668",
  }}
  d="M529 390h8l-5-3z"
/>
,<path
  style={{
    fill: "#878885",
    stroke: "#878885",
  }}
  d="M553 390h5v-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m512 383-6-16-2 18z"
/>
,<path
  style={{
    fill: "#4a4431",
    stroke: "#4a4431",
  }}
  d="m553 390 5 5v-5z"
/>
,<path
  style={{
    fill: "#686861",
    stroke: "#686861",
  }}
  d="m542 390 5 1-5-6z"
/>
,<path
  style={{
    fill: "#685f56",
    stroke: "#685f56",
  }}
  d="m544 396 3-5-5-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m470 271 21 22 2-18zM465 324l3 10 6-13z"
/>
,<path
  style={{
    fill: "#908473",
    stroke: "#908473",
  }}
  d="m500 259-8 7 6 5z"
/>
,<path
  style={{
    fill: "#180d0b",
    stroke: "#180d0b",
  }}
  d="m537 244-6-1-1 6z"
/>
,<path
  style={{
    fill: "#24120e",
    stroke: "#24120e",
  }}
  d="m543 238-12 5 6 1z"
/>
,<path
  style={{
    fill: "#452218",
    stroke: "#452218",
  }}
  d="m577 250-5-5-1 6z"
/>
,<path
  style={{
    fill: "#3d1c16",
    stroke: "#3d1c16",
  }}
  d="m578 244-6 1 5 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m504 385 2-18-5 1z"
/>
,<path
  style={{
    fill: "#010103",
    stroke: "#010103",
  }}
  d="m497 365-3 5 7-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m489 372 8-7v-8z"
/>
,<path
  style={{
    fill: "#728a96",
    stroke: "#728a96",
  }}
  d="M537 390v5l5-5z"
/>
,<path
  style={{
    fill: "#7a7879",
    stroke: "#7a7879",
  }}
  d="m525 387 4 3 3-3z"
/>
,<path
  style={{
    fill: "#7f807e",
    stroke: "#7f807e",
  }}
  d="m526 395 3-5-4-3z"
/>
,<path
  style={{
    fill: "#504f4d",
    stroke: "#504f4d",
  }}
  d="m521 391 4-4-4-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m574 385 4 1 1-15z"
/>
,<path
  style={{
    fill: "#171101",
    stroke: "#171101",
  }}
  d="m574 390 4-4-4-1z"
/>
,<path
  style={{
    fill: "#535351",
    stroke: "#535351",
  }}
  d="M574 390v-5l-4 2z"
/>
,<path
  style={{
    fill: "#6c7273",
    stroke: "#6c7273",
  }}
  d="m563 395 4-5-5-3z"
/>
,<path
  style={{
    fill: "#594c4d",
    stroke: "#594c4d",
  }}
  d="m563 395-1-8-4 3z"
/>
,<path
  style={{
    fill: "#040405",
    stroke: "#040405",
  }}
  d="m512 383 4 3h5z"
/>
,<path
  style={{
    fill: "#515856",
    stroke: "#515856",
  }}
  d="m521 391-5-5v7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M596 372h4l-4-5zM595 385l5-13h-4z"
/>
,<path
  style={{
    fill: "#0b0a0e",
    stroke: "#0b0a0e",
  }}
  d="m603 253-10 19 4 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m610 299 5-20-12 3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m630 282-15-3-5 20z"
/>
,<path
  style={{
    fill: "#5e5446",
    stroke: "#5e5446",
  }}
  d="M507 254h-6l7 4z"
/>
,<path
  style={{
    fill: "#655c51",
    stroke: "#655c51",
  }}
  d="m500 259-8 2v5z"
/>
,<path
  style={{
    fill: "#060608",
    stroke: "#060608",
  }}
  d="m509 244-1 6 22-1z"
/>
,<path
  style={{
    fill: "#675b4c",
    stroke: "#675b4c",
  }}
  d="m508 250-7 4h6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m578 386 11-4-10-11z"
/>
,<path
  style={{
    fill: "#635a4f",
    stroke: "#635a4f",
  }}
  d="m493 253-1 8 8-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m465 287-4 36 20-21z"
/>
,<path
  style={{
    fill: "#696675",
    stroke: "#696675",
  }}
  d="M567 390h7l-4-3z"
/>
,<path
  style={{
    fill: "#010102",
    stroke: "#010102",
  }}
  d="m578 386 6 2 5-6z"
/>
,<path
  style={{
    fill: "#696161",
    stroke: "#696161",
  }}
  d="m569 396 5-6h-7z"
/>
,<path
  style={{
    fill: "#2b1611",
    stroke: "#2b1611",
  }}
  d="M543 243v-5l-6 6z"
/>
,<path
  style={{
    fill: "#070709",
    stroke: "#070709",
  }}
  d="m510 240-1 4 21 5z"
/>
,<path
  style={{
    fill: "#361b13",
    stroke: "#361b13",
  }}
  d="m548 243-5-5v5z"
/>
,<path
  style={{
    fill: "#7a4c36",
    stroke: "#7a4c36",
  }}
  d="m558 237-6 8 9 2z"
/>
,<path
  style={{
    fill: "#060608",
    stroke: "#060608",
  }}
  d="m603 253-6 20 9 2z"
/>
,<path
  style={{
    fill: "#5c3224",
    stroke: "#5c3224",
  }}
  d="m572 245-5-5-2 8z"
/>
,<path
  style={{
    fill: "#2c1916",
    stroke: "#2c1916",
  }}
  d="m571 241-4-1 5 5z"
/>
,<path
  style={{
    fill: "#2f1915",
    stroke: "#2f1915",
  }}
  d="m578 244-7-3 1 4z"
/>
,<path
  style={{
    fill: "#7e7773",
    stroke: "#7e7773",
  }}
  d="m516 386 5 5v-5z"
/>
,<path
  style={{
    fill: "#343531",
    stroke: "#343531",
  }}
  d="m532 396 5-1v-5z"
/>
,<path
  style={{
    fill: "#1d1308",
    stroke: "#1d1308",
  }}
  d="m513 390 3-4-4-3z"
/>
,<path
  style={{
    fill: "#626161",
    stroke: "#626161",
  }}
  d="m532 396 5-6h-8z"
/>
,<path
  style={{
    fill: "#494a45",
    stroke: "#494a45",
  }}
  d="m551 396 7-1-5-5z"
/>
,<path
  style={{
    fill: "#373f46",
    stroke: "#373f46",
  }}
  d="m551 396 2-6-6 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m494 370 1 6 6-8z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m489 372 6 4-1-6z"
/>
,<path
  style={{
    fill: "#5b5c5f",
    stroke: "#5b5c5f",
  }}
  d="m537 395 7 1-2-6z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="M544 396h7l-4-5z"
/>
,<path
  style={{
    fill: "#5a2e21",
    stroke: "#5a2e21",
  }}
  d="M561 236v11l6-7z"
/>
,<path
  style={{
    fill: "#673827",
    stroke: "#673827",
  }}
  d="m561 236-3 1 3 10z"
/>
,<path
  style={{
    fill: "#010002",
    stroke: "#010002",
  }}
  d="m504 385 4 1 4-3z"
/>
,<path
  style={{
    fill: "#383a4a",
    stroke: "#383a4a",
  }}
  d="M558 395h5l-5-5z"
/>
,<path
  style={{
    fill: "#020203",
    stroke: "#020203",
  }}
  d="m569 396-6-1 5 5z"
/>
,<path
  style={{
    fill: "#5a5959",
    stroke: "#5a5959",
  }}
  d="m579 392 5-4-6-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m589 382 6 3 1-13z"
/>
,<path
  style={{
    fill: "#6d6c70",
    stroke: "#6d6c70",
  }}
  d="m579 392-1-6-4 4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m495 376 9 9-3-17zM455 363l34 9 8-15z"
/>
,<path
  style={{
    fill: "#5d5c5d",
    stroke: "#5d5c5d",
  }}
  d="m526 395 6 1-3-6z"
/>
,<path
  style={{
    fill: "#020102",
    stroke: "#020102",
  }}
  d="M540 400h7l-3-4z"
/>
,<path
  style={{
    fill: "#4d4e5a",
    stroke: "#4d4e5a",
  }}
  d="m526 395-1-8-4 4z"
/>
,<path
  style={{
    fill: "#653f2b",
    stroke: "#653f2b",
  }}
  d="m558 237-9-2 3 10z"
/>
,<path
  style={{
    fill: "#050406",
    stroke: "#050406",
  }}
  d="m510 240 20 9 1-6z"
/>
,<path
  style={{
    fill: "#606365",
    stroke: "#606365",
  }}
  d="m508 386 5 4-1-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m495 379 9 6-9-9z"
/>
,<path
  style={{
    fill: "#251514",
    stroke: "#251514",
  }}
  d="m558 237-6-9-3 7z"
/>
,<path
  style={{
    fill: "#2c1615",
    stroke: "#2c1615",
  }}
  d="m566 234-5 2 6 4z"
/>
,<path
  style={{
    fill: "#140d0e",
    stroke: "#140d0e",
  }}
  d="m566 234 1 6 4 1z"
/>
,<path
  style={{
    fill: "#5e6365",
    stroke: "#5e6365",
  }}
  d="M505 390h8l-5-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m474 321-6 13 24-10zM465 324l9-3-13 2z"
/>
,<path
  style={{
    fill: "#292f34",
    stroke: "#292f34",
  }}
  d="M520 395h6l-5-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m489 372 6 7v-3z"
/>
,<path
  style={{
    fill: "#675f53",
    stroke: "#675f53",
  }}
  d="m495 245-1 4 7 5z"
/>
,<path
  style={{
    fill: "#968877",
    stroke: "#968877",
  }}
  d="m501 254-8-1 7 6z"
/>
,<path
  style={{
    fill: "#0d0c10",
    stroke: "#0d0c10",
  }}
  d="m523 228 8 15-3-18z"
/>
,<path
  style={{
    fill: "#525669",
    stroke: "#525669",
  }}
  d="m575 395 4-3-5-2z"
/>
,<path
  style={{
    fill: "#23292d",
    stroke: "#23292d",
  }}
  d="m586 392 5-6-7 2z"
/>
,<path
  style={{
    fill: "#252324",
    stroke: "#252324",
  }}
  d="m584 388 7-2-2-4z"
/>
,<path
  style={{
    fill: "#2c1815",
    stroke: "#2c1815",
  }}
  d="m549 235-4-1-2 4z"
/>
,<path
  style={{
    fill: "#09090b",
    stroke: "#09090b",
  }}
  d="m552 228-7 6 4 1z"
/>
,<path
  style={{
    fill: "#636363",
    stroke: "#636363",
  }}
  d="m563 395 6 1-2-6z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m560 400 3-5h-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m461 323 13-2 7-19z"
/>
,<path
  style={{
    fill: "#030101",
    stroke: "#030101",
  }}
  d="m513 390 3 3v-7z"
/>
,<path
  style={{
    fill: "#020102",
    stroke: "#020102",
  }}
  d="m512 397 4-4-3-3z"
/>
,<path
  style={{
    fill: "#473829",
    stroke: "#473829",
  }}
  d="m516 393 4 2 1-4z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m535 400 2-5-5 1z"
/>
,<path
  style={{
    fill: "#2e2427",
    stroke: "#2e2427",
  }}
  d="m569 396 6-1-1-5z"
/>
,<path
  style={{
    fill: "#3f3b3b",
    stroke: "#3f3b3b",
  }}
  d="m596 386-1-1-2 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M493 275v-5l-23 1z"
/>
,<path
  style={{
    fill: "#655d52",
    stroke: "#655d52",
  }}
  d="m494 249-1 4 8 1z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m591 386 4-1-6-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m626 353-23-1-3 10z"
/>
,<path
  style={{
    fill: "#343133",
    stroke: "#343133",
  }}
  d="m595 385-4 1 2 4z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m551 396 1 4 6-5z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m569 396 6 4v-5z"
/>
,<path
  style={{
    fill: "#030203",
    stroke: "#030203",
  }}
  d="m544 396 3 4 4-4zM540 400l4-4-7-1z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m540 400-3-5-2 5z"
/>
,<path
  style={{
    fill: "#111413",
    stroke: "#111413",
  }}
  d="M547 400h5l-1-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m610 347 17-4-19-5zM626 353l-26 9v10z"
/>
,<path
  style={{
    fill: "#010102",
    stroke: "#010102",
  }}
  d="m535 400-3-4v7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m622 256-19-3 3 22z"
/>
,<path
  style={{
    fill: "#0c0a0e",
    stroke: "#0c0a0e",
  }}
  d="m578 231-12 3 5 7z"
/>
,<path
  style={{
    fill: "#09090a",
    stroke: "#09090a",
  }}
  d="m579 236-8 5 7 3z"
/>
,<path
  style={{
    fill: "#331815",
    stroke: "#331815",
  }}
  d="m561 236-1-4-2 5z"
/>
,<path
  style={{
    fill: "#020102",
    stroke: "#020102",
  }}
  d="m527 403 5-7-6-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m556 401 4-1-2-5zM595 385l7 1-2-14z"
/>
,<path
  style={{
    fill: "#4c4034",
    stroke: "#4c4034",
  }}
  d="m586 392-2-4-5 4z"
/>
,<path
  style={{
    fill: "#8a7a63",
    stroke: "#8a7a63",
  }}
  d="m502 242-1 12 7-4z"
/>
,<path
  style={{
    fill: "#08080a",
    stroke: "#08080a",
  }}
  d="m514 234-4 6 21 3z"
/>
,<path
  style={{
    fill: "#4b413f",
    stroke: "#4b413f",
  }}
  d="m581 396 5-4h-7z"
/>
,<path
  style={{
    fill: "#565758",
    stroke: "#565758",
  }}
  d="m581 396-2-4-4 3z"
/>
,<path
  style={{
    fill: "#3b3937",
    stroke: "#3b3937",
  }}
  d="m504 385 1 5 3-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m520 401 4-1-4-5z"
/>
,<path
  style={{
    fill: "#3d3e41",
    stroke: "#3d3e41",
  }}
  d="m500 388 5 2-1-5z"
/>
,<path
  style={{
    fill: "#150d0e",
    stroke: "#150d0e",
  }}
  d="m566 234-6-2 1 4z"
/>
,<path
  style={{
    fill: "#1d242f",
    stroke: "#1d242f",
  }}
  d="m543 404 4-4h-7z"
/>
,<path
  style={{
    fill: "#7d837c",
    stroke: "#7d837c",
  }}
  d="M552 405v-5h-5z"
/>
,<path
  style={{
    fill: "#4a4743",
    stroke: "#4a4743",
  }}
  d="m552 405 4-4-4-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m552 400 4 1 2-6zM627 343l6-30-25 25zM618 245l-16 3 1 5zM495 379l1 6h8z"
/>
,<path
  style={{
    fill: "#010102",
    stroke: "#010102",
  }}
  d="M491 385h5l-1-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m491 385 4-6-6-7zM493 270l-1-4-22 5z"
/>
,<path
  style={{
    fill: "#64594b",
    stroke: "#64594b",
  }}
  d="m502 242 6 8 1-6z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m496 385 4 3 4-3z"
/>
,<path
  style={{
    fill: "#0d0c10",
    stroke: "#0d0c10",
  }}
  d="m589 238-10-2-1 8zM561 228h-9l8 4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m564 401-1-6-3 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m564 401 4-1-5-5z"
/>
,<path
  style={{
    fill: "#484742",
    stroke: "#484742",
  }}
  d="m561 404 3-3-4-1z"
/>
,<path
  style={{
    fill: "#616567",
    stroke: "#616567",
  }}
  d="m586 392 7-2-2-4z"
/>
,<path
  style={{
    fill: "#020202",
    stroke: "#020202",
  }}
  d="m575 400 6-4-6-1z"
/>
,<path
  style={{
    fill: "#555c63",
    stroke: "#555c63",
  }}
  d="m591 396 2-6-7 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m627 343 21-10-15-20zM617 385l9-32-26 19zM602 386l-7-1 1 1zM465 324l-8 10h11z"
/>
,<path
  style={{
    fill: "#0e0b0c",
    stroke: "#0e0b0c",
  }}
  d="m488 388 3-3-8 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m492 266-14-9-8 14z"
/>
,<path
  style={{
    fill: "#0f0608",
    stroke: "#0f0608",
  }}
  d="m539 406 4-2-3-4z"
/>
,<path
  style={{
    fill: "#010100",
    stroke: "#010100",
  }}
  d="m520 395 4 5 2-5z"
/>
,<path
  style={{
    fill: "#0e0e0e",
    stroke: "#0e0e0e",
  }}
  d="m512 397 8-2-4-2z"
/>
,<path
  style={{
    fill: "#232322",
    stroke: "#232322",
  }}
  d="m512 397 1-7-6 6z"
/>
,<path
  style={{
    fill: "#0d0c11",
    stroke: "#0d0c11",
  }}
  d="m603 253-7-9-16 13z"
/>
,<path
  style={{
    fill: "#645949",
    stroke: "#645949",
  }}
  d="m510 240-8 2 7 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m622 256-16 19 9 4z"
/>
,<path
  style={{
    fill: "#121216",
    stroke: "#121216",
  }}
  d="m603 253-1-5-6-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M492 266v-5l-14-4z"
/>
,<path
  style={{
    fill: "#6c6153",
    stroke: "#6c6153",
  }}
  d="m539 406 1-6h-5z"
/>
,<path
  style={{
    fill: "#323439",
    stroke: "#323439",
  }}
  d="m556 401 5 3-1-4z"
/>
,<path
  style={{
    fill: "#111313",
    stroke: "#111313",
  }}
  d="M527 403h5v-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M568 400h7l-6-4z"
/>
,<path
  style={{
    fill: "#130b0d",
    stroke: "#130b0d",
  }}
  d="m597 393 2-4-6 1z"
/>
,<path
  style={{
    fill: "#3a3c3f",
    stroke: "#3a3c3f",
  }}
  d="m573 404 2-4h-7z"
/>
,<path
  style={{
    fill: "#4d4b55",
    stroke: "#4d4b55",
  }}
  d="m573 404-5-4v7z"
/>
,<path
  style={{
    fill: "#5d5659",
    stroke: "#5d5659",
  }}
  d="m507 396 6-6h-8z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m524 400 3 3-1-8z"
/>
,<path
  style={{
    fill: "#1a0f0f",
    stroke: "#1a0f0f",
  }}
  d="m560 232-8-4 6 9z"
/>
,<path
  style={{
    fill: "#0a0a0d",
    stroke: "#0a0a0d",
  }}
  d="m518 231-4 3 17 9z"
/>
,<path
  style={{
    fill: "#585147",
    stroke: "#585147",
  }}
  d="m502 232-4 6 4 4z"
/>
,<path
  style={{
    fill: "#101014",
    stroke: "#101014",
  }}
  d="m561 228-1 4 6 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m478 257 14 4 1-8z"
/>
,<path
  style={{
    fill: "#908572",
    stroke: "#908572",
  }}
  d="m502 242-7 3 6 9z"
/>
,<path
  style={{
    fill: "#030101",
    stroke: "#030101",
  }}
  d="m599 389 3-3h-6z"
/>
,<path
  style={{
    fill: "#332d2a",
    stroke: "#332d2a",
  }}
  d="m599 389-3-3-3 4z"
/>
,<path
  style={{
    fill: "#14151b",
    stroke: "#14151b",
  }}
  d="m569 227-8 1 5 6z"
/>
,<path
  style={{
    fill: "#0f1015",
    stroke: "#0f1015",
  }}
  d="m596 244-7-6-11 6z"
/>
,<path
  style={{
    fill: "#292a34",
    stroke: "#292a34",
  }}
  d="M598 238h-9l7 6z"
/>
,<path
  style={{
    fill: "#646b70",
    stroke: "#646b70",
  }}
  d="m557 410 4-6-5-3z"
/>
,<path
  style={{
    fill: "#0a0a0d",
    stroke: "#0a0a0d",
  }}
  d="m518 231 13 12-8-15z"
/>
,<path
  style={{
    fill: "#504a41",
    stroke: "#504a41",
  }}
  d="m502 242-4-4-3 7z"
/>
,<path
  style={{
    fill: "#465259",
    stroke: "#465259",
  }}
  d="m548 407 4-2-5-5z"
/>
,<path
  style={{
    fill: "#636561",
    stroke: "#636561",
  }}
  d="m548 407-1-7-4 4z"
/>
,<path
  style={{
    fill: "#060303",
    stroke: "#060303",
  }}
  d="M496 385v5l4-2z"
/>
,<path
  style={{
    fill: "#464446",
    stroke: "#464446",
  }}
  d="m503 397 4-1-2-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m479 386 10-14-26 6z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m512 397 8 4v-6z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m587 397-1-5-5 4z"
/>
,<path
  style={{
    fill: "#656665",
    stroke: "#656665",
  }}
  d="m532 403 7 3-4-6z"
/>
,<path
  style={{
    fill: "#7c7772",
    stroke: "#7c7772",
  }}
  d="m524 406 3-3-3-3z"
/>
,<path
  style={{
    fill: "#0d0d10",
    stroke: "#0d0d10",
  }}
  d="m578 231-7 10 8-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m633 313-3-31-20 17z"
/>
,<path
  style={{
    fill: "#5e6c6b",
    stroke: "#5e6c6b",
  }}
  d="m500 394 5-4-5-2z"
/>
,<path
  style={{
    fill: "#45494b",
    stroke: "#45494b",
  }}
  d="m518 407 6-1-4-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m478 257 15-4-10-12zM579 403l8-6-6-1z"
/>
,<path
  style={{
    fill: "#010100",
    stroke: "#010100",
  }}
  d="m579 403 2-7-6 4z"
/>
,<path
  style={{
    fill: "#0f1113",
    stroke: "#0f1113",
  }}
  d="m602 248-1-4h-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m618 245-17-1 1 4z"
/>
,<path
  style={{
    fill: "#707572",
    stroke: "#707572",
  }}
  d="m491 385 5 5v-5z"
/>
,<path
  style={{
    fill: "#484c49",
    stroke: "#484c49",
  }}
  d="m531 407 8-1-7-3z"
/>
,<path
  style={{
    fill: "#8c7d67",
    stroke: "#8c7d67",
  }}
  d="M502 232v10l8-2z"
/>
,<path
  style={{
    fill: "#100b0c",
    stroke: "#100b0c",
  }}
  d="m531 243 12-5-15-13z"
/>
,<path
  style={{
    fill: "#18191f",
    stroke: "#18191f",
  }}
  d="m585 233-7-2 1 5z"
/>
,<path
  style={{
    fill: "#16161c",
    stroke: "#16161c",
  }}
  d="m585 233-6 3 10 2z"
/>
,<path
  style={{
    fill: "#62594f",
    stroke: "#62594f",
  }}
  d="m552 405 5 5-1-9z"
/>
,<path
  style={{
    fill: "#44505d",
    stroke: "#44505d",
  }}
  d="m543 409 5-2-5-3z"
/>
,<path
  style={{
    fill: "#1d2429",
    stroke: "#1d2429",
  }}
  d="m587 397 4-1-5-4z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m595 397-4-1-4 1z"
/>
,<path
  style={{
    fill: "#020103",
    stroke: "#020103",
  }}
  d="m496 390 4 4v-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m507 396 7 13-2-12z"
/>
,<path
  style={{
    fill: "#2c2d38",
    stroke: "#2c2d38",
  }}
  d="m594 230-9 3 4 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m483 241 10 12 1-4z"
/>
,<path
  style={{
    fill: "#565452",
    stroke: "#565452",
  }}
  d="m604 390 4-4h-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M602 386h6l-8-14z"
/>
,<path
  style={{
    fill: "#7f7b7c",
    stroke: "#7f7b7c",
  }}
  d="m591 396 6-3-4-3z"
/>
,<path
  style={{
    fill: "#5d554d",
    stroke: "#5d554d",
  }}
  d="M568 407v-7l-4 1z"
/>
,<path
  style={{
    fill: "#5e625c",
    stroke: "#5e625c",
  }}
  d="m568 407-4-6v7z"
/>
,<path
  style={{
    fill: "#140e10",
    stroke: "#140e10",
  }}
  d="m541 224 2 14 2-4z"
/>
,<path
  style={{
    fill: "#15151a",
    stroke: "#15151a",
  }}
  d="m574 228-5-1-3 7z"
/>
,<path
  style={{
    fill: "#292932",
    stroke: "#292932",
  }}
  d="M541 221v3l11-5z"
/>
,<path
  style={{
    fill: "#0c0c10",
    stroke: "#0c0c10",
  }}
  d="m552 228-11-4 4 10z"
/>
,<path
  style={{
    fill: "#16161c",
    stroke: "#16161c",
  }}
  d="m574 228-8 6 12-3z"
/>
,<path
  style={{
    fill: "#242630",
    stroke: "#242630",
  }}
  d="m579 224-5 4 4 3z"
/>
,<path
  style={{
    fill: "#393939",
    stroke: "#393939",
  }}
  d="m500 394 3 3 2-7z"
/>
,<path
  style={{
    fill: "#6d7471",
    stroke: "#6d7471",
  }}
  d="m524 406 7 1-4-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m461 323-4 11 8-10z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m442 315 15 19 4-11z"
/>
,<path
  style={{
    fill: "#232118",
    stroke: "#232118",
  }}
  d="m527 403 4 4 1-4z"
/>
,<path
  style={{
    fill: "#010204",
    stroke: "#010204",
  }}
  d="m539 406 4 3v-5z"
/>
,<path
  style={{
    fill: "#444549",
    stroke: "#444549",
  }}
  d="M524 406v-6l-4 1z"
/>
,<path
  style={{
    fill: "#3e3932",
    stroke: "#3e3932",
  }}
  d="m573 404 6-1-4-3z"
/>
,<path
  style={{
    fill: "#101828",
    stroke: "#101828",
  }}
  d="m602 396-3-7-2 4z"
/>
,<path
  style={{
    fill: "#555b64",
    stroke: "#555b64",
  }}
  d="m604 390-2-4-3 3z"
/>
,<path
  style={{
    fill: "#22222a",
    stroke: "#22222a",
  }}
  d="m541 224 11 4v-9z"
/>
,<path
  style={{
    fill: "#6e6454",
    stroke: "#6e6454",
  }}
  d="m502 232 8 8 4-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m495 245-12-4 11 8z"
/>
,<path
  style={{
    fill: "#756a58",
    stroke: "#756a58",
  }}
  d="m502 232 12 2-9-6z"
/>
,<path
  style={{
    fill: "#010102",
    stroke: "#010102",
  }}
  d="m518 407 2-6-8-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m547 411-4-2-5 2z"
/>
,<path
  style={{
    fill: "#241a17",
    stroke: "#241a17",
  }}
  d="m538 411 5-2-4-3z"
/>
,<path
  style={{
    fill: "#272c2a",
    stroke: "#272c2a",
  }}
  d="m548 407 5 2-1-4z"
/>
,<path
  style={{
    fill: "#5d5556",
    stroke: "#5d5556",
  }}
  d="m602 396 2-6-5-1z"
/>
,<path
  style={{
    fill: "#1a130f",
    stroke: "#1a130f",
  }}
  d="m595 397 2-4-6 3z"
/>
,<path
  style={{
    fill: "#424440",
    stroke: "#424440",
  }}
  d="m547 411 6-2-5-2z"
/>
,<path
  style={{
    fill: "#48433e",
    stroke: "#48433e",
  }}
  d="m573 404 5 3 1-4z"
/>
,<path
  style={{
    fill: "#727886",
    stroke: "#727886",
  }}
  d="M564 408v-7l-3 3z"
/>
,<path
  style={{
    fill: "#171a1d",
    stroke: "#171a1d",
  }}
  d="m601 244-3-6-2 6z"
/>
,<path
  style={{
    fill: "#2a2c36",
    stroke: "#2a2c36",
  }}
  d="M585 233v-5l-7 3z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m604 226-6 12 3 6z"
/>
,<path
  style={{
    fill: "#404f59",
    stroke: "#404f59",
  }}
  d="m491 385-3 3 8 2z"
/>
,<path
  style={{
    fill: "#181510",
    stroke: "#181510",
  }}
  d="m496 390-1 6 5-2z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m500 394-5 2 8 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m483 387 8-2-2-13z"
/>
,<path
  style={{
    fill: "#778188",
    stroke: "#778188",
  }}
  d="m561 411 3-3-3-4z"
/>
,<path
  style={{
    fill: "#807460",
    stroke: "#807460",
  }}
  d="m505 228 9 6-5-10z"
/>
,<path
  style={{
    fill: "#141216",
    stroke: "#141216",
  }}
  d="m532 223-4 2 15 13z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m601 404-6-7-7 17z"
/>
,<path
  style={{
    fill: "#5e594c",
    stroke: "#5e594c",
  }}
  d="m564 408 3 3 1-4z"
/>
,<path
  style={{
    fill: "#20262a",
    stroke: "#20262a",
  }}
  d="m553 409 4 1-5-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m545 422 12-12-4-1zM608 386l4-1-12-13z"
/>
,<path
  style={{
    fill: "#020102",
    stroke: "#020102",
  }}
  d="m611 390 1-5-4 1z"
/>
,<path
  style={{
    fill: "#4c4a46",
    stroke: "#4c4a46",
  }}
  d="m611 390-3-4-4 4z"
/>
,<path
  style={{
    fill: "#7a705f",
    stroke: "#7a705f",
  }}
  d="m514 234 4-3-9-7z"
/>
,<path
  style={{
    fill: "#141318",
    stroke: "#141318",
  }}
  d="m541 224-9-1 11 15z"
/>
,<path
  style={{
    fill: "#2f313a",
    stroke: "#2f313a",
  }}
  d="m541 221-9 2 9 1z"
/>
,<path
  style={{
    fill: "#545356",
    stroke: "#545356",
  }}
  d="m543 409 4 2 1-4z"
/>
,<path
  style={{
    fill: "#474344",
    stroke: "#474344",
  }}
  d="m538 411 1-5-6 5z"
/>
,<path
  style={{
    fill: "#5b5d58",
    stroke: "#5b5d58",
  }}
  d="m533 411 6-5-8 1z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m514 409 4-2-6-10z"
/>
,<path
  style={{
    fill: "#5c5a5d",
    stroke: "#5c5a5d",
  }}
  d="m524 406 4 4 3-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m514 409-7-13-4 1z"
/>
,<path
  style={{
    fill: "#202029",
    stroke: "#202029",
  }}
  d="M552 219v9h9z"
/>
,<path
  style={{
    fill: "#23232c",
    stroke: "#23232c",
  }}
  d="m566 222-5 6 8-1z"
/>
,<path
  style={{
    fill: "#59666c",
    stroke: "#59666c",
  }}
  d="m489 392 6 4 1-6z"
/>
,<path
  style={{
    fill: "#2b2d35",
    stroke: "#2b2d35",
  }}
  d="m598 238-2-4-7 4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m604 226-8 8 2 4z"
/>
,<path
  style={{
    fill: "#4f4e4f",
    stroke: "#4f4e4f",
  }}
  d="m557 410 4 1v-7z"
/>
,<path
  style={{
    fill: "#6d6a6c",
    stroke: "#6d6a6c",
  }}
  d="m573 411 5-4-5-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m579 403 9 11-1-17zM555 432l6-21-4-1z"
/>
,<path
  style={{
    fill: "#3d4d51",
    stroke: "#3d4d51",
  }}
  d="m488 388 1 4 7-2z"
/>
,<path
  style={{
    fill: "#302825",
    stroke: "#302825",
  }}
  d="m484 394 5-2-1-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m479 386 4 1 6-15z"
/>
,<path
  style={{
    fill: "#6c6e71",
    stroke: "#6c6e71",
  }}
  d="M573 411v-7l-5 3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m498 238-15 3 12 4z"
/>
,<path
  style={{
    fill: "#827764",
    stroke: "#827764",
  }}
  d="m518 231-4-12-5 5z"
/>
,<path
  style={{
    fill: "#434443",
    stroke: "#434443",
  }}
  d="m522 411 6-1-4-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m629 259-7-3-7 23z"
/>
,<path
  style={{
    fill: "#434445",
    stroke: "#434445",
  }}
  d="m528 410 5 1-2-4z"
/>
,<path
  style={{
    fill: "#2e303c",
    stroke: "#2e303c",
  }}
  d="m590 227-5 1v5z"
/>
,<path
  style={{
    fill: "#2b2b34",
    stroke: "#2b2b34",
  }}
  d="M574 222h-8l3 5z"
/>
,<path
  style={{
    fill: "#25272e",
    stroke: "#25272e",
  }}
  d="m574 222-5 5 5 1z"
/>
,<path
  style={{
    fill: "#010102",
    stroke: "#010102",
  }}
  d="m595 397 7-1-5-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m606 397-4-1-1 8z"
/>
,<path
  style={{
    fill: "#070302",
    stroke: "#070302",
  }}
  d="M561 411h6l-3-3z"
/>
,<path
  style={{
    fill: "#3a3f3a",
    stroke: "#3a3f3a",
  }}
  d="m609 394 2-4h-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M612 385h5l-17-13z"
/>
,<path
  style={{
    fill: "#23242c",
    stroke: "#23242c",
  }}
  d="m566 222-14-3 9 9z"
/>
,<path
  style={{
    fill: "#2f303c",
    stroke: "#2f303c",
  }}
  d="m585 228-6-4-1 7z"
/>
,<path
  style={{
    fill: "#22222b",
    stroke: "#22222b",
  }}
  d="m566 222-6-13-8 10z"
/>
,<path
  style={{
    fill: "#2b2c37",
    stroke: "#2b2c37",
  }}
  d="m584 221-5 3 6 4z"
/>
,<path
  style={{
    fill: "#020202",
    stroke: "#020202",
  }}
  d="m615 389 2-4h-5z"
/>
,<path
  style={{
    fill: "#5f6467",
    stroke: "#5f6467",
  }}
  d="m484 394 6 2-1-4z"
/>
,<path
  style={{
    fill: "#525557",
    stroke: "#525557",
  }}
  d="m489 392 1 4h5z"
/>
,<path
  style={{
    fill: "#010102",
    stroke: "#010102",
  }}
  d="M471 386h8l-16-8z"
/>
,<path
  style={{
    fill: "#2d2f3a",
    stroke: "#2d2f3a",
  }}
  d="m579 224-2-1-3 5z"
/>
,<path
  style={{
    fill: "#2e2f3a",
    stroke: "#2e2f3a",
  }}
  d="m577 223-3-1v6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m488 230-5 11 15-3z"
/>
,<path
  style={{
    fill: "#797063",
    stroke: "#797063",
  }}
  d="m518 231 5-3-9-9z"
/>
,<path
  style={{
    fill: "#7f7666",
    stroke: "#7f7666",
  }}
  d="m523 228-3-13-6 4z"
/>
,<path
  style={{
    fill: "#272930",
    stroke: "#272930",
  }}
  d="m596 234-2-4-5 8z"
/>
,<path
  style={{
    fill: "#262933",
    stroke: "#262933",
  }}
  d="m579 224 1-7-3 6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m604 226-10 4 2 4zM530 431h8l-5-20z"
/>
,<path
  style={{
    fill: "#545659",
    stroke: "#545659",
  }}
  d="m518 407 4 4 2-5z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m514 409 8 2-4-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m601 404 1-8-7 1z"
/>
,<path
  style={{
    fill: "#020206",
    stroke: "#020206",
  }}
  d="M567 411h6l-5-4z"
/>
,<path
  style={{
    fill: "#644e58",
    stroke: "#644e58",
  }}
  d="m484 394 4-6-5-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m498 407 16 2-11-12z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m498 407 5-10-8-1z"
/>
,<path
  style={{
    fill: "#2e3037",
    stroke: "#2e3037",
  }}
  d="m541 221-3-3-6 5z"
/>
,<path
  style={{
    fill: "#2b2e36",
    stroke: "#2b2e36",
  }}
  d="m541 214-3 4 3 3z"
/>
,<path
  style={{
    fill: "#272830",
    stroke: "#272830",
  }}
  d="m594 230-4-3-5 6z"
/>
,<path
  style={{
    fill: "#24252e",
    stroke: "#24252e",
  }}
  d="m577 223-1-7-2 6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m488 230 10 8 4-6zM446 289l5-1-17-12z"
/>
,<path
  style={{
    fill: "#44474b",
    stroke: "#44474b",
  }}
  d="m611 390 4-1-3-4z"
/>
,<path
  style={{
    fill: "#4c5053",
    stroke: "#4c5053",
  }}
  d="m606 397 3-3-5-4z"
/>
,<path
  style={{
    fill: "#474546",
    stroke: "#474546",
  }}
  d="m606 397-2-7-2 6z"
/>
,<path
  style={{
    fill: "#353d45",
    stroke: "#353d45",
  }}
  d="m613 395 2-6-4 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m632 262-3-3-14 20zM622 256l-4-11-15 8zM632 262l-17 17 15 3z"
/>
,<path
  style={{
    fill: "#747374",
    stroke: "#747374",
  }}
  d="m618 393 2-5-5 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M595 397h-8l1 17z"
/>
,<path
  style={{
    fill: "#635e5b",
    stroke: "#635e5b",
  }}
  d="m532 216-4 9 4-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m505 228-17 2 14 2zM635 240l-17 5 4 11zM597 216l-9 7 2 4zM494 408l4-1-3-11z"
/>
,<path
  style={{
    fill: "#60646a",
    stroke: "#60646a",
  }}
  d="m480 392 4 2-1-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m629 259 6-19-13 16zM648 275l-16-13-2 20zM465 287l-19 25 15 11zM470 271l-19 17 14-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m451 288 19-17-20-7z"
/>
,<path
  style={{
    fill: "#878583",
    stroke: "#878583",
  }}
  d="m538 218-6-2v7z"
/>
,<path
  style={{
    fill: "#c2c0bc",
    stroke: "#c2c0bc",
  }}
  d="m535 209-3 7 6 2z"
/>
,<path
  style={{
    fill: "#292b33",
    stroke: "#292b33",
  }}
  d="M541 214v7l4-9z"
/>
,<path
  style={{
    fill: "#444241",
    stroke: "#444241",
  }}
  d="m479 386 1 6 3-5z"
/>
,<path
  style={{
    fill: "#535555",
    stroke: "#535555",
  }}
  d="m475 389 5 3-1-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m451 288-5 24 19-25z"
/>
,<path
  style={{
    fill: "#020304",
    stroke: "#020304",
  }}
  d="m471 386 4 3 4-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m597 216-7 11 4 3z"
/>
,<path
  style={{
    fill: "#1b1d22",
    stroke: "#1b1d22",
  }}
  d="m590 227-2-4-3 5z"
/>
,<path
  style={{
    fill: "#292933",
    stroke: "#292933",
  }}
  d="m545 212-4 9 11-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m650 338-2-5-21 10zM633 313l22-19-25-12z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m650 338-23 5-1 10zM625 386l1-33-9 32z"
/>
,<path
  style={{
    fill: "#41413f",
    stroke: "#41413f",
  }}
  d="m615 389 5-1-3-3z"
/>
,<path
  style={{
    fill: "#010203",
    stroke: "#010203",
  }}
  d="m613 395-2-5-2 4z"
/>
,<path
  style={{
    fill: "#1a1b21",
    stroke: "#1a1b21",
  }}
  d="m588 223-4-2 1 7z"
/>
,<path
  style={{
    fill: "#030102",
    stroke: "#030102",
  }}
  d="m606 397 7-2-4-1z"
/>
,<path
  style={{
    fill: "#010102",
    stroke: "#010102",
  }}
  d="m619 397-6-2-7 2z"
/>
,<path
  style={{
    fill: "#262630",
    stroke: "#262630",
  }}
  d="m569 216-3 6h8z"
/>
,<path
  style={{
    fill: "#252630",
    stroke: "#252630",
  }}
  d="M576 216h-7l5 6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m497 357-29-23-13 29zM583 413l-4-10-1 4zM481 217l7 13 17-2z"
/>
,<path
  style={{
    fill: "#82786c",
    stroke: "#82786c",
  }}
  d="m520 215 3 13 5-3z"
/>
,<path
  style={{
    fill: "#867d6e",
    stroke: "#867d6e",
  }}
  d="m520 215 8 10-4-12z"
/>
,<path
  style={{
    fill: "#070503",
    stroke: "#070503",
  }}
  d="m573 411 10 2-5-6z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m574 416 9-3-10-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m574 416-1-5h-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m574 416-7-5 1 21zM567 411h-6v21zM553 409l-6 2-2 11z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M547 411h-9l7 11z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m545 422-7-11h-5z"
/>
,<path
  style={{
    fill: "#696566",
    stroke: "#696566",
  }}
  d="m478 396 6-2-4-2z"
/>
,<path
  style={{
    fill: "#141416",
    stroke: "#141416",
  }}
  d="M478 396h12l-6-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m494 408 1-12h-5zM545 422l-12-11 5 20zM455 363l13-29h-11z"
/>
,<path
  style={{
    fill: "#2c3139",
    stroke: "#2c3139",
  }}
  d="m474 395 4 1 2-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m434 346 21 17 2-29z"
/>
,<path
  style={{
    fill: "#05060a",
    stroke: "#05060a",
  }}
  d="m620 388 5-2-8-1z"
/>
,<path
  style={{
    fill: "#72706e",
    stroke: "#72706e",
  }}
  d="m613 395 5-2-3-4z"
/>
,<path
  style={{
    fill: "#171313",
    stroke: "#171313",
  }}
  d="m619 397-1-4-5 2z"
/>
,<path
  style={{
    fill: "#2a2a33",
    stroke: "#2a2a33",
  }}
  d="m550 207-5 5 7 7z"
/>
,<path
  style={{
    fill: "#1b1d23",
    stroke: "#1b1d23",
  }}
  d="m580 217-4-1 1 7zM580 217l-1 7 5-3z"
/>
,<path
  style={{
    fill: "#5c5b57",
    stroke: "#5c5b57",
  }}
  d="m626 392-1-6-5 2z"
/>
,<path
  style={{
    fill: "#25252e",
    stroke: "#25252e",
  }}
  d="m564 210 2 12 3-6z"
/>
,<path
  style={{
    fill: "#6c675c",
    stroke: "#6c675c",
  }}
  d="m530 210-6 3 8 3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m576 209 4 8-3-9zM595 207l-15 10 4 4zM455 363l8 15 26-6zM476 225l12 5-7-13zM458 261l12 10 8-14zM650 364v-26l-24 15zM656 323l-1-22-22 12z"
/>
,<path
  style={{
    fill: "#9d9382",
    stroke: "#9d9382",
  }}
  d="m524 213 4 12 4-9z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m481 217 24 11 4-4zM451 288l-5 1v23zM458 261l20-4-15-13z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m463 244 15 13 5-16zM446 312l-4 3 19 8zM433 313l9 2-9-9zM546 431l-1-9-3 10zM509 419l13-8-8-2z"
/>
,<path
  style={{
    fill: "#100b05",
    stroke: "#100b05",
  }}
  d="m471 392 4-3-4-3z"
/>
,<path
  style={{
    fill: "#3a4043",
    stroke: "#3a4043",
  }}
  d="m474 395 6-3-5-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m583 413 5 1-9-11zM601 404l18-7h-13z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m580 431 8-17-5-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m580 431 3-18-9 3zM481 217l28 7-6-24z"
/>
,<path
  style={{
    fill: "#69645b",
    stroke: "#69645b",
  }}
  d="m530 210 2 6 3-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m498 407 11 12 5-10zM478 396l16 12-4-12zM576 209l-3 4 3 3z"
/>
,<path
  style={{
    fill: "#15161b",
    stroke: "#15161b",
  }}
  d="m576 216-3-3-4 3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m618 245-14-19-3 18z"
/>
,<path
  style={{
    fill: "#010100",
    stroke: "#010100",
  }}
  d="m580 217-4-8v7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m608 216-4 10 20 1z"
/>
,<path
  style={{
    fill: "#101016",
    stroke: "#101016",
  }}
  d="m573 213-5-2 1 5z"
/>
,<path
  style={{
    fill: "#111016",
    stroke: "#111016",
  }}
  d="m568 211-4-1 5 6z"
/>
,<path
  style={{
    fill: "#a8aaac",
    stroke: "#a8aaac",
  }}
  d="m535 209 3 9 3-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m484 432 4-1h-8z"
/>
,<path
  style={{
    fill: "#70776f",
    stroke: "#70776f",
  }}
  d="m467 391 4 1v-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m509 224 5-5-11-19z"
/>
,<path
  style={{
    fill: "#858587",
    stroke: "#858587",
  }}
  d="m535 209 6 5-2-6z"
/>
,<path
  style={{
    fill: "#020201",
    stroke: "#020201",
  }}
  d="m471 392 3 3 1-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m628 397-1 18 10-9z"
/>
,<path
  style={{
    fill: "#5e6467",
    stroke: "#5e6467",
  }}
  d="m623 395 3-3-6-4z"
/>
,<path
  style={{
    fill: "#0d0e0d",
    stroke: "#0d0e0d",
  }}
  d="m463 378 3 9 5-1z"
/>
,<path
  style={{
    fill: "#848684",
    stroke: "#848684",
  }}
  d="m463 390 3-3h-6z"
/>
,<path
  style={{
    fill: "#848489",
    stroke: "#848489",
  }}
  d="m539 208 2 6 4-2z"
/>
,<path
  style={{
    fill: "#1e1e26",
    stroke: "#1e1e26",
  }}
  d="m564 210-4-1 6 13z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m656 323-23-10 15 20zM535 209l6-10-11 11z"
/>
,<path
  style={{
    fill: "#4e4e4f",
    stroke: "#4e4e4f",
  }}
  d="m543 207-4 1 6 4z"
/>
,<path
  style={{
    fill: "#202028",
    stroke: "#202028",
  }}
  d="m560 209-4-1-4 11z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m655 294-7-19-18 7zM632 262l15-1-18-2zM663 327l-7-4 7 7z"
/>
,<path
  style={{
    fill: "#696360",
    stroke: "#696360",
  }}
  d="m623 395-3-7-2 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m625 386 10-1-9-32z"
/>
,<path
  style={{
    fill: "#2e3739",
    stroke: "#2e3739",
  }}
  d="m619 397 4-2-5-2z"
/>
,<path
  style={{
    fill: "#020101",
    stroke: "#020101",
  }}
  d="m628 397-5-2-4 2z"
/>
,<path
  style={{
    fill: "#21212a",
    stroke: "#21212a",
  }}
  d="m556 208-6-1 2 12z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m539 208 2-9-6 10z"
/>
,<path
  style={{
    fill: "#2b2b2e",
    stroke: "#2b2b2e",
  }}
  d="M550 207h-7l2 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m494 408 15 11-11-12zM507 426l2-7-13 12zM655 301v-7l-22 19zM663 300l-8-6v7z"
/>
,<path
  style={{
    fill: "#656e72",
    stroke: "#656e72",
  }}
  d="m466 387 1 4 4-5z"
/>
,<path
  style={{
    fill: "#423624",
    stroke: "#423624",
  }}
  d="m471 392-1 4 4-1z"
/>
,<path
  style={{
    fill: "#010103",
    stroke: "#010103",
  }}
  d="m474 395-4 1h8z"
/>
,<path
  style={{
    fill: "#62676a",
    stroke: "#62676a",
  }}
  d="m463 390 4 1-1-4z"
/>
,<path
  style={{
    fill: "#535d66",
    stroke: "#535d66",
  }}
  d="M631 394v-6l-5 4z"
/>
,<path
  style={{
    fill: "#484748",
    stroke: "#484748",
  }}
  d="m626 392 5-4-6-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M663 318v-3l-7 8zM458 261l-8 3 20 7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m447 241 3 23 8-3z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m573 213 3-4-8 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m565 189-5 20 4 1zM554 189l2 19 3-19zM550 189v18l4-18zM545 189l-4 10 9-10zM597 216l-13 5 4 2zM476 225l-13 19 20-3z"
/>
,<path
  style={{
    fill: "#787d79",
    stroke: "#787d79",
  }}
  d="m467 391 3 5 1-4z"
/>
,<path
  style={{
    fill: "#5b5a62",
    stroke: "#5b5a62",
  }}
  d="M635 390v-5l-4 3z"
/>
,<path
  style={{
    fill: "#060506",
    stroke: "#060506",
  }}
  d="m631 388 4-3-10 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m604 226-7-10-3 14z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M608 216h-11l7 10z"
/>
,<path
  style={{
    fill: "#2d2b2a",
    stroke: "#2d2b2a",
  }}
  d="m467 391-2 5h5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M460 387h6l-3-9zM576 209l1-1-9 3zM595 207l-18 1 3 9z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m456 384 7-6-11 5z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m456 384 4 3 3-9z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m635 385 15-21-24-11zM442 315l-8 11 23 8zM433 313l1 4 8-2zM442 315l4-3-13-6zM648 275l-1-14-15 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 268-16-7 1 14z"
/>
,<path
  style={{
    fill: "#6d6c6a",
    stroke: "#6d6c6a",
  }}
  d="m459 394 6 2-2-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m452 383 11-5-8-15zM433 321l1 5 8-11z"
/>
,<path
  style={{
    fill: "#030303",
    stroke: "#030303",
  }}
  d="m635 385 9 1 6-22z"
/>
,<path
  style={{
    fill: "#464849",
    stroke: "#464849",
  }}
  d="m623 395 5 2-2-5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m627 415-8-18-18 7z"
/>
,<path
  style={{
    fill: "#5c544b",
    stroke: "#5c544b",
  }}
  d="m628 397 3-3-5-2z"
/>
,<path
  style={{
    fill: "#686682",
    stroke: "#686682",
  }}
  d="m631 394 4-4-4-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m433 306 13 6-13-12zM434 317l-1 4 9-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M433 313v8l1-4zM496 431l13-12-15-11z"
/>
,<path
  style={{
    fill: "#76797b",
    stroke: "#76797b",
  }}
  d="m463 390 2 6 2-5z"
/>
,<path
  style={{
    fill: "#748085",
    stroke: "#748085",
  }}
  d="m459 394 4-4-3-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m545 422 10 10 2-22zM533 411l-5-1 2 21zM434 296l12 16v-23z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m530 431-2-21-6 1zM433 290l1 6 12-7zM433 321v9l1-4zM434 326l-1 4 24 4zM656 323l7-11-8-11zM655 294l8-11-15-8zM663 318l-7 5 7-2zM663 321l-7 2 7 1zM663 315v-3l-7 11z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 324-7-1 7 4zM434 296l-1 4 13 12z"
/>
,<path
  style={{
    fill: "#6b6c66",
    stroke: "#6b6c66",
  }}
  d="m642 392-3-5-4 3z"
/>
,<path
  style={{
    fill: "#585c51",
    stroke: "#585c51",
  }}
  d="m635 390 4-3-4-2z"
/>
,<path
  style={{
    fill: "#5d4a49",
    stroke: "#5d4a49",
  }}
  d="M635 395v-5l-4 4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M663 312v-3l-8-8zM656 323l-8 10 15-3zM546 431l4 1-5-10zM588 414l12 18 1-28z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M542 432h8l-4-1zM538 431l4 1 3-10zM488 230l-12-5 7 16zM514 219l6-4-17-15zM550 432h5l-10-10zM663 330l-15 3h15zM433 330v5l24-1zM647 261l-12-21-6 19zM522 431h8l-8-20z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m538 431-4 1h8zM522 431v-20l-13 8zM663 309v-5l-8-3zM663 333h-15l2 5z"
/>
,<path
  style={{
    fill: "#5b514b",
    stroke: "#5b514b",
  }}
  d="m456 384-1 4 5-1z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="m449 386 3-3-18-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m530 431 4 1 4-1zM555 432h6v-21zM663 304v-4l-8 1zM663 336v-3l-13 5zM433 335v5l24-6zM505 432l2-6-7 6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m530 431-4 1h8z"
/>
,<path
  style={{
    fill: "#444445",
    stroke: "#444445",
  }}
  d="m452 383 3 5 1-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m624 227-20-1 14 19zM597 216l-2-9-11 14zM663 339v-3l-13 2zM433 340l1 6 23-12zM568 432l4-1 2-15zM543 207l-2-8-2 9zM518 191l2 24 4-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m550 207-9-8 2 8z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m541 199 9 8v-18zM663 300v-5l-8-1zM434 296l-1-6v10zM433 285v5l13-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m433 285 13 4-13-9zM518 432l4-1-13-12zM626 228l-2-1-6 18zM561 432h7l-1-21z"
/>
,<path
  style={{
    fill: "#131013",
    stroke: "#131013",
  }}
  d="m628 397 7-2-4-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m640 396-5-1 2 11zM663 342v-3l-13-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 342-13-4 13 7zM522 431l4 1 4-1z"
/>
,<path
  style={{
    fill: "#5a5651",
    stroke: "#5a5651",
  }}
  d="m455 388 4 6 1-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M505 432h6l-4-6zM663 295v-3l-8 2zM635 240l-9-12-8 17zM622 199l-17 4 3 13zM650 338v26l13-14z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 345-13-7 13 12zM663 292v-3l-8 5zM433 280l13 9-12-13zM451 288l-1-24-16 12z"
/>
,<path
  style={{
    fill: "#1b1109",
    stroke: "#1b1109",
  }}
  d="m644 386-9-1 4 2z"
/>
,<path
  style={{
    fill: "#4b4b4b",
    stroke: "#4b4b4b",
  }}
  d="m642 392 2-6-5 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m605 203-8 13h11z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m605 203-10 4 2 9zM550 207l6 1-2-19zM572 431l4 1-2-16z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M568 432h8l-4-1zM576 432l4-1-6-15zM434 346l-1 4 22 13z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M433 340v10l1-4zM663 289v-3l-8 8zM647 261l11-8-23-13zM522 431l-4 1h8zM507 426l11 6-9-13zM503 200l17 15-2-24zM434 276l16-12-17 7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m450 264-16 3-1 4zM663 286v-3l-8 11zM663 354v-4l-13 14z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m450 264-17-1 1 4z"
/>
,<path
  style={{
    fill: "#545354",
    stroke: "#545354",
  }}
  d="m455 388-2 4 6 2z"
/>
,<path
  style={{
    fill: "#363a42",
    stroke: "#363a42",
  }}
  d="m452 383-3 3 6 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m437 368 15 15 3-20zM663 283v-3l-15-5z"
/>
,<path
  style={{
    fill: "#26262c",
    stroke: "#26262c",
  }}
  d="m449 386 4 6 2-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m507 426-11 5 4 1z"
/>
,<path
  style={{
    fill: "#5e6462",
    stroke: "#5e6462",
  }}
  d="m635 395 7-3-7-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M663 359v-5l-13 10z"
/>
,<path
  style={{
    fill: "#45403b",
    stroke: "#45403b",
  }}
  d="m640 396 2-4-7 3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M433 350v6l22 7zM507 426l4 6h7z"
/>
,<path
  style={{
    fill: "#020303",
    stroke: "#020303",
  }}
  d="m456 402 9-6-6-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M580 431h8v-17zM576 432h8l-4-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m649 385 1-21-6 22z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m584 432 4-1h-8zM663 280v-3l-15-2zM655 220l-24-6-5 14zM433 356l4 12 18-5z"
/>
,<path
  style={{
    fill: "#4b4032",
    stroke: "#4b4032",
  }}
  d="m648 389 1-4-5 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m637 406-2-11-7 2z"
/>
,<path
  style={{
    fill: "#585b5c",
    stroke: "#585b5c",
  }}
  d="m648 389-4-3-2 6z"
/>
,<path
  style={{
    fill: "#4e4846",
    stroke: "#4e4846",
  }}
  d="m453 392 2 5 4-3z"
/>
,<path
  style={{
    fill: "#383838",
    stroke: "#383838",
  }}
  d="m451 396 4 1-2-5z"
/>
,<path
  style={{
    fill: "#4c5958",
    stroke: "#4c5958",
  }}
  d="M448 392h5l-4-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M663 277v-3l-15 1zM434 276l-1-5v9zM458 261l5-17-16-3zM663 362v-3l-13 5zM494 408l-6 23h8zM433 356v7l4 5z"
/>
,<path
  style={{
    fill: "#000101",
    stroke: "#000101",
  }}
  d="m433 390 15 2 1-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m447 241 16 3 13-19zM588 431h8l-8-17zM584 432h8l-4-1zM663 274v-3l-15 4zM663 365v-3l-13 2z"
/>
,<path
  style={{
    fill: "#463e34",
    stroke: "#463e34",
  }}
  d="m649 394-1-5-6 3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 365-13-1 13 4zM433 363l1 4 3 1zM518 191l6 22 6-3zM592 432l4-1h-8zM434 376l18 7-15-15z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m456 402 3-8-4 3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m456 402 14-6h-5zM663 271v-3l-15 7z"
/>
,<path
  style={{
    fill: "#40494d",
    stroke: "#40494d",
  }}
  d="m448 392 3 4 2-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 368-13-4 13 7zM451 396l5 6-1-5zM433 238l14 3-14-8z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m433 243 14-2-14-3zM492 432l4-1h-8z"
/>
,<path
  style={{
    fill: "#666364",
    stroke: "#666364",
  }}
  d="M640 396h5l-3-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 371-13-7 13 10zM646 400l-1-4h-5zM434 267l-1-4v8zM433 256v7l17 1zM663 268v-3l-16-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m650 364-1 21 14-11zM627 415l1-18h-9zM611 432l16-17-26-11zM434 367l-1 4 4-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M433 363v8l1-4zM560 209l2-20h-3zM631 214l-23 2 16 11zM631 214l-7 13 2 1zM596 431l4 1-12-18z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M592 432h8l-4-1zM560 209l-1-20-3 19zM541 199l-11-10v21zM565 189h-3l-2 20zM663 262l-5-9-11 8zM545 189h-3l-1 10zM568 189h-3l-1 21z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M542 189h-3l2 10zM663 265v-3l-16-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M539 189h-3l5 10zM568 211v-22l-4 21zM663 383l-14 2 14 1z"
/>
,<path
  style={{
    fill: "#565655",
    stroke: "#565655",
  }}
  d="m645 396 4-2-7-2z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m646 400 3-6-4 2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M536 189h-3l8 10zM568 211l9-3-9-19zM433 371l1 5 3-8zM439 399l15 7-3-10z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m451 396 3 10 2-4zM494 408l-14 23h8zM496 431l-4 1h8zM533 189h-3l11 10zM568 189l9 19-6-19zM524 189l-6 2 12 19zM530 189h-3l3 21z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m571 189 6 19-3-19z"
/>
,<path
  style={{
    fill: "#010100",
    stroke: "#010100",
  }}
  d="M663 262v-3l-5-6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M663 377v-3l-14 11zM600 432h5l-4-28zM494 408l-16-12 2 35zM637 406l9-6-6-4zM663 380v-3l-14 8zM640 422l6-22-9 6zM433 250v6l17 8zM527 189h-3l6 21zM574 189l3 19v-19zM456 402l-2 4 16-10z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m439 399 12-3-3-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M524 189h-3l-3 2zM518 191l-6-2-9 11zM577 189v19l3-19zM663 380l-14 5 14-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m580 189-3 19 6-19zM434 376l-1 4 16 6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M433 371v9l1-4zM655 220l-29 8 9 12zM663 259v-5l-5-1zM521 189h-6l3 2zM503 200l-24-5 2 22zM583 189l-6 19 9-19zM649 385l14 4v-3zM663 242l-28-2 23 13zM586 189l-9 19 18-1zM488 431l-4 1h8zM480 431l-2-35-6 35zM605 432h6l-10-28zM627 415l13 7-3-16z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M515 189h-3l6 2zM586 189l9 18-6-18zM433 243v7l14-9zM447 241l-14 9 17 14zM512 189h-3l-6 11z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m589 189 6 18-3-18zM476 432l4-1h-8zM663 254v-4l-5 3z"
/>
,<path
  style={{
    fill: "#010001",
    stroke: "#010001",
  }}
  d="m649 385-1 4h15z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M433 380v5l16 1zM592 189l3 18v-18zM509 189h-5l-1 11zM595 189v18l10-4zM663 389l-14 5 14-2z"
/>
,<path
  style={{
    fill: "#000001",
    stroke: "#000001",
  }}
  d="M663 389h-15l1 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M611 432h7l9-17zM663 250v-5l-5 8zM504 189h-4l3 11zM600 189h-5l10 14zM447 241l-13-13-1 5zM480 431l-4 1h8zM472 431l6-35h-8z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m472 431-2-35-16 10zM433 385v5l16-4zM433 390l6 9 9-7zM663 392l-14 2 14 1zM618 432l4-1 5-16zM500 189h-4l7 11zM663 245v-3l-5 11zM468 432l4-1-18-25zM604 189h-4l5 14zM600 189l-2-1-3 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m595 189 3-1-6 1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m592 189 6-1-9 1z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m589 189 41-61-44 61z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m586 189 44-61-47 61z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m583 189 47-61-50 61z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98 23 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98 20 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98 17 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98 14 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98 11 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98 8 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98 3 91h5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m551 98-1 91h4z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-6 91h5z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-9 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-12 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-15 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-18 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-21 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-24 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-27 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-30 91h3z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-36 91h6z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98-39 91h3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m551 98-92 43 53 48z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m512 189-53-48 50 48z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m509 189-50-48 45 48z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m504 189-45-48 41 48z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m500 189-41-48 37 48z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 395-14-1 14 4z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 34 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M496 189h-3l10 11zM453 209l23 16 5-8zM461 432h7l-14-26zM433 390l1 6 5 3zM631 214l-9-15-14 17zM600 189h4l-6-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m630 200-8-1 9 15zM663 242v-3l-28 1zM609 189h-5l1 14zM490 189l-11 6 24 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M493 189h-3l13 11z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 31 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 398-14-4 14 7zM622 431h8l-3-16zM618 432h8l-4-1zM472 431l-4 1h8zM433 406h21l-15-7z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m630 431 10-9-13-7zM663 239v-3l-28 4z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 28 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M490 189h-3l-8 6zM626 432l4-1h-8zM612 189h-3l-4 14zM604 189h5l-11-1zM663 401l-14-7-3 6zM453 209l-6 32 29-16zM434 396l-1 4 6-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M433 390v10l1-4zM464 195l-11 14 28 8zM487 189h-3l-5 6z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 25 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M663 236v-3l-28 7zM622 199l-10-10-7 14zM642 205l-12-5 1 14z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M615 189h-3l10 10z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m609 189 21-61-32 60z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m464 195 17 22-2-22zM663 406v-5l-17-1zM484 189h-3l-2 6z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="m459 141 22 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m453 209-19 19 13 13zM618 189h-3l7 10z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m612 189 18-61-21 61z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 233-8-13-20 20z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 230-8-10 8 13zM455 432h6l-7-26zM626 432h8l-4-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m630 431 4 1 6-10zM663 409v-3l-17-6zM481 189h-3l1 6z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 19 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m621 189 1 10 2-10z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M621 189h-3l4 10z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m615 189 15-61-18 61z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M433 400v6l6-7zM663 230v-3l-8-7zM655 220l-13-15-11 9z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M652 205h-10l13 15zM634 432l4-1 2-9zM663 409l-17-9 17 12zM478 189h-3l4 6z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 16 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m624 189-2 10 6-8z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m618 189 12-61-15 61z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m434 228-1-4v9z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m434 220-1 4 1 4zM434 220v8l19-19zM472 189l-8 6h15zM464 195l-10 7-1 7zM663 227v-3l-8-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 224-4-5-4 1zM464 195l-9-6-1 13zM475 189h-3l7 6z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 13 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 412-17-12-6 22zM450 432h5l-1-26zM628 191l-6 8 8 1z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m621 189 9-61-12 61z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m628 191 5-2h-3zM433 216l1 4 19-11z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m627 189 1 2 2-2zM638 431l4 1-2-10z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M634 432h8l-4-1zM472 189h-3l-5 6z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 10 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m659 219-7-14 3 15z"
/>
,<path
  style={{
    fill: "#010100",
    stroke: "#010100",
  }}
  d="M663 224v-3l-4-2z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M433 406v7l21-7zM663 415v-3l-23 10zM628 191l-1-2h-3z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128-41 61 9-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m628 191 2 9 3-11zM469 189h-3l-2 6zM433 209v7l20-7z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 7 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m642 432 4-1-6-9zM434 417l16 15 4-26z"
/>
,<path
  style={{
    fill: "#010100",
    stroke: "#010100",
  }}
  d="M663 221v-3l-4 1z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128-9 61h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m633 189-3 11 6-11zM433 413l1 4 20-11zM663 418v-3l-23 7zM434 220l-1-4v8zM433 209h20l-12-9zM663 212l-11-7 7 14z"
/>
,<path
  style={{
    fill: "#0e0e11",
    stroke: "#0e0e11",
  }}
  d="m663 221 2-2-2-1z"
/>
,<path
  style={{
    fill: "#0e0e11",
    stroke: "#0e0e11",
  }}
  d="m663 224 2-5-2 2z"
/>
,<path
  style={{
    fill: "#0e0e11",
    stroke: "#0e0e11",
  }}
  d="m663 227 2-8-2 5z"
/>
,<path
  style={{
    fill: "#0e0e11",
    stroke: "#0e0e11",
  }}
  d="m663 230 2-11-2 8z"
/>
,<path
  style={{
    fill: "#0e0e11",
    stroke: "#0e0e11",
  }}
  d="m663 233 2-14-2 11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m755 252-90-33-2 14z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92-19v3zM755 252l-92-16v3zM755 252l-92-13v3zM755 252l-92-10v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92-7v5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92-2v4z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 2v5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 7v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 10v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 13v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 16v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 19v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 22v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 25v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 28v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 31v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 34v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 37v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 40v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 43v5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 48v4z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 52v5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 57v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 60v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 63v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92 66v3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m755 252-92 69 104 62z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 321v3l104 59zM663 324v3l104 56zM663 327v3l104 53zM663 330v3l104 50zM663 333v3l104 47zM663 336v3l104 44zM663 339v3l104 41zM663 342v3l104 38z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 345v5l104 33z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 350v4l104 29z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 354v5l104 24z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 359v3l104 21zM663 362v3l104 18zM663 365v3l104 15zM663 368v3l104 12zM663 371v3l104 9zM663 374v3l104 6zM663 377v3l104 3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 380v3h104zM663 383v3l104-3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 386v3l104-6z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 389v3l104-9z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 392v3l104-12z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 395v3l104-15z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 398v3l104-18z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 401v5l104-23z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M663 406v3l104-26z"
/>
,<path
  style={{
    fill: "#010100",
    stroke: "#010100",
  }}
  d="m663 215-4 4 4-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M466 189h-3l1 6z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 4 48h3z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128-6 61h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m636 189-6 11 9-11z"
/>
,<path
  style={{
    fill: "#0e0e11",
    stroke: "#0e0e11",
  }}
  d="m665 219-2-4v3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m767 383-104 26v3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M663 421v-3l-23 4zM463 189h-3l4 6z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141 1 48h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M642 432h8l-4-1z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m646 431 4 1-10-10z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128-3 61h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m639 189-9 11 12 5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m639 189 3 16v-16zM433 413v8l1-4zM434 417l10 15h6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m433 421 11 11-10-15z"
/>
,<path
  style={{
    fill: "#010100",
    stroke: "#010100",
  }}
  d="M663 215v-3l-4 7z"
/>
,<path
  style={{
    fill: "#0e0e11",
    stroke: "#0e0e11",
  }}
  d="m665 219-2-7v3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m650 432 13-11-23 1z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m767 383-104 29v3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m650 432 13-10v-1z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m714 471-51-56v3z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="M630 128v61h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M642 189v16l3-16zM441 200l12 9 1-7zM460 189h-5l9 6z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m459 141-4 48h5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M663 212v-3l-11-4z"
/>
,<path
  style={{
    fill: "#0e0e11",
    stroke: "#0e0e11",
  }}
  d="m665 219-2-10v3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m448 189-7 11 13 2z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128 3 61h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m645 189-3 16h10zM433 421l6 11h5zM650 432h7l6-10zM455 189h-4l3 13z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141-8 48h4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m433 421 1 8 5 3z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m657 432 6-5v-5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m714 471-51-53v3z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128 6 61h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M650 189h-5l7 16zM663 204l-6-5-5 6zM433 198v5l8-3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m441 200-8 3v6zM663 209v-5l-11 1z"
/>
,<path
  style={{
    fill: "#0e0e11",
    stroke: "#0e0e11",
  }}
  d="m665 219-2-15v5z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m657 432 4-1 2-4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M451 189h-3l6 13z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141-11 48h3z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128 9 61h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m657 199-7-10 2 16z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M654 189h-4l7 10zM663 204v-4l-6-1z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92-52v4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M448 189h-4l-3 11z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141-15 48h4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m434 194-1 4 8 2z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128 12 61h3z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M660 189h-6l3 10zM439 189l-5 5 7 6z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M444 189h-5l2 11z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m459 141-20 48h5z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="M663 200v-6l-6 5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m755 252-92-58v6z"
/>
,<path
  style={{
    fill: "#010101",
    stroke: "#010101",
  }}
  d="m439 189-4 1-1 4z"
/>
,<path
  style={{
    fill: "#000",
    stroke: "#000",
  }}
  d="m663 194-3-5-3 10z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128 15 61h5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 290-67 5 67 5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 300-67-5 67 11z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 306-67-11 67 18z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 313-67-18 67 26z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 321-67-26 67 35z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 330-67-35 67 40z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 335-67-40 67 45z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 340-67-45 67 55zM433 350l-99 27 99-21zM433 356l-99 21 99-14zM433 363l-99 14 99-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m433 371-99 6 99 3z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 380-99-3 99 8z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 385-99-8 99 13zM334 377l99 29v-6z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m334 377 99 36v-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m334 377 70 88 29-52z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m433 413-29 52 29-44z"
/>
,<path
  style={{
    fill: "#2b2a30",
    stroke: "#2b2a30",
  }}
  d="m433 421-29 44 30-36z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 285-67 10 67-5zM433 280l-67 15 67-10z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 271-67 24 67-15z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 263-67 32 67-24z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 256-67 39 67-32z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 250-67 45 67-39z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 243-67 52 67-45z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m433 238-67 57 67-52zM433 233l-67 62 67-57z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m321 200 45 95 67-62z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m321 200 112 33v-9z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="m321 200 112 24v-8z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m321 200 112 16v-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m321 200 112 9v-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m321 200 112 3v-5z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m394 140 39 58 1-4z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m468 432 17 68-9-68z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m476 432 9 68-1-68z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m484 432 1 68 7-68z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m492 432-7 68 15-68z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m500 432-15 68 20-68z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m505 432-20 68 26-68z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m511 432-26 68 33-68zM518 432l20 79-12-79z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m526 432 12 79-4-79z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m534 432 4 79 4-79z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m542 432-4 79 12-79z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m550 432-12 79 17-79z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m555 432-17 79 23-79z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m561 432-23 79 30-79z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m568 432-30 79 38-79z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m576 432-38 79 46-79z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m584 432-46 79 54-79zM592 432l56 59-48-59z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m600 432 48 59-43-59z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m605 432 43 59-37-59z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m611 432 37 59-30-59z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m618 432 30 59-22-59z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m626 432 22 59-14-59z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m634 432 14 59-6-59z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m642 432 6 59 2-59z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m650 432-2 59 9-59z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m657 432-9 59 13-60z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m461 432 24 68-17-68z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m455 432 30 68-24-68z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m450 432 35 68-30-68z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m404 465 81 35-35-68z"
/>
,<path
  style={{
    fill: "#2d2d32",
    stroke: "#2d2d32",
  }}
  d="m404 465 46-33h-6z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m404 465 40-33h-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m485 500 53 11-20-79z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m551 98 26 91h3z"
/>
,<path
  style={{
    fill: "#2b2a30",
    stroke: "#2b2a30",
  }}
  d="m439 189 20-48-24 49z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m435 190-41-50 40 54z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m630 128 20 61h4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m538 511 110-20-56-59z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m661 431 53 40-51-44z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m660 189-30-61 24 61z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m724 134-94-6 30 61z"
/>
,<path
  style={{
    fill: "#2c2b31",
    stroke: "#2c2b31",
  }}
  d="m434 429-30 36 35-33z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m334 377 99 23v-10zM714 471l-51-49v5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="m714 471-51-50v1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m665 219 90 33-92-48z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m663 194 61-60-64 55z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m630 128-79-30 29 91zM366 295l-32 82 99-27zM648 491l66-20-53-40zM714 471l53-88-104 32zM459 141l-65-1 41 50z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m366 295-154 24 122 58zM413 73l-19 67 65 1zM538 511l15 45 95-65zM648 491l65 48 1-68z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m485 500 68 56-15-45zM563 618l-10-62v64zM755 252l-31-118-61 60zM630 128l-84-67 5 37zM394 140l-73 60 112-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m551 98-5-37-87 80zM688 81 546 61l84 67zM714 471l60-24-7-64zM767 383l52-44-64-87z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m713 539 61-92-60 24zM882 376l-63-37-52 44zM755 252l47-77-78-41zM724 134l-36-53-58 47zM656 609l57-70-65-48zM546 61 413 73l46 68zM394 140l-66-42-7 102zM334 377l-11 106 81-18zM404 465l-41 70 122-35z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m234 427 89 56 11-106zM323 483l40 52 41-70zM864 188l-62-13-47 77zM737 4l-28 2-21 75zM553 556l62 47 33-112z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m582 620 33-17-62-47zM547 620l6-64-12 64z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m541 620 12-64-17 64zM547 620h6v-64z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m536 620 17-64-23 64z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M553 620h5l5-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m563 618 14 2-24-64zM530 620l23-64-30 64z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m523 620 30-64-37 64z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M558 620h7l-2-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m516 620 37-64-42 64z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M565 620h7l-9-2z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M572 620h5l-14-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m511 620 42-64-47 64zM577 620h5l-29-64z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m506 620 47-64-54 64zM595 620l14-4 6-13zM615 603l41 6-8-118zM582 620h6l27-17z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m499 620 54-64-60 64zM588 620h7l20-17z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m493 620 60-64-68-56z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M595 620h6l8-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M487 620h6l-8-120zM601 620h5l3-4zM609 616l10 4-4-17zM413 73l-85 25 66 42z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m363 535 124 85-2-120z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M606 620h7l-4-4z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M613 620h6l-10-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m636 620 20-11-41-6zM619 620h6l-10-17z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M625 620h5l-15-17z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M630 620h6l-21-17zM636 620h7l13-11zM656 609h19l38-70zM805 601l63-151-94-3zM666 620l9-11h-19z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M643 620h6l7-11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M649 620h6l1-11zM328 98l-48 38 41 64zM321 200l-92 40 137 55z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M655 620h6l-5-11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M661 620h5l-10-11zM280 136l-51 104 92-40zM666 620h8l1-11zM675 609l52-3-14-67z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M674 620h5l-4-11zM212 319l22 108 100-50zM323 483l7 115 33-63z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M679 620h6l-10-11zM229 240l-17 79 154-24z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M685 620h7l-17-11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M692 620h4l-21-11zM868 450l14-74-115 7zM896 294l-32-106-109 64z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m868 450-101-67 7 64zM703 620l24-14-52 3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M696 620h7l-28-11zM896 294l-141-42 64 87zM802 175l25-59-103 18zM864 188l-37-72-25 59zM703 620h7l17-14zM688 81l-3-81-139 61zM546 61 247 0l166 73z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m701 7-16-7 3 81z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m709 6-8 1-13 74zM701 7l-10-7h-6zM805 601l-31-154-61 92zM710 620h6l11-14zM727 606l31 7-45-74z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m701 7-7-7h-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M697 0h-3l7 7zM882 376l14-82-77 45zM716 0l-7 6 12-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M702 0h-5l4 7zM716 620h5l6-14zM709 6l-7-6-1 7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M721 620h7l-1-14zM709 6V0h-7zM716 0h-7v6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M728 620h5l-6-14zM363 535l-33 63 157 22zM223 546l107 52-7-115zM721 0l-12 6 17-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M733 620h6l-12-14zM726 0l-17 6 28-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M739 620h7l-19-14zM737 4l-49 77 66-72z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m746 620 12-7-31-7zM754 9l-66 72 36 53z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M746 620h5l7-7zM737 4l-4-4h-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M751 620h6l1-7zM758 613l47-12-92-62zM737 4l2-4h-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M745 0h-6l-2 4zM827 116 754 9l-30 125zM757 620h6l-5-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m754 9-9-9-8 4zM763 620l8-5-13-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M763 620h5l3-5zM754 9l-3-9h-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M757 0h-6l3 9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M763 0h-6l-3 9zM768 620h8l-5-5zM771 615l34-14-47 12z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M769 0h-6l-9 9zM776 620h5l-10-5zM796 615l9-14-34 14z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m781 620 4-1-14-4zM129 163l-9 48 109 29z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m229 240-109-29 92 108zM328 98l-65-41 17 79z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m247 0 16 57 65 41z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m247 0 81 98 85-25zM776 0l-22 9 28-9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M776 0h-7l-15 9z"
/>
,<path
  style={{
    fill: "#nannannan",
    stroke: "#nannannan",
  }}
  d="M781 620h7l-3-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m785 619 11-4h-25z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m788 620 8-5-11 4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M788 620h4l4-5zM782 0l-28 9 33-9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m787 0-33 9 54-5zM792 620h6l-2-5zM796 615l9 5v-19zM805 601l70-10-7-141z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M793 0h-6l21 4zM234 427l-11 119 100-63z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m114 494 109 52 11-119zM798 620h7l-9-5zM799 0h-6l15 4zM805 620h5l-5-19z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m810 620 5-3-10-16z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m815 617 9-7-19-9zM808 4l-54 5 73 107zM815 617l7 3 2-10z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M810 620h7l-2-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m811 0-3 4 8-4zM808 4l-3-4h-6z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M817 620h5l-7-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m824 610 51-19-70 10zM808 4l3-4h-6zM816 0l-8 4 15-4zM852 10 830 0h-7zM822 620h7l-5-10z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m808 4 44 6-29-10zM829 620h6l-11-10zM830 0l22 10-17-10z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M835 620h5l-16-10zM868 450l108 6-94-80z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m840 620 14-11-30 1zM882 376l120-85-106 3zM808 4l48 9-4-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M840 620h8l6-11zM808 4l19 112 29-103zM863 610l12-19-21 18z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m854 609 21-18-51 19zM858 620l5-10-9-1zM848 620h6v-11zM856 13l-29 103 47-102zM852 10 842 0h-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m852 10-5-10h-5zM921 81l-94 35 37 72zM866 620l1-11-4 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m863 610 4-1 8-18zM854 620h4l-4-11zM854 1l-7-1 5 10zM685 0H247l299 61zM129 163l100 77 51-104zM887 602l-2-4-18 11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m867 609 18-11-10-7zM875 591l63-43-70-98zM858 0l-4 1-2 9zM247 0h-5l21 57z"
/>
,<path
  style={{
    fill: "#2f2f32",
    stroke: "#2f2f32",
  }}
  d="m854 1-1-1h-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M858 620h8l-3-10zM129 163l151-27-147-43zM212 319l-100 72 122 36zM1005 167l-84-86-57 107zM856 13l2-13-6 10zM1005 167l-141 21 32 106z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m83 294 29 97 100-72z"
/>
,<path
  style={{
    fill: "#2f2f32",
    stroke: "#2f2f32",
  }}
  d="m854 1 4-1h-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M866 0h-8l-2 13zM885 598l16-7h-26zM876 620l11-18-20 7zM866 620h5l-4-11zM242 0l-15 4 36 53zM921 81l-47-67-47 102zM133 93l147 43-17-79z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M871 620h5l-9-11zM235 0l-8 4 15-4zM908 594l-7-3-14 11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m887 602 14-11-16 7zM235 0l-6 1-2 3z"
/>
,<path
  style={{
    fill: "#2f2f32",
    stroke: "#2f2f32",
  }}
  d="m230 0-1 1 6-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m874 14-8-14-10 13z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M871 0h-5l8 14zM938 548l38-92-108-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M877 0h-6l3 14zM876 620h7l4-18z"
/>
,<path
  style={{
    fill: "#2f2f32",
    stroke: "#2f2f32",
  }}
  d="M230 0h-8l7 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m229 1-7-1 5 4zM227 4l-33 6 69 47zM901 591l37-43-63 43z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m908 594 30-46-37 43zM892 616l16-22-21 8zM976 456l26-165-120 85z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m883 620 9-4-5-14zM882 0h-5l-3 14zM883 620h6l3-4zM222 0h-5l10 4zM889 0h-7l13 6z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M889 620h5l-2-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m892 616 10 4 6-26zM908 594l24 5 6-51zM217 0h-6l16 4zM63 182l20 112 37-83zM120 211l-37 83 129 25zM895 6l-13-6-8 14zM896 0l-1 6 7-4zM921 81 895 6l-21 8zM223 546l-35 68 142-16zM330 598l-143 22h300zM179 617l9-3-37-1z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M894 620h8l-10-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m211 0-17 10 33-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m204 0-10 10 17-10zM83 294l-1 68 30 29zM112 391l2 103 120-67z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m15 407 99 87-2-103zM204 0h-5l-5 10zM895 6l1-6h-7zM902 2l26 13-15-15zM171 16l92 41-69-47z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m171 16-38 77 130-36zM129 163l-66 19 57 29zM188 614l-1 6 143-22z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M182 620h5l1-6zM902 620h6v-26z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M902 0v2l4-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M908 620h4l-4-26zM1069 438l-15-6 29 60zM199 0h-6l1 10z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M902 2V0h-6zM906 0l-4 2 11-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m179 617 3 3 6-6zM169 620l-18-7 12 7zM920 620l12-21-24-5zM902 2l-7 4 33 9zM193 0h-7l8 10z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="m179 617-4 3h7z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M169 620h6l4-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M912 620h8l-12-26zM1002 291l3-124-109 127zM182 0l-11 16 23-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M186 0h-4l12 10zM928 15l-33-9 26 75zM169 5v10l2 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m171 16-2-1-36 78zM169 620l10-3-28-4zM920 620h6l6-21zM932 599l16 1-10-52zM936 0l-8 15 20-6zM928 15 918 0h-5zM182 0h-7l-4 16z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M169 15 126 2l7 91zM169 5l-4 5 4 5zM151 613l37 1-45-6zM926 620h6v-21zM175 0l-6 5 2 11zM937 620l11-20-16-1zM928 15l-3-15h-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M931 0h-6l3 15zM175 0h-6v5zM169 5l-6-5 2 10zM932 620h5l-5-21zM143 608l45 6 35-68zM151 613l5 7h7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M936 0h-5l-3 15zM169 0h-6l6 5zM165 10 139 0l30 15zM937 620h6l5-20zM151 613l-1 7h6zM114 494l29 114 80-62z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M145 620h5l1-7zM948 9l-20 6-7 66zM163 0h-5l7 10zM133 93l-70 89 66-19zM83 294l-61 52 60 16zM19 144l44 38-45-65zM943 620l8-2-3-18zM948 600l42 6-52-58z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="m949 620 2-2-8 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1059 319-1-11-56-17zM143 608l2 12 6-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M138 620h7l-2-12zM954 8l-6 1-27 72zM158 0h-6l13 10zM948 9l-5-9h-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M152 0h-1l14 10zM955 620l1-3-5 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m951 618 5-1-8-17z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M949 620h6l-4-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m134 620 9-12-16 12z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M134 620h4l5-12zM948 9l1-9h-6zM967 0l-13 8h23zM1059 319l-57-28 67 77zM1002 291l71-58-68-66zM962 0h-7l-1 8zM151 0h-5l19 10zM954 8l-5-8-1 9zM966 620l-18-20 8 17z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1069 368-67-77-26 165zM127 620l16-12-21 12z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M955 620h7l-6-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m954 8 1-8h-6zM962 0l-8 8 13-8zM146 0h-7l26 10z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M962 620h4l-10-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m122 620-22-16 15 16zM1018 585l-42-129-38 92zM1058 308l10-15-66-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1072 304-4-11-10 15zM1072 316l-14-8 1 11zM139 0l-13 2 43 13zM954 8l-33 73 56-73zM1054 432l5-10-83 34z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1069 438-10-16-5 10zM122 620l21-12-43-4zM966 620l22-12-40-8zM1069 391v-23l-93 88zM1093 331l-21-15 21 21zM1072 316v-12l-14 4zM977 8l79 36-26-32z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="m133 0-7 2 13-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1073 266-71 25 66 2z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="m128 0-2 2 7-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m82 362-67 45 97-16zM6 290l16 56 61-52zM1093 313l-21-9v12zM1059 422l10-31-93 65zM973 620l15-12-22 12zM1088 281l-15-15-5 27zM1082 297l-14-4 4 11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m978 620 10-12-15 12zM100 604l43 4-29-114zM979 0l-2 8 7-8zM997 620l-7-14-2 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m988 608 2-2-42-6zM977 8l-4-8h-6z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M128 0h-8l6 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m126 2-20 9 27 82zM978 620h6l4-12zM92 602l8 2-27-18zM1073 266v-33l-71 58zM100 604l10 16h5zM22 346l-6 7 66 9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 344 15 9 6-7zM1093 306l-11-9-10 7zM1073 266l16-17-16-16zM1088 281l-6 16 11-8zM977 8l2-8h-6zM984 0l-7 8 13-8zM1059 422l25-24-15-7zM1093 319l-21-3 21 9zM1083 492l-29-60-78 24zM1018 585l-80-37 52 58zM120 0l-14 11 20-9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m114 0-8 11 14-11zM10 255l2 17 71 22z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m10 255 73 39-20-112zM100 604l4 16h6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M97 620h7l-4-16zM984 620h7l-3-12zM80 597l12 5-19-16zM990 0l-13 8 20-8zM16 353l-1 54 67-45z"
/>
,<path
  style={{
    fill: "#2e2e33",
    stroke: "#2e2e33",
  }}
  d="M7 407h8l-14-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m11 220-1 35 53-73zM114 0h-5l-3 11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m11 220 52-38-56 27zM12 272l-6 18 77 4zM1093 368h-24l24 5zM1082 297l6-16-20 12zM1010 620l8-35-28 21z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m4 286 2 4 6-18zM991 620h6l-9-12zM1093 408l-9-10 9 17zM1069 391l15 7 9-13zM90 620h7l-5-18z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m92 602 5 18 3-16zM997 0l-20 8 25-8z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="M1 310v7l21 29z"
/>
,<path
  style={{
    fill: "#131314",
    stroke: "#131314",
  }}
  d="m1 285 3 1-4-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M109 0h-5l2 11z"
/>
,<path
  style={{
    fill: "#29282c",
    stroke: "#29282c",
  }}
  d="m0 289 6 1-2-4z"
/>
,<path
  style={{
    fill: "#2a292e",
    stroke: "#2a292e",
  }}
  d="m7 209-6-15v6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m73 586 27 18 14-110zM1093 325l-21-9 21 15zM1093 319v-6l-21 3zM1072 316l-13 3 34 18zM1093 313v-7l-21-2zM1073 233l8-42-76-24zM1093 259l-4-10-16 17zM1093 271l-20-5 15 15z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 337-34-18 34 25zM1093 306v-5l-11-4zM28 560l45 26 41-92z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 301v-4h-11zM1093 344l-34-25 10 49zM1093 297v-3l-11 3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 294v-5l-11 8zM1093 348v-4l-24 24zM1093 354v-6l-24 20zM1 310l21 36-16-56z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 317v1l21 28z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 289v-6l-5-2z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="M1 318v4l21 24z"
/>
,<path
  style={{
    fill: "#29292c",
    stroke: "#29292c",
  }}
  d="M1 300v10l5-20z"
/>
,<path
  style={{
    fill: "#2a292d",
    stroke: "#2a292d",
  }}
  d="m1 300 5-10-5 4z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M1 322v5l21 19z"
/>
,<path
  style={{
    fill: "#1f1f22",
    stroke: "#1f1f22",
  }}
  d="m1 294 5-4-6-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 361v-7l-24 14z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="M1 327v8l21 11z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="m4 286 8-14-11 5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 283v-7l-5 5z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="M1 335v9l21 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 368v-7l-24 7zM1093 276v-5l-5 10z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="m1 277 11-5H1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M997 620h6l-13-14z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 310-1-6v4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 313 1-3-1-2zM0 313l1 4v-7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 313v2l1 2zM1 317l-1 2 1-1zM1 318l-1 2 1 2zM1 322l-1 2 1 3zM1 327l-1 5 1 3zM1 335l-1 4 1 5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 315v4l1-2zM1 310v-10l-1 4zM0 319v1l1-2zM0 349l1 1v-6z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="M1 344v6l15 3z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 320v3l1-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 323v1l1-2zM0 304l1-4-1 1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 301 1-1-1-6z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 294 1 6v-6zM0 324v8l1-5zM0 332v1l1 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 271v-5h-20z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 333v3l1-1zM0 289v5h1z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 272h11l-11-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 373-24-5 24 10z"
/>
,<path
  style={{
    fill: "#161516",
    stroke: "#161516",
  }}
  d="m0 289 4-3-3-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 336v3l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 240-20-7 16 16zM1093 210l-12-19-8 42zM15 407 1 450l113 44zM1 377l14 30 1-54z"
/>
,<path
  style={{
    fill: "#28272c",
    stroke: "#28272c",
  }}
  d="m0 355 1 5 15-7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 339v3l1 2zM0 283v6l1-4z"
/>
,<path
  style={{
    fill: "#2a292e",
    stroke: "#2a292e",
  }}
  d="m0 354 16-1-15-3z"
/>
,<path
  style={{
    fill: "#161516",
    stroke: "#161516",
  }}
  d="m1 277-1 6 4 3z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="m1 268 11 4-11-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 378-24-10v23zM1093 378l-24 13 24-6z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 342v7l1-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 266v-7l-20 7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 276v7l1-6z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 272-1 4 1 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 267 11 5-2-17z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 273v3l1-4z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M1 260v7l9-12z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 349v5l1-4z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="M1 360v7l15-14z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 365 1 2v-7z"
/>
,<path
  style={{
    fill: "#27272b",
    stroke: "#27272b",
  }}
  d="M0 354v1l16-2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 368h1v-1z"
/>
,<path
  style={{
    fill: "#131315",
    stroke: "#131315",
  }}
  d="M1 367v1l15-15z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 273 1-1-1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 385-9 13 9-7zM71 595l7 6 2-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m80 597-2 4 14 1zM71 595l9 2-7-11zM84 620h6l2-18zM1093 259v-6l-4-4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 270 1 2v-4zM0 355v5h1zM0 370l1 2v-4z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="M1 368v4l15-19z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 267-1 3 1-2zM0 259l1 1-1-6z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 265v5l1-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1081 191-3-18-73-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1082 188-4-15 3 18zM1002 0l28 12-22-12z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 360v5l1-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 192-11-4-1 3zM1093 253v-5l-4 1zM1093 391l-9 7 9-2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 374 1 3v-5z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="M1 372v5l15-24z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 264v1l1 2zM0 365v3l1-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 260-1 4 1 3zM0 368v2l1-2zM0 370v3l1-1z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="M1 377v8l14 22z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 260-1-1v5z"
/>
,<path
  style={{
    fill: "#262529",
    stroke: "#262529",
  }}
  d="m0 254 1 6 9-5z"
/>
,<path
  style={{
    fill: "#2c2c31",
    stroke: "#2c2c31",
  }}
  d="M1 244v6l9 5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 373v1l1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1085 436-26-14 10 16zM1093 440l-8-4 8 10zM1093 426l-8 10 8-3zM1093 248v-8l-4 9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 379 1 6v-8z"
/>
,<path
  style={{
    fill: "#222124",
    stroke: "#222124",
  }}
  d="M0 253v1l10 1z"
/>
,<path
  style={{
    fill: "#242327",
    stroke: "#242327",
  }}
  d="m1 250-1 3 10 2z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M1 235v9l9 11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m63 182 70-89-115 24z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 374v5l1-2zM0 248v5l1-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M104 0h-8l10 11zM1 235l9 20 1-35zM1093 402v-6l-9 2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 379v4l1 2z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="M1 385v9l14 13z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 240v-6l-20-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 383v1l1 1zM0 241v7l1-4zM1 244l-1 4 1 2zM0 389l1 5v-9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m43 598 28-3 2-9zM78 601l-1 8 15-7zM1 417l14-10H7zM1093 408v-6l-9-4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 384v5l1-4zM0 235h1l-1-2zM0 389v2l1 3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 234v-6l-20 5zM1093 175l-9-11-6 9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 239v2l1 3zM0 398l1 2v-6z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 394v6l14 7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 235-1 4 1 5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 235v4l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 415-9-17-25 24zM1093 228v-4l-20 9zM1003 620h7l-20-14z"
/>
,<path
  style={{
    fill: "#2c2c31",
    stroke: "#2c2c31",
  }}
  d="M1 227v8l10-15z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 391v7l1-4z"
/>
,<path
  style={{
    fill: "#201f22",
    stroke: "#201f22",
  }}
  d="m0 404 1 6 6-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1002 0-25 8 53 4z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M1 222v5l10-7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 227-1 6 1 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M71 609h6l1-8zM77 609l7 11 8-18zM1093 421v-6l-34 7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 227-1 2v4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 223v6l1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 224v-7l-20 16z"
/>
,<path
  style={{
    fill: "#212124",
    stroke: "#212124",
  }}
  d="m0 404 7 3-6-7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 398v6l1-4z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 218v4l10-2z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="m1 218 10 2-10-3z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 222-1 1 1 4z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="m1 217 10 3-4-11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M96 0h-5l15 11z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 222v1l1-1zM0 220v2h1zM0 217h1l-1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1085 436 8-15-34 1zM1093 426v-5l-8 15z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 404v6h1z"
/>
,<path
  style={{
    fill: "#2a2a2e",
    stroke: "#2a2a2e",
  }}
  d="M1 410v7l6-10z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 220 1 2v-4zM0 415l1 2v-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 217v-7l-20 23zM18 117l115-24-91-62z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 416 1 2v-1z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 417v1l14-11z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 217v3l1-2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 217 1 1v-1zM0 410v5l1-5z"
/>
,<path
  style={{
    fill: "#232226",
    stroke: "#232226",
  }}
  d="m0 215 1 2 6-8z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 433-8 3 8 4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 415v1l1 1z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="M1 418v4l14-15z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 420 1 2v-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 210v-5l-12-14zM1078 173l-5-58-68 52z"
/>
,<path
  style={{
    fill: "#212124",
    stroke: "#212124",
  }}
  d="m0 205 1 5 6-1z"
/>
,<path
  style={{
    fill: "#1e1e20",
    stroke: "#1e1e20",
  }}
  d="M0 212v3l7-6z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 416v4l1-2z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 422v5l14-20z"
/>
,<path
  style={{
    fill: "#212124",
    stroke: "#212124",
  }}
  d="m1 210-1 2 7-3z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 205v7l1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1010 620h5l3-35z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 423 1 4v-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 181-15-8 4 15z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 420v3l1-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1085 436 8 15v-5zM1093 205v-6l-12-8zM19 144l-7 15 51 23zM71 609l7-8-7-6zM73 617l6 3-2-11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m77 609 2 11h5z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 427v8l14-28z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 423v3l1 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1056 44 921 81l142-24z"
/>
,<path
  style={{
    fill: "#1d1c1f",
    stroke: "#1d1c1f",
  }}
  d="M0 204v1l7 4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 194 6 15 56-27z"
/>
,<path
  style={{
    fill: "#202023",
    stroke: "#202023",
  }}
  d="m1 200-1 4 7 5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m68 620 3-11-11 11z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 433 1 2v-8z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1085 436-16 2 24 13zM1093 199v-7l-12-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 426v7l1-6z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="M1 435v9l14-37z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 200-1-1v5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 194-1 5 1 1z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M1 185v9l62-12z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 433v1l1 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M91 0h-6l21 11z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 177v8l11-26z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 451-24-13 24 20zM1093 192v-6l-11 2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 434v5l1-4zM0 439l1 5v-9zM1 194l-1-2v7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 189v3l1 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m71 609 2 8 4-8z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M73 620v-3l-5 3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1083 492-107-36 108 45zM1093 186v-5l-11 7zM1084 164l-11-49 5 58zM12 159 1 185l62-3z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 185-1 4 1 5z"
/>
,<path
  style={{
    fill: "#2d2d32",
    stroke: "#2d2d32",
  }}
  d="M1 444v6l14-43z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 439v6l1-1zM1 185l-1 2v2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 183v4l1-2zM0 445l1 5v-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 145-20-30 11 49zM68 620l5-3-2-8z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="M73 617v3h6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1015 620h7l-4-35z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 180v3l1 2zM1 177v-5l-1 4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 181v-6l-15-2zM1084 501l-108-45 102 86zM1093 463v-5l-24-20zM1 450v10l113 34z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 445v6l1-1z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="m1 177 11-18-11 13z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 177-1 3 1 5zM0 451v3l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 469v-6l-24-25z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 454 1 6v-10zM1 177l-1-1v4z"
/>
,<path
  style={{
    fill: "#2d2c32",
    stroke: "#2d2c32",
  }}
  d="m1 172 11-13-11 9z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="m1 168 11-9-11 8z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M85 0 60 16l46-5zM1030 12l-14-12h-8zM1093 175v-7l-9-4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 454v3l1 3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m60 16 73 77-27-82z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 170v3l1-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 172-1 1v3zM1 167v-7l-1 5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1083 492 10-23-24-31zM7 146l5 13 7-15z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 168-1 2 1 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 168v-5l-9 1z"
/>
,<path
  style={{
    fill: "#1f1f22",
    stroke: "#1f1f22",
  }}
  d="m0 139 7 7-6-11z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 169 1-1v-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 169v1l1-2zM0 457v6l1-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1 460v7l113 27z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 463 1 4v-7zM0 165v4l1-2zM0 468h1v-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1 467v1l113 26z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 463v2l1 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1083 492 10-17v-6zM1085 522l-1-21-6 41zM60 620l11-11-16 11zM1022 620h5l-9-35z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 160v7l11-8z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 480v-5l-10 17zM1 468v4l113 22z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 465v3l1-1zM0 470l1 2v-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 163v-6l-9 7z"
/>
,<path
  style={{
    fill: "#2a292e",
    stroke: "#2a292e",
  }}
  d="m0 158 1 2 11-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 162 1-2-1-2zM0 468v2l1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1 472v5l113 17z"
/>
,<path
  style={{
    fill: "#252428",
    stroke: "#252428",
  }}
  d="m0 158 12 1-12-5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 160-1 2v3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1074 99-69 68 68-52zM1030 12l-9-12h-5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 470v3l1-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1091 489 2-9-10 12zM1093 108l-19-9-1 16z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 475 1 2v-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 157v-5l-9 12z"
/>
,<path
  style={{
    fill: "#27262a",
    stroke: "#27262a",
  }}
  d="m0 154 12 5-11-9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 473v2l1-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 477 7 26 106-9zM1093 487l-2 2 2 3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 492-2-3-8 3zM1056 44 977 8l-56 73z"
/>
,<path
  style={{
    fill: "#2b2b2f",
    stroke: "#2b2b2f",
  }}
  d="m1 485 7 18-7-26z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 150 11 9-5-13zM79 0 60 16 85 0z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 150h1l-1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m8 503 4 12 102-21zM11 119l8 25-1-27zM1091 489l2-2v-7zM1093 492h-10l1 9z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="m1 118 10 1-10-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 152v-7l-9 19zM1 510l9 8 2-3z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 475v6l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1027 620 20-22-29-13z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 481 1 4v-8z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1047 598 7-16-36 3z"
/>
,<path
  style={{
    fill: "#1f1e21",
    stroke: "#1f1e21",
  }}
  d="m0 146 1 4 6-4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M1 150H0v4zM0 481v2l1 2z"
/>
,<path
  style={{
    fill: "#2b2b2f",
    stroke: "#2b2b2f",
  }}
  d="M1 485v9l7 9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M72 0 60 16 79 0z"
/>
,<path
  style={{
    fill: "#1f1e21",
    stroke: "#1f1e21",
  }}
  d="m0 139 1 5 6 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 500v-8l-9 9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 483v3l1-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 145v-5l-20-25z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 139v7l1-2z"
/>
,<path
  style={{
    fill: "#1d1c1e",
    stroke: "#1d1c1e",
  }}
  d="m1 144-1 2h7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1032 620 15-22-20 22zM10 518l18 42-16-45z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m12 515 16 45 86-66z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 486v3l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 510 11 5-4-12zM43 598l28 11v-14z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 489 1 5v-9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 489v3l1 2z"
/>
,<path
  style={{
    fill: "#2c2b2f",
    stroke: "#2c2b2f",
  }}
  d="M1 494v6l7 3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 140v-6l-20-19zM1034 0h-6l2 12zM72 0h-5l-7 16zM1 135l18 9-8-25z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1030 12-2-12h-7zM921 81l84 86 58-110zM1 135l6 11 12-2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 135-1-3v1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1078 542-60 43 53-22z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1078 542-102-86 42 129zM1093 504v-4l-9 1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M1 135v-8l-1 5zM1 135l-1 3v1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 511v-7l-9-3zM1071 563l-53 22 36-3z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 499 1 1v-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m10 518 3 37 15 5zM1063 57l-58 110 69-68zM1093 511l-9-10 1 21zM1073 51l-10 6 22 15z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 492v7l1-5z"
/>
,<path
  style={{
    fill: "#242427",
    stroke: "#242427",
  }}
  d="m1 500-1 4 8-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 135-1-2v5z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="m1 135 10-16-10 8z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 127-1-4v4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 134v-8l-20-11zM1078 566l-7-3-17 19zM1032 620h7l8-22zM28 583l15 15 30-12z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m28 583 45 3-45-26z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="m1 127 10-8-10 3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m43 598 12 22 16-11zM1093 517v-6l-8 11zM1079 557l-8 6 7 3z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 499v5l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 126v-4l-20-7z"
/>
,<path
  style={{
    fill: "#1d1c1e",
    stroke: "#1d1c1e",
  }}
  d="M0 504v1l8-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 517-8 5 8 1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M1 127H0v5zM1 122l-1-2v2z"
/>
,<path
  style={{
    fill: "#201f22",
    stroke: "#201f22",
  }}
  d="m0 505 1 5 7-7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m42 31 91 62-73-77zM67 0h-6l-1 16zM1040 6l-6-6-4 12z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1040 6-10 6 28 21zM43 0l-1 31 18-15z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 122-1 1 1 4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 122v1l1-1z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 118v4l10-3z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 505v6l1-1z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M1 510v7l9 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 523-8-1 8 7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M1 117v-7l-1 5zM1 118l-1 2 1 2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 117-1 3 1-2z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="m1 117 10 2-10-9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1058 33-28-21 26 32zM1093 122v-8l-20 1zM1038 0l2 6 5-6z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 515 1 2v-7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 511v4l1-5zM0 517l1 1v-1z"
/>
,<path
  style={{
    fill: "#131315",
    stroke: "#131315",
  }}
  d="M1 517v1h9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m43 598 7 22h5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M42 620h8l-7-22z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M1 518v4l9-4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 515v2h1zM1 117l-1-2v5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 110 10 9 7-2zM1093 529l-8-7 8 13zM1071 563l8-6-1-15zM1078 566l-24 16 23 14zM1040 6l-2-6h-4zM1058 33l-2 11 18-1zM1039 620h7l1-22zM1073 51l-17-7 7 13zM1093 114v-6l-20 7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 520 1 2v-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m21 587 7-4-27-11z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 104 1 6v-10z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M1 522v5l9-9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 517v3l1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m28 583 5 11 10 4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M1 110H0v5zM0 104v6h1zM0 520v3l1-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m28 583 3 9 2 2zM1 535l12 20-3-37z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m21 587 10 5-3-9zM37 620h5l1-22zM1093 535l-8-13-7 20z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 523v1l1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 108v-5l-19-4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 524 1 3v-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M61 0h-7l6 16z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 103v1l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 541v-6l-15 7zM1065 600l-11-18-7 16z"
/>
,<path
  style={{
    fill: "#2d2d32",
    stroke: "#2d2d32",
  }}
  d="m1 110 17 7-17-17z"
/>
,<path
  style={{
    fill: "#2d2d32",
    stroke: "#2d2d32",
  }}
  d="m1 100 17 17L1 94z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 541-15 1 15 5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 94-1-5v1zM0 524v6l1-3z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M1 527v8l9-17z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 572 27 11v-23zM1093 103v-6l-19 2zM1046 620l7-1-6-21zM1085 72l-22-15 11 42zM1050 0h-5l-5 6z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 530 1 5v-8z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 530v3l1 2z"
/>
,<path
  style={{
    fill: "#nannannan",
    stroke: "#nannannan",
  }}
  d="m1051 620 2-1-7 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 547-15-5 1 15zM1050 0l-10 6 16-6z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 533v2h1z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 535v9l12 11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m23 599 10-5-2-2zM37 620l6-22-10-4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 100-1-4v7zM1 94v-9l-1 4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 547-14 10 14-5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 94-1 2 1 4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 97v-6l-19 8zM1053 619l12-19-18-2zM1093 84l-8-12-11 27zM1073 51l1-8-18 1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 535v4l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M54 0h-6l12 16zM1 572l27-12-15-5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 539 1 5v-9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 539v3l1 2z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 544v6l12 5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 552-14 5 14 3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 560-14-3-1 9zM1053 619l3 1 9-20z"
/>
,<path
  style={{
    fill: "#nannannan",
    stroke: "#nannannan",
  }}
  d="M1051 620h5l-3-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 94-1-4v6z"
/>
,<path
  style={{
    fill: "#2d2d32",
    stroke: "#2d2d32",
  }}
  d="m1 94 17 23L1 85z"
/>
,<path
  style={{
    fill: "#2e2d32",
    stroke: "#2e2d32",
  }}
  d="m1 85 17 32L1 77z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 91v-7l-19 15zM1093 48l-19-5-1 8zM1093 62l-20-11 12 21z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 85h1l-1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1056 0-16 6 18 27z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 542v4l1-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m21 595 10-3-10-5zM30 620h7l-4-26zM1093 560l-15 6h15z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 83 1 2v-8zM1 85H0v4zM0 546l1 4v-6z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 84v-5l-8-7zM1 77l17 40 24-86zM48 0h-5l17 16zM9 589l12 6v-8zM21 595l2 4 8-7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 546v7l1-3z"
/>
,<path
  style={{
    fill: "#27262a",
    stroke: "#27262a",
  }}
  d="m1 550-1 4 13 1z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M1 72v5l41-46z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M36 0 25 28l17 3zM1093 79v-5l-8-2zM1063 0h-7l16 10z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 553v1l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m21 595-1 6 3-2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 73v5l1-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 77-1 1v5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1077 596-23-14 11 18zM1056 620h7l2-20z"
/>
,<path
  style={{
    fill: "#28272c",
    stroke: "#28272c",
  }}
  d="m0 554 1 6 12-5z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M1 68v4l41-41z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1056 0 2 33 14-23zM1076 620l1-24-12 4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 70v3l1-1zM1 72l-1 1 1 4zM0 554v6h1z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 560v7l12-12z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 74v-6l-8 4zM9 589l11 12 1-6zM23 599l7 21 3-26zM1093 571v-5h-15z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m20 601 10 19-7-21z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M1 67v1l41-37z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 68-1 2 1 2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M1 68H0v2z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M1 60v7l41-36z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 65v3l1-1zM1 67l-1 1h1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m20 601 5 19h5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 565 1 2v-7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 560v5l1-5zM1 60l-1 5 1 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M43 0h-7l6 31z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 565 1 3v-1z"
/>
,<path
  style={{
    fill: "#131315",
    stroke: "#131315",
  }}
  d="M1 567v1l12-13z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 68v-6l-8 10zM1093 578l-15-12 15 17z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 578v-7l-15-5zM1 60l41-29-17-3zM1063 620h5l-3-20z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 570 1 2v-4z"
/>
,<path
  style={{
    fill: "#2d2c31",
    stroke: "#2d2c31",
  }}
  d="M1 568v4l12-17z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 565v5l1-2zM0 60h1l-1-4z"
/>
,<path
  style={{
    fill: "#2d2d32",
    stroke: "#2d2d32",
  }}
  d="m1 577 20 10-20-15z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 577 8 12 12-2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 570v1l1 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m14 611 11 9-5-19z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 56 1 4-1-6zM1 60H0v5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 600 13 11 6-10z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 571v2l1-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M36 0h-4l-7 28zM1072 10l-14 23 24-7zM1093 62v-7l-20-4zM1093 583l-15-17-1 30zM17 9l1 14 7 5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 573 1 4v-5zM0 54l1 6V50z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 573v4h1z"
/>
,<path
  style={{
    fill: "#2b2b2f",
    stroke: "#2b2b2f",
  }}
  d="M1 577v8l8 4z"
/>
,<path
  style={{
    fill: "#2e2d33",
    stroke: "#2e2d33",
  }}
  d="M1 50v10l24-32z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 590v-7l-16 13zM1082 26l-24 7 16 10zM1093 55v-7l-20 3z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 48 1 2-1-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 50 24-22-16 2zM1093 38l-11-12-8 17z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 583 1 2v-8z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 577v6l1-6zM0 583v1l1 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 600 19 1-11-12z"
/>
,<path
  style={{
    fill: "#212124",
    stroke: "#212124",
  }}
  d="m0 588 9 1-8-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m14 611 5 9h6zM1068 620h8l-11-20zM9 30l16-2-7-5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 50-1-2v6zM1 28v-4l-1 2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1074 0h-5l3 10z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1072 10-3-10h-6zM1093 596v-6l-16 6zM1093 48v-6l-19 1zM1081 0h-7l-2 10z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 41-1 4 1 5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m14 611-2 9h7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 584v4l1-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 42v-2l-19 3z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M9 30 1 41v9z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M32 0 17 9l8 19z"
/>
,<path
  style={{
    fill: "#131315",
    stroke: "#131315",
  }}
  d="M0 588v1h9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 42 1-1-1-2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 39 1 2-1-3zM1 41l-1 1v3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 40v-2l-19 5z"
/>
,<path
  style={{
    fill: "#232226",
    stroke: "#232226",
  }}
  d="m0 589 1 5 8-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1076 620h4l-3-24zM1093 601v-5h-16zM24 0l-7 9 15-9z"
/>
,<path
  style={{
    fill: "#252529",
    stroke: "#252529",
  }}
  d="m0 38 1 3 8-11z"
/>
,<path
  style={{
    fill: "#232226",
    stroke: "#232226",
  }}
  d="m1 33-1 5 9-8z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1081 0-9 10 21 2z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 589v6l1-1z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M1 594v6l8-11z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 608v-7l-16-5z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 30 1 3v-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 38v-7l-11-5zM8 620h4l2-9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 595 1 5v-6z"
/>
,<path
  style={{
    fill: "#2c2b30",
    stroke: "#2c2b30",
  }}
  d="M1 28v5l8-3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M24 0h-6l-1 9z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 595v6l1-1z"
/>
,<path
  style={{
    fill: "#27272b",
    stroke: "#27272b",
  }}
  d="m1 600-1 4 14 7z"
/>
,<path
  style={{
    fill: "#2b2a2f",
    stroke: "#2b2a2f",
  }}
  d="m9 30-8-6v4z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 33-1-3v8z"
/>
,<path
  style={{
    fill: "#2b2a2f",
    stroke: "#2b2a2f",
  }}
  d="m9 30-8-7v1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1080 620 13-12-16-12z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 26v3l1-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 28-1 1v1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 31v-6l-11 1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M0 601v3l1-4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 612v-4l-13 12zM1 610l7 10 6-9zM9 30l9-7H1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 23-1-5v3z"
/>
,<path
  style={{
    fill: "#262529",
    stroke: "#262529",
  }}
  d="M0 604v3l14 4z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1093 12-21-2 10 16z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M1 23v-7l-1 2zM1 24v-1l-1 3z"
/>
,<path
  style={{
    fill: "#28282c",
    stroke: "#28282c",
  }}
  d="m0 607 1 3 13 1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1086 620 7-8-13 8zM18 0h-5l4 9zM1093 25v-6l-11 7z"
/>
,<path
  style={{
    fill: "#2d2d32",
    stroke: "#2d2d32",
  }}
  d="M1 23h17L1 16z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 23-1-2v5zM0 607v6l1-3z"
/>
,<path
  style={{
    fill: "#242327",
    stroke: "#242327",
  }}
  d="m1 610-1 3 8 7z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1 16 17 7-1-14z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m0 13 1 3-1-5z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="m1086 620 7-1v-7z"
/>
,<path
  style={{
    fill: "#nannannan",
    stroke: "#nannannan",
  }}
  d="M1086 620h7v-1z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 19v-7l-11 14z"
/>
,<path
  style={{
    fill: "#202023",
    stroke: "#202023",
  }}
  d="M0 613v4l8 3z"
/>
,<path
  style={{
    fill: "#242325",
    stroke: "#242325",
  }}
  d="M0 617v2l8 1z"
/>
,<path
  style={{
    fill: "#29282d",
    stroke: "#29282d",
  }}
  d="m0 11 1 5 16-7z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="m1 16-1-3v5z"
/>
,<path
  style={{
    fill: "#nannannan",
    stroke: "#nannannan",
  }}
  d="M0 619v1h8z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M13 0H7l10 9zM1093 7l-5-7h-7z"
/>
,<path
  style={{
    fill: "#2a292e",
    stroke: "#2a292e",
  }}
  d="m1 7-1 4 17-2z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 12V7l-12-7zM7 0 1 7l16 2z"
/>
,<path
  style={{
    fill: "#060606",
    stroke: "#060606",
  }}
  d="M0 3v5l1-1z"
/>
,<path
  style={{
    fill: "#050505",
    stroke: "#050505",
  }}
  d="M1 7 0 8v3z"
/>
,<path
  style={{
    fill: "#2f2e34",
    stroke: "#2f2e34",
  }}
  d="M1093 7V2l-5-2z"
/>
,<path
  style={{
    fill: "#2f2e33",
    stroke: "#2f2e33",
  }}
  d="m1093 2-1-2h-4z"
/>
,<path
  style={{
    fill: "#141415",
    stroke: "#141415",
  }}
  d="M1093 2V1l-1-1z"
/>
,<path
  style={{
    fill: "#1b1b1b",
    stroke: "#1b1b1b",
  }}
  d="M1093 1V0h-1z"
/>
,<path
  style={{
    fill: "#212124",
    stroke: "#212124",
  }}
  d="M7 0 0 3l1 4z"
/>
,<path
  style={{
    fill: "#1d1d1e",
    stroke: "#1d1d1e",
  }}
  d="M7 0H0v3z"
/>

 ];
 function Triangles() {
   const [reverse, setReverse] = React.useState(null);
   return (
     <div className="Triangles" onClick={() => setReverse(!reverse)}>

       <svg

         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1920 947"
         clip-path="url(#clip)"
         className={reverse ? "reverse" : ""}
       >
         <defs>
           <clipPath id="clip" clipPathUnits="objectBoundingBox">
             <rect x="0" y="0" width="1920px" height="947px" />
           </clipPath>
         </defs>
         {paths.map((path, index) => (
           <g
             key={index}
             className={
               !reverse ? ` cl-${index}  reverse` : `cl-${index}  initial`
             }
           >
             {path}
           </g>
         ))}
       </svg>
     </div>
   );
 }
 export default Triangles;
 