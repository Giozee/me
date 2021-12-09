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
   fill="#6F9FA0"
   stroke="#6F9FA0"
   d="M281 362L281 364 283 362z"
 ></path>,
 <path
   fill="#6A9A9B"
   stroke="#6A9A9B"
   d="M281 362L280 364 281 364z"
 ></path>,
 <path
   fill="#69999A"
   stroke="#69999A"
   d="M281 362L279 364 280 364z"
 ></path>,
 <path
   fill="#7FAFAE"
   stroke="#7FAFAE"
   d="M281 364L287 364 283 362z"
 ></path>,
 <path
   fill="#6F9FA0"
   stroke="#6F9FA0"
   d="M280 364L281 367 281 364z"
 ></path>,
 <path
   fill="#6E9EA0"
   stroke="#6E9EA0"
   d="M279 364L281 367 280 364z"
 ></path>,
 <path
   fill="#639393"
   stroke="#639393"
   d="M287 364L287 362 283 362z"
 ></path>,
 <path
   fill="#6B9B9A"
   stroke="#6B9B9A"
   d="M287 366L287 364 281 364z"
 ></path>,
 <path
   fill="#7BABAC"
   stroke="#7BABAC"
   d="M287 362L287 361 283 362z"
 ></path>,
 <path
   fill="#4A7B7E"
   stroke="#4A7B7E"
   d="M281 357L279 358 281 362z"
 ></path>,
 <path
   fill="#639497"
   stroke="#639497"
   d="M279 364L277 366 281 367z"
 ></path>,
 <path
   fill="#68989B"
   stroke="#68989B"
   d="M281 357L281 362 283 362z"
 ></path>,
 <path
   fill="#649495"
   stroke="#649495"
   d="M281 362L279 358 279 364z"
 ></path>,
 <path
   fill="#497B7A"
   stroke="#497B7A"
   d="M279 364L274 366 277 366z"
 ></path>,
 <path
   fill="#83B3B3"
   stroke="#83B3B3"
   d="M281 367L287 366 281 364z"
 ></path>,
 <path
   fill="#84B5B4"
   stroke="#84B5B4"
   d="M281 367L282 369 287 366z"
 ></path>,
 <path
   fill="#71A2A4"
   stroke="#71A2A4"
   d="M277 366L282 369 281 367z"
 ></path>,
 <path
   fill="#45747E"
   stroke="#45747E"
   d="M282 356L281 357 284 356z"
 ></path>,
 <path
   fill="#6D9D9F"
   stroke="#6D9D9F"
   d="M287 366L288 366 287 364z"
 ></path>,
 <path
   fill="#7BAAAA"
   stroke="#7BAAAA"
   d="M287 364L291 363 287 362z"
 ></path>,
 <path
   fill="#77A7A7"
   stroke="#77A7A7"
   d="M287 362L291 363 287 361z"
 ></path>,
 <path
   fill="#6D9DA0"
   stroke="#6D9DA0"
   d="M288 367L288 366 287 366z"
 ></path>,
 <path
   fill="#5A8B91"
   stroke="#5A8B91"
   d="M284 356L281 357 283 362z"
 ></path>,
 <path
   fill="#46777C"
   stroke="#46777C"
   d="M280 355L277 357 279 358z"
 ></path>,
 <path
   fill="#7AABA9"
   stroke="#7AABA9"
   d="M282 369L287 368 287 366z"
 ></path>,
 <path
   fill="#6D9C9E"
   stroke="#6D9C9E"
   d="M287 368L288 367 287 366z"
 ></path>,
 <path
   fill="#78A9AE"
   stroke="#78A9AE"
   d="M287 361L284 356 283 362z"
 ></path>,
 <path
   fill="#79AAA7"
   stroke="#79AAA7"
   d="M282 369L285 370 287 368z"
 ></path>,
 <path
   fill="#4D7E82"
   stroke="#4D7E82"
   d="M279 358L276 357 279 364z"
 ></path>,
 <path
   fill="#48797F"
   stroke="#48797F"
   d="M280 355L279 358 281 357z"
 ></path>,
 <path
   fill="#36666F"
   stroke="#36666F"
   d="M282 356L281 355 281 357z"
 ></path>,
 <path
   fill="#41717B"
   stroke="#41717B"
   d="M282 354L281 355 282 356z"
 ></path>,
 <path
   fill="#82B3B9"
   stroke="#82B3B9"
   d="M287 361L286 356 284 356z"
 ></path>,
 <path
   fill="#4F7F8A"
   stroke="#4F7F8A"
   d="M284 356L282 354 282 356z"
 ></path>,
 <path
   fill="#3E6E76"
   stroke="#3E6E76"
   d="M281 355L280 355 281 357z"
 ></path>,
 <path
   fill="#47787D"
   stroke="#47787D"
   d="M277 357L276 357 279 358z"
 ></path>,
 <path
   fill="#427179"
   stroke="#427179"
   d="M275 351L276 357 277 357z"
 ></path>,
 <path
   fill="#538486"
   stroke="#538486"
   d="M276 357L274 366 279 364z"
 ></path>,
 <path
   fill="#79A9AB"
   stroke="#79A9AB"
   d="M276 373L280 374 282 369z"
 ></path>,
 <path
   fill="#7CADB3"
   stroke="#7CADB3"
   d="M287 361L287 356 286 356z"
 ></path>,
 <path
   fill="#6899A3"
   stroke="#6899A3"
   d="M286 356L282 354 284 356z"
 ></path>,
 <path
   fill="#7BAEB4"
   stroke="#7BAEB4"
   d="M289 355L287 356 291 357z"
 ></path>,
 <path
   fill="#7AABB6"
   stroke="#7AABB6"
   d="M289 355L282 354 286 356z"
 ></path>,
 <path
   fill="#487A82"
   stroke="#487A82"
   d="M281 355L282 354 280 355z"
 ></path>,
 <path
   fill="#78A8AA"
   stroke="#78A8AA"
   d="M288 366L291 363 287 364z"
 ></path>,
 <path
   fill="#73A3A5"
   stroke="#73A3A5"
   d="M288 367L291 363 288 366z"
 ></path>,
 <path
   fill="#619191"
   stroke="#619191"
   d="M285 370L286 372 287 368z"
 ></path>,
 <path
   fill="#6C999B"
   stroke="#6C999B"
   d="M287 368L292 371 288 367z"
 ></path>,
 <path
   fill="#76A6A5"
   stroke="#76A6A5"
   d="M288 367L292 371 291 363z"
 ></path>,
 <path
   fill="#619190"
   stroke="#619190"
   d="M284 374L286 372 285 370z"
 ></path>,
 <path
   fill="#74A5A3"
   stroke="#74A5A3"
   d="M284 374L285 370 282 369z"
 ></path>,
 <path
   fill="#7AADB4"
   stroke="#7AADB4"
   d="M287 356L289 355 286 356z"
 ></path>,
 <path
   fill="#7AADB0"
   stroke="#7AADB0"
   d="M291 357L287 356 287 361z"
 ></path>,
 <path
   fill="#7AAAAB"
   stroke="#7AAAAB"
   d="M291 363L292 359 287 361z"
 ></path>,
 <path
   fill="#75A8AA"
   stroke="#75A8AA"
   d="M292 359L291 357 287 361z"
 ></path>,
 <path
   fill="#6A9B9E"
   stroke="#6A9B9E"
   d="M276 373L282 369 277 366z"
 ></path>,
 <path
   fill="#8ABABA"
   stroke="#8ABABA"
   d="M280 374L284 374 282 369z"
 ></path>,
 <path
   fill="#6A9CA1"
   stroke="#6A9CA1"
   d="M274 372L276 373 277 366z"
 ></path>,
 <path
   fill="#77ABAD"
   stroke="#77ABAD"
   d="M292 359L293 359 291 357z"
 ></path>,
 <path
   fill="#73A5A8"
   stroke="#73A5A8"
   d="M291 363L293 359 292 359z"
 ></path>,
 <path
   fill="#689A9C"
   stroke="#689A9C"
   d="M274 366L274 372 277 366z"
 ></path>,
 <path
   fill="#46767B"
   stroke="#46767B"
   d="M276 357L270 361 274 366z"
 ></path>,
 <path
   fill="#75A8A9"
   stroke="#75A8A9"
   d="M266 374L269 376 274 372z"
 ></path>,
 <path
   fill="#8DB7B8"
   stroke="#8DB7B8"
   d="M280 374L280 375 284 374z"
 ></path>,
 <path
   fill="#8BB4B5"
   stroke="#8BB4B5"
   d="M278 375L280 375 280 374z"
 ></path>,
 <path
   fill="#719E9E"
   stroke="#719E9E"
   d="M276 373L278 375 280 374z"
 ></path>,
 <path
   fill="#6D9C9F"
   stroke="#6D9C9F"
   d="M274 374L278 375 276 373z"
 ></path>,
 <path
   fill="#6D9DA2"
   stroke="#6D9DA2"
   d="M274 372L274 373 276 373z"
 ></path>,
 <path
   fill="#79A9AA"
   stroke="#79A9AA"
   d="M269 376L274 373 274 372z"
 ></path>,
 <path
   fill="#7BB1B6"
   stroke="#7BB1B6"
   d="M291 357L292 355 289 355z"
 ></path>,
 <path
   fill="#52868E"
   stroke="#52868E"
   d="M280 349L280 355 282 354z"
 ></path>,
 <path
   fill="#76ACAF"
   stroke="#76ACAF"
   d="M294 358L292 355 291 357z"
 ></path>,
 <path
   fill="#6D9A9A"
   stroke="#6D9A9A"
   d="M286 372L292 371 287 368z"
 ></path>,
 <path
   fill="#6DA0A4"
   stroke="#6DA0A4"
   d="M295 361L294 358 293 359z"
 ></path>,
 <path
   fill="#7AA4A3"
   stroke="#7AA4A3"
   d="M290 374L292 371 286 372z"
 ></path>,
 <path
   fill="#7BAEB1"
   stroke="#7BAEB1"
   d="M293 359L294 358 291 357z"
 ></path>,
 <path
   fill="#7CACAF"
   stroke="#7CACAF"
   d="M295 361L293 359 291 363z"
 ></path>,
 <path
   fill="#76A5A7"
   stroke="#76A5A7"
   d="M296 364L295 362 291 363z"
 ></path>,
 <path
   fill="#7CACAE"
   stroke="#7CACAE"
   d="M295 362L295 361 291 363z"
 ></path>,
 <path
   fill="#6F9EA2"
   stroke="#6F9EA2"
   d="M274 373L274 374 276 373z"
 ></path>,
 <path
   fill="#76A6A5"
   stroke="#76A6A5"
   d="M269 376L274 374 274 373z"
 ></path>,
 <path
   fill="#77A3A2"
   stroke="#77A3A2"
   d="M284 374L286 376 286 372z"
 ></path>,
 <path
   fill="#8FB3B0"
   stroke="#8FB3B0"
   d="M286 377L286 376 284 378z"
 ></path>,
 <path
   fill="#8AB1B0"
   stroke="#8AB1B0"
   d="M286 376L284 374 284 378z"
 ></path>,
 <path
   fill="#87B0AE"
   stroke="#87B0AE"
   d="M286 376L290 374 286 372z"
 ></path>,
 <path
   fill="#47787F"
   stroke="#47787F"
   d="M280 355L275 351 277 357z"
 ></path>,
 <path
   fill="#53848B"
   stroke="#53848B"
   d="M276 357L269 357 270 361z"
 ></path>,
 <path
   fill="#4F8086"
   stroke="#4F8086"
   d="M280 349L275 351 280 355z"
 ></path>,
 <path
   fill="#4B7981"
   stroke="#4B7981"
   d="M280 349L282 354 284 344z"
 ></path>,
 <path
   fill="#6C9C9E"
   stroke="#6C9C9E"
   d="M296 365L296 364 291 363z"
 ></path>,
 <path
   fill="#75A5A9"
   stroke="#75A5A9"
   d="M295 362L298 362 295 361z"
 ></path>,
 <path
   fill="#70A1AD"
   stroke="#70A1AD"
   d="M292 351L282 354 289 355z"
 ></path>,
 <path
   fill="#77A6A6"
   stroke="#77A6A6"
   d="M292 371L296 365 291 363z"
 ></path>,
 <path
   fill="#45767D"
   stroke="#45767D"
   d="M275 351L269 357 276 357z"
 ></path>,
 <path
   fill="#83ABA9"
   stroke="#83ABA9"
   d="M278 375L278 377 280 375z"
 ></path>,
 <path
   fill="#80ABAB"
   stroke="#80ABAB"
   d="M274 374L278 377 278 375z"
 ></path>,
 <path
   fill="#94B7B2"
   stroke="#94B7B2"
   d="M286 376L288 379 290 374z"
 ></path>,
 <path
   fill="#83ABAA"
   stroke="#83ABAA"
   d="M281 378L284 374 280 375z"
 ></path>,
 <path
   fill="#98BDBA"
   stroke="#98BDBA"
   d="M278 377L281 378 280 375z"
 ></path>,
 <path
   fill="#7AA19F"
   stroke="#7AA19F"
   d="M281 378L284 378 284 374z"
 ></path>,
 <path
   fill="#74A7AE"
   stroke="#74A7AE"
   d="M292 355L292 351 289 355z"
 ></path>,
 <path
   fill="#679DA2"
   stroke="#679DA2"
   d="M294 358L295 355 292 355z"
 ></path>,
 <path
   fill="#679DA2"
   stroke="#679DA2"
   d="M301 357L295 355 294 358z"
 ></path>,
 <path
   fill="#73A4A9"
   stroke="#73A4A9"
   d="M298 362L294 358 295 361z"
 ></path>,
 <path
   fill="#3C6C76"
   stroke="#3C6C76"
   d="M295 352L292 351 292 355z"
 ></path>,
 <path
   fill="#4D8187"
   stroke="#4D8187"
   d="M275 351L269 352 269 357z"
 ></path>,
 <path
   fill="#598C90"
   stroke="#598C90"
   d="M280 349L275 349 275 351z"
 ></path>,
 <path
   fill="#78A7A6"
   stroke="#78A7A6"
   d="M292 371L297 368 296 365z"
 ></path>,
 <path
   fill="#6A9A9F"
   stroke="#6A9A9F"
   d="M300 365L298 362 296 364z"
 ></path>,
 <path
   fill="#77A7AB"
   stroke="#77A7AB"
   d="M296 364L298 362 295 362z"
 ></path>,
 <path
   fill="#689491"
   stroke="#689491"
   d="M297 370L297 368 292 371z"
 ></path>,
 <path
   fill="#6D9EA1"
   stroke="#6D9EA1"
   d="M300 365L296 364 296 365z"
 ></path>,
 <path
   fill="#84ADA7"
   stroke="#84ADA7"
   d="M290 374L294 374 292 371z"
 ></path>,
 <path
   fill="#80A49D"
   stroke="#80A49D"
   d="M292 378L294 374 290 374z"
 ></path>,
 <path
   fill="#85ABA8"
   stroke="#85ABA8"
   d="M288 379L286 376 286 377z"
 ></path>,
 <path
   fill="#77A9AB"
   stroke="#77A9AB"
   d="M297 368L300 365 296 365z"
 ></path>,
 <path
   fill="#79A29D"
   stroke="#79A29D"
   d="M294 374L297 370 292 371z"
 ></path>,
 <path
   fill="#518389"
   stroke="#518389"
   d="M275 349L269 352 275 351z"
 ></path>,
 <path
   fill="#91B5B1"
   stroke="#91B5B1"
   d="M281 378L283 380 284 378z"
 ></path>,
 <path
   fill="#8AAEAB"
   stroke="#8AAEAB"
   d="M284 378L288 379 286 377z"
 ></path>,
 <path
   fill="#8EB2AD"
   stroke="#8EB2AD"
   d="M279 383L283 380 281 378z"
 ></path>,
 <path
   fill="#669BA1"
   stroke="#669BA1"
   d="M295 355L295 352 292 355z"
 ></path>,
 <path
   fill="#61969D"
   stroke="#61969D"
   d="M301 356L295 352 295 355z"
 ></path>,
 <path
   fill="#93BBB8"
   stroke="#93BBB8"
   d="M283 380L288 379 284 378z"
 ></path>,
 <path
   fill="#588D93"
   stroke="#588D93"
   d="M270 361L263 364 274 366z"
 ></path>,
 <path
   fill="#699FA5"
   stroke="#699FA5"
   d="M269 357L265 361 270 361z"
 ></path>,
 <path
   fill="#507A84"
   stroke="#507A84"
   d="M258 358L265 361 269 357z"
 ></path>,
 <path
   fill="#6FA7AF"
   stroke="#6FA7AF"
   d="M265 361L264 362 270 361z"
 ></path>,
 <path
   fill="#517C89"
   stroke="#517C89"
   d="M261 363L264 362 258 358z"
 ></path>,
 <path
   fill="#457480"
   stroke="#457480"
   d="M292 351L284 344 282 354z"
 ></path>,
 <path
   fill="#598284"
   stroke="#598284"
   d="M280 349L278 345 275 349z"
 ></path>,
 <path
   fill="#628B96"
   stroke="#628B96"
   d="M295 352L292 348 292 351z"
 ></path>,
 <path
   fill="#8DB0A9"
   stroke="#8DB0A9"
   d="M288 379L292 378 290 374z"
 ></path>,
 <path
   fill="#7EA39D"
   stroke="#7EA39D"
   d="M294 374L298 375 297 370z"
 ></path>,
 <path
   fill="#66969A"
   stroke="#66969A"
   d="M301 368L300 365 297 368z"
 ></path>,
 <path
   fill="#65999F"
   stroke="#65999F"
   d="M298 362L301 357 294 358z"
 ></path>,
 <path
   fill="#406467"
   stroke="#406467"
   d="M281 344L279 345 280 349z"
 ></path>,
 <path
   fill="#5E8789"
   stroke="#5E8789"
   d="M275 349L271 341 269 352z"
 ></path>,
 <path
   fill="#83ADA8"
   stroke="#83ADA8"
   d="M274 374L275 381 278 377z"
 ></path>,
 <path
   fill="#94B7B1"
   stroke="#94B7B1"
   d="M278 377L279 383 281 378z"
 ></path>,
 <path
   fill="#71A4A6"
   stroke="#71A4A6"
   d="M266 374L274 372 274 366z"
 ></path>,
 <path
   fill="#84A7A0"
   stroke="#84A7A0"
   d="M292 378L295 376 294 374z"
 ></path>,
 <path
   fill="#669294"
   stroke="#669294"
   d="M297 370L301 368 297 368z"
 ></path>,
 <path
   fill="#113535"
   stroke="#113535"
   d="M279 345L278 345 280 349z"
 ></path>,
 <path
   fill="#649DA4"
   stroke="#649DA4"
   d="M264 362L263 364 270 361z"
 ></path>,
 <path
   fill="#55767D"
   stroke="#55767D"
   d="M284 344L281 344 280 349z"
 ></path>,
 <path
   fill="#2B5050"
   stroke="#2B5050"
   d="M279 345L277 340 278 345z"
 ></path>,
 <path
   fill="#69999E"
   stroke="#69999E"
   d="M300 365L301 362 298 362z"
 ></path>,
 <path
   fill="#2F545E"
   stroke="#2F545E"
   d="M292 348L284 344 292 351z"
 ></path>,
 <path
   fill="#86AFAA"
   stroke="#86AFAA"
   d="M270 379L275 381 274 374z"
 ></path>,
 <path
   fill="#5B9095"
   stroke="#5B9095"
   d="M263 364L266 374 274 366z"
 ></path>,
 <path
   fill="#78A5A4"
   stroke="#78A5A4"
   d="M269 376L270 379 274 374z"
 ></path>,
 <path
   fill="#6E9797"
   stroke="#6E9797"
   d="M304 372L301 368 297 370z"
 ></path>,
 <path
   fill="#6B9A9D"
   stroke="#6B9A9D"
   d="M300 365L307 367 301 362z"
 ></path>,
 <path
   fill="#63969A"
   stroke="#63969A"
   d="M301 362L301 357 298 362z"
 ></path>,
 <path
   fill="#294C55"
   stroke="#294C55"
   d="M295 352L301 344 292 348z"
 ></path>,
 <path
   fill="#7AAAAA"
   stroke="#7AAAAA"
   d="M265 381L270 379 269 376z"
 ></path>,
 <path
   fill="#85A8A2"
   stroke="#85A8A2"
   d="M295 376L298 375 294 374z"
 ></path>,
 <path
   fill="#7EA4A0"
   stroke="#7EA4A0"
   d="M298 381L298 375 295 376z"
 ></path>,
 <path
   fill="#8CB2AD"
   stroke="#8CB2AD"
   d="M278 383L279 383 278 377z"
 ></path>,
 <path
   fill="#759E9A"
   stroke="#759E9A"
   d="M283 380L287 384 288 379z"
 ></path>,
 <path
   fill="#6B918E"
   stroke="#6B918E"
   d="M288 379L291 385 292 378z"
 ></path>,
 <path
   fill="#7DA59E"
   stroke="#7DA59E"
   d="M278 383L278 377 275 381z"
 ></path>,
 <path
   fill="#71A7AD"
   stroke="#71A7AD"
   d="M301 357L301 356 295 355z"
 ></path>,
 <path
   fill="#7DA59D"
   stroke="#7DA59D"
   d="M276 383L278 383 275 381z"
 ></path>,
 <path
   fill="#7DA39B"
   stroke="#7DA39B"
   d="M275 385L276 383 275 381z"
 ></path>,
 <path
   fill="#598792"
   stroke="#598792"
   d="M258 358L264 362 265 361z"
 ></path>,
 <path
   fill="#568F9B"
   stroke="#568F9B"
   d="M264 362L261 363 263 364z"
 ></path>,
 <path
   fill="#679AA1"
   stroke="#679AA1"
   d="M263 364L264 374 266 374z"
 ></path>,
 <path
   fill="#77A09B"
   stroke="#77A09B"
   d="M279 385L282 384 279 383z"
 ></path>,
 <path
   fill="#8AB1AC"
   stroke="#8AB1AC"
   d="M279 383L282 384 283 380z"
 ></path>,
 <path
   fill="#85A9A4"
   stroke="#85A9A4"
   d="M292 378L298 381 295 376z"
 ></path>,
 <path
   fill="#89B1AC"
   stroke="#89B1AC"
   d="M279 385L279 383 278 383z"
 ></path>,
 <path
   fill="#77ABAE"
   stroke="#77ABAE"
   d="M266 374L264 375 269 376z"
 ></path>,
 <path
   fill="#538B91"
   stroke="#538B91"
   d="M260 374L264 374 263 364z"
 ></path>,
 <path
   fill="#6B948E"
   stroke="#6B948E"
   d="M285 385L287 384 283 380z"
 ></path>,
 <path
   fill="#73A6AB"
   stroke="#73A6AB"
   d="M264 374L264 375 266 374z"
 ></path>,
 <path
   fill="#6FA0A6"
   stroke="#6FA0A6"
   d="M260 374L264 375 264 374z"
 ></path>,
 <path
   fill="#79A09A"
   stroke="#79A09A"
   d="M277 385L279 385 278 383z"
 ></path>,
 <path
   fill="#7BA39E"
   stroke="#7BA39E"
   d="M282 384L285 385 283 380z"
 ></path>,
 <path
   fill="#17353D"
   stroke="#17353D"
   d="M284 344L285 341 281 344z"
 ></path>,
 <path
   fill="#224245"
   stroke="#224245"
   d="M281 344L277 340 279 345z"
 ></path>,
 <path
   fill="#274751"
   stroke="#274751"
   d="M292 348L285 341 284 344z"
 ></path>,
 <path
   fill="#17353D"
   stroke="#17353D"
   d="M284 339L285 341 287 336z"
 ></path>,
 <path
   fill="#729C99"
   stroke="#729C99"
   d="M279 386L285 385 282 384z"
 ></path>,
 <path
   fill="#7FA49D"
   stroke="#7FA49D"
   d="M276 383L277 385 278 383z"
 ></path>,
 <path
   fill="#81A69E"
   stroke="#81A69E"
   d="M275 385L277 385 276 383z"
 ></path>,
 <path
   fill="#72978F"
   stroke="#72978F"
   d="M275 385L275 381 270 385z"
 ></path>,
 <path
   fill="#70A4A7"
   stroke="#70A4A7"
   d="M301 362L304 358 301 357z"
 ></path>,
 <path
   fill="#70A5A8"
   stroke="#70A5A8"
   d="M301 357L304 358 301 356z"
 ></path>,
 <path
   fill="#619198"
   stroke="#619198"
   d="M301 356L303 351 295 352z"
 ></path>,
 <path
   fill="#74A3A5"
   stroke="#74A3A5"
   d="M307 367L304 358 301 362z"
 ></path>,
 <path
   fill="#81A9A2"
   stroke="#81A9A2"
   d="M270 385L275 381 270 379z"
 ></path>,
 <path
   fill="#638C88"
   stroke="#638C88"
   d="M287 384L289 385 288 379z"
 ></path>,
 <path
   fill="#6B9490"
   stroke="#6B9490"
   d="M289 387L289 385 287 384z"
 ></path>,
 <path
   fill="#709A97"
   stroke="#709A97"
   d="M279 385L279 386 282 384z"
 ></path>,
 <path
   fill="#67908D"
   stroke="#67908D"
   d="M285 385L289 387 287 384z"
 ></path>,
 <path
   fill="#6C9793"
   stroke="#6C9793"
   d="M278 386L279 386 279 385z"
 ></path>,
 <path
   fill="#739C97"
   stroke="#739C97"
   d="M278 386L279 385 277 385z"
 ></path>,
 <path
   fill="#6C9591"
   stroke="#6C9591"
   d="M278 387L278 386 277 385z"
 ></path>,
 <path
   fill="#638A8A"
   stroke="#638A8A"
   d="M278 345L271 341 275 349z"
 ></path>,
 <path
   fill="#4D7982"
   stroke="#4D7982"
   d="M269 352L258 358 269 357z"
 ></path>,
 <path
   fill="#2B4C51"
   stroke="#2B4C51"
   d="M284 339L277 340 281 344z"
 ></path>,
 <path
   fill="#628A85"
   stroke="#628A85"
   d="M289 385L291 385 288 379z"
 ></path>,
 <path
   fill="#507775"
   stroke="#507775"
   d="M289 387L291 385 289 385z"
 ></path>,
 <path
   fill="#7CA19E"
   stroke="#7CA19E"
   d="M298 375L304 372 297 370z"
 ></path>,
 <path
   fill="#689598"
   stroke="#689598"
   d="M301 368L307 367 300 365z"
 ></path>,
 <path
   fill="#699392"
   stroke="#699392"
   d="M303 375L304 372 298 375z"
 ></path>,
 <path
   fill="#18363D"
   stroke="#18363D"
   d="M285 341L284 339 281 344z"
 ></path>,
 <path
   fill="#112D36"
   stroke="#112D36"
   d="M287 336L285 341 289 335z"
 ></path>,
 <path
   fill="#729390"
   stroke="#729390"
   d="M291 385L298 381 292 378z"
 ></path>,
 <path
   fill="#81B3B9"
   stroke="#81B3B9"
   d="M305 352L303 351 301 356z"
 ></path>,
 <path
   fill="#7AA2A9"
   stroke="#7AA2A9"
   d="M303 377L303 375 298 375z"
 ></path>,
 <path
   fill="#436B6D"
   stroke="#436B6D"
   d="M283 392L288 389 285 385z"
 ></path>,
 <path
   fill="#65908E"
   stroke="#65908E"
   d="M278 386L278 387 279 386z"
 ></path>,
 <path
   fill="#628A85"
   stroke="#628A85"
   d="M276 388L278 387 277 385z"
 ></path>,
 <path
   fill="#2A4147"
   stroke="#2A4147"
   d="M263 338L258 358 269 352z"
 ></path>,
 <path
   fill="#426D74"
   stroke="#426D74"
   d="M257 372L260 374 263 364z"
 ></path>,
 <path
   fill="#48727A"
   stroke="#48727A"
   d="M257 372L263 364 261 363z"
 ></path>,
 <path
   fill="#78ABAE"
   stroke="#78ABAE"
   d="M264 375L265 381 269 376z"
 ></path>,
 <path
   fill="#557979"
   stroke="#557979"
   d="M277 340L271 341 278 345z"
 ></path>,
 <path
   fill="#466769"
   stroke="#466769"
   d="M277 340L276 339 271 341z"
 ></path>,
 <path
   fill="#4D7175"
   stroke="#4D7175"
   d="M277 336L276 339 277 340z"
 ></path>,
 <path
   fill="#6D989D"
   stroke="#6D989D"
   d="M260 381L265 381 264 375z"
 ></path>,
 <path
   fill="#81A8A4"
   stroke="#81A8A4"
   d="M275 385L276 388 277 385z"
 ></path>,
 <path
   fill="#416366"
   stroke="#416366"
   d="M291 385L299 394 298 381z"
 ></path>,
 <path
   fill="#406767"
   stroke="#406767"
   d="M288 389L289 387 285 385z"
 ></path>,
 <path
   fill="#80ADAA"
   stroke="#80ADAA"
   d="M265 381L270 385 270 379z"
 ></path>,
 <path
   fill="#233E48"
   stroke="#233E48"
   d="M258 358L257 361 261 363z"
 ></path>,
 <path
   fill="#658F91"
   stroke="#658F91"
   d="M304 372L307 367 301 368z"
 ></path>,
 <path
   fill="#659192"
   stroke="#659192"
   d="M303 375L305 373 304 372z"
 ></path>,
 <path
   fill="#689394"
   stroke="#689394"
   d="M305 376L305 373 303 375z"
 ></path>,
 <path
   fill="#789FA5"
   stroke="#789FA5"
   d="M298 381L303 377 298 375z"
 ></path>,
 <path
   fill="#4A777B"
   stroke="#4A777B"
   d="M309 368L307 367 304 372z"
 ></path>,
 <path
   fill="#74A8AD"
   stroke="#74A8AD"
   d="M304 358L305 352 301 356z"
 ></path>,
 <path
   fill="#70A0A6"
   stroke="#70A0A6"
   d="M309 351L305 352 312 358z"
 ></path>,
 <path
   fill="#183E47"
   stroke="#183E47"
   d="M303 351L301 344 295 352z"
 ></path>,
 <path
   fill="#6F9591"
   stroke="#6F9591"
   d="M275 388L276 388 275 385z"
 ></path>,
 <path
   fill="#5F8A8B"
   stroke="#5F8A8B"
   d="M283 392L285 385 279 386z"
 ></path>,
 <path
   fill="#97BEBB"
   stroke="#97BEBB"
   d="M273 389L275 388 275 385z"
 ></path>,
 <path
   fill="#5D8688"
   stroke="#5D8688"
   d="M303 377L305 376 303 375z"
 ></path>,
 <path
   fill="#4D7C81"
   stroke="#4D7C81"
   d="M305 373L309 368 304 372z"
 ></path>,
 <path
   fill="#679498"
   stroke="#679498"
   d="M304 382L305 376 303 377z"
 ></path>,
 <path
   fill="#679A9F"
   stroke="#679A9F"
   d="M260 374L260 381 264 375z"
 ></path>,
 <path
   fill="#243F4A"
   stroke="#243F4A"
   d="M257 361L257 372 261 363z"
 ></path>,
 <path
   fill="#547A7B"
   stroke="#547A7B"
   d="M289 387L290 389 291 385z"
 ></path>,
 <path
   fill="#6E9BA4"
   stroke="#6E9BA4"
   d="M298 381L304 382 303 377z"
 ></path>,
 <path
   fill="#5E8B8D"
   stroke="#5E8B8D"
   d="M283 392L279 386 278 387z"
 ></path>,
 <path
   fill="#2B5054"
   stroke="#2B5054"
   d="M289 390L288 389 283 392z"
 ></path>,
 <path
   fill="#2B505A"
   stroke="#2B505A"
   d="M304 344L301 344 303 351z"
 ></path>,
 <path
   fill="#294A51"
   stroke="#294A51"
   d="M284 339L282 336 277 340z"
 ></path>,
 <path
   fill="#254144"
   stroke="#254144"
   d="M276 339L273 337 271 341z"
 ></path>,
 <path
   fill="#1F3E45"
   stroke="#1F3E45"
   d="M287 336L282 336 284 339z"
 ></path>,
 <path
   fill="#325859"
   stroke="#325859"
   d="M288 389L290 389 289 387z"
 ></path>,
 <path
   fill="#25494F"
   stroke="#25494F"
   d="M280 335L277 336 277 340z"
 ></path>,
 <path
   fill="#1A343E"
   stroke="#1A343E"
   d="M297 340L285 341 292 348z"
 ></path>,
 <path
   fill="#19353D"
   stroke="#19353D"
   d="M301 344L297 340 292 348z"
 ></path>,
 <path
   fill="#76A4A5"
   stroke="#76A4A5"
   d="M307 367L311 362 304 358z"
 ></path>,
 <path
   fill="#56888F"
   stroke="#56888F"
   d="M313 373L309 368 305 373z"
 ></path>,
 <path
   fill="#3F5F64"
   stroke="#3F5F64"
   d="M277 336L273 337 276 339z"
 ></path>,
 <path
   fill="#2B4447"
   stroke="#2B4447"
   d="M271 341L263 338 269 352z"
 ></path>,
 <path
   fill="#557B7A"
   stroke="#557B7A"
   d="M275 388L275 392 276 388z"
 ></path>,
 <path
   fill="#7BA19D"
   stroke="#7BA19D"
   d="M270 385L273 389 275 385z"
 ></path>,
 <path
   fill="#699392"
   stroke="#699392"
   d="M268 388L273 389 270 385z"
 ></path>,
 <path
   fill="#759F9E"
   stroke="#759F9E"
   d="M267 387L268 387 270 385z"
 ></path>,
 <path
   fill="#83ACAA"
   stroke="#83ACAA"
   d="M267 387L270 385 264 385z"
 ></path>,
 <path
   fill="#254B4E"
   stroke="#254B4E"
   d="M288 389L289 390 290 389z"
 ></path>,
 <path
   fill="#38626D"
   stroke="#38626D"
   d="M305 383L304 382 298 381z"
 ></path>,
 <path
   fill="#32545A"
   stroke="#32545A"
   d="M283 392L278 387 281 393z"
 ></path>,
 <path
   fill="#2A4D53"
   stroke="#2A4D53"
   d="M277 336L276 334 273 337z"
 ></path>,
 <path
   fill="#294C52"
   stroke="#294C52"
   d="M282 336L280 335 277 340z"
 ></path>,
 <path
   fill="#264850"
   stroke="#264850"
   d="M279 334L280 335 285 331z"
 ></path>,
 <path
   fill="#6C9796"
   stroke="#6C9796"
   d="M268 387L268 388 270 385z"
 ></path>,
 <path
   fill="#7EABA7"
   stroke="#7EABA7"
   d="M264 385L270 385 265 381z"
 ></path>,
 <path
   fill="#203034"
   stroke="#203034"
   d="M251 380L260 381 260 374z"
 ></path>,
 <path
   fill="#5F7F7E"
   stroke="#5F7F7E"
   d="M260 381L264 385 265 381z"
 ></path>,
 <path
   fill="#669292"
   stroke="#669292"
   d="M267 387L268 388 268 387z"
 ></path>,
 <path
   fill="#61898B"
   stroke="#61898B"
   d="M270 392L268 388 265 390z"
 ></path>,
 <path
   fill="#2C4851"
   stroke="#2C4851"
   d="M292 335L289 335 285 341z"
 ></path>,
 <path
   fill="#254950"
   stroke="#254950"
   d="M285 331L280 335 282 336z"
 ></path>,
 <path
   fill="#4F7779"
   stroke="#4F7779"
   d="M281 393L278 387 276 388z"
 ></path>,
 <path
   fill="#8EB6B6"
   stroke="#8EB6B6"
   d="M275 392L275 388 273 389z"
 ></path>,
 <path
   fill="#6A9598"
   stroke="#6A9598"
   d="M309 368L311 362 307 367z"
 ></path>,
 <path
   fill="#1E434E"
   stroke="#1E434E"
   d="M309 348L304 344 303 351z"
 ></path>,
 <path
   fill="#658F99"
   stroke="#658F99"
   d="M309 348L303 351 305 352z"
 ></path>,
 <path
   fill="#23434C"
   stroke="#23434C"
   d="M301 344L300 337 297 340z"
 ></path>,
 <path
   fill="#1B353D"
   stroke="#1B353D"
   d="M297 340L292 335 285 341z"
 ></path>,
 <path
   fill="#608F95"
   stroke="#608F95"
   d="M305 376L313 373 305 373z"
 ></path>,
 <path
   fill="#2E545F"
   stroke="#2E545F"
   d="M305 383L298 381 306 389z"
 ></path>,
 <path
   fill="#264B53"
   stroke="#264B53"
   d="M280 335L279 334 277 336z"
 ></path>,
 <path
   fill="#193740"
   stroke="#193740"
   d="M286 332L282 336 287 336z"
 ></path>,
 <path
   fill="#6FA2A7"
   stroke="#6FA2A7"
   d="M312 358L305 352 304 358z"
 ></path>,
 <path
   fill="#234A51"
   stroke="#234A51"
   d="M279 334L276 334 277 336z"
 ></path>,
 <path
   fill="#1E3639"
   stroke="#1E3639"
   d="M273 337L272 335 271 341z"
 ></path>,
 <path
   fill="#274146"
   stroke="#274146"
   d="M276 334L272 335 273 337z"
 ></path>,
 <path
   fill="#19343B"
   stroke="#19343B"
   d="M289 335L288 333 287 336z"
 ></path>,
 <path
   fill="#133036"
   stroke="#133036"
   d="M294 335L292 335 297 340z"
 ></path>,
 <path
   fill="#1F3E4B"
   stroke="#1F3E4B"
   d="M304 344L304 343 301 344z"
 ></path>,
 <path
   fill="#21414C"
   stroke="#21414C"
   d="M309 343L304 343 304 344z"
 ></path>,
 <path
   fill="#709898"
   stroke="#709898"
   d="M272 392L275 392 273 389z"
 ></path>,
 <path
   fill="#2A4F56"
   stroke="#2A4F56"
   d="M283 392L283 394 289 390z"
 ></path>,
 <path
   fill="#1C3A42"
   stroke="#1C3A42"
   d="M276 393L281 393 276 388z"
 ></path>,
 <path
   fill="#6A8D91"
   stroke="#6A8D91"
   d="M265 390L268 388 267 387z"
 ></path>,
 <path
   fill="#264449"
   stroke="#264449"
   d="M275 395L276 393 275 392z"
 ></path>,
 <path
   fill="#303E3F"
   stroke="#303E3F"
   d="M260 381L260 384 264 385z"
 ></path>,
 <path
   fill="#222D2F"
   stroke="#222D2F"
   d="M258 384L260 384 260 381z"
 ></path>,
 <path
   fill="#7AAAAC"
   stroke="#7AAAAC"
   d="M311 362L312 358 304 358z"
 ></path>,
 <path
   fill="#1E3C42"
   stroke="#1E3C42"
   d="M300 337L294 335 297 340z"
 ></path>,
 <path
   fill="#1B363E"
   stroke="#1B363E"
   d="M292 335L288 333 289 335z"
 ></path>,
 <path
   fill="#214651"
   stroke="#214651"
   d="M309 351L309 348 305 352z"
 ></path>,
 <path
   fill="#76A5AA"
   stroke="#76A5AA"
   d="M312 358L310 351 309 351z"
 ></path>,
 <path
   fill="#406A70"
   stroke="#406A70"
   d="M304 382L305 383 305 376z"
 ></path>,
 <path
   fill="#78A7A9"
   stroke="#78A7A9"
   d="M314 361L313 361 311 362z"
 ></path>,
 <path
   fill="#3C6263"
   stroke="#3C6263"
   d="M295 394L291 385 290 389z"
 ></path>,
 <path
   fill="#335557"
   stroke="#335557"
   d="M275 392L276 393 276 388z"
 ></path>,
 <path
   fill="#98C4C2"
   stroke="#98C4C2"
   d="M272 392L273 389 270 392z"
 ></path>,
 <path
   fill="#335056"
   stroke="#335056"
   d="M292 330L288 333 292 335z"
 ></path>,
 <path
   fill="#254246"
   stroke="#254246"
   d="M279 334L275 332 276 334z"
 ></path>,
 <path
   fill="#81ACAB"
   stroke="#81ACAB"
   d="M270 392L273 389 268 388z"
 ></path>,
 <path
   fill="#42666F"
   stroke="#42666F"
   d="M310 351L309 348 309 351z"
 ></path>,
 <path
   fill="#284A51"
   stroke="#284A51"
   d="M281 393L283 394 283 392z"
 ></path>,
 <path
   fill="#284F50"
   stroke="#284F50"
   d="M289 390L295 394 290 389z"
 ></path>,
 <path
   fill="#2B4B52"
   stroke="#2B4B52"
   d="M280 396L283 394 281 393z"
 ></path>,
 <path
   fill="#76A5A7"
   stroke="#76A5A7"
   d="M311 362L313 361 312 358z"
 ></path>,
 <path
   fill="#3F6F71"
   stroke="#3F6F71"
   d="M317 344L313 344 319 346z"
 ></path>,
 <path
   fill="#649195"
   stroke="#649195"
   d="M314 361L311 362 309 368z"
 ></path>,
 <path
   fill="#153039"
   stroke="#153039"
   d="M288 333L286 332 287 336z"
 ></path>,
 <path
   fill="#24434B"
   stroke="#24434B"
   d="M285 331L286 332 286 330z"
 ></path>,
 <path
   fill="#1E3F44"
   stroke="#1E3F44"
   d="M272 392L275 395 275 392z"
 ></path>,
 <path
   fill="#607F80"
   stroke="#607F80"
   d="M265 390L267 387 264 385z"
 ></path>,
 <path
   fill="#1F3033"
   stroke="#1F3033"
   d="M266 333L263 338 271 341z"
 ></path>,
 <path
   fill="#0E191D"
   stroke="#0E191D"
   d="M243 363L251 371 257 361z"
 ></path>,
 <path
   fill="#1D3941"
   stroke="#1D3941"
   d="M286 330L286 332 288 333z"
 ></path>,
 <path
   fill="#193945"
   stroke="#193945"
   d="M304 343L300 337 301 344z"
 ></path>,
 <path
   fill="#173842"
   stroke="#173842"
   d="M305 339L300 337 304 343z"
 ></path>,
 <path
   fill="#213436"
   stroke="#213436"
   d="M272 335L266 333 271 341z"
 ></path>,
 <path
   fill="#254246"
   stroke="#254246"
   d="M276 334L275 332 272 335z"
 ></path>,
 <path
   fill="#213C42"
   stroke="#213C42"
   d="M280 329L275 332 279 334z"
 ></path>,
 <path
   fill="#1C2829"
   stroke="#1C2829"
   d="M251 380L258 384 260 381z"
 ></path>,
 <path
   fill="#3D5756"
   stroke="#3D5756"
   d="M262 391L265 390 264 385z"
 ></path>,
 <path
   fill="#334140"
   stroke="#334140"
   d="M259 386L264 385 260 384z"
 ></path>,
 <path
   fill="#0E1B22"
   stroke="#0E1B22"
   d="M257 361L251 371 257 372z"
 ></path>,
 <path
   fill="#112229"
   stroke="#112229"
   d="M257 372L251 380 260 374z"
 ></path>,
 <path
   fill="#101C24"
   stroke="#101C24"
   d="M248 355L257 361 258 358z"
 ></path>,
 <path
   fill="#73A3A5"
   stroke="#73A3A5"
   d="M313 361L314 361 312 358z"
 ></path>,
 <path
   fill="#2E4E58"
   stroke="#2E4E58"
   d="M310 351L310 347 309 348z"
 ></path>,
 <path
   fill="#5A8C93"
   stroke="#5A8C93"
   d="M316 372L314 361 309 368z"
 ></path>,
 <path
   fill="#23474F"
   stroke="#23474F"
   d="M286 332L285 331 282 336z"
 ></path>,
 <path
   fill="#1B353C"
   stroke="#1B353C"
   d="M286 330L288 333 292 330z"
 ></path>,
 <path
   fill="#30525D"
   stroke="#30525D"
   d="M309 348L309 343 304 344z"
 ></path>,
 <path
   fill="#224B52"
   stroke="#224B52"
   d="M313 344L310 347 319 346z"
 ></path>,
 <path
   fill="#293133"
   stroke="#293133"
   d="M258 384L259 386 260 384z"
 ></path>,
 <path
   fill="#192224"
   stroke="#192224"
   d="M256 389L259 386 258 384z"
 ></path>,
 <path
   fill="#417277"
   stroke="#417277"
   d="M315 375L313 373 305 376z"
 ></path>,
 <path
   fill="#28474A"
   stroke="#28474A"
   d="M271 396L275 395 272 392z"
 ></path>,
 <path
   fill="#254448"
   stroke="#254448"
   d="M276 393L280 396 281 393z"
 ></path>,
 <path
   fill="#1F3C40"
   stroke="#1F3C40"
   d="M276 396L275 395 271 396z"
 ></path>,
 <path
   fill="#355A5B"
   stroke="#355A5B"
   d="M293 397L295 394 289 390z"
 ></path>,
 <path
   fill="#254147"
   stroke="#254147"
   d="M276 396L280 396 276 393z"
 ></path>,
 <path
   fill="#204048"
   stroke="#204048"
   d="M285 331L280 329 279 334z"
 ></path>,
 <path
   fill="#18373C"
   stroke="#18373C"
   d="M292 330L292 335 294 335z"
 ></path>,
 <path
   fill="#1E3F49"
   stroke="#1E3F49"
   d="M309 343L305 339 304 343z"
 ></path>,
 <path
   fill="#1C3840"
   stroke="#1C3840"
   d="M300 337L300 333 294 335z"
 ></path>,
 <path
   fill="#244145"
   stroke="#244145"
   d="M275 395L276 396 276 393z"
 ></path>,
 <path
   fill="#5F8183"
   stroke="#5F8183"
   d="M271 396L272 392 270 392z"
 ></path>,
 <path
   fill="#173841"
   stroke="#173841"
   d="M305 339L302 336 300 337z"
 ></path>,
 <path
   fill="#11303A"
   stroke="#11303A"
   d="M310 347L309 343 309 348z"
 ></path>,
 <path
   fill="#3B5D66"
   stroke="#3B5D66"
   d="M313 344L309 343 310 347z"
 ></path>,
 <path
   fill="#2B5053"
   stroke="#2B5053"
   d="M293 397L289 390 283 394z"
 ></path>,
 <path
   fill="#2C474A"
   stroke="#2C474A"
   d="M266 330L266 333 272 335z"
 ></path>,
 <path
   fill="#1C353B"
   stroke="#1C353B"
   d="M273 328L272 335 275 332z"
 ></path>,
 <path
   fill="#5C8184"
   stroke="#5C8184"
   d="M265 390L268 394 270 392z"
 ></path>,
 <path
   fill="#38575B"
   stroke="#38575B"
   d="M266 395L268 394 265 390z"
 ></path>,
 <path
   fill="#2B4C55"
   stroke="#2B4C55"
   d="M286 330L280 329 285 331z"
 ></path>,
 <path
   fill="#3A4B48"
   stroke="#3A4B48"
   d="M259 386L262 391 264 385z"
 ></path>,
 <path
   fill="#2E4E55"
   stroke="#2E4E55"
   d="M296 329L292 330 294 335z"
 ></path>,
 <path
   fill="#3D565A"
   stroke="#3D565A"
   d="M277 325L277 328 280 329z"
 ></path>,
 <path
   fill="#80A2A4"
   stroke="#80A2A4"
   d="M268 394L271 396 270 392z"
 ></path>,
 <path
   fill="#315154"
   stroke="#315154"
   d="M266 395L271 396 268 394z"
 ></path>,
 <path
   fill="#0E1A20"
   stroke="#0E1A20"
   d="M248 347L248 355 258 358z"
 ></path>,
 <path
   fill="#162327"
   stroke="#162327"
   d="M248 347L258 358 263 338z"
 ></path>,
 <path
   fill="#294952"
   stroke="#294952"
   d="M302 336L300 333 300 337z"
 ></path>,
 <path
   fill="#2C4E56"
   stroke="#2C4E56"
   d="M304 334L300 333 302 336z"
 ></path>,
 <path
   fill="#23444D"
   stroke="#23444D"
   d="M304 334L302 336 305 339z"
 ></path>,
 <path
   fill="#5F9399"
   stroke="#5F9399"
   d="M313 373L316 372 309 368z"
 ></path>,
 <path
   fill="#416C70"
   stroke="#416C70"
   d="M305 383L315 375 305 376z"
 ></path>,
 <path
   fill="#3C666D"
   stroke="#3C666D"
   d="M317 380L315 375 305 383z"
 ></path>,
 <path
   fill="#7BABAE"
   stroke="#7BABAE"
   d="M315 375L316 372 313 373z"
 ></path>,
 <path
   fill="#0F1A21"
   stroke="#0F1A21"
   d="M251 371L251 380 257 372z"
 ></path>,
 <path
   fill="#2B3736"
   stroke="#2B3736"
   d="M259 386L256 389 262 391z"
 ></path>,
 <path
   fill="#0D161B"
   stroke="#0D161B"
   d="M244 385L251 380 251 371z"
 ></path>,
 <path
   fill="#203C40"
   stroke="#203C40"
   d="M280 329L277 328 275 332z"
 ></path>,
 <path
   fill="#1A3538"
   stroke="#1A3538"
   d="M277 325L280 329 283 323z"
 ></path>,
 <path
   fill="#305255"
   stroke="#305255"
   d="M295 394L299 394 291 385z"
 ></path>,
 <path
   fill="#365256"
   stroke="#365256"
   d="M296 400L299 394 295 394z"
 ></path>,
 <path
   fill="#26474F"
   stroke="#26474F"
   d="M303 393L306 389 298 381z"
 ></path>,
 <path
   fill="#28484D"
   stroke="#28484D"
   d="M278 403L293 397 283 394z"
 ></path>,
 <path
   fill="#1B3338"
   stroke="#1B3338"
   d="M296 400L293 397 292 409z"
 ></path>,
 <path
   fill="#2E4F50"
   stroke="#2E4F50"
   d="M278 403L280 396 276 396z"
 ></path>,
 <path
   fill="#435E62"
   stroke="#435E62"
   d="M263 395L266 395 265 390z"
 ></path>,
 <path
   fill="#2B4A50"
   stroke="#2B4A50"
   d="M299 394L303 393 298 381z"
 ></path>,
 <path
   fill="#2F4C50"
   stroke="#2F4C50"
   d="M296 400L300 394 299 394z"
 ></path>,
 <path
   fill="#203A3F"
   stroke="#203A3F"
   d="M277 328L273 328 275 332z"
 ></path>,
 <path
   fill="#274A53"
   stroke="#274A53"
   d="M309 343L312 339 305 339z"
 ></path>,
 <path
   fill="#7BABAD"
   stroke="#7BABAD"
   d="M320 356L310 351 312 358z"
 ></path>,
 <path
   fill="#7CADAE"
   stroke="#7CADAE"
   d="M320 356L312 358 314 361z"
 ></path>,
 <path
   fill="#20414B"
   stroke="#20414B"
   d="M312 339L304 334 305 339z"
 ></path>,
 <path
   fill="#1C3942"
   stroke="#1C3942"
   d="M300 333L296 329 294 335z"
 ></path>,
 <path
   fill="#264348"
   stroke="#264348"
   d="M300 394L303 393 299 394z"
 ></path>,
 <path
   fill="#27444E"
   stroke="#27444E"
   d="M305 393L303 393 306 394z"
 ></path>,
 <path
   fill="#2A3F43"
   stroke="#2A3F43"
   d="M266 333L261 328 263 338z"
 ></path>,
 <path
   fill="#2D484E"
   stroke="#2D484E"
   d="M273 328L266 330 272 335z"
 ></path>,
 <path
   fill="#3D5356"
   stroke="#3D5356"
   d="M262 391L262 394 265 390z"
 ></path>,
 <path
   fill="#1B2528"
   stroke="#1B2528"
   d="M252 386L256 389 258 384z"
 ></path>,
 <path
   fill="#27444B"
   stroke="#27444B"
   d="M283 323L280 329 286 330z"
 ></path>,
 <path
   fill="#32535C"
   stroke="#32535C"
   d="M307 329L296 329 300 333z"
 ></path>,
 <path
   fill="#384A49"
   stroke="#384A49"
   d="M259 395L262 394 262 391z"
 ></path>,
 <path
   fill="#385053"
   stroke="#385053"
   d="M262 394L263 395 265 390z"
 ></path>,
 <path
   fill="#234145"
   stroke="#234145"
   d="M266 395L271 399 271 396z"
 ></path>,
 <path
   fill="#384F50"
   stroke="#384F50"
   d="M261 397L263 395 262 394z"
 ></path>,
 <path
   fill="#141F21"
   stroke="#141F21"
   d="M245 343L248 347 263 338z"
 ></path>,
 <path
   fill="#213B41"
   stroke="#213B41"
   d="M271 396L271 399 276 396z"
 ></path>,
 <path
   fill="#2C4A4D"
   stroke="#2C4A4D"
   d="M266 401L271 399 266 395z"
 ></path>,
 <path
   fill="#1A2426"
   stroke="#1A2426"
   d="M251 380L252 386 258 384z"
 ></path>,
 <path
   fill="#303E3B"
   stroke="#303E3B"
   d="M256 389L259 395 262 391z"
 ></path>,
 <path
   fill="#517D84"
   stroke="#517D84"
   d="M313 388L317 380 305 383z"
 ></path>,
 <path
   fill="#1F3C45"
   stroke="#1F3C45"
   d="M303 393L305 393 306 389z"
 ></path>,
 <path
   fill="#22404C"
   stroke="#22404C"
   d="M306 394L303 393 307 397z"
 ></path>,
 <path
   fill="#193136"
   stroke="#193136"
   d="M277 328L277 325 273 328z"
 ></path>,
 <path
   fill="#2B4A51"
   stroke="#2B4A51"
   d="M273 328L267 325 266 330z"
 ></path>,
 <path
   fill="#1E3941"
   stroke="#1E3941"
   d="M283 323L286 330 286 323z"
 ></path>,
 <path
   fill="#32545D"
   stroke="#32545D"
   d="M313 344L312 339 309 343z"
 ></path>,
 <path
   fill="#93BBBA"
   stroke="#93BBBA"
   d="M325 364L320 356 314 361z"
 ></path>,
 <path
   fill="#4D7A84"
   stroke="#4D7A84"
   d="M313 344L316 339 312 339z"
 ></path>,
 <path
   fill="#759E9F"
   stroke="#759E9F"
   d="M315 375L320 374 316 372z"
 ></path>,
 <path
   fill="#91B9BA"
   stroke="#91B9BA"
   d="M316 372L325 364 314 361z"
 ></path>,
 <path
   fill="#436A73"
   stroke="#436A73"
   d="M313 388L305 383 306 389z"
 ></path>,
 <path
   fill="#182325"
   stroke="#182325"
   d="M252 386L253 389 256 389z"
 ></path>,
 <path
   fill="#0D181C"
   stroke="#0D181C"
   d="M248 355L243 363 257 361z"
 ></path>,
 <path
   fill="#1C2729"
   stroke="#1C2729"
   d="M248 389L253 389 252 386z"
 ></path>,
 <path
   fill="#293530"
   stroke="#293530"
   d="M248 389L252 392 253 389z"
 ></path>,
 <path
   fill="#0B1618"
   stroke="#0B1618"
   d="M243 359L243 363 248 355z"
 ></path>,
 <path
   fill="#0A1519"
   stroke="#0A1519"
   d="M244 346L243 359 248 355z"
 ></path>,
 <path
   fill="#2C4C57"
   stroke="#2C4C57"
   d="M305 393L306 394 306 389z"
 ></path>,
 <path
   fill="#223E46"
   stroke="#223E46"
   d="M307 397L303 393 300 394z"
 ></path>,
 <path
   fill="#374642"
   stroke="#374642"
   d="M257 395L259 395 256 389z"
 ></path>,
 <path
   fill="#304B4D"
   stroke="#304B4D"
   d="M262 400L266 401 266 395z"
 ></path>,
 <path
   fill="#446366"
   stroke="#446366"
   d="M293 397L296 400 295 394z"
 ></path>,
 <path
   fill="#345659"
   stroke="#345659"
   d="M278 403L283 394 280 396z"
 ></path>,
 <path
   fill="#6F969B"
   stroke="#6F969B"
   d="M317 380L320 374 315 375z"
 ></path>,
 <path
   fill="#293531"
   stroke="#293531"
   d="M253 389L254 391 256 389z"
 ></path>,
 <path
   fill="#1A3337"
   stroke="#1A3337"
   d="M277 325L274 324 273 328z"
 ></path>,
 <path
   fill="#1B3337"
   stroke="#1B3337"
   d="M276 320L274 324 277 325z"
 ></path>,
 <path
   fill="#3C616C"
   stroke="#3C616C"
   d="M306 394L313 388 306 389z"
 ></path>,
 <path
   fill="#1D3F48"
   stroke="#1D3F48"
   d="M319 346L310 347 310 351z"
 ></path>,
 <path
   fill="#485E5D"
   stroke="#485E5D"
   d="M257 398L261 397 259 395z"
 ></path>,
 <path
   fill="#3B504F"
   stroke="#3B504F"
   d="M259 395L261 397 262 394z"
 ></path>,
 <path
   fill="#1E373F"
   stroke="#1E373F"
   d="M286 323L286 330 292 330z"
 ></path>,
 <path
   fill="#223E41"
   stroke="#223E41"
   d="M271 399L278 403 276 396z"
 ></path>,
 <path
   fill="#2A4749"
   stroke="#2A4749"
   d="M275 406L278 403 271 399z"
 ></path>,
 <path
   fill="#254149"
   stroke="#254149"
   d="M296 329L286 323 292 330z"
 ></path>,
 <path
   fill="#303D38"
   stroke="#303D38"
   d="M254 391L257 395 256 389z"
 ></path>,
 <path
   fill="#527D83"
   stroke="#527D83"
   d="M320 356L319 346 310 351z"
 ></path>,
 <path
   fill="#162E33"
   stroke="#162E33"
   d="M274 324L270 324 273 328z"
 ></path>,
 <path
   fill="#39555B"
   stroke="#39555B"
   d="M266 330L261 328 266 333z"
 ></path>,
 <path
   fill="#1C3236"
   stroke="#1C3236"
   d="M276 320L270 324 274 324z"
 ></path>,
 <path
   fill="#2D4950"
   stroke="#2D4950"
   d="M267 325L261 328 266 330z"
 ></path>,
 <path
   fill="#1B353A"
   stroke="#1B353A"
   d="M270 324L267 325 273 328z"
 ></path>,
 <path
   fill="#1A3435"
   stroke="#1A3435"
   d="M283 323L279 322 277 325z"
 ></path>,
 <path
   fill="#16282F"
   stroke="#16282F"
   d="M276 320L279 322 276 317z"
 ></path>,
 <path
   fill="#2F494C"
   stroke="#2F494C"
   d="M262 400L266 395 263 395z"
 ></path>,
 <path
   fill="#355052"
   stroke="#355052"
   d="M262 400L263 395 261 397z"
 ></path>,
 <path
   fill="#2A484A"
   stroke="#2A484A"
   d="M266 401L268 402 271 399z"
 ></path>,
 <path
   fill="#5C8D91"
   stroke="#5C8D91"
   d="M318 339L316 339 317 344z"
 ></path>,
 <path
   fill="#36676F"
   stroke="#36676F"
   d="M317 344L316 339 313 344z"
 ></path>,
 <path
   fill="#1E414C"
   stroke="#1E414C"
   d="M312 339L307 329 304 334z"
 ></path>,
 <path
   fill="#3A5E67"
   stroke="#3A5E67"
   d="M304 334L307 329 300 333z"
 ></path>,
 <path
   fill="#15252B"
   stroke="#15252B"
   d="M293 315L285 316 286 323z"
 ></path>,
 <path
   fill="#101B1D"
   stroke="#101B1D"
   d="M248 347L244 346 248 355z"
 ></path>,
 <path
   fill="#0E181A"
   stroke="#0E181A"
   d="M245 343L244 346 248 347z"
 ></path>,
 <path
   fill="#3A5554"
   stroke="#3A5554"
   d="M257 398L262 400 261 397z"
 ></path>,
 <path
   fill="#414F4A"
   stroke="#414F4A"
   d="M254 391L252 392 257 395z"
 ></path>,
 <path
   fill="#2D3934"
   stroke="#2D3934"
   d="M253 389L252 392 254 391z"
 ></path>,
 <path
   fill="#192525"
   stroke="#192525"
   d="M248 389L252 386 244 385z"
 ></path>,
 <path
   fill="#0F191D"
   stroke="#0F191D"
   d="M245 336L245 343 263 338z"
 ></path>,
 <path
   fill="#274546"
   stroke="#274546"
   d="M263 403L269 404 268 402z"
 ></path>,
 <path
   fill="#4B5F5D"
   stroke="#4B5F5D"
   d="M257 398L259 395 257 395z"
 ></path>,
 <path
   fill="#2B545D"
   stroke="#2B545D"
   d="M313 329L307 329 312 339z"
 ></path>,
 <path
   fill="#4E737F"
   stroke="#4E737F"
   d="M306 394L309 397 313 388z"
 ></path>,
 <path
   fill="#213A41"
   stroke="#213A41"
   d="M296 400L307 397 300 394z"
 ></path>,
 <path
   fill="#2E4C4E"
   stroke="#2E4C4E"
   d="M262 400L263 401 266 401z"
 ></path>,
 <path
   fill="#345253"
   stroke="#345253"
   d="M263 403L263 401 262 400z"
 ></path>,
 <path
   fill="#111B1E"
   stroke="#111B1E"
   d="M244 385L252 386 251 380z"
 ></path>,
 <path
   fill="#2F443F"
   stroke="#2F443F"
   d="M254 398L257 398 257 395z"
 ></path>,
 <path
   fill="#304340"
   stroke="#304340"
   d="M254 398L257 395 251 396z"
 ></path>,
 <path
   fill="#244142"
   stroke="#244142"
   d="M268 402L269 404 271 399z"
 ></path>,
 <path
   fill="#2A494B"
   stroke="#2A494B"
   d="M263 403L268 402 266 401z"
 ></path>,
 <path
   fill="#A1C4C1"
   stroke="#A1C4C1"
   d="M320 374L325 364 316 372z"
 ></path>,
 <path
   fill="#9EC0BF"
   stroke="#9EC0BF"
   d="M320 356L326 353 319 346z"
 ></path>,
 <path
   fill="#0A1416"
   stroke="#0A1416"
   d="M237 358L239 365 243 363z"
 ></path>,
 <path
   fill="#0A1516"
   stroke="#0A1516"
   d="M243 363L239 365 251 371z"
 ></path>,
 <path
   fill="#0A1417"
   stroke="#0A1417"
   d="M237 358L243 363 243 359z"
 ></path>,
 <path
   fill="#8DB1B7"
   stroke="#8DB1B7"
   d="M317 380L322 379 320 374z"
 ></path>,
 <path
   fill="#BAD9DA"
   stroke="#BAD9DA"
   d="M329 370L327 364 325 364z"
 ></path>,
 <path
   fill="#96B7BD"
   stroke="#96B7BD"
   d="M325 381L322 379 317 380z"
 ></path>,
 <path
   fill="#90B6BC"
   stroke="#90B6BC"
   d="M319 391L317 380 313 388z"
 ></path>,
 <path
   fill="#6998A0"
   stroke="#6998A0"
   d="M316 339L315 331 312 339z"
 ></path>,
 <path
   fill="#659495"
   stroke="#659495"
   d="M319 346L318 339 317 344z"
 ></path>,
 <path
   fill="#88B4B5"
   stroke="#88B4B5"
   d="M327 341L318 339 319 346z"
 ></path>,
 <path
   fill="#1D3539"
   stroke="#1D3539"
   d="M279 322L276 320 277 325z"
 ></path>,
 <path
   fill="#264044"
   stroke="#264044"
   d="M260 320L261 328 267 325z"
 ></path>,
 <path
   fill="#263B3C"
   stroke="#263B3C"
   d="M260 320L258 325 261 328z"
 ></path>,
 <path
   fill="#0E1D23"
   stroke="#0E1D23"
   d="M276 317L279 322 285 316z"
 ></path>,
 <path
   fill="#16292F"
   stroke="#16292F"
   d="M279 322L283 323 285 316z"
 ></path>,
 <path
   fill="#365465"
   stroke="#365465"
   d="M307 397L309 397 306 394z"
 ></path>,
 <path
   fill="#47555E"
   stroke="#47555E"
   d="M302 410L309 397 307 397z"
 ></path>,
 <path
   fill="#20383C"
   stroke="#20383C"
   d="M278 403L292 409 293 397z"
 ></path>,
 <path
   fill="#2E4047"
   stroke="#2E4047"
   d="M296 400L302 410 307 397z"
 ></path>,
 <path
   fill="#274345"
   stroke="#274345"
   d="M269 404L275 406 271 399z"
 ></path>,
 <path
   fill="#0B1418"
   stroke="#0B1418"
   d="M239 365L244 385 251 371z"
 ></path>,
 <path
   fill="#2F3C37"
   stroke="#2F3C37"
   d="M240 394L248 391 248 389z"
 ></path>,
 <path
   fill="#27332D"
   stroke="#27332D"
   d="M248 389L248 391 252 392z"
 ></path>,
 <path
   fill="#2F4D4F"
   stroke="#2F4D4F"
   d="M263 401L263 403 266 401z"
 ></path>,
 <path
   fill="#243A3C"
   stroke="#243A3C"
   d="M269 404L266 413 275 406z"
 ></path>,
 <path
   fill="#324E50"
   stroke="#324E50"
   d="M262 404L263 403 262 400z"
 ></path>,
 <path
   fill="#2F4A4A"
   stroke="#2F4A4A"
   d="M262 404L262 400 259 404z"
 ></path>,
 <path
   fill="#284751"
   stroke="#284751"
   d="M307 329L307 326 296 329z"
 ></path>,
 <path
   fill="#244F58"
   stroke="#244F58"
   d="M313 329L307 326 307 329z"
 ></path>,
 <path
   fill="#364641"
   stroke="#364641"
   d="M251 396L257 395 252 392z"
 ></path>,
 <path
   fill="#19262A"
   stroke="#19262A"
   d="M250 327L245 336 263 338z"
 ></path>,
 <path
   fill="#20393C"
   stroke="#20393C"
   d="M267 319L267 325 270 324z"
 ></path>,
 <path
   fill="#BAD7D5"
   stroke="#BAD7D5"
   d="M330 360L326 353 320 356z"
 ></path>,
 <path
   fill="#A8C9C7"
   stroke="#A8C9C7"
   d="M329 370L325 364 320 374z"
 ></path>,
 <path
   fill="#B6D5D3"
   stroke="#B6D5D3"
   d="M330 360L320 356 325 364z"
 ></path>,
 <path
   fill="#0C161A"
   stroke="#0C161A"
   d="M244 346L237 358 243 359z"
 ></path>,
 <path
   fill="#0B1417"
   stroke="#0B1417"
   d="M239 365L219 377 244 385z"
 ></path>,
 <path
   fill="#213438"
   stroke="#213438"
   d="M231 354L237 358 231 352z"
 ></path>,
 <path
   fill="#2F3C38"
   stroke="#2F3C38"
   d="M246 397L251 396 248 391z"
 ></path>,
 <path
   fill="#303D37"
   stroke="#303D37"
   d="M248 391L251 396 252 392z"
 ></path>,
 <path
   fill="#1C2F31"
   stroke="#1C2F31"
   d="M258 325L257 325 261 328z"
 ></path>,
 <path
   fill="#1C2E2E"
   stroke="#1C2E2E"
   d="M257 322L257 325 258 325z"
 ></path>,
 <path
   fill="#2D494A"
   stroke="#2D494A"
   d="M263 403L262 404 269 404z"
 ></path>,
 <path
   fill="#2F4A4A"
   stroke="#2F4A4A"
   d="M259 404L262 400 257 398z"
 ></path>,
 <path
   fill="#2C423F"
   stroke="#2C423F"
   d="M254 400L257 398 254 398z"
 ></path>,
 <path
   fill="#213236"
   stroke="#213236"
   d="M250 327L263 338 261 328z"
 ></path>,
 <path
   fill="#0A1417"
   stroke="#0A1417"
   d="M245 343L241 340 244 346z"
 ></path>,
 <path
   fill="#66959B"
   stroke="#66959B"
   d="M318 339L315 331 316 339z"
 ></path>,
 <path
   fill="#8DB2B8"
   stroke="#8DB2B8"
   d="M317 327L315 331 321 330z"
 ></path>,
 <path
   fill="#5F8C94"
   stroke="#5F8C94"
   d="M315 331L313 329 312 339z"
 ></path>,
 <path
   fill="#0B1417"
   stroke="#0B1417"
   d="M245 336L244 337 245 343z"
 ></path>,
 <path
   fill="#1E363A"
   stroke="#1E363A"
   d="M276 320L267 319 270 324z"
 ></path>,
 <path
   fill="#172A30"
   stroke="#172A30"
   d="M285 316L283 323 286 323z"
 ></path>,
 <path
   fill="#334743"
   stroke="#334743"
   d="M251 396L254 400 254 398z"
 ></path>,
 <path
   fill="#87A9B1"
   stroke="#87A9B1"
   d="M317 397L319 391 313 388z"
 ></path>,
 <path
   fill="#9CBEC2"
   stroke="#9CBEC2"
   d="M322 379L327 377 320 374z"
 ></path>,
 <path
   fill="#15292E"
   stroke="#15292E"
   d="M276 317L267 319 276 320z"
 ></path>,
 <path
   fill="#9ABEC5"
   stroke="#9ABEC5"
   d="M319 391L325 381 317 380z"
 ></path>,
 <path
   fill="#0C1518"
   stroke="#0C1518"
   d="M244 337L241 340 245 343z"
 ></path>,
 <path
   fill="#23393B"
   stroke="#23393B"
   d="M262 404L266 413 269 404z"
 ></path>,
 <path
   fill="#2D4543"
   stroke="#2D4543"
   d="M254 400L259 404 257 398z"
 ></path>,
 <path
   fill="#243539"
   stroke="#243539"
   d="M291 410L292 409 278 403z"
 ></path>,
 <path
   fill="#779AA2"
   stroke="#779AA2"
   d="M309 397L317 397 313 388z"
 ></path>,
 <path
   fill="#233A3D"
   stroke="#233A3D"
   d="M291 410L278 403 275 406z"
 ></path>,
 <path
   fill="#1E353A"
   stroke="#1E353A"
   d="M293 315L286 323 296 329z"
 ></path>,
 <path
   fill="#97BDBF"
   stroke="#97BDBF"
   d="M326 353L327 349 319 346z"
 ></path>,
 <path
   fill="#A3C3C4"
   stroke="#A3C3C4"
   d="M333 349L327 349 326 353z"
 ></path>,
 <path
   fill="#9BBCC3"
   stroke="#9BBCC3"
   d="M325 381L327 377 322 379z"
 ></path>,
 <path
   fill="#26373A"
   stroke="#26373A"
   d="M257 325L254 325 261 328z"
 ></path>,
 <path
   fill="#19272B"
   stroke="#19272B"
   d="M236 340L241 340 236 335z"
 ></path>,
 <path
   fill="#0B181D"
   stroke="#0B181D"
   d="M236 340L237 341 241 340z"
 ></path>,
 <path
   fill="#172627"
   stroke="#172627"
   d="M257 322L254 325 257 325z"
 ></path>,
 <path
   fill="#A5C5C7"
   stroke="#A5C5C7"
   d="M328 375L329 370 320 374z"
 ></path>,
 <path
   fill="#C2E0E2"
   stroke="#C2E0E2"
   d="M327 364L330 360 325 364z"
 ></path>,
 <path
   fill="#A3C2C5"
   stroke="#A3C2C5"
   d="M327 377L328 375 320 374z"
 ></path>,
 <path
   fill="#243538"
   stroke="#243538"
   d="M267 414L291 410 275 406z"
 ></path>,
 <path
   fill="#444245"
   stroke="#444245"
   d="M323 403L317 397 323 407z"
 ></path>,
 <path
   fill="#243D41"
   stroke="#243D41"
   d="M267 319L263 319 267 325z"
 ></path>,
 <path
   fill="#1F3336"
   stroke="#1F3336"
   d="M266 315L263 319 267 319z"
 ></path>,
 <path
   fill="#091216"
   stroke="#091216"
   d="M231 360L234 363 237 358z"
 ></path>,
 <path
   fill="#091315"
   stroke="#091315"
   d="M237 358L234 363 239 365z"
 ></path>,
 <path
   fill="#1D3031"
   stroke="#1D3031"
   d="M260 320L257 322 258 325z"
 ></path>,
 <path
   fill="#C2E0E2"
   stroke="#C2E0E2"
   d="M332 364L330 360 327 364z"
 ></path>,
 <path
   fill="#B4D3D5"
   stroke="#B4D3D5"
   d="M329 370L330 366 327 364z"
 ></path>,
 <path
   fill="#B0D0D0"
   stroke="#B0D0D0"
   d="M331 368L330 366 329 370z"
 ></path>,
 <path
   fill="#283A3C"
   stroke="#283A3C"
   d="M254 325L250 327 261 328z"
 ></path>,
 <path
   fill="#27393A"
   stroke="#27393A"
   d="M252 325L250 327 254 325z"
 ></path>,
 <path
   fill="#2A4246"
   stroke="#2A4246"
   d="M263 319L260 320 267 325z"
 ></path>,
 <path
   fill="#213335"
   stroke="#213335"
   d="M253 323L254 325 257 322z"
 ></path>,
 <path
   fill="#26393A"
   stroke="#26393A"
   d="M253 323L252 325 254 325z"
 ></path>,
 <path
   fill="#2F3C42"
   stroke="#2F3C42"
   d="M297 411L296 400 292 409z"
 ></path>,
 <path
   fill="#AFC8CB"
   stroke="#AFC8CB"
   d="M332 376L330 376 335 378z"
 ></path>,
 <path
   fill="#1D3132"
   stroke="#1D3132"
   d="M260 320L258 320 257 322z"
 ></path>,
 <path
   fill="#141F21"
   stroke="#141F21"
   d="M256 317L258 320 258 315z"
 ></path>,
 <path
   fill="#162A30"
   stroke="#162A30"
   d="M301 313L293 315 296 329z"
 ></path>,
 <path
   fill="#111E24"
   stroke="#111E24"
   d="M285 316L277 314 276 317z"
 ></path>,
 <path
   fill="#102025"
   stroke="#102025"
   d="M295 312L293 315 301 313z"
 ></path>,
 <path
   fill="#192C2F"
   stroke="#192C2F"
   d="M276 317L266 315 267 319z"
 ></path>,
 <path
   fill="#1F2D30"
   stroke="#1F2D30"
   d="M258 315L258 320 260 320z"
 ></path>,
 <path
   fill="#0F1C22"
   stroke="#0F1C22"
   d="M275 309L277 314 286 308z"
 ></path>,
 <path
   fill="#C3E1E2"
   stroke="#C3E1E2"
   d="M330 366L332 364 327 364z"
 ></path>,
 <path
   fill="#B1D4D4"
   stroke="#B1D4D4"
   d="M332 368L331 368 329 370z"
 ></path>,
 <path
   fill="#273838"
   stroke="#273838"
   d="M252 325L246 324 250 327z"
 ></path>,
 <path
   fill="#1E2D30"
   stroke="#1E2D30"
   d="M256 317L253 323 257 322z"
 ></path>,
 <path
   fill="#2D4543"
   stroke="#2D4543"
   d="M254 400L251 407 259 404z"
 ></path>,
 <path
   fill="#273935"
   stroke="#273935"
   d="M251 396L247 399 254 400z"
 ></path>,
 <path
   fill="#384540"
   stroke="#384540"
   d="M240 394L246 397 248 391z"
 ></path>,
 <path
   fill="#39463F"
   stroke="#39463F"
   d="M246 398L246 397 243 398z"
 ></path>,
 <path
   fill="#ACCBCD"
   stroke="#ACCBCD"
   d="M328 375L330 376 329 370z"
 ></path>,
 <path
   fill="#9DB9BC"
   stroke="#9DB9BC"
   d="M327 377L330 376 328 375z"
 ></path>,
 <path
   fill="#A6C3C7"
   stroke="#A6C3C7"
   d="M325 381L330 376 327 377z"
 ></path>,
 <path
   fill="#98BBC4"
   stroke="#98BBC4"
   d="M328 388L325 381 319 391z"
 ></path>,
 <path
   fill="#BAD8D7"
   stroke="#BAD8D7"
   d="M333 365L332 364 330 366z"
 ></path>,
 <path
   fill="#A5CDD0"
   stroke="#A5CDD0"
   d="M328 341L327 341 327 349z"
 ></path>,
 <path
   fill="#B0D2D2"
   stroke="#B0D2D2"
   d="M332 368L330 366 331 368z"
 ></path>,
 <path
   fill="#15252C"
   stroke="#15252C"
   d="M241 340L237 341 244 346z"
 ></path>,
 <path
   fill="#0F1B1E"
   stroke="#0F1B1E"
   d="M241 340L244 337 236 335z"
 ></path>,
 <path
   fill="#0A1215"
   stroke="#0A1215"
   d="M244 337L245 336 236 335z"
 ></path>,
 <path
   fill="#94BDC1"
   stroke="#94BDC1"
   d="M327 349L327 341 319 346z"
 ></path>,
 <path
   fill="#7CA2AA"
   stroke="#7CA2AA"
   d="M315 331L317 327 313 329z"
 ></path>,
 <path
   fill="#C3E0E2"
   stroke="#C3E0E2"
   d="M332 360L326 353 330 360z"
 ></path>,
 <path
   fill="#C0DEE0"
   stroke="#C0DEE0"
   d="M332 364L332 360 330 360z"
 ></path>,
 <path
   fill="#2F3D37"
   stroke="#2F3D37"
   d="M246 397L247 399 251 396z"
 ></path>,
 <path
   fill="#273330"
   stroke="#273330"
   d="M240 394L248 389 244 385z"
 ></path>,
 <path
   fill="#404D46"
   stroke="#404D46"
   d="M246 398L247 399 246 397z"
 ></path>,
 <path
   fill="#5E858E"
   stroke="#5E858E"
   d="M313 329L315 320 307 326z"
 ></path>,
 <path
   fill="#8AB2B6"
   stroke="#8AB2B6"
   d="M321 330L315 331 318 339z"
 ></path>,
 <path
   fill="#B0D2D3"
   stroke="#B0D2D3"
   d="M334 369L332 368 329 370z"
 ></path>,
 <path
   fill="#35393E"
   stroke="#35393E"
   d="M291 410L297 411 292 409z"
 ></path>,
 <path
   fill="#0D1A1C"
   stroke="#0D1A1C"
   d="M271 310L266 315 276 317z"
 ></path>,
 <path
   fill="#1F2F32"
   stroke="#1F2F32"
   d="M258 320L256 317 257 322z"
 ></path>,
 <path
   fill="#95BFC2"
   stroke="#95BFC2"
   d="M327 341L321 330 318 339z"
 ></path>,
 <path
   fill="#9EC2C7"
   stroke="#9EC2C7"
   d="M333 348L328 341 327 349z"
 ></path>,
 <path
   fill="#B1D0CF"
   stroke="#B1D0CF"
   d="M332 368L333 365 330 366z"
 ></path>,
 <path
   fill="#C6E4E4"
   stroke="#C6E4E4"
   d="M332 364L338 361 332 360z"
 ></path>,
 <path
   fill="#ADCDCD"
   stroke="#ADCDCD"
   d="M334 369L333 365 332 368z"
 ></path>,
 <path
   fill="#323940"
   stroke="#323940"
   d="M297 411L302 410 296 400z"
 ></path>,
 <path
   fill="#0C1A1E"
   stroke="#0C1A1E"
   d="M231 354L231 360 237 358z"
 ></path>,
 <path
   fill="#2D3934"
   stroke="#2D3934"
   d="M233 394L240 394 244 385z"
 ></path>,
 <path
   fill="#A0C8CA"
   stroke="#A0C8CA"
   d="M329 330L321 330 327 341z"
 ></path>,
 <path
   fill="#8FA3A9"
   stroke="#8FA3A9"
   d="M317 397L323 394 319 391z"
 ></path>,
 <path
   fill="#595E61"
   stroke="#595E61"
   d="M322 397L323 394 317 397z"
 ></path>,
 <path
   fill="#121F24"
   stroke="#121F24"
   d="M231 352L237 358 244 346z"
 ></path>,
 <path
   fill="#1A2628"
   stroke="#1A2628"
   d="M240 327L245 336 250 327z"
 ></path>,
 <path
   fill="#A8C5C7"
   stroke="#A8C5C7"
   d="M330 376L332 376 329 370z"
 ></path>,
 <path
   fill="#A9C3CA"
   stroke="#A9C3CA"
   d="M335 378L330 376 325 381z"
 ></path>,
 <path
   fill="#1C2D33"
   stroke="#1C2D33"
   d="M231 352L244 346 237 341z"
 ></path>,
 <path
   fill="#0D191B"
   stroke="#0D191B"
   d="M233 339L231 352 237 341z"
 ></path>,
 <path
   fill="#1E2827"
   stroke="#1E2827"
   d="M233 394L244 385 220 383z"
 ></path>,
 <path
   fill="#3E4C46"
   stroke="#3E4C46"
   d="M246 398L246 401 247 399z"
 ></path>,
 <path
   fill="#36433C"
   stroke="#36433C"
   d="M243 398L246 401 246 398z"
 ></path>,
 <path
   fill="#30413D"
   stroke="#30413D"
   d="M247 399L246 401 254 400z"
 ></path>,
 <path
   fill="#BDD8D7"
   stroke="#BDD8D7"
   d="M339 355L333 349 332 360z"
 ></path>,
 <path
   fill="#C3DFDF"
   stroke="#C3DFDF"
   d="M332 360L333 349 326 353z"
 ></path>,
 <path
   fill="#AACBCC"
   stroke="#AACBCC"
   d="M332 376L334 369 329 370z"
 ></path>,
 <path
   fill="#A9C6CB"
   stroke="#A9C6CB"
   d="M327 390L328 388 319 391z"
 ></path>,
 <path
   fill="#35433D"
   stroke="#35433D"
   d="M240 394L243 398 246 397z"
 ></path>,
 <path
   fill="#9AB4B9"
   stroke="#9AB4B9"
   d="M323 394L327 390 319 391z"
 ></path>,
 <path
   fill="#263B3D"
   stroke="#263B3D"
   d="M259 404L266 413 262 404z"
 ></path>,
 <path
   fill="#2A2A2D"
   stroke="#2A2A2D"
   d="M291 410L298 419 297 411z"
 ></path>,
 <path
   fill="#243A3D"
   stroke="#243A3D"
   d="M250 409L266 413 259 404z"
 ></path>,
 <path
   fill="#5B666C"
   stroke="#5B666C"
   d="M323 394L327 394 327 390z"
 ></path>,
 <path
   fill="#636468"
   stroke="#636468"
   d="M323 403L322 397 317 397z"
 ></path>,
 <path
   fill="#101D23"
   stroke="#101D23"
   d="M293 315L286 308 285 316z"
 ></path>,
 <path
   fill="#19292B"
   stroke="#19292B"
   d="M260 314L263 319 266 315z"
 ></path>,
 <path
   fill="#1A3239"
   stroke="#1A3239"
   d="M301 313L296 329 307 326z"
 ></path>,
 <path
   fill="#0D181B"
   stroke="#0D181B"
   d="M258 315L260 320 260 314z"
 ></path>,
 <path
   fill="#273738"
   stroke="#273738"
   d="M250 320L246 324 252 325z"
 ></path>,
 <path
   fill="#B9D7D7"
   stroke="#B9D7D7"
   d="M338 361L332 364 333 365z"
 ></path>,
 <path
   fill="#26383A"
   stroke="#26383A"
   d="M250 320L252 325 253 323z"
 ></path>,
 <path
   fill="#233135"
   stroke="#233135"
   d="M266 413L267 414 275 406z"
 ></path>,
 <path
   fill="#283235"
   stroke="#283235"
   d="M267 431L267 414 266 413z"
 ></path>,
 <path
   fill="#A4C5C8"
   stroke="#A4C5C8"
   d="M333 349L333 348 327 349z"
 ></path>,
 <path
   fill="#8EB8BA"
   stroke="#8EB8BA"
   d="M329 330L323 327 321 330z"
 ></path>,
 <path
   fill="#A7C5C5"
   stroke="#A7C5C5"
   d="M338 350L333 348 333 349z"
 ></path>,
 <path
   fill="#779AA3"
   stroke="#779AA3"
   d="M315 320L313 329 317 327z"
 ></path>,
 <path
   fill="#36525A"
   stroke="#36525A"
   d="M315 320L301 313 307 326z"
 ></path>,
 <path
   fill="#1F2F32"
   stroke="#1F2F32"
   d="M256 317L250 320 253 323z"
 ></path>,
 <path
   fill="#1D2F31"
   stroke="#1D2F31"
   d="M256 317L250 319 250 320z"
 ></path>,
 <path
   fill="#203134"
   stroke="#203134"
   d="M260 314L260 320 263 319z"
 ></path>,
 <path
   fill="#0F1B1C"
   stroke="#0F1B1C"
   d="M260 314L266 315 271 310z"
 ></path>,
 <path
   fill="#0D1A1F"
   stroke="#0D1A1F"
   d="M271 310L276 317 277 314z"
 ></path>,
 <path
   fill="#304341"
   stroke="#304341"
   d="M246 401L249 406 254 400z"
 ></path>,
 <path
   fill="#243735"
   stroke="#243735"
   d="M240 402L246 403 246 401z"
 ></path>,
 <path
   fill="#233634"
   stroke="#233634"
   d="M245 405L246 403 240 402z"
 ></path>,
 <path
   fill="#293E3D"
   stroke="#293E3D"
   d="M249 406L251 407 254 400z"
 ></path>,
 <path
   fill="#131E20"
   stroke="#131E20"
   d="M240 327L236 335 245 336z"
 ></path>,
 <path
   fill="#081519"
   stroke="#081519"
   d="M236 340L233 339 237 341z"
 ></path>,
 <path
   fill="#0D1A1F"
   stroke="#0D1A1F"
   d="M275 309L271 310 277 314z"
 ></path>,
 <path
   fill="#324543"
   stroke="#324543"
   d="M246 403L249 406 246 401z"
 ></path>,
 <path
   fill="#87A6AF"
   stroke="#87A6AF"
   d="M323 327L315 320 317 327z"
 ></path>,
 <path
   fill="#94B8BE"
   stroke="#94B8BE"
   d="M323 327L317 327 321 330z"
 ></path>,
 <path
   fill="#223030"
   stroke="#223030"
   d="M246 324L240 327 250 327z"
 ></path>,
 <path
   fill="#334241"
   stroke="#334241"
   d="M250 320L243 320 246 324z"
 ></path>,
 <path
   fill="#1E2D2E"
   stroke="#1E2D2E"
   d="M244 316L250 319 254 307z"
 ></path>,
 <path
   fill="#0F1D23"
   stroke="#0F1D23"
   d="M286 308L277 314 285 316z"
 ></path>,
 <path
   fill="#0F191C"
   stroke="#0F191C"
   d="M236 335L233 339 236 340z"
 ></path>,
 <path
   fill="#9CC5C7"
   stroke="#9CC5C7"
   d="M329 330L327 341 328 341z"
 ></path>,
 <path
   fill="#7B7D83"
   stroke="#7B7D83"
   d="M322 397L327 394 323 394z"
 ></path>,
 <path
   fill="#666A6E"
   stroke="#666A6E"
   d="M327 390L335 397 328 388z"
 ></path>,
 <path
   fill="#9DBCC5"
   stroke="#9DBCC5"
   d="M328 388L335 378 325 381z"
 ></path>,
 <path
   fill="#A7C4C7"
   stroke="#A7C4C7"
   d="M332 376L335 378 334 369z"
 ></path>,
 <path
   fill="#626164"
   stroke="#626164"
   d="M326 400L327 394 322 397z"
 ></path>,
 <path
   fill="#717778"
   stroke="#717778"
   d="M344 383L335 378 344 386z"
 ></path>,
 <path
   fill="#A6C7C9"
   stroke="#A6C7C9"
   d="M334 369L337 368 333 365z"
 ></path>,
 <path
   fill="#111F24"
   stroke="#111F24"
   d="M295 312L286 308 293 315z"
 ></path>,
 <path
   fill="#122126"
   stroke="#122126"
   d="M291 305L286 308 295 312z"
 ></path>,
 <path
   fill="#AAC8CB"
   stroke="#AAC8CB"
   d="M335 378L337 368 334 369z"
 ></path>,
 <path
   fill="#152122"
   stroke="#152122"
   d="M227 329L224 339 233 339z"
 ></path>,
 <path
   fill="#293737"
   stroke="#293737"
   d="M242 320L240 327 246 324z"
 ></path>,
 <path
   fill="#0E1E24"
   stroke="#0E1E24"
   d="M301 313L299 310 295 312z"
 ></path>,
 <path
   fill="#11232A"
   stroke="#11232A"
   d="M314 301L299 310 301 313z"
 ></path>,
 <path
   fill="#233634"
   stroke="#233634"
   d="M246 403L245 405 249 406z"
 ></path>,
 <path
   fill="#233839"
   stroke="#233839"
   d="M249 406L250 409 251 407z"
 ></path>,
 <path
   fill="#233B3B"
   stroke="#233B3B"
   d="M251 407L250 409 259 404z"
 ></path>,
 <path
   fill="#2E3F39"
   stroke="#2E3F39"
   d="M240 402L246 401 243 398z"
 ></path>,
 <path
   fill="#1F3333"
   stroke="#1F3333"
   d="M245 405L250 409 249 406z"
 ></path>,
 <path
   fill="#AECECF"
   stroke="#AECECF"
   d="M337 368L338 361 333 365z"
 ></path>,
 <path
   fill="#403F44"
   stroke="#403F44"
   d="M323 407L317 397 318 413z"
 ></path>,
 <path
   fill="#5F5E62"
   stroke="#5F5E62"
   d="M327 394L335 397 327 390z"
 ></path>,
 <path
   fill="#1F3232"
   stroke="#1F3232"
   d="M245 405L244 412 250 409z"
 ></path>,
 <path
   fill="#263634"
   stroke="#263634"
   d="M235 399L240 402 243 398z"
 ></path>,
 <path
   fill="#2E3E3A"
   stroke="#2E3E3A"
   d="M235 399L243 398 240 394z"
 ></path>,
 <path
   fill="#C6E1E0"
   stroke="#C6E1E0"
   d="M338 361L339 357 332 360z"
 ></path>,
 <path
   fill="#9FC8C9"
   stroke="#9FC8C9"
   d="M334 332L329 330 328 341z"
 ></path>,
 <path
   fill="#BCD5D5"
   stroke="#BCD5D5"
   d="M342 358L339 357 338 361z"
 ></path>,
 <path
   fill="#10232B"
   stroke="#10232B"
   d="M315 320L315 316 301 313z"
 ></path>,
 <path
   fill="#617B83"
   stroke="#617B83"
   d="M323 327L315 316 315 320z"
 ></path>,
 <path
   fill="#23383F"
   stroke="#23383F"
   d="M323 327L329 310 315 316z"
 ></path>,
 <path
   fill="#A8C8CB"
   stroke="#A8C8CB"
   d="M339 346L328 341 333 348z"
 ></path>,
 <path
   fill="#575758"
   stroke="#575758"
   d="M323 403L326 400 322 397z"
 ></path>,
 <path
   fill="#B8CECE"
   stroke="#B8CECE"
   d="M339 355L338 350 333 349z"
 ></path>,
 <path
   fill="#162427"
   stroke="#162427"
   d="M275 309L274 306 271 310z"
 ></path>,
 <path
   fill="#131E20"
   stroke="#131E20"
   d="M257 300L254 307 260 314z"
 ></path>,
 <path
   fill="#293334"
   stroke="#293334"
   d="M242 320L243 320 244 316z"
 ></path>,
 <path
   fill="#273435"
   stroke="#273435"
   d="M244 316L243 320 250 319z"
 ></path>,
 <path
   fill="#0F1C21"
   stroke="#0F1C21"
   d="M286 308L274 306 275 309z"
 ></path>,
 <path
   fill="#132125"
   stroke="#132125"
   d="M285 299L274 306 286 308z"
 ></path>,
 <path
   fill="#BED9D8"
   stroke="#BED9D8"
   d="M339 357L339 355 332 360z"
 ></path>,
 <path
   fill="#071214"
   stroke="#071214"
   d="M219 377L239 365 234 363z"
 ></path>,
 <path
   fill="#0A181D"
   stroke="#0A181D"
   d="M231 360L224 362 234 363z"
 ></path>,
 <path
   fill="#182C2F"
   stroke="#182C2F"
   d="M231 354L224 362 231 360z"
 ></path>,
 <path
   fill="#0E1B1E"
   stroke="#0E1B1E"
   d="M222 347L224 362 231 354z"
 ></path>,
 <path
   fill="#091518"
   stroke="#091518"
   d="M222 347L231 354 231 352z"
 ></path>,
 <path
   fill="#273737"
   stroke="#273737"
   d="M250 319L243 320 250 320z"
 ></path>,
 <path
   fill="#202C2D"
   stroke="#202C2D"
   d="M240 327L234 325 236 335z"
 ></path>,
 <path
   fill="#162426"
   stroke="#162426"
   d="M256 317L254 307 250 319z"
 ></path>,
 <path
   fill="#36373B"
   stroke="#36373B"
   d="M297 411L298 419 302 410z"
 ></path>,
 <path
   fill="#4D4E53"
   stroke="#4D4E53"
   d="M318 413L317 397 309 397z"
 ></path>,
 <path
   fill="#3C3A3C"
   stroke="#3C3A3C"
   d="M267 431L298 419 291 410z"
 ></path>,
 <path
   fill="#112025"
   stroke="#112025"
   d="M299 310L295 306 295 312z"
 ></path>,
 <path
   fill="#112228"
   stroke="#112228"
   d="M314 301L295 306 299 310z"
 ></path>,
 <path
   fill="#132227"
   stroke="#132227"
   d="M295 306L291 305 295 312z"
 ></path>,
 <path
   fill="#B0C7C7"
   stroke="#B0C7C7"
   d="M339 355L339 349 338 350z"
 ></path>,
 <path
   fill="#A5C0C1"
   stroke="#A5C0C1"
   d="M338 350L339 348 333 348z"
 ></path>,
 <path
   fill="#2B3738"
   stroke="#2B3738"
   d="M243 320L242 320 246 324z"
 ></path>,
 <path
   fill="#0F1B1D"
   stroke="#0F1B1D"
   d="M256 317L258 315 254 307z"
 ></path>,
 <path
   fill="#A8C1C2"
   stroke="#A8C1C2"
   d="M339 349L339 348 338 350z"
 ></path>,
 <path
   fill="#3E4E42"
   stroke="#3E4E42"
   d="M233 394L235 399 240 394z"
 ></path>,
 <path
   fill="#273A39"
   stroke="#273A39"
   d="M240 402L241 406 245 405z"
 ></path>,
 <path
   fill="#233332"
   stroke="#233332"
   d="M236 403L241 406 240 402z"
 ></path>,
 <path
   fill="#A2BDBE"
   stroke="#A2BDBE"
   d="M339 348L339 346 333 348z"
 ></path>,
 <path
   fill="#233533"
   stroke="#233533"
   d="M235 399L236 403 240 402z"
 ></path>,
 <path
   fill="#36483A"
   stroke="#36483A"
   d="M233 394L233 397 235 399z"
 ></path>,
 <path
   fill="#384A3F"
   stroke="#384A3F"
   d="M232 397L233 397 233 394z"
 ></path>,
 <path
   fill="#ABCDCD"
   stroke="#ABCDCD"
   d="M337 368L342 365 338 361z"
 ></path>,
 <path
   fill="#BED7D6"
   stroke="#BED7D6"
   d="M339 357L342 358 339 355z"
 ></path>,
 <path
   fill="#B5C9C8"
   stroke="#B5C9C8"
   d="M339 355L345 349 339 349z"
 ></path>,
 <path
   fill="#ADCAC9"
   stroke="#ADCAC9"
   d="M345 349L341 344 339 348z"
 ></path>,
 <path
   fill="#A3BEBF"
   stroke="#A3BEBF"
   d="M339 348L341 344 339 346z"
 ></path>,
 <path
   fill="#A3C6C7"
   stroke="#A3C6C7"
   d="M344 371L342 365 337 368z"
 ></path>,
 <path
   fill="#A3C2C5"
   stroke="#A3C2C5"
   d="M344 371L337 368 335 378z"
 ></path>,
 <path
   fill="#132226"
   stroke="#132226"
   d="M224 362L222 367 234 363z"
 ></path>,
 <path
   fill="#0B1517"
   stroke="#0B1517"
   d="M215 369L222 367 215 356z"
 ></path>,
 <path
   fill="#3F3F40"
   stroke="#3F3F40"
   d="M323 403L328 402 326 400z"
 ></path>,
 <path
   fill="#4E4C4F"
   stroke="#4E4C4F"
   d="M326 400L335 397 327 394z"
 ></path>,
 <path
   fill="#424349"
   stroke="#424349"
   d="M318 413L309 397 302 410z"
 ></path>,
 <path
   fill="#B6D0CF"
   stroke="#B6D0CF"
   d="M343 359L342 358 338 361z"
 ></path>,
 <path
   fill="#39383A"
   stroke="#39383A"
   d="M323 407L328 402 323 403z"
 ></path>,
 <path
   fill="#0E1C1D"
   stroke="#0E1C1D"
   d="M254 307L258 315 260 314z"
 ></path>,
 <path
   fill="#3C5045"
   stroke="#3C5045"
   d="M233 397L232 397 235 399z"
 ></path>,
 <path
   fill="#35463B"
   stroke="#35463B"
   d="M224 396L232 397 233 394z"
 ></path>,
 <path
   fill="#90B9BB"
   stroke="#90B9BB"
   d="M329 330L336 325 323 327z"
 ></path>,
 <path
   fill="#A3C9C9"
   stroke="#A3C9C9"
   d="M341 344L334 332 328 341z"
 ></path>,
 <path
   fill="#2B3F3C"
   stroke="#2B3F3C"
   d="M232 404L236 403 235 399z"
 ></path>,
 <path
   fill="#B1CBCC"
   stroke="#B1CBCC"
   d="M345 349L339 348 339 349z"
 ></path>,
 <path
   fill="#ADCACA"
   stroke="#ADCACA"
   d="M342 365L343 359 338 361z"
 ></path>,
 <path
   fill="#293737"
   stroke="#293737"
   d="M234 324L240 327 242 320z"
 ></path>,
 <path
   fill="#233131"
   stroke="#233131"
   d="M234 324L234 325 240 327z"
 ></path>,
 <path
   fill="#0B1618"
   stroke="#0B1618"
   d="M233 339L222 347 231 352z"
 ></path>,
 <path
   fill="#33353B"
   stroke="#33353B"
   d="M336 405L335 397 328 402z"
 ></path>,
 <path
   fill="#2E3238"
   stroke="#2E3238"
   d="M310 421L318 413 302 410z"
 ></path>,
 <path
   fill="#263938"
   stroke="#263938"
   d="M241 406L242 410 245 405z"
 ></path>,
 <path
   fill="#313130"
   stroke="#313130"
   d="M255 437L267 431 266 413z"
 ></path>,
 <path
   fill="#3A3D3F"
   stroke="#3A3D3F"
   d="M267 414L267 431 291 410z"
 ></path>,
 <path
   fill="#223433"
   stroke="#223433"
   d="M233 407L242 410 241 406z"
 ></path>,
 <path
   fill="#0B1516"
   stroke="#0B1516"
   d="M224 339L222 347 233 339z"
 ></path>,
 <path
   fill="#263333"
   stroke="#263333"
   d="M234 321L234 324 242 320z"
 ></path>,
 <path
   fill="#B2CFD2"
   stroke="#B2CFD2"
   d="M339 346L341 344 328 341z"
 ></path>,
 <path
   fill="#C1D5D3"
   stroke="#C1D5D3"
   d="M345 349L339 355 342 358z"
 ></path>,
 <path
   fill="#233737"
   stroke="#233737"
   d="M242 410L244 412 245 405z"
 ></path>,
 <path
   fill="#131D1E"
   stroke="#131D1E"
   d="M233 339L236 335 227 329z"
 ></path>,
 <path
   fill="#ABC9C8"
   stroke="#ABC9C8"
   d="M342 365L348 362 343 359z"
 ></path>,
 <path
   fill="#97B1B4"
   stroke="#97B1B4"
   d="M346 375L344 371 335 378z"
 ></path>,
 <path
   fill="#121D1F"
   stroke="#121D1F"
   d="M257 300L260 314 271 310z"
 ></path>,
 <path
   fill="#0E181A"
   stroke="#0E181A"
   d="M244 316L243 314 242 320z"
 ></path>,
 <path
   fill="#152022"
   stroke="#152022"
   d="M270 298L271 310 274 306z"
 ></path>,
 <path
   fill="#162225"
   stroke="#162225"
   d="M254 307L243 314 244 316z"
 ></path>,
 <path
   fill="#232F30"
   stroke="#232F30"
   d="M229 326L236 335 234 325z"
 ></path>,
 <path
   fill="#323335"
   stroke="#323335"
   d="M328 402L335 397 326 400z"
 ></path>,
 <path
   fill="#393D41"
   stroke="#393D41"
   d="M336 405L328 402 323 407z"
 ></path>,
 <path
   fill="#122124"
   stroke="#122124"
   d="M291 305L286 300 286 308z"
 ></path>,
 <path
   fill="#1A292D"
   stroke="#1A292D"
   d="M288 294L286 300 291 305z"
 ></path>,
 <path
   fill="#213033"
   stroke="#213033"
   d="M285 299L288 294 285 294z"
 ></path>,
 <path
   fill="#293836"
   stroke="#293836"
   d="M234 324L229 326 234 325z"
 ></path>,
 <path
   fill="#172122"
   stroke="#172122"
   d="M233 318L234 321 236 314z"
 ></path>,
 <path
   fill="#172529"
   stroke="#172529"
   d="M286 300L285 299 286 308z"
 ></path>,
 <path
   fill="#233235"
   stroke="#233235"
   d="M285 299L286 300 288 294z"
 ></path>,
 <path
   fill="#213333"
   stroke="#213333"
   d="M236 403L233 407 241 406z"
 ></path>,
 <path
   fill="#213133"
   stroke="#213133"
   d="M242 410L239 423 244 412z"
 ></path>,
 <path
   fill="#3A4E44"
   stroke="#3A4E44"
   d="M232 397L230 401 235 399z"
 ></path>,
 <path
   fill="#3E5046"
   stroke="#3E5046"
   d="M224 396L230 401 232 397z"
 ></path>,
 <path
   fill="#34383B"
   stroke="#34383B"
   d="M298 419L310 421 302 410z"
 ></path>,
 <path
   fill="#232E33"
   stroke="#232E33"
   d="M318 413L322 416 323 407z"
 ></path>,
 <path
   fill="#3C3C3E"
   stroke="#3C3C3E"
   d="M267 431L310 421 298 419z"
 ></path>,
 <path
   fill="#0F1C1F"
   stroke="#0F1C1F"
   d="M222 367L219 377 234 363z"
 ></path>,
 <path
   fill="#0E191B"
   stroke="#0E191B"
   d="M215 369L219 377 222 367z"
 ></path>,
 <path
   fill="#C1DAD9"
   stroke="#C1DAD9"
   d="M351 352L345 349 342 358z"
 ></path>,
 <path
   fill="#8CAFB0"
   stroke="#8CAFB0"
   d="M337 325L336 325 340 328z"
 ></path>,
 <path
   fill="#B4CECC"
   stroke="#B4CECC"
   d="M351 352L342 358 343 359z"
 ></path>,
 <path
   fill="#253232"
   stroke="#253232"
   d="M230 320L229 326 234 324z"
 ></path>,
 <path
   fill="#212C2D"
   stroke="#212C2D"
   d="M229 326L227 329 236 335z"
 ></path>,
 <path
   fill="#304542"
   stroke="#304542"
   d="M231 403L232 404 235 399z"
 ></path>,
 <path
   fill="#3B504A"
   stroke="#3B504A"
   d="M230 401L231 403 235 399z"
 ></path>,
 <path
   fill="#283631"
   stroke="#283631"
   d="M221 387L224 392 233 394z"
 ></path>,
 <path
   fill="#475A50"
   stroke="#475A50"
   d="M230 401L223 404 231 403z"
 ></path>,
 <path
   fill="#90A4A8"
   stroke="#90A4A8"
   d="M344 383L346 375 335 378z"
 ></path>,
 <path
   fill="#ABCBCC"
   stroke="#ABCBCC"
   d="M344 371L348 362 342 365z"
 ></path>,
 <path
   fill="#091214"
   stroke="#091214"
   d="M224 339L220 343 222 347z"
 ></path>,
 <path
   fill="#0B1619"
   stroke="#0B1619"
   d="M215 356L222 367 224 362z"
 ></path>,
 <path
   fill="#162323"
   stroke="#162323"
   d="M219 336L220 343 224 339z"
 ></path>,
 <path
   fill="#0F191C"
   stroke="#0F191C"
   d="M219 377L220 383 244 385z"
 ></path>,
 <path
   fill="#89979B"
   stroke="#89979B"
   d="M344 386L335 378 328 388z"
 ></path>,
 <path
   fill="#293D3A"
   stroke="#293D3A"
   d="M233 407L233 406 232 404z"
 ></path>,
 <path
   fill="#2A3E3C"
   stroke="#2A3E3C"
   d="M232 404L233 406 236 403z"
 ></path>,
 <path
   fill="#1B282B"
   stroke="#1B282B"
   d="M285 299L277 298 274 306z"
 ></path>,
 <path
   fill="#24302E"
   stroke="#24302E"
   d="M220 383L221 387 233 394z"
 ></path>,
 <path
   fill="#111E21"
   stroke="#111E21"
   d="M310 421L318 418 318 413z"
 ></path>,
 <path
   fill="#435751"
   stroke="#435751"
   d="M225 409L232 404 231 403z"
 ></path>,
 <path
   fill="#3F524F"
   stroke="#3F524F"
   d="M225 409L233 407 232 404z"
 ></path>,
 <path
   fill="#263A38"
   stroke="#263A38"
   d="M233 406L233 407 236 403z"
 ></path>,
 <path
   fill="#A7C4C5"
   stroke="#A7C4C5"
   d="M355 366L348 362 344 371z"
 ></path>,
 <path
   fill="#93BDBD"
   stroke="#93BDBD"
   d="M334 332L336 325 329 330z"
 ></path>,
 <path
   fill="#152429"
   stroke="#152429"
   d="M288 294L291 305 295 306z"
 ></path>,
 <path
   fill="#91B7B7"
   stroke="#91B7B7"
   d="M336 325L334 332 340 328z"
 ></path>,
 <path
   fill="#0F191B"
   stroke="#0F191B"
   d="M243 314L236 314 242 320z"
 ></path>,
 <path
   fill="#1C2627"
   stroke="#1C2627"
   d="M234 321L230 320 234 324z"
 ></path>,
 <path
   fill="#111E1F"
   stroke="#111E1F"
   d="M249 299L240 312 243 314z"
 ></path>,
 <path
   fill="#101B1D"
   stroke="#101B1D"
   d="M238 312L240 312 240 295z"
 ></path>,
 <path
   fill="#172426"
   stroke="#172426"
   d="M277 298L270 298 274 306z"
 ></path>,
 <path
   fill="#7C878B"
   stroke="#7C878B"
   d="M344 383L349 375 346 375z"
 ></path>,
 <path
   fill="#5B5C5F"
   stroke="#5B5C5F"
   d="M335 397L344 386 328 388z"
 ></path>,
 <path
   fill="#414144"
   stroke="#414144"
   d="M344 394L344 386 335 397z"
 ></path>,
 <path
   fill="#0A181E"
   stroke="#0A181E"
   d="M318 418L322 416 318 413z"
 ></path>,
 <path
   fill="#1C2728"
   stroke="#1C2728"
   d="M236 314L234 321 242 320z"
 ></path>,
 <path
   fill="#232F2F"
   stroke="#232F2F"
   d="M229 326L223 328 227 329z"
 ></path>,
 <path
   fill="#2E3E35"
   stroke="#2E3E35"
   d="M224 392L224 396 233 394z"
 ></path>,
 <path
   fill="#394A41"
   stroke="#394A41"
   d="M218 396L224 396 224 392z"
 ></path>,
 <path
   fill="#14282F"
   stroke="#14282F"
   d="M328 305L314 301 315 316z"
 ></path>,
 <path
   fill="#A4C5C4"
   stroke="#A4C5C4"
   d="M340 328L334 332 347 339z"
 ></path>,
 <path
   fill="#111E1F"
   stroke="#111E1F"
   d="M240 312L236 314 243 314z"
 ></path>,
 <path
   fill="#0A1519"
   stroke="#0A1519"
   d="M215 356L224 362 215 355z"
 ></path>,
 <path
   fill="#182326"
   stroke="#182326"
   d="M219 377L213 380 220 383z"
 ></path>,
 <path
   fill="#293737"
   stroke="#293737"
   d="M220 383L214 385 221 387z"
 ></path>,
 <path
   fill="#131E1F"
   stroke="#131E1F"
   d="M236 314L232 318 233 318z"
 ></path>,
 <path
   fill="#1A2425"
   stroke="#1A2425"
   d="M233 318L232 318 234 321z"
 ></path>,
 <path
   fill="#212F2D"
   stroke="#212F2D"
   d="M227 329L219 336 224 339z"
 ></path>,
 <path
   fill="#152123"
   stroke="#152123"
   d="M249 299L243 314 254 307z"
 ></path>,
 <path
   fill="#132021"
   stroke="#132021"
   d="M240 312L238 312 236 314z"
 ></path>,
 <path
   fill="#0B1619"
   stroke="#0B1619"
   d="M215 355L224 362 222 347z"
 ></path>,
 <path
   fill="#0E191A"
   stroke="#0E191A"
   d="M210 347L215 355 222 347z"
 ></path>,
 <path
   fill="#141E1F"
   stroke="#141E1F"
   d="M232 318L230 320 234 321z"
 ></path>,
 <path
   fill="#ABCACA"
   stroke="#ABCACA"
   d="M347 339L334 332 341 344z"
 ></path>,
 <path
   fill="#101C1D"
   stroke="#101C1D"
   d="M270 298L257 300 271 310z"
 ></path>,
 <path
   fill="#111B1C"
   stroke="#111B1C"
   d="M232 318L229 320 230 320z"
 ></path>,
 <path
   fill="#131A1C"
   stroke="#131A1C"
   d="M236 314L220 298 232 318z"
 ></path>,
 <path
   fill="#111D1F"
   stroke="#111D1F"
   d="M238 312L237 312 236 314z"
 ></path>,
 <path
   fill="#0C1618"
   stroke="#0C1618"
   d="M240 295L237 312 238 312z"
 ></path>,
 <path
   fill="#8FA8AA"
   stroke="#8FA8AA"
   d="M346 375L349 375 344 371z"
 ></path>,
 <path
   fill="#57595E"
   stroke="#57595E"
   d="M352 382L349 375 344 383z"
 ></path>,
 <path
   fill="#1C2727"
   stroke="#1C2727"
   d="M230 320L229 320 229 326z"
 ></path>,
 <path
   fill="#111B1C"
   stroke="#111B1C"
   d="M220 343L210 347 222 347z"
 ></path>,
 <path
   fill="#212A2C"
   stroke="#212A2C"
   d="M220 320L229 320 218 318z"
 ></path>,
 <path
   fill="#30383D"
   stroke="#30383D"
   d="M336 413L336 405 323 407z"
 ></path>,
 <path
   fill="#4A4A4E"
   stroke="#4A4A4E"
   d="M344 386L351 385 344 383z"
 ></path>,
 <path
   fill="#23322F"
   stroke="#23322F"
   d="M223 328L219 336 227 329z"
 ></path>,
 <path
   fill="#212C2D"
   stroke="#212C2D"
   d="M222 324L223 328 229 326z"
 ></path>,
 <path
   fill="#405148"
   stroke="#405148"
   d="M224 396L224 400 230 401z"
 ></path>,
 <path
   fill="#314239"
   stroke="#314239"
   d="M218 396L224 400 224 396z"
 ></path>,
 <path
   fill="#3B4B44"
   stroke="#3B4B44"
   d="M224 401L217 402 223 404z"
 ></path>,
 <path
   fill="#132024"
   stroke="#132024"
   d="M285 299L282 293 277 298z"
 ></path>,
 <path
   fill="#182628"
   stroke="#182628"
   d="M277 298L276 281 270 298z"
 ></path>,
 <path
   fill="#1E282A"
   stroke="#1E282A"
   d="M252 295L252 298 257 300z"
 ></path>,
 <path
   fill="#1C2D31"
   stroke="#1C2D31"
   d="M288 294L295 306 300 289z"
 ></path>,
 <path
   fill="#152930"
   stroke="#152930"
   d="M314 301L301 313 315 316z"
 ></path>,
 <path
   fill="#AFCBCB"
   stroke="#AFCBCB"
   d="M349 340L347 339 341 344z"
 ></path>,
 <path
   fill="#B2D0CF"
   stroke="#B2D0CF"
   d="M349 340L341 344 345 349z"
 ></path>,
 <path
   fill="#BED8D7"
   stroke="#BED8D7"
   d="M351 352L343 359 352 359z"
 ></path>,
 <path
   fill="#353A3E"
   stroke="#353A3E"
   d="M347 401L344 394 335 397z"
 ></path>,
 <path
   fill="#3D4E45"
   stroke="#3D4E45"
   d="M224 400L224 401 230 401z"
 ></path>,
 <path
   fill="#40534B"
   stroke="#40534B"
   d="M218 396L224 392 215 392z"
 ></path>,
 <path
   fill="#213033"
   stroke="#213033"
   d="M239 423L250 409 244 412z"
 ></path>,
 <path
   fill="#293132"
   stroke="#293132"
   d="M255 437L266 413 250 409z"
 ></path>,
 <path
   fill="#1D2B2C"
   stroke="#1D2B2C"
   d="M239 423L242 410 230 417z"
 ></path>,
 <path
   fill="#3D565C"
   stroke="#3D565C"
   d="M329 310L323 327 336 325z"
 ></path>,
 <path
   fill="#13292F"
   stroke="#13292F"
   d="M329 310L339 316 331 309z"
 ></path>,
 <path
   fill="#1A2826"
   stroke="#1A2826"
   d="M219 336L216 337 220 343z"
 ></path>,
 <path
   fill="#2A3A36"
   stroke="#2A3A36"
   d="M223 328L218 335 219 336z"
 ></path>,
 <path
   fill="#AEC7C6"
   stroke="#AEC7C6"
   d="M352 359L343 359 348 362z"
 ></path>,
 <path
   fill="#0C191E"
   stroke="#0C191E"
   d="M285 294L282 293 285 299z"
 ></path>,
 <path
   fill="#0C1A1F"
   stroke="#0C1A1F"
   d="M283 293L282 293 285 294z"
 ></path>,
 <path
   fill="#17252B"
   stroke="#17252B"
   d="M288 294L283 293 285 294z"
 ></path>,
 <path
   fill="#A9C4C3"
   stroke="#A9C4C3"
   d="M355 366L352 359 348 362z"
 ></path>,
 <path
   fill="#21312E"
   stroke="#21312E"
   d="M218 335L217 335 219 336z"
 ></path>,
 <path
   fill="#263431"
   stroke="#263431"
   d="M218 327L217 335 218 335z"
 ></path>,
 <path
   fill="#2C3A36"
   stroke="#2C3A36"
   d="M218 327L218 335 223 328z"
 ></path>,
 <path
   fill="#1A3237"
   stroke="#1A3237"
   d="M329 310L336 325 339 316z"
 ></path>,
 <path
   fill="#1C3439"
   stroke="#1C3439"
   d="M339 316L337 325 341 317z"
 ></path>,
 <path
   fill="#B1D0D0"
   stroke="#B1D0D0"
   d="M347 339L348 337 340 328z"
 ></path>,
 <path
   fill="#C9E6E4"
   stroke="#C9E6E4"
   d="M353 346L349 340 345 349z"
 ></path>,
 <path
   fill="#20302D"
   stroke="#20302D"
   d="M217 335L216 337 219 336z"
 ></path>,
 <path
   fill="#AAC6C7"
   stroke="#AAC6C7"
   d="M349 340L348 337 347 339z"
 ></path>,
 <path
   fill="#1E2B2B"
   stroke="#1E2B2B"
   d="M209 374L213 380 219 377z"
 ></path>,
 <path
   fill="#1D292A"
   stroke="#1D292A"
   d="M209 374L219 377 215 369z"
 ></path>,
 <path
   fill="#192525"
   stroke="#192525"
   d="M210 362L215 369 215 356z"
 ></path>,
 <path
   fill="#202D2A"
   stroke="#202D2A"
   d="M210 362L206 361 208 362z"
 ></path>,
 <path
   fill="#1E2C2C"
   stroke="#1E2C2C"
   d="M213 380L214 385 220 383z"
 ></path>,
 <path
   fill="#151F21"
   stroke="#151F21"
   d="M229 320L222 324 229 326z"
 ></path>,
 <path
   fill="#263531"
   stroke="#263531"
   d="M217 335L210 333 216 337z"
 ></path>,
 <path
   fill="#0D181A"
   stroke="#0D181A"
   d="M220 320L222 324 229 320z"
 ></path>,
 <path
   fill="#141E20"
   stroke="#141E20"
   d="M257 300L252 298 254 307z"
 ></path>,
 <path
   fill="#1C2526"
   stroke="#1C2526"
   d="M218 318L229 320 232 318z"
 ></path>,
 <path
   fill="#121D1F"
   stroke="#121D1F"
   d="M260 293L257 300 270 298z"
 ></path>,
 <path
   fill="#56675D"
   stroke="#56675D"
   d="M224 401L223 404 230 401z"
 ></path>,
 <path
   fill="#35443D"
   stroke="#35443D"
   d="M217 402L224 401 224 400z"
 ></path>,
 <path
   fill="#283533"
   stroke="#283533"
   d="M210 362L206 353 206 361z"
 ></path>,
 <path
   fill="#32433E"
   stroke="#32433E"
   d="M215 392L224 392 221 387z"
 ></path>,
 <path
   fill="#131D1F"
   stroke="#131D1F"
   d="M252 298L249 299 254 307z"
 ></path>,
 <path
   fill="#2B3C39"
   stroke="#2B3C39"
   d="M214 385L215 390 221 387z"
 ></path>,
 <path
   fill="#30363D"
   stroke="#30363D"
   d="M350 389L351 385 344 386z"
 ></path>,
 <path
   fill="#91ADAE"
   stroke="#91ADAE"
   d="M349 375L355 366 344 371z"
 ></path>,
 <path
   fill="#283037"
   stroke="#283037"
   d="M350 389L344 386 344 394z"
 ></path>,
 <path
   fill="#4E4E53"
   stroke="#4E4E53"
   d="M351 385L352 382 344 383z"
 ></path>,
 <path
   fill="#55585C"
   stroke="#55585C"
   d="M352 382L353 378 349 375z"
 ></path>,
 <path
   fill="#282F37"
   stroke="#282F37"
   d="M351 385L354 385 352 382z"
 ></path>,
 <path
   fill="#2F373F"
   stroke="#2F373F"
   d="M349 395L350 389 344 394z"
 ></path>,
 <path
   fill="#C8E4E2"
   stroke="#C8E4E2"
   d="M351 352L353 346 345 349z"
 ></path>,
 <path
   fill="#A7C3C5"
   stroke="#A7C3C5"
   d="M355 335L347 330 348 337z"
 ></path>,
 <path
   fill="#B0CCCA"
   stroke="#B0CCCA"
   d="M352 359L354 352 351 352z"
 ></path>,
 <path
   fill="#BCDAD8"
   stroke="#BCDAD8"
   d="M355 352L354 352 356 359z"
 ></path>,
 <path
   fill="#B1CECD"
   stroke="#B1CECD"
   d="M353 340L348 337 349 340z"
 ></path>,
 <path
   fill="#A5C4C5"
   stroke="#A5C4C5"
   d="M348 337L347 330 340 328z"
 ></path>,
 <path
   fill="#13282F"
   stroke="#13282F"
   d="M329 310L328 305 315 316z"
 ></path>,
 <path
   fill="#607D81"
   stroke="#607D81"
   d="M339 316L336 325 337 325z"
 ></path>,
 <path
   fill="#425650"
   stroke="#425650"
   d="M214 391L215 392 215 390z"
 ></path>,
 <path
   fill="#364843"
   stroke="#364843"
   d="M215 390L215 392 221 387z"
 ></path>,
 <path
   fill="#607169"
   stroke="#607169"
   d="M222 406L225 409 223 404z"
 ></path>,
 <path
   fill="#3D514A"
   stroke="#3D514A"
   d="M214 391L215 390 213 390z"
 ></path>,
 <path
   fill="#C6E3E1"
   stroke="#C6E3E1"
   d="M354 352L353 346 351 352z"
 ></path>,
 <path
   fill="#87A2A3"
   stroke="#87A2A3"
   d="M356 367L355 366 349 375z"
 ></path>,
 <path
   fill="#4E5F57"
   stroke="#4E5F57"
   d="M223 404L225 409 231 403z"
 ></path>,
 <path
   fill="#3A4942"
   stroke="#3A4942"
   d="M222 406L217 405 221 407z"
 ></path>,
 <path
   fill="#172224"
   stroke="#172224"
   d="M276 281L260 293 270 298z"
 ></path>,
 <path
   fill="#172123"
   stroke="#172123"
   d="M252 298L252 295 249 299z"
 ></path>,
 <path
   fill="#1C2828"
   stroke="#1C2828"
   d="M222 324L218 327 223 328z"
 ></path>,
 <path
   fill="#212F2D"
   stroke="#212F2D"
   d="M216 337L210 347 220 343z"
 ></path>,
 <path
   fill="#182325"
   stroke="#182325"
   d="M220 320L218 327 222 324z"
 ></path>,
 <path
   fill="#364840"
   stroke="#364840"
   d="M217 402L224 400 218 396z"
 ></path>,
 <path
   fill="#3D5047"
   stroke="#3D5047"
   d="M213 390L215 390 214 385z"
 ></path>,
 <path
   fill="#43574D"
   stroke="#43574D"
   d="M213 390L214 385 206 385z"
 ></path>,
 <path
   fill="#222C33"
   stroke="#222C33"
   d="M322 416L336 413 323 407z"
 ></path>,
 <path
   fill="#31373E"
   stroke="#31373E"
   d="M347 401L349 395 344 394z"
 ></path>,
 <path
   fill="#2C363A"
   stroke="#2C363A"
   d="M332 421L336 413 322 416z"
 ></path>,
 <path
   fill="#152026"
   stroke="#152026"
   d="M328 422L322 416 318 418z"
 ></path>,
 <path
   fill="#121C1E"
   stroke="#121C1E"
   d="M260 293L259 293 257 300z"
 ></path>,
 <path
   fill="#202F2D"
   stroke="#202F2D"
   d="M208 344L210 347 216 337z"
 ></path>,
 <path
   fill="#4A5952"
   stroke="#4A5952"
   d="M222 408L222 406 221 407z"
 ></path>,
 <path
   fill="#263838"
   stroke="#263838"
   d="M230 417L242 410 233 407z"
 ></path>,
 <path
   fill="#263431"
   stroke="#263431"
   d="M207 365L209 374 215 369z"
 ></path>,
 <path
   fill="#263431"
   stroke="#263431"
   d="M207 365L215 369 210 362z"
 ></path>,
 <path
   fill="#C4E1DF"
   stroke="#C4E1DF"
   d="M354 352L356 350 353 346z"
 ></path>,
 <path
   fill="#BDD6D5"
   stroke="#BDD6D5"
   d="M356 359L354 352 352 359z"
 ></path>,
 <path
   fill="#2E494E"
   stroke="#2E494E"
   d="M341 317L337 325 346 323z"
 ></path>,
 <path
   fill="#222F2E"
   stroke="#222F2E"
   d="M210 362L215 356 206 353z"
 ></path>,
 <path
   fill="#12282F"
   stroke="#12282F"
   d="M331 309L328 305 329 310z"
 ></path>,
 <path
   fill="#0F262C"
   stroke="#0F262C"
   d="M332 307L328 305 331 309z"
 ></path>,
 <path
   fill="#3D4C46"
   stroke="#3D4C46"
   d="M222 406L223 404 217 405z"
 ></path>,
 <path
   fill="#2E3F3B"
   stroke="#2E3F3B"
   d="M206 385L214 385 213 380z"
 ></path>,
 <path
   fill="#A2BEBD"
   stroke="#A2BEBD"
   d="M355 366L356 359 352 359z"
 ></path>,
 <path
   fill="#94B3B2"
   stroke="#94B3B2"
   d="M355 366L360 362 356 359z"
 ></path>,
 <path
   fill="#839094"
   stroke="#839094"
   d="M357 374L356 367 349 375z"
 ></path>,
 <path
   fill="#5A5E63"
   stroke="#5A5E63"
   d="M357 374L349 375 353 378z"
 ></path>,
 <path
   fill="#2F3841"
   stroke="#2F3841"
   d="M350 389L354 385 351 385z"
 ></path>,
 <path
   fill="#3B4046"
   stroke="#3B4046"
   d="M352 382L354 385 353 378z"
 ></path>,
 <path
   fill="#1C282E"
   stroke="#1C282E"
   d="M347 401L335 397 336 405z"
 ></path>,
 <path
   fill="#181E20"
   stroke="#181E20"
   d="M218 318L232 318 220 298z"
 ></path>,
 <path
   fill="#192325"
   stroke="#192325"
   d="M259 293L252 295 257 300z"
 ></path>,
 <path
   fill="#C9E6E4"
   stroke="#C9E6E4"
   d="M357 349L354 344 353 346z"
 ></path>,
 <path
   fill="#CAE8E4"
   stroke="#CAE8E4"
   d="M353 346L354 344 349 340z"
 ></path>,
 <path
   fill="#BBD9D7"
   stroke="#BBD9D7"
   d="M356 350L354 352 355 352z"
 ></path>,
 <path
   fill="#739397"
   stroke="#739397"
   d="M346 323L337 325 340 328z"
 ></path>,
 <path
   fill="#C2E0DC"
   stroke="#C2E0DC"
   d="M354 344L353 340 349 340z"
 ></path>,
 <path
   fill="#1B2C30"
   stroke="#1B2C30"
   d="M314 301L300 289 295 306z"
 ></path>,
 <path
   fill="#344144"
   stroke="#344144"
   d="M291 277L276 281 283 293z"
 ></path>,
 <path
   fill="#1B3033"
   stroke="#1B3033"
   d="M321 298L315 296 314 301z"
 ></path>,
 <path
   fill="#394348"
   stroke="#394348"
   d="M328 423L318 418 310 421z"
 ></path>,
 <path
   fill="#172024"
   stroke="#172024"
   d="M328 423L328 422 318 418z"
 ></path>,
 <path
   fill="#10272E"
   stroke="#10272E"
   d="M336 308L332 307 331 309z"
 ></path>,
 <path
   fill="#739095"
   stroke="#739095"
   d="M346 323L340 328 347 330z"
 ></path>,
 <path
   fill="#384A48"
   stroke="#384A48"
   d="M227 414L233 407 225 409z"
 ></path>,
 <path
   fill="#2C3C3B"
   stroke="#2C3C3B"
   d="M227 414L230 417 233 407z"
 ></path>,
 <path
   fill="#4F6259"
   stroke="#4F6259"
   d="M222 406L222 408 225 409z"
 ></path>,
 <path
   fill="#4F625A"
   stroke="#4F625A"
   d="M218 396L215 400 217 402z"
 ></path>,
 <path
   fill="#3E4F4B"
   stroke="#3E4F4B"
   d="M220 415L227 414 225 409z"
 ></path>,
 <path
   fill="#272F32"
   stroke="#272F32"
   d="M332 421L337 414 336 413z"
 ></path>,
 <path
   fill="#4D5255"
   stroke="#4D5255"
   d="M336 413L340 413 336 405z"
 ></path>,
 <path
   fill="#263230"
   stroke="#263230"
   d="M208 362L207 365 210 362z"
 ></path>,
 <path
   fill="#24302D"
   stroke="#24302D"
   d="M206 361L207 365 208 362z"
 ></path>,
 <path
   fill="#192C32"
   stroke="#192C32"
   d="M328 305L321 298 314 301z"
 ></path>,
 <path
   fill="#162C32"
   stroke="#162C32"
   d="M338 311L331 309 339 316z"
 ></path>,
 <path
   fill="#C6E5E0"
   stroke="#C6E5E0"
   d="M354 344L357 341 353 340z"
 ></path>,
 <path
   fill="#BDDBD8"
   stroke="#BDDBD8"
   d="M357 349L356 350 355 352z"
 ></path>,
 <path
   fill="#4E6058"
   stroke="#4E6058"
   d="M222 408L220 415 225 409z"
 ></path>,
 <path
   fill="#4A5E57"
   stroke="#4A5E57"
   d="M218 396L212 399 215 400z"
 ></path>,
 <path
   fill="#17272E"
   stroke="#17272E"
   d="M353 394L354 385 350 389z"
 ></path>,
 <path
   fill="#374147"
   stroke="#374147"
   d="M346 408L347 401 336 405z"
 ></path>,
 <path
   fill="#1D2A32"
   stroke="#1D2A32"
   d="M349 395L353 394 350 389z"
 ></path>,
 <path
   fill="#233231"
   stroke="#233231"
   d="M208 337L208 344 216 337z"
 ></path>,
 <path
   fill="#0F1619"
   stroke="#0F1619"
   d="M236 314L237 312 220 298z"
 ></path>,
 <path
   fill="#162E34"
   stroke="#162E34"
   d="M347 322L346 323 350 323z"
 ></path>,
 <path
   fill="#3D4246"
   stroke="#3D4246"
   d="M335 426L328 423 310 421z"
 ></path>,
 <path
   fill="#1D262A"
   stroke="#1D262A"
   d="M328 422L332 421 322 416z"
 ></path>,
 <path
   fill="#455952"
   stroke="#455952"
   d="M218 396L215 392 212 399z"
 ></path>,
 <path
   fill="#1D2F36"
   stroke="#1D2F36"
   d="M332 301L321 298 328 305z"
 ></path>,
 <path
   fill="#54555A"
   stroke="#54555A"
   d="M359 376L357 374 353 378z"
 ></path>,
 <path
   fill="#89A7A7"
   stroke="#89A7A7"
   d="M356 367L360 362 355 366z"
 ></path>,
 <path
   fill="#B2CDCC"
   stroke="#B2CDCC"
   d="M356 359L357 349 355 352z"
 ></path>,
 <path
   fill="#192627"
   stroke="#192627"
   d="M206 353L215 356 215 355z"
 ></path>,
 <path
   fill="#21302F"
   stroke="#21302F"
   d="M206 385L213 380 209 374z"
 ></path>,
 <path
   fill="#203437"
   stroke="#203437"
   d="M307 289L314 301 315 296z"
 ></path>,
 <path
   fill="#2F4245"
   stroke="#2F4245"
   d="M307 289L300 289 314 301z"
 ></path>,
 <path
   fill="#1D2B30"
   stroke="#1D2B30"
   d="M283 293L276 281 282 293z"
 ></path>,
 <path
   fill="#243235"
   stroke="#243235"
   d="M282 293L276 281 277 298z"
 ></path>,
 <path
   fill="#262E31"
   stroke="#262E31"
   d="M260 293L268 276 259 293z"
 ></path>,
 <path
   fill="#142B30"
   stroke="#142B30"
   d="M347 322L342 316 341 317z"
 ></path>,
 <path
   fill="#132A30"
   stroke="#132A30"
   d="M341 317L342 316 339 316z"
 ></path>,
 <path
   fill="#C4E1DF"
   stroke="#C4E1DF"
   d="M356 350L357 349 353 346z"
 ></path>,
 <path
   fill="#364F54"
   stroke="#364F54"
   d="M350 323L346 323 347 330z"
 ></path>,
 <path
   fill="#BAD7D7"
   stroke="#BAD7D7"
   d="M362 347L357 349 356 359z"
 ></path>,
 <path
   fill="#213030"
   stroke="#213030"
   d="M210 347L206 353 215 355z"
 ></path>,
 <path
   fill="#33413B"
   stroke="#33413B"
   d="M210 333L217 335 218 327z"
 ></path>,
 <path
   fill="#0E242B"
   stroke="#0E242B"
   d="M332 307L332 302 328 305z"
 ></path>,
 <path
   fill="#142B31"
   stroke="#142B31"
   d="M341 313L338 311 339 316z"
 ></path>,
 <path
   fill="#34433C"
   stroke="#34433C"
   d="M217 405L220 408 221 407z"
 ></path>,
 <path
   fill="#546861"
   stroke="#546861"
   d="M214 401L215 400 212 399z"
 ></path>,
 <path
   fill="#41554F"
   stroke="#41554F"
   d="M215 392L214 391 212 399z"
 ></path>,
 <path
   fill="#1A2023"
   stroke="#1A2023"
   d="M328 423L332 421 328 422z"
 ></path>,
 <path
   fill="#4E5557"
   stroke="#4E5557"
   d="M337 414L340 413 336 413z"
 ></path>,
 <path
   fill="#565A5E"
   stroke="#565A5E"
   d="M342 417L340 413 337 414z"
 ></path>,
 <path
   fill="#394842"
   stroke="#394842"
   d="M217 405L223 404 217 402z"
 ></path>,
 <path
   fill="#42524A"
   stroke="#42524A"
   d="M221 407L220 408 222 408z"
 ></path>,
 <path
   fill="#263532"
   stroke="#263532"
   d="M227 414L220 416 230 417z"
 ></path>,
 <path
   fill="#2F3E38"
   stroke="#2F3E38"
   d="M203 351L206 353 210 347z"
 ></path>,
 <path
   fill="#12282F"
   stroke="#12282F"
   d="M337 307L336 308 338 311z"
 ></path>,
 <path
   fill="#152E32"
   stroke="#152E32"
   d="M346 323L347 322 341 317z"
 ></path>,
 <path
   fill="#ADC8C7"
   stroke="#ADC8C7"
   d="M355 335L348 337 353 340z"
 ></path>,
 <path
   fill="#14282F"
   stroke="#14282F"
   d="M338 311L336 308 331 309z"
 ></path>,
 <path
   fill="#142B31"
   stroke="#142B31"
   d="M341 313L339 316 342 316z"
 ></path>,
 <path
   fill="#172E34"
   stroke="#172E34"
   d="M343 313L341 313 342 316z"
 ></path>,
 <path
   fill="#3F524E"
   stroke="#3F524E"
   d="M215 405L217 405 217 402z"
 ></path>,
 <path
   fill="#323A40"
   stroke="#323A40"
   d="M356 403L349 395 347 401z"
 ></path>,
 <path
   fill="#273138"
   stroke="#273138"
   d="M356 403L353 394 349 395z"
 ></path>,
 <path
   fill="#3A3F46"
   stroke="#3A3F46"
   d="M354 385L359 376 353 378z"
 ></path>,
 <path
   fill="#142B32"
   stroke="#142B32"
   d="M336 308L335 306 332 307z"
 ></path>,
 <path
   fill="#193038"
   stroke="#193038"
   d="M337 307L335 306 336 308z"
 ></path>,
 <path
   fill="#556964"
   stroke="#556964"
   d="M215 400L214 401 217 402z"
 ></path>,
 <path
   fill="#425750"
   stroke="#425750"
   d="M212 399L214 391 205 393z"
 ></path>,
 <path
   fill="#415750"
   stroke="#415750"
   d="M214 391L213 390 205 393z"
 ></path>,
 <path
   fill="#172222"
   stroke="#172222"
   d="M211 324L210 333 218 327z"
 ></path>,
 <path
   fill="#253431"
   stroke="#253431"
   d="M208 344L203 351 210 347z"
 ></path>,
 <path
   fill="#99B2B3"
   stroke="#99B2B3"
   d="M360 369L360 362 356 367z"
 ></path>,
 <path
   fill="#677173"
   stroke="#677173"
   d="M360 369L356 367 357 374z"
 ></path>,
 <path
   fill="#242E35"
   stroke="#242E35"
   d="M364 384L359 376 354 385z"
 ></path>,
 <path
   fill="#405458"
   stroke="#405458"
   d="M307 289L315 296 319 283z"
 ></path>,
 <path
   fill="#546D6E"
   stroke="#546D6E"
   d="M307 281L307 289 319 283z"
 ></path>,
 <path
   fill="#C8E6E2"
   stroke="#C8E6E2"
   d="M357 349L357 341 354 344z"
 ></path>,
 <path
   fill="#C0DBD9"
   stroke="#C0DBD9"
   d="M362 347L357 341 357 349z"
 ></path>,
 <path
   fill="#B8D4D2"
   stroke="#B8D4D2"
   d="M357 341L355 335 353 340z"
 ></path>,
 <path
   fill="#57595D"
   stroke="#57595D"
   d="M359 376L360 369 357 374z"
 ></path>,
 <path
   fill="#121C1C"
   stroke="#121C1C"
   d="M211 323L211 324 218 327z"
 ></path>,
 <path
   fill="#162123"
   stroke="#162123"
   d="M240 295L240 312 249 299z"
 ></path>,
 <path
   fill="#4D5256"
   stroke="#4D5256"
   d="M340 413L346 408 336 405z"
 ></path>,
 <path
   fill="#65696B"
   stroke="#65696B"
   d="M342 417L346 408 340 413z"
 ></path>,
 <path
   fill="#233231"
   stroke="#233231"
   d="M210 333L208 337 216 337z"
 ></path>,
 <path
   fill="#11272E"
   stroke="#11272E"
   d="M335 306L332 302 332 307z"
 ></path>,
 <path
   fill="#132B31"
   stroke="#132B31"
   d="M338 306L337 307 338 311z"
 ></path>,
 <path
   fill="#2C3B37"
   stroke="#2C3B37"
   d="M204 374L209 374 207 365z"
 ></path>,
 <path
   fill="#4E625D"
   stroke="#4E625D"
   d="M214 401L215 405 217 402z"
 ></path>,
 <path
   fill="#2B3C36"
   stroke="#2B3C36"
   d="M199 368L204 374 207 365z"
 ></path>,
 <path
   fill="#293632"
   stroke="#293632"
   d="M199 368L207 365 206 361z"
 ></path>,
 <path
   fill="#444546"
   stroke="#444546"
   d="M255 444L335 426 310 421z"
 ></path>,
 <path
   fill="#2A2D2E"
   stroke="#2A2D2E"
   d="M239 423L255 437 250 409z"
 ></path>,
 <path
   fill="#4E4440"
   stroke="#4E4440"
   d="M248 438L255 437 239 423z"
 ></path>,
 <path
   fill="#192D32"
   stroke="#192D32"
   d="M332 301L332 302 338 306z"
 ></path>,
 <path
   fill="#12272D"
   stroke="#12272D"
   d="M341 313L338 306 338 311z"
 ></path>,
 <path
   fill="#142C31"
   stroke="#142C31"
   d="M347 322L343 313 342 316z"
 ></path>,
 <path
   fill="#162D34"
   stroke="#162D34"
   d="M355 311L343 313 347 322z"
 ></path>,
 <path
   fill="#19323A"
   stroke="#19323A"
   d="M351 323L350 323 354 325z"
 ></path>,
 <path
   fill="#445854"
   stroke="#445854"
   d="M214 405L215 405 214 401z"
 ></path>,
 <path
   fill="#32433E"
   stroke="#32433E"
   d="M217 405L215 407 220 408z"
 ></path>,
 <path
   fill="#41524A"
   stroke="#41524A"
   d="M220 408L220 415 222 408z"
 ></path>,
 <path
   fill="#2F4240"
   stroke="#2F4240"
   d="M204 374L206 385 209 374z"
 ></path>,
 <path
   fill="#152C31"
   stroke="#152C31"
   d="M338 306L332 302 335 306z"
 ></path>,
 <path
   fill="#182B32"
   stroke="#182B32"
   d="M332 302L332 301 328 305z"
 ></path>,
 <path
   fill="#132B32"
   stroke="#132B32"
   d="M338 306L335 306 337 307z"
 ></path>,
 <path
   fill="#334C53"
   stroke="#334C53"
   d="M354 325L350 323 347 330z"
 ></path>,
 <path
   fill="#1A3239"
   stroke="#1A3239"
   d="M350 323L351 323 347 322z"
 ></path>,
 <path
   fill="#243231"
   stroke="#243231"
   d="M204 341L205 342 208 337z"
 ></path>,
 <path
   fill="#2A3836"
   stroke="#2A3836"
   d="M208 337L205 342 208 344z"
 ></path>,
 <path
   fill="#263432"
   stroke="#263432"
   d="M206 353L201 356 206 361z"
 ></path>,
 <path
   fill="#1B292A"
   stroke="#1B292A"
   d="M206 335L208 337 210 333z"
 ></path>,
 <path
   fill="#2B3B35"
   stroke="#2B3B35"
   d="M205 342L203 351 208 344z"
 ></path>,
 <path
   fill="#142A2F"
   stroke="#142A2F"
   d="M332 301L338 306 342 301z"
 ></path>,
 <path
   fill="#132A30"
   stroke="#132A30"
   d="M343 313L338 306 341 313z"
 ></path>,
 <path
   fill="#3A4B47"
   stroke="#3A4B47"
   d="M215 405L215 407 217 405z"
 ></path>,
 <path
   fill="#191E21"
   stroke="#191E21"
   d="M230 417L232 430 239 423z"
 ></path>,
 <path
   fill="#445755"
   stroke="#445755"
   d="M212 404L214 405 214 401z"
 ></path>,
 <path
   fill="#526664"
   stroke="#526664"
   d="M212 404L214 401 212 399z"
 ></path>,
 <path
   fill="#141E20"
   stroke="#141E20"
   d="M252 295L240 295 249 299z"
 ></path>,
 <path
   fill="#21282A"
   stroke="#21282A"
   d="M248 280L240 295 252 295z"
 ></path>,
 <path
   fill="#3A4C49"
   stroke="#3A4C49"
   d="M214 405L215 407 215 405z"
 ></path>,
 <path
   fill="#31353A"
   stroke="#31353A"
   d="M332 421L342 417 337 414z"
 ></path>,
 <path
   fill="#0F2228"
   stroke="#0F2228"
   d="M346 408L351 408 347 401z"
 ></path>,
 <path
   fill="#5A5C5E"
   stroke="#5A5C5E"
   d="M335 426L342 417 332 421z"
 ></path>,
 <path
   fill="#34413D"
   stroke="#34413D"
   d="M213 414L220 415 220 408z"
 ></path>,
 <path
   fill="#162022"
   stroke="#162022"
   d="M201 327L206 335 210 333z"
 ></path>,
 <path
   fill="#33433B"
   stroke="#33433B"
   d="M205 342L200 343 203 351z"
 ></path>,
 <path
   fill="#182223"
   stroke="#182223"
   d="M211 323L218 327 220 320z"
 ></path>,
 <path
   fill="#111A1D"
   stroke="#111A1D"
   d="M211 323L220 320 218 318z"
 ></path>,
 <path
   fill="#152022"
   stroke="#152022"
   d="M206 335L204 341 208 337z"
 ></path>,
 <path
   fill="#2E3B36"
   stroke="#2E3B36"
   d="M213 414L220 416 220 415z"
 ></path>,
 <path
   fill="#3E514E"
   stroke="#3E514E"
   d="M214 405L212 407 215 407z"
 ></path>,
 <path
   fill="#41514E"
   stroke="#41514E"
   d="M210 407L212 404 209 406z"
 ></path>,
 <path
   fill="#79858A"
   stroke="#79858A"
   d="M360 369L363 368 360 362z"
 ></path>,
 <path
   fill="#ADCACA"
   stroke="#ADCACA"
   d="M360 362L362 347 356 359z"
 ></path>,
 <path
   fill="#595A5F"
   stroke="#595A5F"
   d="M359 376L363 368 360 369z"
 ></path>,
 <path
   fill="#394048"
   stroke="#394048"
   d="M367 380L363 368 359 376z"
 ></path>,
 <path
   fill="#33433D"
   stroke="#33433D"
   d="M195 348L201 356 203 351z"
 ></path>,
 <path
   fill="#374640"
   stroke="#374640"
   d="M203 351L201 356 206 353z"
 ></path>,
 <path
   fill="#536D73"
   stroke="#536D73"
   d="M355 335L354 325 347 330z"
 ></path>,
 <path
   fill="#152D35"
   stroke="#152D35"
   d="M347 307L344 304 343 313z"
 ></path>,
 <path
   fill="#19343B"
   stroke="#19343B"
   d="M359 332L354 325 355 335z"
 ></path>,
 <path
   fill="#738B8E"
   stroke="#738B8E"
   d="M359 332L355 335 361 337z"
 ></path>,
 <path
   fill="#141C1F"
   stroke="#141C1F"
   d="M211 324L209 325 210 333z"
 ></path>,
 <path
   fill="#131F20"
   stroke="#131F20"
   d="M214 317L211 323 218 318z"
 ></path>,
 <path
   fill="#364541"
   stroke="#364541"
   d="M213 414L220 408 215 407z"
 ></path>,
 <path
   fill="#33423E"
   stroke="#33423E"
   d="M220 415L220 416 227 414z"
 ></path>,
 <path
   fill="#B8D3D2"
   stroke="#B8D3D2"
   d="M367 348L362 347 360 362z"
 ></path>,
 <path
   fill="#12181B"
   stroke="#12181B"
   d="M220 298L214 317 218 318z"
 ></path>,
 <path
   fill="#344549"
   stroke="#344549"
   d="M291 277L288 294 300 289z"
 ></path>,
 <path
   fill="#152328"
   stroke="#152328"
   d="M291 277L283 293 288 294z"
 ></path>,
 <path
   fill="#242B2D"
   stroke="#242B2D"
   d="M259 293L248 280 252 295z"
 ></path>,
 <path
   fill="#384C46"
   stroke="#384C46"
   d="M206 385L205 392 213 390z"
 ></path>,
 <path
   fill="#2E413D"
   stroke="#2E413D"
   d="M202 393L205 392 198 390z"
 ></path>,
 <path
   fill="#314543"
   stroke="#314543"
   d="M197 385L206 385 195 381z"
 ></path>,
 <path
   fill="#25312F"
   stroke="#25312F"
   d="M200 340L200 343 204 341z"
 ></path>,
 <path
   fill="#1D2627"
   stroke="#1D2627"
   d="M211 323L209 325 211 324z"
 ></path>,
 <path
   fill="#1C2325"
   stroke="#1C2325"
   d="M201 327L209 325 206 317z"
 ></path>,
 <path
   fill="#505054"
   stroke="#505054"
   d="M328 423L335 426 332 421z"
 ></path>,
 <path
   fill="#2F2F30"
   stroke="#2F2F30"
   d="M255 444L310 421 267 431z"
 ></path>,
 <path
   fill="#493F3C"
   stroke="#493F3C"
   d="M232 430L248 438 239 423z"
 ></path>,
 <path
   fill="#282728"
   stroke="#282728"
   d="M255 437L255 444 267 431z"
 ></path>,
 <path
   fill="#40464C"
   stroke="#40464C"
   d="M356 408L351 408 353 414z"
 ></path>,
 <path
   fill="#2C363C"
   stroke="#2C363C"
   d="M353 414L351 408 346 408z"
 ></path>,
 <path
   fill="#212F35"
   stroke="#212F35"
   d="M353 394L361 389 354 385z"
 ></path>,
 <path
   fill="#435853"
   stroke="#435853"
   d="M205 392L205 393 213 390z"
 ></path>,
 <path
   fill="#344845"
   stroke="#344845"
   d="M202 393L205 393 205 392z"
 ></path>,
 <path
   fill="#3E4E4C"
   stroke="#3E4E4C"
   d="M210 407L212 407 212 404z"
 ></path>,
 <path
   fill="#3F5250"
   stroke="#3F5250"
   d="M212 404L212 407 214 405z"
 ></path>,
 <path
   fill="#97AEAE"
   stroke="#97AEAE"
   d="M361 337L355 335 357 341z"
 ></path>,
 <path
   fill="#293935"
   stroke="#293935"
   d="M201 356L199 368 206 361z"
 ></path>,
 <path
   fill="#BFD6D3"
   stroke="#BFD6D3"
   d="M362 347L361 337 357 341z"
 ></path>,
 <path
   fill="#263337"
   stroke="#263337"
   d="M360 398L361 389 353 394z"
 ></path>,
 <path
   fill="#1F1F21"
   stroke="#1F1F21"
   d="M228 430L230 417 224 430z"
 ></path>,
 <path
   fill="#212224"
   stroke="#212224"
   d="M228 430L232 430 230 417z"
 ></path>,
 <path
   fill="#2D3A41"
   stroke="#2D3A41"
   d="M351 408L355 404 347 401z"
 ></path>,
 <path
   fill="#3B4148"
   stroke="#3B4148"
   d="M356 408L355 404 351 408z"
 ></path>,
 <path
   fill="#8D9DA0"
   stroke="#8D9DA0"
   d="M363 368L366 363 360 362z"
 ></path>,
 <path
   fill="#A4B8B8"
   stroke="#A4B8B8"
   d="M370 336L363 334 361 337z"
 ></path>,
 <path
   fill="#656A6D"
   stroke="#656A6D"
   d="M371 361L366 363 371 365z"
 ></path>,
 <path
   fill="#203035"
   stroke="#203035"
   d="M342 301L334 297 332 301z"
 ></path>,
 <path
   fill="#223136"
   stroke="#223136"
   d="M332 301L334 297 321 298z"
 ></path>,
 <path
   fill="#142C33"
   stroke="#142C33"
   d="M344 304L338 306 343 313z"
 ></path>,
 <path
   fill="#3E4648"
   stroke="#3E4648"
   d="M356 408L356 403 355 404z"
 ></path>,
 <path
   fill="#4D555A"
   stroke="#4D555A"
   d="M355 404L356 403 347 401z"
 ></path>,
 <path
   fill="#394645"
   stroke="#394645"
   d="M212 407L213 414 215 407z"
 ></path>,
 <path
   fill="#394946"
   stroke="#394946"
   d="M209 406L212 404 206 402z"
 ></path>,
 <path
   fill="#2B3735"
   stroke="#2B3735"
   d="M204 341L200 343 205 342z"
 ></path>,
 <path
   fill="#2A3C39"
   stroke="#2A3C39"
   d="M194 361L197 368 199 368z"
 ></path>,
 <path
   fill="#1B2626"
   stroke="#1B2626"
   d="M200 340L204 341 206 335z"
 ></path>,
 <path
   fill="#10181B"
   stroke="#10181B"
   d="M240 295L233 294 237 312z"
 ></path>,
 <path
   fill="#1E2226"
   stroke="#1E2226"
   d="M244 280L233 294 240 295z"
 ></path>,
 <path
   fill="#17262E"
   stroke="#17262E"
   d="M365 393L364 384 361 389z"
 ></path>,
 <path
   fill="#222F35"
   stroke="#222F35"
   d="M361 389L364 384 354 385z"
 ></path>,
 <path
   fill="#32403F"
   stroke="#32403F"
   d="M210 407L213 414 212 407z"
 ></path>,
 <path
   fill="#3F524E"
   stroke="#3F524E"
   d="M206 402L212 404 212 399z"
 ></path>,
 <path
   fill="#354840"
   stroke="#354840"
   d="M199 368L196 374 204 374z"
 ></path>,
 <path
   fill="#3D504A"
   stroke="#3D504A"
   d="M204 398L206 402 212 399z"
 ></path>,
 <path
   fill="#324641"
   stroke="#324641"
   d="M194 361L199 368 201 356z"
 ></path>,
 <path
   fill="#32423A"
   stroke="#32423A"
   d="M200 343L197 346 203 351z"
 ></path>,
 <path
   fill="#111A1D"
   stroke="#111A1D"
   d="M198 339L200 340 200 332z"
 ></path>,
 <path
   fill="#443B35"
   stroke="#443B35"
   d="M248 438L255 444 255 437z"
 ></path>,
 <path
   fill="#3C3634"
   stroke="#3C3634"
   d="M232 450L255 444 248 438z"
 ></path>,
 <path
   fill="#3C4F4A"
   stroke="#3C4F4A"
   d="M204 398L212 399 205 393z"
 ></path>,
 <path
   fill="#2F4240"
   stroke="#2F4240"
   d="M198 390L205 392 206 385z"
 ></path>,
 <path
   fill="#374A46"
   stroke="#374A46"
   d="M202 393L204 398 205 393z"
 ></path>,
 <path
   fill="#243138"
   stroke="#243138"
   d="M356 403L360 398 353 394z"
 ></path>,
 <path
   fill="#152D35"
   stroke="#152D35"
   d="M347 322L351 323 355 311z"
 ></path>,
 <path
   fill="#152B33"
   stroke="#152B33"
   d="M347 307L343 313 355 311z"
 ></path>,
 <path
   fill="#44565A"
   stroke="#44565A"
   d="M307 289L307 281 300 289z"
 ></path>,
 <path
   fill="#2D4044"
   stroke="#2D4044"
   d="M319 283L315 296 321 298z"
 ></path>,
 <path
   fill="#112933"
   stroke="#112933"
   d="M355 311L351 323 356 312z"
 ></path>,
 <path
   fill="#293231"
   stroke="#293231"
   d="M206 412L213 414 210 407z"
 ></path>,
 <path
   fill="#333E3D"
   stroke="#333E3D"
   d="M206 412L210 407 209 406z"
 ></path>,
 <path
   fill="#122E36"
   stroke="#122E36"
   d="M359 332L363 321 354 325z"
 ></path>,
 <path
   fill="#A4B7B7"
   stroke="#A4B7B7"
   d="M361 337L363 334 359 332z"
 ></path>,
 <path
   fill="#C3D8D3"
   stroke="#C3D8D3"
   d="M367 344L361 337 362 347z"
 ></path>,
 <path
   fill="#40322D"
   stroke="#40322D"
   d="M232 430L228 434 248 438z"
 ></path>,
 <path
   fill="#1A2425"
   stroke="#1A2425"
   d="M218 424L230 417 220 416z"
 ></path>,
 <path
   fill="#273B3F"
   stroke="#273B3F"
   d="M327 287L319 283 321 298z"
 ></path>,
 <path
   fill="#142C34"
   stroke="#142C34"
   d="M344 304L342 301 338 306z"
 ></path>,
 <path
   fill="#142C35"
   stroke="#142C35"
   d="M349 302L342 301 344 304z"
 ></path>,
 <path
   fill="#A1BAB9"
   stroke="#A1BAB9"
   d="M366 363L367 348 360 362z"
 ></path>,
 <path
   fill="#374643"
   stroke="#374643"
   d="M206 402L206 404 209 406z"
 ></path>,
 <path
   fill="#2F3D3A"
   stroke="#2F3D3A"
   d="M205 404L206 404 206 402z"
 ></path>,
 <path
   fill="#323E3C"
   stroke="#323E3C"
   d="M205 404L206 402 203 404z"
 ></path>,
 <path
   fill="#1A343D"
   stroke="#1A343D"
   d="M349 302L346 305 347 307z"
 ></path>,
 <path
   fill="#183139"
   stroke="#183139"
   d="M347 307L346 305 344 304z"
 ></path>,
 <path
   fill="#3C4D50"
   stroke="#3C4D50"
   d="M307 281L291 277 300 289z"
 ></path>,
 <path
   fill="#4D5354"
   stroke="#4D5354"
   d="M353 414L346 408 342 417z"
 ></path>,
 <path
   fill="#273538"
   stroke="#273538"
   d="M368 408L364 397 360 398z"
 ></path>,
 <path
   fill="#253635"
   stroke="#253635"
   d="M197 342L197 346 200 343z"
 ></path>,
 <path
   fill="#2E3741"
   stroke="#2E3741"
   d="M364 384L367 380 359 376z"
 ></path>,
 <path
   fill="#A7BBB9"
   stroke="#A7BBB9"
   d="M366 363L371 361 367 348z"
 ></path>,
 <path
   fill="#29383F"
   stroke="#29383F"
   d="M368 383L367 380 364 384z"
 ></path>,
 <path
   fill="#1C2E2A"
   stroke="#1C2E2A"
   d="M197 368L196 374 199 368z"
 ></path>,
 <path
   fill="#2F4240"
   stroke="#2F4240"
   d="M190 367L196 374 197 368z"
 ></path>,
 <path
   fill="#BFD6D2"
   stroke="#BFD6D2"
   d="M367 348L367 344 362 347z"
 ></path>,
 <path
   fill="#394644"
   stroke="#394644"
   d="M203 404L206 402 204 398z"
 ></path>,
 <path
   fill="#303E3B"
   stroke="#303E3B"
   d="M206 404L205 404 209 406z"
 ></path>,
 <path
   fill="#344643"
   stroke="#344643"
   d="M198 393L204 398 202 393z"
 ></path>,
 <path
   fill="#101A1B"
   stroke="#101A1B"
   d="M200 332L206 335 201 327z"
 ></path>,
 <path
   fill="#0F171B"
   stroke="#0F171B"
   d="M200 332L200 340 206 335z"
 ></path>,
 <path
   fill="#1F2C2C"
   stroke="#1F2C2C"
   d="M200 340L197 342 200 343z"
 ></path>,
 <path
   fill="#666969"
   stroke="#666969"
   d="M353 418L353 414 342 417z"
 ></path>,
 <path
   fill="#121D1F"
   stroke="#121D1F"
   d="M198 339L197 342 200 340z"
 ></path>,
 <path
   fill="#2E403D"
   stroke="#2E403D"
   d="M193 359L194 361 201 356z"
 ></path>,
 <path
   fill="#141C1F"
   stroke="#141C1F"
   d="M201 327L210 333 209 325z"
 ></path>,
 <path
   fill="#243333"
   stroke="#243333"
   d="M194 342L196 343 197 342z"
 ></path>,
 <path
   fill="#1C2225"
   stroke="#1C2225"
   d="M209 325L211 323 206 317z"
 ></path>,
 <path
   fill="#2C3F3E"
   stroke="#2C3F3E"
   d="M195 381L206 385 204 374z"
 ></path>,
 <path
   fill="#2C3C37"
   stroke="#2C3C37"
   d="M195 348L203 351 197 346z"
 ></path>,
 <path
   fill="#394F4A"
   stroke="#394F4A"
   d="M196 374L195 381 204 374z"
 ></path>,
 <path
   fill="#232D2F"
   stroke="#232D2F"
   d="M276 281L268 276 260 293z"
 ></path>,
 <path
   fill="#3F3E40"
   stroke="#3F3E40"
   d="M276 266L268 276 276 281z"
 ></path>,
 <path
   fill="#314448"
   stroke="#314448"
   d="M327 287L321 298 334 297z"
 ></path>,
 <path
   fill="#475150"
   stroke="#475150"
   d="M307 281L294 269 291 277z"
 ></path>,
 <path
   fill="#2F403E"
   stroke="#2F403E"
   d="M197 385L198 390 206 385z"
 ></path>,
 <path
   fill="#313B40"
   stroke="#313B40"
   d="M360 398L365 393 361 389z"
 ></path>,
 <path
   fill="#333D41"
   stroke="#333D41"
   d="M364 397L365 393 360 398z"
 ></path>,
 <path
   fill="#3B4549"
   stroke="#3B4549"
   d="M360 398L356 403 368 408z"
 ></path>,
 <path
   fill="#2A3C3A"
   stroke="#2A3C3A"
   d="M196 343L195 348 197 346z"
 ></path>,
 <path
   fill="#293837"
   stroke="#293837"
   d="M196 343L197 346 197 342z"
 ></path>,
 <path
   fill="#192527"
   stroke="#192527"
   d="M194 342L197 342 195 338z"
 ></path>,
 <path
   fill="#62666B"
   stroke="#62666B"
   d="M371 365L366 363 363 368z"
 ></path>,
 <path
   fill="#B0C8C8"
   stroke="#B0C8C8"
   d="M372 342L370 336 367 344z"
 ></path>,
 <path
   fill="#223239"
   stroke="#223239"
   d="M370 385L368 383 364 384z"
 ></path>,
 <path
   fill="#4F6769"
   stroke="#4F6769"
   d="M333 282L327 287 334 297z"
 ></path>,
 <path
   fill="#243532"
   stroke="#243532"
   d="M195 348L194 355 201 356z"
 ></path>,
 <path
   fill="#14181C"
   stroke="#14181C"
   d="M211 429L218 424 213 414z"
 ></path>,
 <path
   fill="#1E2727"
   stroke="#1E2727"
   d="M213 414L218 424 220 416z"
 ></path>,
 <path
   fill="#151A1D"
   stroke="#151A1D"
   d="M218 424L224 430 230 417z"
 ></path>,
 <path
   fill="#523F3A"
   stroke="#523F3A"
   d="M228 430L228 434 232 430z"
 ></path>,
 <path
   fill="#182325"
   stroke="#182325"
   d="M195 338L197 342 198 339z"
 ></path>,
 <path
   fill="#162021"
   stroke="#162021"
   d="M206 317L211 323 214 317z"
 ></path>,
 <path
   fill="#25373F"
   stroke="#25373F"
   d="M371 383L370 379 368 383z"
 ></path>,
 <path
   fill="#2D383C"
   stroke="#2D383C"
   d="M368 395L364 397 368 408z"
 ></path>,
 <path
   fill="#1E2325"
   stroke="#1E2325"
   d="M205 302L206 317 214 317z"
 ></path>,
 <path
   fill="#344745"
   stroke="#344745"
   d="M197 385L195 386 198 390z"
 ></path>,
 <path
   fill="#384D4B"
   stroke="#384D4B"
   d="M194 378L195 381 196 374z"
 ></path>,
 <path
   fill="#2A3634"
   stroke="#2A3634"
   d="M205 404L206 412 209 406z"
 ></path>,
 <path
   fill="#313D3D"
   stroke="#313D3D"
   d="M194 398L203 404 204 398z"
 ></path>,
 <path
   fill="#58595E"
   stroke="#58595E"
   d="M371 365L363 368 372 368z"
 ></path>,
 <path
   fill="#29363E"
   stroke="#29363E"
   d="M370 379L363 368 367 380z"
 ></path>,
 <path
   fill="#314342"
   stroke="#314342"
   d="M188 374L194 378 196 374z"
 ></path>,
 <path
   fill="#233432"
   stroke="#233432"
   d="M194 355L193 359 201 356z"
 ></path>,
 <path
   fill="#202F2F"
   stroke="#202F2F"
   d="M191 355L193 359 194 355z"
 ></path>,
 <path
   fill="#2C403D"
   stroke="#2C403D"
   d="M198 390L198 393 202 393z"
 ></path>,
 <path
   fill="#374A4A"
   stroke="#374A4A"
   d="M195 392L198 393 198 390z"
 ></path>,
 <path
   fill="#56473F"
   stroke="#56473F"
   d="M226 434L228 434 228 430z"
 ></path>,
 <path
   fill="#3A4E4C"
   stroke="#3A4E4C"
   d="M195 381L195 385 197 385z"
 ></path>,
 <path
   fill="#253233"
   stroke="#253233"
   d="M192 381L194 378 187 379z"
 ></path>,
 <path
   fill="#23353E"
   stroke="#23353E"
   d="M368 383L370 379 367 380z"
 ></path>,
 <path
   fill="#12252B"
   stroke="#12252B"
   d="M370 385L364 384 365 393z"
 ></path>,
 <path
   fill="#2F4241"
   stroke="#2F4241"
   d="M194 378L194 380 195 381z"
 ></path>,
 <path
   fill="#253636"
   stroke="#253636"
   d="M192 381L194 380 194 378z"
 ></path>,
 <path
   fill="#152E37"
   stroke="#152E37"
   d="M356 312L351 323 354 325z"
 ></path>,
 <path
   fill="#19323C"
   stroke="#19323C"
   d="M346 305L349 302 344 304z"
 ></path>,
 <path
   fill="#53666B"
   stroke="#53666B"
   d="M333 282L326 283 327 287z"
 ></path>,
 <path
   fill="#152F38"
   stroke="#152F38"
   d="M356 312L354 325 363 321z"
 ></path>,
 <path
   fill="#33383A"
   stroke="#33383A"
   d="M268 276L248 280 259 293z"
 ></path>,
 <path
   fill="#191E21"
   stroke="#191E21"
   d="M233 294L220 298 237 312z"
 ></path>,
 <path
   fill="#2D3F3F"
   stroke="#2D3F3F"
   d="M192 381L195 385 195 381z"
 ></path>,
 <path
   fill="#4C5051"
   stroke="#4C5051"
   d="M353 414L360 418 356 408z"
 ></path>,
 <path
   fill="#8D8D8A"
   stroke="#8D8D8A"
   d="M351 428L353 418 342 417z"
 ></path>,
 <path
   fill="#292B2C"
   stroke="#292B2C"
   d="M228 286L220 298 233 294z"
 ></path>,
 <path
   fill="#122E37"
   stroke="#122E37"
   d="M363 321L359 332 367 325z"
 ></path>,
 <path
   fill="#354746"
   stroke="#354746"
   d="M189 385L195 386 195 385z"
 ></path>,
 <path
   fill="#3D514F"
   stroke="#3D514F"
   d="M195 385L195 386 197 385z"
 ></path>,
 <path
   fill="#585659"
   stroke="#585659"
   d="M371 365L374 367 371 361z"
 ></path>,
 <path
   fill="#313B41"
   stroke="#313B41"
   d="M370 379L372 368 363 368z"
 ></path>,
 <path
   fill="#293332"
   stroke="#293332"
   d="M201 407L205 404 203 404z"
 ></path>,
 <path
   fill="#252F2E"
   stroke="#252F2E"
   d="M201 407L206 412 205 404z"
 ></path>,
 <path
   fill="#27312F"
   stroke="#27312F"
   d="M201 407L203 404 194 398z"
 ></path>,
 <path
   fill="#55433F"
   stroke="#55433F"
   d="M224 430L226 434 228 430z"
 ></path>,
 <path
   fill="#413632"
   stroke="#413632"
   d="M228 434L232 450 248 438z"
 ></path>,
 <path
   fill="#53423F"
   stroke="#53423F"
   d="M221 430L226 434 224 430z"
 ></path>,
 <path
   fill="#2A2528"
   stroke="#2A2528"
   d="M221 430L224 430 218 424z"
 ></path>,
 <path
   fill="#1F2F2E"
   stroke="#1F2F2E"
   d="M195 348L192 350 194 355z"
 ></path>,
 <path
   fill="#2B3E3C"
   stroke="#2B3E3C"
   d="M196 343L194 342 195 348z"
 ></path>,
 <path
   fill="#162022"
   stroke="#162022"
   d="M195 338L198 339 200 332z"
 ></path>,
 <path
   fill="#131D1F"
   stroke="#131D1F"
   d="M190 340L195 338 191 328z"
 ></path>,
 <path
   fill="#121B1D"
   stroke="#121B1D"
   d="M191 328L195 338 200 332z"
 ></path>,
 <path
   fill="#252124"
   stroke="#252124"
   d="M211 429L221 430 218 424z"
 ></path>,
 <path
   fill="#17313C"
   stroke="#17313C"
   d="M360 303L349 302 355 311z"
 ></path>,
 <path
   fill="#162F38"
   stroke="#162F38"
   d="M355 311L349 302 347 307z"
 ></path>,
 <path
   fill="#2F3940"
   stroke="#2F3940"
   d="M376 374L374 367 372 368z"
 ></path>,
 <path
   fill="#1D2E33"
   stroke="#1D2E33"
   d="M368 395L370 385 365 393z"
 ></path>,
 <path
   fill="#2B3D3B"
   stroke="#2B3D3B"
   d="M194 342L192 350 195 348z"
 ></path>,
 <path
   fill="#2C3C3C"
   stroke="#2C3C3C"
   d="M190 367L197 368 194 361z"
 ></path>,
 <path
   fill="#15282F"
   stroke="#15282F"
   d="M370 385L371 383 368 383z"
 ></path>,
 <path
   fill="#2E4143"
   stroke="#2E4143"
   d="M327 287L324 282 319 283z"
 ></path>,
 <path
   fill="#586B6A"
   stroke="#586B6A"
   d="M319 283L320 274 307 281z"
 ></path>,
 <path
   fill="#24353A"
   stroke="#24353A"
   d="M326 283L324 282 327 287z"
 ></path>,
 <path
   fill="#30464F"
   stroke="#30464F"
   d="M367 325L359 332 363 334z"
 ></path>,
 <path
   fill="#152E38"
   stroke="#152E38"
   d="M356 312L360 303 355 311z"
 ></path>,
 <path
   fill="#99ACAE"
   stroke="#99ACAE"
   d="M368 332L363 334 370 336z"
 ></path>,
 <path
   fill="#2A2C2D"
   stroke="#2A2C2D"
   d="M248 280L244 280 240 295z"
 ></path>,
 <path
   fill="#31302E"
   stroke="#31302E"
   d="M244 279L244 280 248 280z"
 ></path>,
 <path
   fill="#607677"
   stroke="#607677"
   d="M333 282L334 297 354 292z"
 ></path>,
 <path
   fill="#182626"
   stroke="#182626"
   d="M191 351L191 355 194 355z"
 ></path>,
 <path
   fill="#BAD0CE"
   stroke="#BAD0CE"
   d="M367 344L367 348 372 342z"
 ></path>,
 <path
   fill="#B6C8C5"
   stroke="#B6C8C5"
   d="M370 336L361 337 367 344z"
 ></path>,
 <path
   fill="#314343"
   stroke="#314343"
   d="M194 390L195 392 198 390z"
 ></path>,
 <path
   fill="#334745"
   stroke="#334745"
   d="M194 390L198 390 195 386z"
 ></path>,
 <path
   fill="#2F4040"
   stroke="#2F4040"
   d="M192 381L195 381 194 380z"
 ></path>,
 <path
   fill="#3C4248"
   stroke="#3C4248"
   d="M364 397L368 395 365 393z"
 ></path>,
 <path
   fill="#20323C"
   stroke="#20323C"
   d="M377 381L375 379 371 383z"
 ></path>,
 <path
   fill="#6C6F72"
   stroke="#6C6F72"
   d="M368 408L356 403 356 408z"
 ></path>,
 <path
   fill="#243535"
   stroke="#243535"
   d="M190 367L194 361 188 358z"
 ></path>,
 <path
   fill="#293938"
   stroke="#293938"
   d="M190 340L192 350 194 342z"
 ></path>,
 <path
   fill="#304442"
   stroke="#304442"
   d="M190 340L191 351 192 350z"
 ></path>,
 <path
   fill="#1B2A2A"
   stroke="#1B2A2A"
   d="M192 350L191 351 194 355z"
 ></path>,
 <path
   fill="#2A3A3A"
   stroke="#2A3A3A"
   d="M192 391L194 390 189 385z"
 ></path>,
 <path
   fill="#A5BEC0"
   stroke="#A5BEC0"
   d="M372 342L367 348 377 355z"
 ></path>,
 <path
   fill="#273F46"
   stroke="#273F46"
   d="M368 332L367 325 363 334z"
 ></path>,
 <path
   fill="#233232"
   stroke="#233232"
   d="M188 358L193 359 191 355z"
 ></path>,
 <path
   fill="#293A3A"
   stroke="#293A3A"
   d="M188 358L194 361 193 359z"
 ></path>,
 <path
   fill="#525155"
   stroke="#525155"
   d="M372 368L374 367 371 365z"
 ></path>,
 <path
   fill="#25343C"
   stroke="#25343C"
   d="M376 374L372 368 370 379z"
 ></path>,
 <path
   fill="#354543"
   stroke="#354543"
   d="M194 398L204 398 198 393z"
 ></path>,
 <path
   fill="#242C2B"
   stroke="#242C2B"
   d="M206 412L204 416 213 414z"
 ></path>,
 <path
   fill="#1E2525"
   stroke="#1E2525"
   d="M201 411L201 407 194 408z"
 ></path>,
 <path
   fill="#252729"
   stroke="#252729"
   d="M244 280L228 286 233 294z"
 ></path>,
 <path
   fill="#363531"
   stroke="#363531"
   d="M255 270L244 279 248 280z"
 ></path>,
 <path
   fill="#A7BAB9"
   stroke="#A7BAB9"
   d="M376 356L367 348 371 361z"
 ></path>,
 <path
   fill="#687E84"
   stroke="#687E84"
   d="M371 330L368 332 370 336z"
 ></path>,
 <path
   fill="#153037"
   stroke="#153037"
   d="M371 330L367 325 368 332z"
 ></path>,
 <path
   fill="#152F39"
   stroke="#152F39"
   d="M363 321L364 318 356 312z"
 ></path>,
 <path
   fill="#1A3742"
   stroke="#1A3742"
   d="M367 321L364 318 363 321z"
 ></path>,
 <path
   fill="#131518"
   stroke="#131518"
   d="M190 315L195 323 206 317z"
 ></path>,
 <path
   fill="#2E2E2F"
   stroke="#2E2E2F"
   d="M244 279L228 286 244 280z"
 ></path>,
 <path
   fill="#263737"
   stroke="#263737"
   d="M187 358L188 358 185 356z"
 ></path>,
 <path
   fill="#2D3E3D"
   stroke="#2D3E3D"
   d="M190 367L188 369 196 374z"
 ></path>,
 <path fill="#233" stroke="#233" d="M188 358L191 355 185 356z"></path>,
 <path
   fill="#222B2A"
   stroke="#222B2A"
   d="M201 407L201 411 206 412z"
 ></path>,
 <path
   fill="#354445"
   stroke="#354445"
   d="M193 395L198 393 195 392z"
 ></path>,
 <path
   fill="#213030"
   stroke="#213030"
   d="M182 367L188 369 190 367z"
 ></path>,
 <path
   fill="#2A3D3D"
   stroke="#2A3D3D"
   d="M189 385L194 390 195 386z"
 ></path>,
 <path
   fill="#2F3E3E"
   stroke="#2F3E3E"
   d="M194 390L192 391 195 392z"
 ></path>,
 <path
   fill="#2B3A3B"
   stroke="#2B3A3B"
   d="M189 385L195 385 192 381z"
 ></path>,
 <path
   fill="#636265"
   stroke="#636265"
   d="M374 367L376 356 371 361z"
 ></path>,
 <path
   fill="#1C2425"
   stroke="#1C2425"
   d="M201 411L204 416 206 412z"
 ></path>,
 <path
   fill="#22343E"
   stroke="#22343E"
   d="M371 383L375 379 370 379z"
 ></path>,
 <path
   fill="#666465"
   stroke="#666465"
   d="M385 366L377 355 376 356z"
 ></path>,
 <path
   fill="#12242E"
   stroke="#12242E"
   d="M377 381L371 383 377 383z"
 ></path>,
 <path
   fill="#293737"
   stroke="#293737"
   d="M192 391L193 395 195 392z"
 ></path>,
 <path
   fill="#8FACB1"
   stroke="#8FACB1"
   d="M372 342L374 341 370 336z"
 ></path>,
 <path
   fill="#0E2B35"
   stroke="#0E2B35"
   d="M367 325L367 321 363 321z"
 ></path>,
 <path
   fill="#849EA7"
   stroke="#849EA7"
   d="M381 350L374 341 372 342z"
 ></path>,
 <path
   fill="#263636"
   stroke="#263636"
   d="M188 369L188 374 196 374z"
 ></path>,
 <path
   fill="#21323E"
   stroke="#21323E"
   d="M375 379L376 374 370 379z"
 ></path>,
 <path
   fill="#303E3C"
   stroke="#303E3C"
   d="M193 395L194 398 198 393z"
 ></path>,
 <path
   fill="#494E4C"
   stroke="#494E4C"
   d="M291 277L276 266 276 281z"
 ></path>,
 <path
   fill="#383737"
   stroke="#383737"
   d="M268 276L255 270 248 280z"
 ></path>,
 <path
   fill="#555E5D"
   stroke="#555E5D"
   d="M302 266L294 269 307 281z"
 ></path>,
 <path
   fill="#5B5C5A"
   stroke="#5B5C5A"
   d="M335 426L351 428 342 417z"
 ></path>,
 <path
   fill="#484B4C"
   stroke="#484B4C"
   d="M353 418L360 418 353 414z"
 ></path>,
 <path
   fill="#77726E"
   stroke="#77726E"
   d="M234 462L351 428 335 426z"
 ></path>,
 <path
   fill="#102D38"
   stroke="#102D38"
   d="M369 322L367 321 367 325z"
 ></path>,
 <path
   fill="#1A2F37"
   stroke="#1A2F37"
   d="M354 292L342 301 349 302z"
 ></path>,
 <path
   fill="#152022"
   stroke="#152022"
   d="M195 338L190 340 194 342z"
 ></path>,
 <path
   fill="#0F1519"
   stroke="#0F1519"
   d="M191 328L200 332 201 327z"
 ></path>,
 <path
   fill="#222F30"
   stroke="#222F30"
   d="M187 379L189 382 192 381z"
 ></path>,
 <path
   fill="#2B3736"
   stroke="#2B3736"
   d="M192 391L192 395 193 395z"
 ></path>,
 <path
   fill="#5A727B"
   stroke="#5A727B"
   d="M374 333L371 330 370 336z"
 ></path>,
 <path
   fill="#253535"
   stroke="#253535"
   d="M188 358L187 358 190 367z"
 ></path>,
 <path
   fill="#1E2829"
   stroke="#1E2829"
   d="M185 379L187 379 184 377z"
 ></path>,
 <path
   fill="#1E2C2D"
   stroke="#1E2C2D"
   d="M185 356L191 355 191 351z"
 ></path>,
 <path
   fill="#98A7A8"
   stroke="#98A7A8"
   d="M376 356L377 355 367 348z"
 ></path>,
 <path
   fill="#555457"
   stroke="#555457"
   d="M379 369L376 356 374 367z"
 ></path>,
 <path
   fill="#7C7C79"
   stroke="#7C7C79"
   d="M351 428L360 418 353 418z"
 ></path>,
 <path
   fill="#23363F"
   stroke="#23363F"
   d="M377 383L371 383 370 385z"
 ></path>,
 <path
   fill="#212C2B"
   stroke="#212C2B"
   d="M193 395L192 395 194 398z"
 ></path>,
 <path
   fill="#202928"
   stroke="#202928"
   d="M194 398L194 408 201 407z"
 ></path>,
 <path
   fill="#242E2D"
   stroke="#242E2D"
   d="M190 395L192 395 192 391z"
 ></path>,
 <path
   fill="#283435"
   stroke="#283435"
   d="M189 382L189 385 192 381z"
 ></path>,
 <path
   fill="#263333"
   stroke="#263333"
   d="M184 380L189 385 189 382z"
 ></path>,
 <path
   fill="#546565"
   stroke="#546565"
   d="M324 282L320 274 319 283z"
 ></path>,
 <path
   fill="#354447"
   stroke="#354447"
   d="M326 283L328 274 324 282z"
 ></path>,
 <path
   fill="#445B5D"
   stroke="#445B5D"
   d="M354 292L334 297 342 301z"
 ></path>,
 <path
   fill="#162F39"
   stroke="#162F39"
   d="M360 303L356 312 364 318z"
 ></path>,
 <path
   fill="#12171B"
   stroke="#12171B"
   d="M206 317L195 323 201 327z"
 ></path>,
 <path
   fill="#1B1D21"
   stroke="#1B1D21"
   d="M205 302L214 317 220 298z"
 ></path>,
 <path
   fill="#183540"
   stroke="#183540"
   d="M367 321L369 321 364 318z"
 ></path>,
 <path
   fill="#102B36"
   stroke="#102B36"
   d="M373 329L369 322 367 325z"
 ></path>,
 <path
   fill="#14303D"
   stroke="#14303D"
   d="M369 321L369 322 373 329z"
 ></path>,
 <path
   fill="#232C2B"
   stroke="#232C2B"
   d="M190 395L192 399 192 395z"
 ></path>,
 <path
   fill="#2D3A3B"
   stroke="#2D3A3B"
   d="M188 374L187 379 194 378z"
 ></path>,
 <path
   fill="#212F2F"
   stroke="#212F2F"
   d="M185 373L188 374 188 369z"
 ></path>,
 <path
   fill="#132E3A"
   stroke="#132E3A"
   d="M369 322L369 321 367 321z"
 ></path>,
 <path
   fill="#14303B"
   stroke="#14303B"
   d="M373 329L367 325 371 330z"
 ></path>,
 <path
   fill="#283844"
   stroke="#283844"
   d="M375 379L377 381 376 374z"
 ></path>,
 <path
   fill="#2C3840"
   stroke="#2C3840"
   d="M376 374L379 369 374 367z"
 ></path>,
 <path
   fill="#223440"
   stroke="#223440"
   d="M377 383L370 385 379 385z"
 ></path>,
 <path
   fill="#77929A"
   stroke="#77929A"
   d="M380 341L374 333 374 341z"
 ></path>,
 <path
   fill="#89A4AA"
   stroke="#89A4AA"
   d="M374 341L374 333 370 336z"
 ></path>,
 <path
   fill="#687674"
   stroke="#687674"
   d="M328 274L320 274 324 282z"
 ></path>,
 <path
   fill="#413A38"
   stroke="#413A38"
   d="M269 263L255 270 268 276z"
 ></path>,
 <path
   fill="#45332B"
   stroke="#45332B"
   d="M222 268L219 278 228 286z"
 ></path>,
 <path
   fill="#1B2522"
   stroke="#1B2522"
   d="M192 395L192 399 194 398z"
 ></path>,
 <path
   fill="#25292A"
   stroke="#25292A"
   d="M193 417L199 422 204 416z"
 ></path>,
 <path
   fill="#1B292A"
   stroke="#1B292A"
   d="M188 387L192 391 189 385z"
 ></path>,
 <path
   fill="#473733"
   stroke="#473733"
   d="M221 430L214 448 226 434z"
 ></path>,
 <path
   fill="#463730"
   stroke="#463730"
   d="M226 434L232 450 228 434z"
 ></path>,
 <path
   fill="#171B1E"
   stroke="#171B1E"
   d="M204 416L211 429 213 414z"
 ></path>,
 <path
   fill="#212427"
   stroke="#212427"
   d="M199 422L211 429 204 416z"
 ></path>,
 <path
   fill="#253232"
   stroke="#253232"
   d="M184 380L188 387 189 385z"
 ></path>,
 <path
   fill="#7F7F7C"
   stroke="#7F7F7C"
   d="M366 417L368 408 356 408z"
 ></path>,
 <path
   fill="#192C33"
   stroke="#192C33"
   d="M379 385L370 385 368 395z"
 ></path>,
 <path
   fill="#173641"
   stroke="#173641"
   d="M374 333L373 329 371 330z"
 ></path>,
 <path
   fill="#4B4E4B"
   stroke="#4B4E4B"
   d="M294 269L276 266 291 277z"
 ></path>,
 <path
   fill="#20333E"
   stroke="#20333E"
   d="M386 377L376 374 377 381z"
 ></path>,
 <path
   fill="#23383E"
   stroke="#23383E"
   d="M384 368L379 369 387 372z"
 ></path>,
 <path
   fill="#79868D"
   stroke="#79868D"
   d="M377 355L381 350 372 342z"
 ></path>,
 <path
   fill="#233333"
   stroke="#233333"
   d="M187 358L182 367 190 367z"
 ></path>,
 <path
   fill="#212E2F"
   stroke="#212E2F"
   d="M178 354L185 356 191 351z"
 ></path>,
 <path
   fill="#1D2B2C"
   stroke="#1D2B2C"
   d="M178 354L191 351 190 340z"
 ></path>,
 <path
   fill="#202B28"
   stroke="#202B28"
   d="M186 391L190 395 192 391z"
 ></path>,
 <path
   fill="#13181B"
   stroke="#13181B"
   d="M195 323L191 328 201 327z"
 ></path>,
 <path
   fill="#1F2B2B"
   stroke="#1F2B2B"
   d="M182 371L185 373 188 369z"
 ></path>,
 <path
   fill="#243030"
   stroke="#243030"
   d="M187 379L184 380 189 382z"
 ></path>,
 <path
   fill="#24201E"
   stroke="#24201E"
   d="M200 297L205 302 206 281z"
 ></path>,
 <path
   fill="#202528"
   stroke="#202528"
   d="M195 323L187 327 191 328z"
 ></path>,
 <path
   fill="#212728"
   stroke="#212728"
   d="M188 397L190 399 190 395z"
 ></path>,
 <path
   fill="#212D2D"
   stroke="#212D2D"
   d="M184 377L187 379 188 374z"
 ></path>,
 <path
   fill="#16313B"
   stroke="#16313B"
   d="M377 304L360 303 364 318z"
 ></path>,
 <path
   fill="#212727"
   stroke="#212727"
   d="M190 395L190 399 192 399z"
 ></path>,
 <path
   fill="#1E2624"
   stroke="#1E2624"
   d="M192 399L194 408 194 398z"
 ></path>,
 <path
   fill="#1B2424"
   stroke="#1B2424"
   d="M188 397L190 395 186 391z"
 ></path>,
 <path
   fill="#1D2424"
   stroke="#1D2424"
   d="M190 399L194 408 192 399z"
 ></path>,
 <path
   fill="#152121"
   stroke="#152121"
   d="M185 379L184 380 187 379z"
 ></path>,
 <path
   fill="#1D2929"
   stroke="#1D2929"
   d="M185 373L184 377 188 374z"
 ></path>,
 <path
   fill="#182223"
   stroke="#182223"
   d="M182 371L184 377 185 373z"
 ></path>,
 <path
   fill="#524944"
   stroke="#524944"
   d="M294 269L284 258 276 266z"
 ></path>,
 <path
   fill="#6D7977"
   stroke="#6D7977"
   d="M320 274L302 266 307 281z"
 ></path>,
 <path
   fill="#151F20"
   stroke="#151F20"
   d="M184 377L184 379 185 379z"
 ></path>,
 <path
   fill="#172122"
   stroke="#172122"
   d="M184 379L184 380 185 379z"
 ></path>,
 <path
   fill="#162833"
   stroke="#162833"
   d="M377 383L380 383 377 381z"
 ></path>,
 <path
   fill="#1A303E"
   stroke="#1A303E"
   d="M382 386L379 385 385 394z"
 ></path>,
 <path
   fill="#686061"
   stroke="#686061"
   d="M386 353L381 350 377 355z"
 ></path>,
 <path
   fill="#16313B"
   stroke="#16313B"
   d="M374 333L382 332 373 329z"
 ></path>,
 <path
   fill="#484D51"
   stroke="#484D51"
   d="M385 366L376 356 379 369z"
 ></path>,
 <path
   fill="#676967"
   stroke="#676967"
   d="M360 418L366 417 356 408z"
 ></path>,
 <path
   fill="#333C3F"
   stroke="#333C3F"
   d="M368 408L373 408 368 395z"
 ></path>,
 <path
   fill="#737470"
   stroke="#737470"
   d="M351 428L366 417 360 418z"
 ></path>,
 <path
   fill="#1C2124"
   stroke="#1C2124"
   d="M190 399L186 402 194 408z"
 ></path>,
 <path
   fill="#1F2B2A"
   stroke="#1F2B2A"
   d="M186 391L192 391 188 387z"
 ></path>,
 <path
   fill="#192424"
   stroke="#192424"
   d="M180 386L186 391 188 387z"
 ></path>,
 <path
   fill="#1E313C"
   stroke="#1E313C"
   d="M379 385L380 383 377 383z"
 ></path>,
 <path
   fill="#253B46"
   stroke="#253B46"
   d="M382 386L380 383 379 385z"
 ></path>,
 <path
   fill="#223030"
   stroke="#223030"
   d="M180 362L182 367 187 358z"
 ></path>,
 <path
   fill="#131A1C"
   stroke="#131A1C"
   d="M180 382L181 382 184 379z"
 ></path>,
 <path
   fill="#141D1E"
   stroke="#141D1E"
   d="M184 379L181 382 184 380z"
 ></path>,
 <path
   fill="#1C2728"
   stroke="#1C2728"
   d="M181 368L182 367 180 362z"
 ></path>,
 <path
   fill="#81716B"
   stroke="#81716B"
   d="M310 252L297 256 302 266z"
 ></path>,
 <path
   fill="#3A494C"
   stroke="#3A494C"
   d="M333 282L328 274 326 283z"
 ></path>,
 <path
   fill="#747773"
   stroke="#747773"
   d="M330 266L328 274 345 272z"
 ></path>,
 <path
   fill="#212D2D"
   stroke="#212D2D"
   d="M182 367L182 371 188 369z"
 ></path>,
 <path
   fill="#1A2425"
   stroke="#1A2425"
   d="M184 380L181 382 188 387z"
 ></path>,
 <path
   fill="#372C28"
   stroke="#372C28"
   d="M214 448L232 450 226 434z"
 ></path>,
 <path
   fill="#605653"
   stroke="#605653"
   d="M255 444L234 462 335 426z"
 ></path>,
 <path
   fill="#879EA8"
   stroke="#879EA8"
   d="M381 350L380 341 374 341z"
 ></path>,
 <path
   fill="#18333D"
   stroke="#18333D"
   d="M373 329L379 312 369 321z"
 ></path>,
 <path
   fill="#243F46"
   stroke="#243F46"
   d="M363 294L359 298 360 303z"
 ></path>,
 <path
   fill="#2C4952"
   stroke="#2C4952"
   d="M360 303L359 298 349 302z"
 ></path>,
 <path
   fill="#456064"
   stroke="#456064"
   d="M363 294L360 303 376 301z"
 ></path>,
 <path
   fill="#463D39"
   stroke="#463D39"
   d="M276 266L269 263 268 276z"
 ></path>,
 <path
   fill="#624C43"
   stroke="#624C43"
   d="M284 258L269 263 276 266z"
 ></path>,
 <path
   fill="#253D44"
   stroke="#253D44"
   d="M359 298L354 292 349 302z"
 ></path>,
 <path
   fill="#1A2425"
   stroke="#1A2425"
   d="M182 367L181 368 182 371z"
 ></path>,
 <path
   fill="#171E20"
   stroke="#171E20"
   d="M180 382L184 379 184 377z"
 ></path>,
 <path
   fill="#273636"
   stroke="#273636"
   d="M180 362L187 358 185 356z"
 ></path>,
 <path
   fill="#8D918F"
   stroke="#8D918F"
   d="M374 410L373 408 368 408z"
 ></path>,
 <path
   fill="#11191B"
   stroke="#11191B"
   d="M191 328L182 330 190 340z"
 ></path>,
 <path
   fill="#1E2022"
   stroke="#1E2022"
   d="M190 315L187 327 195 323z"
 ></path>,
 <path
   fill="#1C2123"
   stroke="#1C2123"
   d="M191 413L201 411 194 408z"
 ></path>,
 <path
   fill="#1B2124"
   stroke="#1B2124"
   d="M193 417L204 416 201 411z"
 ></path>,
 <path
   fill="#493835"
   stroke="#493835"
   d="M211 429L214 448 221 430z"
 ></path>,
 <path
   fill="#202B2C"
   stroke="#202B2C"
   d="M178 354L180 362 185 356z"
 ></path>,
 <path
   fill="#2B3B44"
   stroke="#2B3B44"
   d="M386 377L379 369 376 374z"
 ></path>,
 <path
   fill="#757D84"
   stroke="#757D84"
   d="M381 350L384 341 380 341z"
 ></path>,
 <path
   fill="#1E333E"
   stroke="#1E333E"
   d="M380 383L386 377 377 381z"
 ></path>,
 <path
   fill="#2A3B44"
   stroke="#2A3B44"
   d="M385 394L379 385 368 395z"
 ></path>,
 <path
   fill="#131A1C"
   stroke="#131A1C"
   d="M180 382L184 377 182 371z"
 ></path>,
 <path
   fill="#192121"
   stroke="#192121"
   d="M186 391L184 395 188 397z"
 ></path>,
 <path
   fill="#1D2226"
   stroke="#1D2226"
   d="M188 397L186 402 190 399z"
 ></path>,
 <path
   fill="#13171B"
   stroke="#13171B"
   d="M180 382L182 371 169 378z"
 ></path>,
 <path
   fill="#2B3D45"
   stroke="#2B3D45"
   d="M384 368L385 366 379 369z"
 ></path>,
 <path
   fill="#293C47"
   stroke="#293C47"
   d="M389 366L385 366 384 368z"
 ></path>,
 <path
   fill="#131B1C"
   stroke="#131B1C"
   d="M180 386L184 395 186 391z"
 ></path>,
 <path
   fill="#373F41"
   stroke="#373F41"
   d="M373 408L378 405 368 395z"
 ></path>,
 <path
   fill="#777975"
   stroke="#777975"
   d="M366 417L374 410 368 408z"
 ></path>,
 <path
   fill="#181D20"
   stroke="#181D20"
   d="M184 395L186 402 188 397z"
 ></path>,
 <path
   fill="#182022"
   stroke="#182022"
   d="M181 382L180 386 188 387z"
 ></path>,
 <path
   fill="#181D20"
   stroke="#181D20"
   d="M184 395L184 403 186 402z"
 ></path>,
 <path
   fill="#171D20"
   stroke="#171D20"
   d="M171 367L182 371 181 368z"
 ></path>,
 <path
   fill="#191A1D"
   stroke="#191A1D"
   d="M205 302L190 315 206 317z"
 ></path>,
 <path
   fill="#2B2D30"
   stroke="#2B2D30"
   d="M186 411L191 413 194 408z"
 ></path>,
 <path
   fill="#242729"
   stroke="#242729"
   d="M191 413L193 417 201 411z"
 ></path>,
 <path
   fill="#423431"
   stroke="#423431"
   d="M202 436L205 436 211 429z"
 ></path>,
 <path
   fill="#3E5660"
   stroke="#3E5660"
   d="M380 341L382 332 374 333z"
 ></path>,
 <path
   fill="#595459"
   stroke="#595459"
   d="M386 348L384 341 381 350z"
 ></path>,
 <path
   fill="#192123"
   stroke="#192123"
   d="M180 362L171 367 181 368z"
 ></path>,
 <path
   fill="#101619"
   stroke="#101619"
   d="M178 338L178 354 190 340z"
 ></path>,
 <path
   fill="#151B1E"
   stroke="#151B1E"
   d="M182 330L191 328 187 327z"
 ></path>,
 <path
   fill="#6E6766"
   stroke="#6E6766"
   d="M389 359L386 353 377 355z"
 ></path>,
 <path
   fill="#13181B"
   stroke="#13181B"
   d="M180 382L180 386 181 382z"
 ></path>,
 <path
   fill="#232726"
   stroke="#232726"
   d="M175 394L180 386 172 389z"
 ></path>,
 <path
   fill="#425A63"
   stroke="#425A63"
   d="M384 341L382 332 380 341z"
 ></path>,
 <path
   fill="#3F4444"
   stroke="#3F4444"
   d="M374 410L378 405 373 408z"
 ></path>,
 <path
   fill="#1C323C"
   stroke="#1C323C"
   d="M387 378L386 377 380 383z"
 ></path>,
 <path
   fill="#56575A"
   stroke="#56575A"
   d="M385 366L389 359 377 355z"
 ></path>,
 <path
   fill="#1B3440"
   stroke="#1B3440"
   d="M387 378L380 383 382 386z"
 ></path>,
 <path
   fill="#675852"
   stroke="#675852"
   d="M297 256L284 258 294 269z"
 ></path>,
 <path
   fill="#585450"
   stroke="#585450"
   d="M297 256L294 269 302 266z"
 ></path>,
 <path
   fill="#16333F"
   stroke="#16333F"
   d="M392 340L385 329 382 332z"
 ></path>,
 <path
   fill="#615758"
   stroke="#615758"
   d="M386 353L386 348 381 350z"
 ></path>,
 <path
   fill="#211E1D"
   stroke="#211E1D"
   d="M205 302L200 297 190 315z"
 ></path>,
 <path
   fill="#201E1E"
   stroke="#201E1E"
   d="M206 281L205 302 220 298z"
 ></path>,
 <path
   fill="#242423"
   stroke="#242423"
   d="M219 278L220 298 228 286z"
 ></path>,
 <path
   fill="#352C28"
   stroke="#352C28"
   d="M228 286L244 279 222 268z"
 ></path>,
 <path
   fill="#101418"
   stroke="#101418"
   d="M179 329L182 330 187 327z"
 ></path>,
 <path
   fill="#23343D"
   stroke="#23343D"
   d="M386 377L387 372 379 369z"
 ></path>,
 <path
   fill="#5F5557"
   stroke="#5F5557"
   d="M386 353L387 348 386 348z"
 ></path>,
 <path
   fill="#6F4D3D"
   stroke="#6F4D3D"
   d="M217 278L219 278 222 268z"
 ></path>,
 <path
   fill="#4E4038"
   stroke="#4E4038"
   d="M244 279L255 270 234 262z"
 ></path>,
 <path
   fill="#292B2C"
   stroke="#292B2C"
   d="M184 407L186 411 194 408z"
 ></path>,
 <path
   fill="#434340"
   stroke="#434340"
   d="M191 413L186 415 193 417z"
 ></path>,
 <path
   fill="#1D2123"
   stroke="#1D2123"
   d="M175 394L184 403 184 395z"
 ></path>,
 <path
   fill="#50484F"
   stroke="#50484F"
   d="M386 348L387 348 384 341z"
 ></path>,
 <path
   fill="#5F5658"
   stroke="#5F5658"
   d="M388 348L387 348 386 353z"
 ></path>,
 <path
   fill="#243740"
   stroke="#243740"
   d="M386 377L387 378 387 372z"
 ></path>,
 <path
   fill="#19353E"
   stroke="#19353E"
   d="M391 385L387 378 382 386z"
 ></path>,
 <path
   fill="#443C39"
   stroke="#443C39"
   d="M202 436L199 422 201 437z"
 ></path>,
 <path
   fill="#3D3835"
   stroke="#3D3835"
   d="M202 436L211 429 199 422z"
 ></path>,
 <path
   fill="#3F555B"
   stroke="#3F555B"
   d="M359 298L363 294 354 292z"
 ></path>,
 <path
   fill="#6E7A78"
   stroke="#6E7A78"
   d="M345 272L328 274 333 282z"
 ></path>,
 <path
   fill="#1B3741"
   stroke="#1B3741"
   d="M379 312L364 318 369 321z"
 ></path>,
 <path
   fill="#0B1114"
   stroke="#0B1114"
   d="M182 330L178 338 190 340z"
 ></path>,
 <path
   fill="#1F1C1B"
   stroke="#1F1C1B"
   d="M219 278L217 278 220 298z"
 ></path>,
 <path
   fill="#6E554A"
   stroke="#6E554A"
   d="M234 262L255 270 269 263z"
 ></path>,
 <path
   fill="#233941"
   stroke="#233941"
   d="M387 372L389 366 384 368z"
 ></path>,
 <path
   fill="#233D44"
   stroke="#233D44"
   d="M393 367L389 366 387 372z"
 ></path>,
 <path
   fill="#555055"
   stroke="#555055"
   d="M387 348L388 348 384 341z"
 ></path>,
 <path
   fill="#686361"
   stroke="#686361"
   d="M390 348L388 348 391 353z"
 ></path>,
 <path
   fill="#2B3F47"
   stroke="#2B3F47"
   d="M389 366L389 359 385 366z"
 ></path>,
 <path
   fill="#71666A"
   stroke="#71666A"
   d="M389 359L389 356 386 353z"
 ></path>,
 <path
   fill="#212527"
   stroke="#212527"
   d="M184 407L194 408 186 402z"
 ></path>,
 <path
   fill="#212527"
   stroke="#212527"
   d="M184 403L184 407 186 402z"
 ></path>,
 <path
   fill="#46443F"
   stroke="#46443F"
   d="M170 402L184 407 184 403z"
 ></path>,
 <path
   fill="#243941"
   stroke="#243941"
   d="M387 378L393 367 387 372z"
 ></path>,
 <path
   fill="#51585A"
   stroke="#51585A"
   d="M378 405L385 394 368 395z"
 ></path>,
 <path
   fill="#8C8E88"
   stroke="#8C8E88"
   d="M366 417L376 416 374 410z"
 ></path>,
 <path
   fill="#747874"
   stroke="#747874"
   d="M374 410L376 416 378 405z"
 ></path>,
 <path
   fill="#525E60"
   stroke="#525E60"
   d="M378 405L390 396 385 394z"
 ></path>,
 <path
   fill="#82847F"
   stroke="#82847F"
   d="M351 428L376 416 366 417z"
 ></path>,
 <path
   fill="#6B6D69"
   stroke="#6B6D69"
   d="M326 263L302 266 320 274z"
 ></path>,
 <path
   fill="#6D726E"
   stroke="#6D726E"
   d="M326 263L320 274 328 274z"
 ></path>,
 <path
   fill="#677877"
   stroke="#677877"
   d="M345 272L333 282 354 292z"
 ></path>,
 <path
   fill="#453633"
   stroke="#453633"
   d="M205 436L214 448 211 429z"
 ></path>,
 <path
   fill="#473F3C"
   stroke="#473F3C"
   d="M201 437L199 422 185 434z"
 ></path>,
 <path
   fill="#080B0F"
   stroke="#080B0F"
   d="M182 330L179 329 178 338z"
 ></path>,
 <path
   fill="#101315"
   stroke="#101315"
   d="M190 315L179 329 187 327z"
 ></path>,
 <path
   fill="#1C1B1A"
   stroke="#1C1B1A"
   d="M172 311L179 329 190 315z"
 ></path>,
 <path
   fill="#14303C"
   stroke="#14303C"
   d="M382 332L385 329 373 329z"
 ></path>,
 <path
   fill="#223C46"
   stroke="#223C46"
   d="M392 340L382 332 384 341z"
 ></path>,
 <path
   fill="#342929"
   stroke="#342929"
   d="M205 445L214 448 205 436z"
 ></path>,
 <path
   fill="#47494F"
   stroke="#47494F"
   d="M388 348L392 340 384 341z"
 ></path>,
 <path
   fill="#6D6564"
   stroke="#6D6564"
   d="M391 353L388 348 386 353z"
 ></path>,
 <path
   fill="#6C6164"
   stroke="#6C6164"
   d="M391 353L386 353 389 356z"
 ></path>,
 <path
   fill="#585659"
   stroke="#585659"
   d="M391 353L389 356 395 357z"
 ></path>,
 <path
   fill="#4C3E3B"
   stroke="#4C3E3B"
   d="M232 450L234 462 255 444z"
 ></path>,
 <path
   fill="#5A4740"
   stroke="#5A4740"
   d="M214 448L232 460 232 450z"
 ></path>,
 <path
   fill="#43413E"
   stroke="#43413E"
   d="M186 411L186 415 191 413z"
 ></path>,
 <path
   fill="#605B56"
   stroke="#605B56"
   d="M185 417L186 415 184 416z"
 ></path>,
 <path
   fill="#61625D"
   stroke="#61625D"
   d="M330 266L326 263 328 274z"
 ></path>,
 <path
   fill="#354247"
   stroke="#354247"
   d="M395 357L389 356 389 359z"
 ></path>,
 <path
   fill="#233D44"
   stroke="#233D44"
   d="M394 366L389 359 389 366z"
 ></path>,
 <path
   fill="#1D3842"
   stroke="#1D3842"
   d="M385 329L379 312 373 329z"
 ></path>,
 <path
   fill="#4C4D48"
   stroke="#4C4D48"
   d="M186 424L199 422 193 417z"
 ></path>,
 <path
   fill="#3F302D"
   stroke="#3F302D"
   d="M202 436L202 440 205 436z"
 ></path>,
 <path
   fill="#181E21"
   stroke="#181E21"
   d="M178 354L172 362 180 362z"
 ></path>,
 <path
   fill="#181C1F"
   stroke="#181C1F"
   d="M180 386L175 394 184 395z"
 ></path>,
 <path
   fill="#5B5652"
   stroke="#5B5652"
   d="M184 416L186 415 186 411z"
 ></path>,
 <path
   fill="#111518"
   stroke="#111518"
   d="M166 356L172 362 178 354z"
 ></path>,
 <path
   fill="#17191C"
   stroke="#17191C"
   d="M168 347L178 354 178 338z"
 ></path>,
 <path
   fill="#795C57"
   stroke="#795C57"
   d="M232 460L234 462 232 450z"
 ></path>,
 <path
   fill="#755348"
   stroke="#755348"
   d="M190 463L234 462 232 460z"
 ></path>,
 <path
   fill="#534846"
   stroke="#534846"
   d="M330 266L325 256 326 263z"
 ></path>,
 <path
   fill="#707C7B"
   stroke="#707C7B"
   d="M360 275L345 272 354 292z"
 ></path>,
 <path
   fill="#7A8786"
   stroke="#7A8786"
   d="M360 275L354 292 367 278z"
 ></path>,
 <path
   fill="#585550"
   stroke="#585550"
   d="M186 415L185 417 193 417z"
 ></path>,
 <path
   fill="#4E4B48"
   stroke="#4E4B48"
   d="M184 416L186 411 184 407z"
 ></path>,
 <path
   fill="#493533"
   stroke="#493533"
   d="M214 448L205 451 232 460z"
 ></path>,
 <path
   fill="#423431"
   stroke="#423431"
   d="M201 437L202 440 202 436z"
 ></path>,
 <path
   fill="#3B2C28"
   stroke="#3B2C28"
   d="M199 442L202 440 201 437z"
 ></path>,
 <path
   fill="#101519"
   stroke="#101519"
   d="M172 362L171 367 180 362z"
 ></path>,
 <path
   fill="#30444B"
   stroke="#30444B"
   d="M392 384L393 367 387 378z"
 ></path>,
 <path
   fill="#1B343F"
   stroke="#1B343F"
   d="M385 394L391 385 382 386z"
 ></path>,
 <path
   fill="#1F3B46"
   stroke="#1F3B46"
   d="M392 384L391 385 396 388z"
 ></path>,
 <path
   fill="#171B1D"
   stroke="#171B1D"
   d="M172 389L180 386 180 382z"
 ></path>,
 <path
   fill="#645F58"
   stroke="#645F58"
   d="M182 418L184 416 184 407z"
 ></path>,
 <path
   fill="#5E5B53"
   stroke="#5E5B53"
   d="M185 417L186 424 193 417z"
 ></path>,
 <path
   fill="#25201F"
   stroke="#25201F"
   d="M200 297L185 308 190 315z"
 ></path>,
 <path
   fill="#26201E"
   stroke="#26201E"
   d="M174 303L185 308 200 297z"
 ></path>,
 <path
   fill="#211C1D"
   stroke="#211C1D"
   d="M217 278L206 281 220 298z"
 ></path>,
 <path
   fill="#8F624A"
   stroke="#8F624A"
   d="M200 273L206 281 202 269z"
 ></path>,
 <path
   fill="#9C7E71"
   stroke="#9C7E71"
   d="M226 259L234 262 269 263z"
 ></path>,
 <path
   fill="#9B7F71"
   stroke="#9B7F71"
   d="M226 259L269 263 284 258z"
 ></path>,
 <path
   fill="#18333C"
   stroke="#18333C"
   d="M379 312L377 304 364 318z"
 ></path>,
 <path
   fill="#2B464D"
   stroke="#2B464D"
   d="M383 302L377 304 379 312z"
 ></path>,
 <path
   fill="#4F676C"
   stroke="#4F676C"
   d="M391 385L392 384 387 378z"
 ></path>,
 <path
   fill="#213A44"
   stroke="#213A44"
   d="M393 391L391 385 385 394z"
 ></path>,
 <path
   fill="#1D373F"
   stroke="#1D373F"
   d="M393 367L394 366 389 366z"
 ></path>,
 <path
   fill="#373D41"
   stroke="#373D41"
   d="M393 341L392 340 390 348z"
 ></path>,
 <path
   fill="#25404A"
   stroke="#25404A"
   d="M404 368L394 366 393 367z"
 ></path>,
 <path
   fill="#70574A"
   stroke="#70574A"
   d="M234 262L222 268 244 279z"
 ></path>,
 <path
   fill="#534F54"
   stroke="#534F54"
   d="M390 348L392 340 388 348z"
 ></path>,
 <path
   fill="#203A44"
   stroke="#203A44"
   d="M385 329L393 314 379 312z"
 ></path>,
 <path
   fill="#4B4C50"
   stroke="#4B4C50"
   d="M393 341L390 348 395 343z"
 ></path>,
 <path
   fill="#382825"
   stroke="#382825"
   d="M202 440L205 445 205 436z"
 ></path>,
 <path
   fill="#342621"
   stroke="#342621"
   d="M199 442L205 445 202 440z"
 ></path>,
 <path
   fill="#203B43"
   stroke="#203B43"
   d="M377 304L376 301 360 303z"
 ></path>,
 <path
   fill="#162F39"
   stroke="#162F39"
   d="M383 302L376 301 377 304z"
 ></path>,
 <path
   fill="#7F847F"
   stroke="#7F847F"
   d="M376 416L390 396 378 405z"
 ></path>,
 <path
   fill="#625B53"
   stroke="#625B53"
   d="M169 419L182 418 184 407z"
 ></path>,
 <path
   fill="#222626"
   stroke="#222626"
   d="M169 379L172 389 180 382z"
 ></path>,
 <path
   fill="#15333E"
   stroke="#15333E"
   d="M392 340L394 329 385 329z"
 ></path>,
 <path
   fill="#655F60"
   stroke="#655F60"
   d="M395 343L390 348 397 355z"
 ></path>,
 <path
   fill="#253E46"
   stroke="#253E46"
   d="M394 366L395 357 389 359z"
 ></path>,
 <path
   fill="#0D0D10"
   stroke="#0D0D10"
   d="M179 329L174 329 178 338z"
 ></path>,
 <path
   fill="#292928"
   stroke="#292928"
   d="M172 362L166 369 171 367z"
 ></path>,
 <path
   fill="#151518"
   stroke="#151518"
   d="M173 328L174 329 179 329z"
 ></path>,
 <path
   fill="#68645B"
   stroke="#68645B"
   d="M182 421L186 424 185 417z"
 ></path>,
 <path
   fill="#67625C"
   stroke="#67625C"
   d="M182 418L185 417 184 416z"
 ></path>,
 <path
   fill="#161A1D"
   stroke="#161A1D"
   d="M171 367L169 378 182 371z"
 ></path>,
 <path
   fill="#35332F"
   stroke="#35332F"
   d="M165 374L169 378 171 367z"
 ></path>,
 <path
   fill="#1F2326"
   stroke="#1F2326"
   d="M169 378L169 379 180 382z"
 ></path>,
 <path
   fill="#49453F"
   stroke="#49453F"
   d="M170 402L184 403 175 394z"
 ></path>,
 <path
   fill="#373832"
   stroke="#373832"
   d="M172 389L172 394 175 394z"
 ></path>,
 <path
   fill="#434037"
   stroke="#434037"
   d="M170 390L172 394 172 389z"
 ></path>,
 <path
   fill="#86726C"
   stroke="#86726C"
   d="M325 256L310 252 326 263z"
 ></path>,
 <path
   fill="#665A54"
   stroke="#665A54"
   d="M326 263L310 252 302 266z"
 ></path>,
 <path
   fill="#98837A"
   stroke="#98837A"
   d="M297 256L310 252 284 258z"
 ></path>,
 <path
   fill="#30424B"
   stroke="#30424B"
   d="M390 396L393 391 385 394z"
 ></path>,
 <path
   fill="#2B4651"
   stroke="#2B4651"
   d="M405 369L404 368 393 367z"
 ></path>,
 <path
   fill="#213E46"
   stroke="#213E46"
   d="M399 358L397 355 395 357z"
 ></path>,
 <path
   fill="#131415"
   stroke="#131415"
   d="M174 329L168 347 178 338z"
 ></path>,
 <path
   fill="#191919"
   stroke="#191919"
   d="M172 311L173 328 179 329z"
 ></path>,
 <path
   fill="#2F2323"
   stroke="#2F2323"
   d="M205 445L205 451 214 448z"
 ></path>,
 <path
   fill="#342523"
   stroke="#342523"
   d="M190 442L199 442 201 437z"
 ></path>,
 <path
   fill="#39424A"
   stroke="#39424A"
   d="M393 341L395 338 392 340z"
 ></path>,
 <path
   fill="#6A6565"
   stroke="#6A6565"
   d="M397 355L390 348 391 353z"
 ></path>,
 <path
   fill="#122028"
   stroke="#122028"
   d="M390 396L393 393 393 391z"
 ></path>,
 <path
   fill="#203D47"
   stroke="#203D47"
   d="M399 358L395 357 394 366z"
 ></path>,
 <path
   fill="#657173"
   stroke="#657173"
   d="M399 391L393 393 400 396z"
 ></path>,
 <path
   fill="#151515"
   stroke="#151515"
   d="M159 329L168 347 174 329z"
 ></path>,
 <path
   fill="#403D37"
   stroke="#403D37"
   d="M169 378L165 374 169 379z"
 ></path>,
 <path
   fill="#444038"
   stroke="#444038"
   d="M168 388L170 390 172 389z"
 ></path>,
 <path
   fill="#615B53"
   stroke="#615B53"
   d="M175 422L182 421 182 418z"
 ></path>,
 <path
   fill="#3B474C"
   stroke="#3B474C"
   d="M395 357L397 355 391 353z"
 ></path>,
 <path
   fill="#233D49"
   stroke="#233D49"
   d="M396 388L391 385 393 391z"
 ></path>,
 <path
   fill="#78655F"
   stroke="#78655F"
   d="M343 251L325 256 330 266z"
 ></path>,
 <path
   fill="#52504B"
   stroke="#52504B"
   d="M186 424L185 434 199 422z"
 ></path>,
 <path
   fill="#69655C"
   stroke="#69655C"
   d="M182 418L182 421 185 417z"
 ></path>,
 <path
   fill="#524D43"
   stroke="#524D43"
   d="M170 402L175 394 172 394z"
 ></path>,
 <path
   fill="#333A3F"
   stroke="#333A3F"
   d="M395 343L395 338 393 341z"
 ></path>,
 <path
   fill="#4F5862"
   stroke="#4F5862"
   d="M398 337L395 338 395 343z"
 ></path>,
 <path
   fill="#302F2D"
   stroke="#302F2D"
   d="M161 358L166 369 172 362z"
 ></path>,
 <path
   fill="#403E37"
   stroke="#403E37"
   d="M169 379L168 388 172 389z"
 ></path>,
 <path
   fill="#131518"
   stroke="#131518"
   d="M168 347L166 356 178 354z"
 ></path>,
 <path
   fill="#595146"
   stroke="#595146"
   d="M161 395L170 402 172 394z"
 ></path>,
 <path
   fill="#514A42"
   stroke="#514A42"
   d="M151 383L168 388 169 379z"
 ></path>,
 <path
   fill="#21363B"
   stroke="#21363B"
   d="M399 391L396 388 393 391z"
 ></path>,
 <path
   fill="#382C27"
   stroke="#382C27"
   d="M199 442L205 451 205 445z"
 ></path>,
 <path
   fill="#3D2C29"
   stroke="#3D2C29"
   d="M189 453L205 451 199 442z"
 ></path>,
 <path
   fill="#1E3842"
   stroke="#1E3842"
   d="M395 338L394 329 392 340z"
 ></path>,
 <path
   fill="#15353F"
   stroke="#15353F"
   d="M399 333L394 329 395 338z"
 ></path>,
 <path
   fill="#768083"
   stroke="#768083"
   d="M409 346L398 337 395 343z"
 ></path>,
 <path
   fill="#27414C"
   stroke="#27414C"
   d="M404 368L399 358 394 366z"
 ></path>,
 <path
   fill="#3A3732"
   stroke="#3A3732"
   d="M166 369L165 374 171 367z"
 ></path>,
 <path
   fill="#4B433B"
   stroke="#4B433B"
   d="M164 369L165 374 166 369z"
 ></path>,
 <path
   fill="#687D7F"
   stroke="#687D7F"
   d="M367 278L354 292 363 294z"
 ></path>,
 <path
   fill="#605552"
   stroke="#605552"
   d="M345 272L343 251 330 266z"
 ></path>,
 <path
   fill="#788C8B"
   stroke="#788C8B"
   d="M367 278L363 294 378 281z"
 ></path>,
 <path
   fill="#435C62"
   stroke="#435C62"
   d="M387 306L383 302 379 312z"
 ></path>,
 <path
   fill="#A18170"
   stroke="#A18170"
   d="M234 262L226 259 222 268z"
 ></path>,
 <path
   fill="#7E5643"
   stroke="#7E5643"
   d="M202 269L206 281 217 278z"
 ></path>,
 <path
   fill="#9D8376"
   stroke="#9D8376"
   d="M310 252L226 259 284 258z"
 ></path>,
 <path
   fill="#38342F"
   stroke="#38342F"
   d="M161 358L164 369 166 369z"
 ></path>,
 <path
   fill="#5C5851"
   stroke="#5C5851"
   d="M182 421L184 429 186 424z"
 ></path>,
 <path
   fill="#59524B"
   stroke="#59524B"
   d="M175 422L184 429 182 421z"
 ></path>,
 <path
   fill="#575045"
   stroke="#575045"
   d="M161 395L172 394 170 390z"
 ></path>,
 <path
   fill="#554D42"
   stroke="#554D42"
   d="M161 395L170 390 168 388z"
 ></path>,
 <path
   fill="#544B43"
   stroke="#544B43"
   d="M161 395L168 388 151 383z"
 ></path>,
 <path
   fill="#344C52"
   stroke="#344C52"
   d="M393 314L387 306 379 312z"
 ></path>,
 <path
   fill="#50575A"
   stroke="#50575A"
   d="M401 354L395 343 397 355z"
 ></path>,
 <path
   fill="#23414B"
   stroke="#23414B"
   d="M399 358L401 354 397 355z"
 ></path>,
 <path
   fill="#27454F"
   stroke="#27454F"
   d="M405 354L401 354 399 358z"
 ></path>,
 <path
   fill="#112F3A"
   stroke="#112F3A"
   d="M396 327L385 329 394 329z"
 ></path>,
 <path
   fill="#768C8C"
   stroke="#768C8C"
   d="M378 281L363 294 376 301z"
 ></path>,
 <path
   fill="#14343F"
   stroke="#14343F"
   d="M399 333L396 327 394 329z"
 ></path>,
 <path
   fill="#1D2023"
   stroke="#1D2023"
   d="M166 356L161 358 172 362z"
 ></path>,
 <path
   fill="#1A1B1C"
   stroke="#1A1B1C"
   d="M168 347L162 352 166 356z"
 ></path>,
 <path
   fill="#171717"
   stroke="#171717"
   d="M159 329L163 348 168 347z"
 ></path>,
 <path
   fill="#4E4541"
   stroke="#4E4541"
   d="M184 429L185 434 186 424z"
 ></path>,
 <path
   fill="#483E3A"
   stroke="#483E3A"
   d="M169 431L185 434 184 429z"
 ></path>,
 <path
   fill="#665E5A"
   stroke="#665E5A"
   d="M360 275L343 251 345 272z"
 ></path>,
 <path
   fill="#819493"
   stroke="#819493"
   d="M378 281L376 301 384 284z"
 ></path>,
 <path
   fill="#2F454D"
   stroke="#2F454D"
   d="M405 369L393 367 392 384z"
 ></path>,
 <path
   fill="#35494F"
   stroke="#35494F"
   d="M393 393L399 391 393 391z"
 ></path>,
 <path
   fill="#414F53"
   stroke="#414F53"
   d="M400 396L393 393 390 396z"
 ></path>,
 <path
   fill="#101113"
   stroke="#101113"
   d="M163 348L162 352 168 347z"
 ></path>,
 <path
   fill="#29434F"
   stroke="#29434F"
   d="M398 337L399 333 395 338z"
 ></path>,
 <path
   fill="#1C3843"
   stroke="#1C3843"
   d="M396 327L393 314 385 329z"
 ></path>,
 <path
   fill="#143540"
   stroke="#143540"
   d="M402 328L399 333 405 331z"
 ></path>,
 <path
   fill="#131416"
   stroke="#131416"
   d="M162 352L161 358 166 356z"
 ></path>,
 <path
   fill="#483F38"
   stroke="#483F38"
   d="M164 369L152 374 165 374z"
 ></path>,
 <path
   fill="#433330"
   stroke="#433330"
   d="M185 434L190 442 201 437z"
 ></path>,
 <path
   fill="#6C8488"
   stroke="#6C8488"
   d="M384 284L376 301 383 302z"
 ></path>,
 <path
   fill="#3C5A64"
   stroke="#3C5A64"
   d="M393 312L393 314 399 309z"
 ></path>,
 <path
   fill="#171617"
   stroke="#171617"
   d="M173 328L159 329 174 329z"
 ></path>,
 <path
   fill="#0E0E0F"
   stroke="#0E0E0F"
   d="M157 356L161 358 162 352z"
 ></path>,
 <path
   fill="#211E1C"
   stroke="#211E1C"
   d="M185 308L172 311 190 315z"
 ></path>,
 <path
   fill="#231E1D"
   stroke="#231E1D"
   d="M174 303L172 311 185 308z"
 ></path>,
 <path
   fill="#50372D"
   stroke="#50372D"
   d="M192 275L200 297 206 281z"
 ></path>,
 <path
   fill="#8D6350"
   stroke="#8D6350"
   d="M202 269L217 278 222 268z"
 ></path>,
 <path
   fill="#42555B"
   stroke="#42555B"
   d="M405 369L392 384 406 388z"
 ></path>,
 <path
   fill="#666B6C"
   stroke="#666B6C"
   d="M401 354L409 346 395 343z"
 ></path>,
 <path
   fill="#49646D"
   stroke="#49646D"
   d="M393 314L393 312 387 306z"
 ></path>,
 <path
   fill="#526D74"
   stroke="#526D74"
   d="M403 311L393 314 407 321z"
 ></path>,
 <path
   fill="#42302D"
   stroke="#42302D"
   d="M185 434L184 440 190 442z"
 ></path>,
 <path
   fill="#595049"
   stroke="#595049"
   d="M169 419L175 422 182 418z"
 ></path>,
 <path
   fill="#2B3F46"
   stroke="#2B3F46"
   d="M406 388L392 384 396 388z"
 ></path>,
 <path
   fill="#727773"
   stroke="#727773"
   d="M376 416L400 396 390 396z"
 ></path>,
 <path
   fill="#1A3A42"
   stroke="#1A3A42"
   d="M408 358L405 354 399 358z"
 ></path>,
 <path
   fill="#98A29E"
   stroke="#98A29E"
   d="M406 388L396 388 399 391z"
 ></path>,
 <path
   fill="#294650"
   stroke="#294650"
   d="M408 358L399 358 404 368z"
 ></path>,
 <path
   fill="#402E27"
   stroke="#402E27"
   d="M192 275L174 303 200 297z"
 ></path>,
 <path
   fill="#A17E69"
   stroke="#A17E69"
   d="M226 259L202 269 222 268z"
 ></path>,
 <path
   fill="#8C5E49"
   stroke="#8C5E49"
   d="M192 275L206 281 200 273z"
 ></path>,
 <path
   fill="#141515"
   stroke="#141515"
   d="M157 356L158 366 161 358z"
 ></path>,
 <path
   fill="#242221"
   stroke="#242221"
   d="M161 358L158 366 164 369z"
 ></path>,
 <path
   fill="#5E574D"
   stroke="#5E574D"
   d="M170 402L169 419 184 407z"
 ></path>,
 <path
   fill="#161616"
   stroke="#161616"
   d="M157 356L162 352 155 356z"
 ></path>,
 <path
   fill="#171717"
   stroke="#171717"
   d="M162 352L152 355 155 356z"
 ></path>,
 <path
   fill="#41302C"
   stroke="#41302C"
   d="M172 442L184 440 185 434z"
 ></path>,
 <path
   fill="#352826"
   stroke="#352826"
   d="M190 442L189 453 199 442z"
 ></path>,
 <path
   fill="#183844"
   stroke="#183844"
   d="M399 333L402 328 396 327z"
 ></path>,
 <path
   fill="#22444F"
   stroke="#22444F"
   d="M405 331L399 333 398 337z"
 ></path>,
 <path
   fill="#544A43"
   stroke="#544A43"
   d="M157 397L161 395 151 383z"
 ></path>,
 <path
   fill="#4B433E"
   stroke="#4B433E"
   d="M175 422L169 431 184 429z"
 ></path>,
 <path
   fill="#1B1918"
   stroke="#1B1918"
   d="M164 320L173 328 172 311z"
 ></path>,
 <path
   fill="#211C1B"
   stroke="#211C1B"
   d="M168 308L164 320 172 311z"
 ></path>,
 <path
   fill="#A17560"
   stroke="#A17560"
   d="M202 269L192 275 200 273z"
 ></path>,
 <path
   fill="#1A3A45"
   stroke="#1A3A45"
   d="M410 338L405 331 398 337z"
 ></path>,
 <path
   fill="#39555B"
   stroke="#39555B"
   d="M412 363L408 358 404 368z"
 ></path>,
 <path
   fill="#163843"
   stroke="#163843"
   d="M410 357L408 358 412 363z"
 ></path>,
 <path
   fill="#554C42"
   stroke="#554C42"
   d="M163 408L169 419 170 402z"
 ></path>,
 <path
   fill="#554C42"
   stroke="#554C42"
   d="M161 395L161 399 170 402z"
 ></path>,
 <path
   fill="#524840"
   stroke="#524840"
   d="M157 397L161 399 161 395z"
 ></path>,
 <path
   fill="#504740"
   stroke="#504740"
   d="M169 379L165 374 151 383z"
 ></path>,
 <path
   fill="#6A8185"
   stroke="#6A8185"
   d="M384 284L383 302 399 302z"
 ></path>,
 <path
   fill="#6A6561"
   stroke="#6A6561"
   d="M367 278L343 251 360 275z"
 ></path>,
 <path
   fill="#1E3A45"
   stroke="#1E3A45"
   d="M399 309L387 306 393 312z"
 ></path>,
 <path
   fill="#68716C"
   stroke="#68716C"
   d="M400 396L406 388 399 391z"
 ></path>,
 <path
   fill="#51382A"
   stroke="#51382A"
   d="M159 292L168 308 174 303z"
 ></path>,
 <path
   fill="#211B1A"
   stroke="#211B1A"
   d="M174 303L168 308 172 311z"
 ></path>,
 <path
   fill="#554C42"
   stroke="#554C42"
   d="M161 399L162 404 170 402z"
 ></path>,
 <path
   fill="#78959C"
   stroke="#78959C"
   d="M403 311L399 309 393 314z"
 ></path>,
 <path
   fill="#3A4E55"
   stroke="#3A4E55"
   d="M409 346L401 354 405 354z"
 ></path>,
 <path
   fill="#171718"
   stroke="#171718"
   d="M157 356L151 361 158 366z"
 ></path>,
 <path
   fill="#151516"
   stroke="#151516"
   d="M152 355L162 352 163 348z"
 ></path>,
 <path
   fill="#544B41"
   stroke="#544B41"
   d="M162 404L163 408 170 402z"
 ></path>,
 <path
   fill="#716E69"
   stroke="#716E69"
   d="M378 281L343 251 367 278z"
 ></path>,
 <path
   fill="#9D867D"
   stroke="#9D867D"
   d="M325 256L343 251 310 252z"
 ></path>,
 <path
   fill="#181717"
   stroke="#181717"
   d="M164 320L159 329 173 328z"
 ></path>,
 <path
   fill="#1B1616"
   stroke="#1B1616"
   d="M154 324L159 329 164 320z"
 ></path>,
 <path
   fill="#50473E"
   stroke="#50473E"
   d="M162 404L162 407 163 408z"
 ></path>,
 <path
   fill="#4D443D"
   stroke="#4D443D"
   d="M163 408L157 419 169 419z"
 ></path>,
 <path
   fill="#50453C"
   stroke="#50453C"
   d="M156 402L162 407 162 404z"
 ></path>,
 <path
   fill="#51463D"
   stroke="#51463D"
   d="M156 402L162 404 161 399z"
 ></path>,
 <path
   fill="#203F46"
   stroke="#203F46"
   d="M410 357L405 354 408 358z"
 ></path>,
 <path
   fill="#55676D"
   stroke="#55676D"
   d="M413 348L409 346 405 354z"
 ></path>,
 <path
   fill="#2E4850"
   stroke="#2E4850"
   d="M412 363L404 368 405 369z"
 ></path>,
 <path
   fill="#27444F"
   stroke="#27444F"
   d="M393 314L396 327 407 321z"
 ></path>,
 <path
   fill="#7E7B75"
   stroke="#7E7B75"
   d="M378 281L433 293 343 251z"
 ></path>,
 <path
   fill="#627F83"
   stroke="#627F83"
   d="M399 302L383 302 387 306z"
 ></path>,
 <path
   fill="#281D1B"
   stroke="#281D1B"
   d="M183 447L184 440 178 447z"
 ></path>,
 <path
   fill="#332522"
   stroke="#332522"
   d="M183 447L184 447 184 440z"
 ></path>,
 <path
   fill="#2F2220"
   stroke="#2F2220"
   d="M184 440L184 447 190 442z"
 ></path>,
 <path
   fill="#5A3C35"
   stroke="#5A3C35"
   d="M205 451L190 463 232 460z"
 ></path>,
 <path
   fill="#342724"
   stroke="#342724"
   d="M184 447L189 453 190 442z"
 ></path>,
 <path
   fill="#25201F"
   stroke="#25201F"
   d="M152 374L164 369 158 366z"
 ></path>,
 <path
   fill="#362420"
   stroke="#362420"
   d="M184 447L182 452 189 453z"
 ></path>,
 <path
   fill="#4C443E"
   stroke="#4C443E"
   d="M169 431L175 422 169 419z"
 ></path>,
 <path
   fill="#516265"
   stroke="#516265"
   d="M415 376L412 363 405 369z"
 ></path>,
 <path
   fill="#6E7C7E"
   stroke="#6E7C7E"
   d="M413 348L411 338 409 346z"
 ></path>,
 <path
   fill="#1D1C1D"
   stroke="#1D1C1D"
   d="M155 356L151 361 157 356z"
 ></path>,
 <path
   fill="#141313"
   stroke="#141313"
   d="M147 343L152 355 163 348z"
 ></path>,
 <path
   fill="#1F4050"
   stroke="#1F4050"
   d="M407 321L396 327 402 328z"
 ></path>,
 <path
   fill="#68787E"
   stroke="#68787E"
   d="M409 346L410 338 398 337z"
 ></path>,
 <path
   fill="#68757A"
   stroke="#68757A"
   d="M411 338L410 338 409 346z"
 ></path>,
 <path
   fill="#101113"
   stroke="#101113"
   d="M147 365L152 374 158 366z"
 ></path>,
 <path
   fill="#1A1919"
   stroke="#1A1919"
   d="M152 355L151 361 155 356z"
 ></path>,
 <path
   fill="#1E3E4C"
   stroke="#1E3E4C"
   d="M410 338L412 336 405 331z"
 ></path>,
 <path
   fill="#465D64"
   stroke="#465D64"
   d="M413 348L405 354 410 357z"
 ></path>,
 <path
   fill="#38555E"
   stroke="#38555E"
   d="M399 309L399 302 387 306z"
 ></path>,
 <path
   fill="#1A3D4C"
   stroke="#1A3D4C"
   d="M407 321L402 328 408 322z"
 ></path>,
 <path
   fill="#5A6C72"
   stroke="#5A6C72"
   d="M419 352L413 348 410 357z"
 ></path>,
 <path
   fill="#12343F"
   stroke="#12343F"
   d="M408 322L402 328 405 331z"
 ></path>,
 <path
   fill="#4D433D"
   stroke="#4D433D"
   d="M157 419L163 408 162 407z"
 ></path>,
 <path
   fill="#443C37"
   stroke="#443C37"
   d="M161 431L169 431 169 419z"
 ></path>,
 <path
   fill="#514640"
   stroke="#514640"
   d="M157 397L156 402 161 399z"
 ></path>,
 <path
   fill="#50433D"
   stroke="#50433D"
   d="M154 405L156 402 153 402z"
 ></path>,
 <path
   fill="#4B676D"
   stroke="#4B676D"
   d="M403 311L399 302 399 309z"
 ></path>,
 <path
   fill="#483D38"
   stroke="#483D38"
   d="M152 374L151 379 165 374z"
 ></path>,
 <path
   fill="#1A1716"
   stroke="#1A1716"
   d="M145 382L151 379 143 371z"
 ></path>,
 <path
   fill="#6B878C"
   stroke="#6B878C"
   d="M414 309L405 292 399 302z"
 ></path>,
 <path
   fill="#698288"
   stroke="#698288"
   d="M407 321L414 309 403 311z"
 ></path>,
 <path
   fill="#173845"
   stroke="#173845"
   d="M412 336L408 322 405 331z"
 ></path>,
 <path
   fill="#3F5660"
   stroke="#3F5660"
   d="M412 336L410 338 411 338z"
 ></path>,
 <path
   fill="#4B3F39"
   stroke="#4B3F39"
   d="M151 379L151 383 165 374z"
 ></path>,
 <path
   fill="#7C8E96"
   stroke="#7C8E96"
   d="M415 337L412 336 411 338z"
 ></path>,
 <path
   fill="#6E7A78"
   stroke="#6E7A78"
   d="M406 388L414 380 405 369z"
 ></path>,
 <path
   fill="#22444D"
   stroke="#22444D"
   d="M412 363L418 358 410 357z"
 ></path>,
 <path
   fill="#727A75"
   stroke="#727A75"
   d="M413 398L413 386 406 388z"
 ></path>,
 <path
   fill="#767C76"
   stroke="#767C76"
   d="M413 398L406 388 400 396z"
 ></path>,
 <path
   fill="#8D948D"
   stroke="#8D948D"
   d="M414 383L414 380 406 388z"
 ></path>,
 <path
   fill="#969D99"
   stroke="#969D99"
   d="M413 386L414 383 406 388z"
 ></path>,
 <path
   fill="#818C89"
   stroke="#818C89"
   d="M414 380L415 376 405 369z"
 ></path>,
 <path
   fill="#ABB1AA"
   stroke="#ABB1AA"
   d="M418 377L415 376 418 379z"
 ></path>,
 <path
   fill="#2F221F"
   stroke="#2F221F"
   d="M172 442L178 447 184 440z"
 ></path>,
 <path
   fill="#372A27"
   stroke="#372A27"
   d="M183 447L182 452 184 447z"
 ></path>,
 <path
   fill="#181615"
   stroke="#181615"
   d="M159 329L147 343 163 348z"
 ></path>,
 <path
   fill="#151212"
   stroke="#151212"
   d="M152 355L147 363 151 361z"
 ></path>,
 <path
   fill="#211717"
   stroke="#211717"
   d="M148 317L154 324 164 320z"
 ></path>,
 <path
   fill="#211818"
   stroke="#211818"
   d="M148 317L164 320 168 308z"
 ></path>,
 <path
   fill="#472F2B"
   stroke="#472F2B"
   d="M189 453L190 461 205 451z"
 ></path>,
 <path
   fill="#352422"
   stroke="#352422"
   d="M178 447L182 452 183 447z"
 ></path>,
 <path
   fill="#1B1716"
   stroke="#1B1716"
   d="M154 324L153 326 159 329z"
 ></path>,
 <path
   fill="#532F29"
   stroke="#532F29"
   d="M186 462L190 461 189 453z"
 ></path>,
 <path
   fill="#4F423B"
   stroke="#4F423B"
   d="M156 402L154 405 162 407z"
 ></path>,
 <path
   fill="#3D2E2B"
   stroke="#3D2E2B"
   d="M169 431L172 442 185 434z"
 ></path>,
 <path
   fill="#53463F"
   stroke="#53463F"
   d="M153 402L156 402 157 397z"
 ></path>,
 <path
   fill="#53453F"
   stroke="#53453F"
   d="M148 398L153 402 157 397z"
 ></path>,
 <path
   fill="#1C1818"
   stroke="#1C1818"
   d="M143 363L147 363 152 355z"
 ></path>,
 <path
   fill="#0D0D0F"
   stroke="#0D0D0F"
   d="M151 361L147 365 158 366z"
 ></path>,
 <path
   fill="#342A25"
   stroke="#342A25"
   d="M151 379L145 382 151 383z"
 ></path>,
 <path
   fill="#4E403A"
   stroke="#4E403A"
   d="M144 390L148 398 157 397z"
 ></path>,
 <path
   fill="#191718"
   stroke="#191718"
   d="M147 363L147 365 151 361z"
 ></path>,
 <path
   fill="#402925"
   stroke="#402925"
   d="M182 452L182 454 189 453z"
 ></path>,
 <path
   fill="#55342E"
   stroke="#55342E"
   d="M180 457L182 454 177 455z"
 ></path>,
 <path
   fill="#51312C"
   stroke="#51312C"
   d="M180 457L182 456 182 454z"
 ></path>,
 <path
   fill="#3D2E2B"
   stroke="#3D2E2B"
   d="M161 431L172 442 169 431z"
 ></path>,
 <path
   fill="#2F4E5A"
   stroke="#2F4E5A"
   d="M420 321L418 318 408 322z"
 ></path>,
 <path
   fill="#637E83"
   stroke="#637E83"
   d="M414 309L399 302 403 311z"
 ></path>,
 <path
   fill="#59696D"
   stroke="#59696D"
   d="M413 348L415 337 411 338z"
 ></path>,
 <path
   fill="#57686E"
   stroke="#57686E"
   d="M418 347L415 337 413 348z"
 ></path>,
 <path
   fill="#B8BEB7"
   stroke="#B8BEB7"
   d="M418 379L415 376 414 380z"
 ></path>,
 <path
   fill="#B6BCB4"
   stroke="#B6BCB4"
   d="M418 379L414 380 414 383z"
 ></path>,
 <path
   fill="#92948E"
   stroke="#92948E"
   d="M376 416L413 398 400 396z"
 ></path>,
 <path
   fill="#64372D"
   stroke="#64372D"
   d="M186 462L190 463 190 461z"
 ></path>,
 <path
   fill="#603B35"
   stroke="#603B35"
   d="M190 461L190 463 205 451z"
 ></path>,
 <path
   fill="#3E5C65"
   stroke="#3E5C65"
   d="M421 358L418 358 412 363z"
 ></path>,
 <path
   fill="#5F6C6D"
   stroke="#5F6C6D"
   d="M418 377L412 363 415 376z"
 ></path>,
 <path
   fill="#181513"
   stroke="#181513"
   d="M146 337L147 343 159 329z"
 ></path>,
 <path
   fill="#432824"
   stroke="#432824"
   d="M182 454L182 456 189 453z"
 ></path>,
 <path
   fill="#4E2F2A"
   stroke="#4E2F2A"
   d="M182 454L182 452 177 455z"
 ></path>,
 <path
   fill="#757A73"
   stroke="#757A73"
   d="M418 379L414 383 413 386z"
 ></path>,
 <path
   fill="#354851"
   stroke="#354851"
   d="M419 352L418 347 413 348z"
 ></path>,
 <path
   fill="#9EA39D"
   stroke="#9EA39D"
   d="M413 398L418 379 413 386z"
 ></path>,
 <path
   fill="#4A3E38"
   stroke="#4A3E38"
   d="M154 405L157 419 162 407z"
 ></path>,
 <path
   fill="#403330"
   stroke="#403330"
   d="M148 421L157 419 147 419z"
 ></path>,
 <path
   fill="#3F595F"
   stroke="#3F595F"
   d="M418 358L419 352 410 357z"
 ></path>,
 <path
   fill="#43595D"
   stroke="#43595D"
   d="M421 358L419 352 418 358z"
 ></path>,
 <path
   fill="#44595D"
   stroke="#44595D"
   d="M421 358L412 363 418 377z"
 ></path>,
 <path
   fill="#53332E"
   stroke="#53332E"
   d="M182 456L186 462 189 453z"
 ></path>,
 <path
   fill="#532E27"
   stroke="#532E27"
   d="M179 459L186 462 182 456z"
 ></path>,
 <path
   fill="#191514"
   stroke="#191514"
   d="M146 337L145 346 147 343z"
 ></path>,
 <path
   fill="#1B1716"
   stroke="#1B1716"
   d="M147 343L145 346 152 355z"
 ></path>,
 <path
   fill="#181617"
   stroke="#181617"
   d="M147 363L143 363 147 365z"
 ></path>,
 <path
   fill="#4E403C"
   stroke="#4E403C"
   d="M153 402L143 402 154 405z"
 ></path>,
 <path
   fill="#1D1A19"
   stroke="#1D1A19"
   d="M143 371L151 379 152 374z"
 ></path>,
 <path
   fill="#131212"
   stroke="#131212"
   d="M143 371L152 374 147 365z"
 ></path>,
 <path
   fill="#1A1615"
   stroke="#1A1615"
   d="M153 326L146 337 159 329z"
 ></path>,
 <path
   fill="#211B19"
   stroke="#211B19"
   d="M146 330L146 337 153 326z"
 ></path>,
 <path
   fill="#4D3F37"
   stroke="#4D3F37"
   d="M144 390L157 397 151 383z"
 ></path>,
 <path
   fill="#7F5B44"
   stroke="#7F5B44"
   d="M192 275L166 287 174 303z"
 ></path>,
 <path
   fill="#231715"
   stroke="#231715"
   d="M141 324L146 330 153 326z"
 ></path>,
 <path
   fill="#A17960"
   stroke="#A17960"
   d="M165 285L166 287 192 275z"
 ></path>,
 <path
   fill="#3A2524"
   stroke="#3A2524"
   d="M177 455L178 447 166 451z"
 ></path>,
 <path
   fill="#422724"
   stroke="#422724"
   d="M177 455L182 452 178 447z"
 ></path>,
 <path
   fill="#463D38"
   stroke="#463D38"
   d="M157 419L161 431 169 419z"
 ></path>,
 <path
   fill="#423532"
   stroke="#423532"
   d="M152 426L161 431 157 419z"
 ></path>,
 <path
   fill="#2C211E"
   stroke="#2C211E"
   d="M136 368L143 363 134 359z"
 ></path>,
 <path
   fill="#1F1917"
   stroke="#1F1917"
   d="M136 355L143 363 152 355z"
 ></path>,
 <path
   fill="#516268"
   stroke="#516268"
   d="M428 337L415 337 418 347z"
 ></path>,
 <path
   fill="#334349"
   stroke="#334349"
   d="M429 358L421 358 431 362z"
 ></path>,
 <path
   fill="#181413"
   stroke="#181413"
   d="M143 363L143 371 147 365z"
 ></path>,
 <path
   fill="#32211F"
   stroke="#32211F"
   d="M166 451L178 447 172 442z"
 ></path>,
 <path
   fill="#55312B"
   stroke="#55312B"
   d="M180 457L179 459 182 456z"
 ></path>,
 <path
   fill="#1D1616"
   stroke="#1D1616"
   d="M146 337L133 342 145 346z"
 ></path>,
 <path
   fill="#201617"
   stroke="#201617"
   d="M148 317L153 326 154 324z"
 ></path>,
 <path
   fill="#4D3F3C"
   stroke="#4D3F3C"
   d="M148 398L143 402 153 402z"
 ></path>,
 <path
   fill="#352923"
   stroke="#352923"
   d="M145 382L144 390 151 383z"
 ></path>,
 <path
   fill="#241D1B"
   stroke="#241D1B"
   d="M140 380L144 390 145 382z"
 ></path>,
 <path
   fill="#452D26"
   stroke="#452D26"
   d="M146 314L148 317 168 308z"
 ></path>,
 <path
   fill="#9B7059"
   stroke="#9B7059"
   d="M202 269L165 285 192 275z"
 ></path>,
 <path
   fill="#5B312B"
   stroke="#5B312B"
   d="M176 463L179 459 175 462z"
 ></path>,
 <path
   fill="#59322B"
   stroke="#59322B"
   d="M177 455L179 459 180 457z"
 ></path>,
 <path
   fill="#1D1916"
   stroke="#1D1916"
   d="M146 330L144 333 146 337z"
 ></path>,
 <path
   fill="#1E1413"
   stroke="#1E1413"
   d="M141 324L144 333 146 330z"
 ></path>,
 <path
   fill="#866349"
   stroke="#866349"
   d="M159 292L174 303 166 287z"
 ></path>,
 <path
   fill="#9D7A5B"
   stroke="#9D7A5B"
   d="M165 285L159 292 166 287z"
 ></path>,
 <path
   fill="#777B78"
   stroke="#777B78"
   d="M384 284L433 293 378 281z"
 ></path>,
 <path
   fill="#7F9798"
   stroke="#7F9798"
   d="M399 302L405 292 384 284z"
 ></path>,
 <path
   fill="#47626D"
   stroke="#47626D"
   d="M414 309L407 321 418 318z"
 ></path>,
 <path
   fill="#284856"
   stroke="#284856"
   d="M407 321L408 322 418 318z"
 ></path>,
 <path
   fill="#1B3D4A"
   stroke="#1B3D4A"
   d="M412 336L420 321 408 322z"
 ></path>,
 <path
   fill="#1E3F4C"
   stroke="#1E3F4C"
   d="M412 336L423 331 420 321z"
 ></path>,
 <path
   fill="#211D1A"
   stroke="#211D1A"
   d="M143 371L140 380 145 382z"
 ></path>,
 <path
   fill="#261D1A"
   stroke="#261D1A"
   d="M133 378L140 380 143 371z"
 ></path>,
 <path
   fill="#302422"
   stroke="#302422"
   d="M136 368L143 371 143 363z"
 ></path>,
 <path
   fill="#526E78"
   stroke="#526E78"
   d="M412 336L415 337 423 331z"
 ></path>,
 <path
   fill="#A47E63"
   stroke="#A47E63"
   d="M165 285L156 294 159 292z"
 ></path>,
 <path
   fill="#855D44"
   stroke="#855D44"
   d="M159 292L156 294 168 308z"
 ></path>,
 <path
   fill="#425A62"
   stroke="#425A62"
   d="M423 331L415 337 428 337z"
 ></path>,
 <path
   fill="#6F8893"
   stroke="#6F8893"
   d="M418 318L419 315 414 309z"
 ></path>,
 <path
   fill="#42302C"
   stroke="#42302C"
   d="M139 391L143 402 148 398z"
 ></path>,
 <path
   fill="#392926"
   stroke="#392926"
   d="M139 391L148 398 144 390z"
 ></path>,
 <path
   fill="#403531"
   stroke="#403531"
   d="M148 421L152 426 157 419z"
 ></path>,
 <path
   fill="#3F2A28"
   stroke="#3F2A28"
   d="M157 439L166 451 172 442z"
 ></path>,
 <path
   fill="#6B8A95"
   stroke="#6B8A95"
   d="M420 321L419 317 418 318z"
 ></path>,
 <path
   fill="#798E90"
   stroke="#798E90"
   d="M414 309L421 296 405 292z"
 ></path>,
 <path
   fill="#32201D"
   stroke="#32201D"
   d="M148 317L141 324 153 326z"
 ></path>,
 <path
   fill="#6A4534"
   stroke="#6A4534"
   d="M149 300L146 314 168 308z"
 ></path>,
 <path
   fill="#44616B"
   stroke="#44616B"
   d="M423 317L419 315 419 317z"
 ></path>,
 <path
   fill="#59686B"
   stroke="#59686B"
   d="M432 342L418 347 419 352z"
 ></path>,
 <path
   fill="#688590"
   stroke="#688590"
   d="M419 317L419 315 418 318z"
 ></path>,
 <path
   fill="#304F5B"
   stroke="#304F5B"
   d="M423 317L419 317 420 321z"
 ></path>,
 <path
   fill="#392928"
   stroke="#392928"
   d="M157 439L172 442 161 431z"
 ></path>,
 <path
   fill="#1C1514"
   stroke="#1C1514"
   d="M133 378L139 391 140 380z"
 ></path>,
 <path
   fill="#2A201E"
   stroke="#2A201E"
   d="M140 380L139 391 144 390z"
 ></path>,
 <path
   fill="#5D322B"
   stroke="#5D322B"
   d="M179 459L176 463 186 462z"
 ></path>,
 <path
   fill="#673A31"
   stroke="#673A31"
   d="M186 462L176 463 190 463z"
 ></path>,
 <path
   fill="#5D322C"
   stroke="#5D322C"
   d="M175 462L179 459 177 455z"
 ></path>,
 <path
   fill="#543029"
   stroke="#543029"
   d="M166 451L175 462 177 455z"
 ></path>,
 <path
   fill="#3C2D2C"
   stroke="#3C2D2C"
   d="M152 426L157 439 161 431z"
 ></path>,
 <path
   fill="#443733"
   stroke="#443733"
   d="M147 419L157 419 154 405z"
 ></path>,
 <path
   fill="#443734"
   stroke="#443734"
   d="M147 419L154 405 144 413z"
 ></path>,
 <path
   fill="#1C1615"
   stroke="#1C1615"
   d="M136 355L152 355 145 346z"
 ></path>,
 <path
   fill="#251A19"
   stroke="#251A19"
   d="M136 355L145 346 133 342z"
 ></path>,
 <path
   fill="#453734"
   stroke="#453734"
   d="M144 413L154 405 143 402z"
 ></path>,
 <path
   fill="#1C1412"
   stroke="#1C1412"
   d="M133 342L146 337 144 333z"
 ></path>,
 <path
   fill="#3E302D"
   stroke="#3E302D"
   d="M150 427L157 439 152 426z"
 ></path>,
 <path
   fill="#5D3B2C"
   stroke="#5D3B2C"
   d="M146 314L141 324 148 317z"
 ></path>,
 <path
   fill="#3E3430"
   stroke="#3E3430"
   d="M148 421L150 427 152 426z"
 ></path>,
 <path
   fill="#433431"
   stroke="#433431"
   d="M142 426L150 427 148 421z"
 ></path>,
 <path
   fill="#413130"
   stroke="#413130"
   d="M140 434L152 442 150 427z"
 ></path>,
 <path
   fill="#3C2B2A"
   stroke="#3C2B2A"
   d="M136 410L144 413 143 402z"
 ></path>,
 <path
   fill="#5F7075"
   stroke="#5F7075"
   d="M421 358L429 358 419 352z"
 ></path>,
 <path
   fill="#647172"
   stroke="#647172"
   d="M431 362L421 358 418 377z"
 ></path>,
 <path
   fill="#7C8684"
   stroke="#7C8684"
   d="M431 362L418 377 418 379z"
 ></path>,
 <path
   fill="#5C3927"
   stroke="#5C3927"
   d="M146 314L132 327 141 324z"
 ></path>,
 <path
   fill="#7E553C"
   stroke="#7E553C"
   d="M156 294L149 300 168 308z"
 ></path>,
 <path
   fill="#9F765B"
   stroke="#9F765B"
   d="M165 285L149 300 156 294z"
 ></path>,
 <path
   fill="#251C19"
   stroke="#251C19"
   d="M136 355L134 359 143 363z"
 ></path>,
 <path
   fill="#2A1E1C"
   stroke="#2A1E1C"
   d="M136 368L133 378 143 371z"
 ></path>,
 <path
   fill="#2D1F1E"
   stroke="#2D1F1E"
   d="M131 353L134 359 136 355z"
 ></path>,
 <path
   fill="#1E3E4D"
   stroke="#1E3E4D"
   d="M429 329L423 317 420 321z"
 ></path>,
 <path
   fill="#41595E"
   stroke="#41595E"
   d="M432 342L428 337 418 347z"
 ></path>,
 <path
   fill="#768D92"
   stroke="#768D92"
   d="M419 315L421 296 414 309z"
 ></path>,
 <path
   fill="#204250"
   stroke="#204250"
   d="M429 329L420 321 423 331z"
 ></path>,
 <path
   fill="#565E60"
   stroke="#565E60"
   d="M429 358L433 354 419 352z"
 ></path>,
 <path
   fill="#677475"
   stroke="#677475"
   d="M437 361L431 362 418 379z"
 ></path>,
 <path
   fill="#382723"
   stroke="#382723"
   d="M126 375L133 378 136 368z"
 ></path>,
 <path
   fill="#392623"
   stroke="#392623"
   d="M132 403L136 410 143 402z"
 ></path>,
 <path
   fill="#32201C"
   stroke="#32201C"
   d="M122 357L132 363 134 359z"
 ></path>,
 <path
   fill="#2E211E"
   stroke="#2E211E"
   d="M134 359L132 363 136 368z"
 ></path>,
 <path
   fill="#2E1C18"
   stroke="#2E1C18"
   d="M132 327L133 342 144 333z"
 ></path>,
 <path
   fill="#321A15"
   stroke="#321A15"
   d="M132 342L133 342 132 327z"
 ></path>,
 <path
   fill="#4B2927"
   stroke="#4B2927"
   d="M156 451L162 454 166 451z"
 ></path>,
 <path
   fill="#4C2C28"
   stroke="#4C2C28"
   d="M166 451L162 454 175 462z"
 ></path>,
 <path
   fill="#6A392F"
   stroke="#6A392F"
   d="M175 462L154 467 176 463z"
 ></path>,
 <path
   fill="#452A28"
   stroke="#452A28"
   d="M156 451L166 451 157 439z"
 ></path>,
 <path
   fill="#26434E"
   stroke="#26434E"
   d="M428 337L429 329 423 331z"
 ></path>,
 <path
   fill="#42545D"
   stroke="#42545D"
   d="M437 342L429 329 428 337z"
 ></path>,
 <path
   fill="#7C898A"
   stroke="#7C898A"
   d="M431 362L433 356 429 358z"
 ></path>,
 <path
   fill="#0D1011"
   stroke="#0D1011"
   d="M433 356L433 354 429 358z"
 ></path>,
 <path
   fill="#251A18"
   stroke="#251A18"
   d="M133 342L131 353 136 355z"
 ></path>,
 <path
   fill="#231816"
   stroke="#231816"
   d="M124 388L139 391 133 378z"
 ></path>,
 <path
   fill="#1D1110"
   stroke="#1D1110"
   d="M133 342L132 342 131 353z"
 ></path>,
 <path
   fill="#41291F"
   stroke="#41291F"
   d="M132 327L144 333 141 324z"
 ></path>,
 <path
   fill="#687475"
   stroke="#687475"
   d="M433 354L432 342 419 352z"
 ></path>,
 <path
   fill="#423331"
   stroke="#423331"
   d="M142 426L147 419 135 422z"
 ></path>,
 <path
   fill="#453634"
   stroke="#453634"
   d="M142 426L148 421 147 419z"
 ></path>,
 <path
   fill="#3E2D2C"
   stroke="#3E2D2C"
   d="M150 427L152 442 157 439z"
 ></path>,
 <path
   fill="#35241F"
   stroke="#35241F"
   d="M132 403L143 402 139 391z"
 ></path>,
 <path
   fill="#3D2E2B"
   stroke="#3D2E2B"
   d="M135 417L147 419 144 413z"
 ></path>,
 <path
   fill="#492723"
   stroke="#492723"
   d="M156 451L159 455 162 454z"
 ></path>,
 <path
   fill="#58312C"
   stroke="#58312C"
   d="M162 454L154 467 175 462z"
 ></path>,
 <path
   fill="#402928"
   stroke="#402928"
   d="M156 451L157 439 152 442z"
 ></path>,
 <path
   fill="#3E2524"
   stroke="#3E2524"
   d="M150 445L156 451 152 442z"
 ></path>,
 <path
   fill="#321F1A"
   stroke="#321F1A"
   d="M125 369L132 363 122 357z"
 ></path>,
 <path
   fill="#754A32"
   stroke="#754A32"
   d="M149 300L132 327 146 314z"
 ></path>,
 <path
   fill="#6C838A"
   stroke="#6C838A"
   d="M423 317L421 296 419 315z"
 ></path>,
 <path
   fill="#757878"
   stroke="#757878"
   d="M405 292L433 293 384 284z"
 ></path>,
 <path
   fill="#76888D"
   stroke="#76888D"
   d="M437 310L421 296 423 317z"
 ></path>,
 <path
   fill="#5E6B72"
   stroke="#5E6B72"
   d="M437 342L428 337 432 342z"
 ></path>,
 <path
   fill="#465D69"
   stroke="#465D69"
   d="M437 315L430 317 440 324z"
 ></path>,
 <path
   fill="#20424F"
   stroke="#20424F"
   d="M429 329L430 317 423 317z"
 ></path>,
 <path
   fill="#536366"
   stroke="#536366"
   d="M433 354L437 342 432 342z"
 ></path>,
 <path
   fill="#6D7475"
   stroke="#6D7475"
   d="M433 356L437 361 433 354z"
 ></path>,
 <path
   fill="#828986"
   stroke="#828986"
   d="M431 362L437 361 433 356z"
 ></path>,
 <path
   fill="#8F948F"
   stroke="#8F948F"
   d="M413 398L437 361 418 379z"
 ></path>,
 <path
   fill="#4D2F23"
   stroke="#4D2F23"
   d="M123 390L132 403 139 391z"
 ></path>,
 <path
   fill="#392826"
   stroke="#392826"
   d="M136 410L135 417 144 413z"
 ></path>,
 <path
   fill="#3C2924"
   stroke="#3C2924"
   d="M126 375L136 368 125 369z"
 ></path>,
 <path
   fill="#502C27"
   stroke="#502C27"
   d="M156 451L152 459 159 455z"
 ></path>,
 <path
   fill="#382322"
   stroke="#382322"
   d="M149 445L150 445 152 442z"
 ></path>,
 <path
   fill="#402C2C"
   stroke="#402C2C"
   d="M149 445L152 442 139 437z"
 ></path>,
 <path
   fill="#3A2220"
   stroke="#3A2220"
   d="M150 445L149 445 156 451z"
 ></path>,
 <path
   fill="#453633"
   stroke="#453633"
   d="M140 434L150 427 142 426z"
 ></path>,
 <path
   fill="#5B6A6D"
   stroke="#5B6A6D"
   d="M442 340L437 342 446 357z"
 ></path>,
 <path
   fill="#392722"
   stroke="#392722"
   d="M125 369L136 368 132 363z"
 ></path>,
 <path
   fill="#2B1A17"
   stroke="#2B1A17"
   d="M134 359L131 353 122 357z"
 ></path>,
 <path
   fill="#392524"
   stroke="#392524"
   d="M132 418L135 417 136 410z"
 ></path>,
 <path
   fill="#361F18"
   stroke="#361F18"
   d="M122 357L131 353 123 342z"
 ></path>,
 <path
   fill="#3B2B28"
   stroke="#3B2B28"
   d="M135 417L135 422 147 419z"
 ></path>,
 <path
   fill="#392525"
   stroke="#392525"
   d="M132 418L135 422 135 417z"
 ></path>,
 <path
   fill="#3D2622"
   stroke="#3D2622"
   d="M132 418L136 410 126 414z"
 ></path>,
 <path
   fill="#413030"
   stroke="#413030"
   d="M135 422L137 427 142 426z"
 ></path>,
 <path
   fill="#433331"
   stroke="#433331"
   d="M137 427L140 434 142 426z"
 ></path>,
 <path
   fill="#3E2A26"
   stroke="#3E2A26"
   d="M126 375L124 384 133 378z"
 ></path>,
 <path
   fill="#2D201E"
   stroke="#2D201E"
   d="M119 381L124 384 126 375z"
 ></path>,
 <path
   fill="#3F2C2B"
   stroke="#3F2C2B"
   d="M130 436L139 437 140 434z"
 ></path>,
 <path
   fill="#3D2A2B"
   stroke="#3D2A2B"
   d="M127 430L130 436 137 427z"
 ></path>,
 <path
   fill="#412824"
   stroke="#412824"
   d="M126 414L136 410 132 403z"
 ></path>,
 <path
   fill="#1E1412"
   stroke="#1E1412"
   d="M124 384L124 388 133 378z"
 ></path>,
 <path
   fill="#301D17"
   stroke="#301D17"
   d="M123 342L131 353 132 342z"
 ></path>,
 <path
   fill="#37201B"
   stroke="#37201B"
   d="M115 372L119 381 126 375z"
 ></path>,
 <path
   fill="#502E22"
   stroke="#502E22"
   d="M120 390L123 390 124 388z"
 ></path>,
 <path
   fill="#5D3B24"
   stroke="#5D3B24"
   d="M123 340L123 342 132 342z"
 ></path>,
 <path
   fill="#543423"
   stroke="#543423"
   d="M132 327L123 340 132 342z"
 ></path>,
 <path
   fill="#573420"
   stroke="#573420"
   d="M123 342L120 341 122 357z"
 ></path>,
 <path
   fill="#633923"
   stroke="#633923"
   d="M120 341L123 340 132 327z"
 ></path>,
 <path
   fill="#433130"
   stroke="#433130"
   d="M130 436L140 434 137 427z"
 ></path>,
 <path
   fill="#43302F"
   stroke="#43302F"
   d="M140 434L139 437 152 442z"
 ></path>,
 <path
   fill="#512D27"
   stroke="#512D27"
   d="M144 455L152 459 156 451z"
 ></path>,
 <path
   fill="#482B22"
   stroke="#482B22"
   d="M124 388L123 390 139 391z"
 ></path>,
 <path
   fill="#573024"
   stroke="#573024"
   d="M120 390L124 388 119 384z"
 ></path>,
 <path
   fill="#3F2522"
   stroke="#3F2522"
   d="M143 451L156 451 149 445z"
 ></path>,
 <path
   fill="#5F322E"
   stroke="#5F322E"
   d="M159 455L154 467 162 454z"
 ></path>,
 <path
   fill="#4F5D65"
   stroke="#4F5D65"
   d="M437 342L442 340 429 329z"
 ></path>,
 <path
   fill="#778F99"
   stroke="#778F99"
   d="M430 317L437 310 423 317z"
 ></path>,
 <path
   fill="#797F7C"
   stroke="#797F7C"
   d="M446 357L437 342 433 354z"
 ></path>,
 <path
   fill="#475B68"
   stroke="#475B68"
   d="M440 324L430 317 429 329z"
 ></path>,
 <path
   fill="#7B7D7F"
   stroke="#7B7D7F"
   d="M441 325L440 324 429 329z"
 ></path>,
 <path
   fill="#5B636A"
   stroke="#5B636A"
   d="M442 340L441 325 429 329z"
 ></path>,
 <path
   fill="#838788"
   stroke="#838788"
   d="M440 324L447 313 437 315z"
 ></path>,
 <path
   fill="#633922"
   stroke="#633922"
   d="M123 340L120 341 123 342z"
 ></path>,
 <path
   fill="#472920"
   stroke="#472920"
   d="M116 382L119 381 114 378z"
 ></path>,
 <path
   fill="#70442D"
   stroke="#70442D"
   d="M149 300L120 341 132 327z"
 ></path>,
 <path
   fill="#36515A"
   stroke="#36515A"
   d="M437 315L437 310 430 317z"
 ></path>,
 <path
   fill="#7A8281"
   stroke="#7A8281"
   d="M447 313L437 310 437 315z"
 ></path>,
 <path
   fill="#37201B"
   stroke="#37201B"
   d="M126 375L125 369 115 372z"
 ></path>,
 <path
   fill="#4E2C22"
   stroke="#4E2C22"
   d="M118 401L126 414 132 403z"
 ></path>,
 <path
   fill="#4F5555"
   stroke="#4F5555"
   d="M437 361L446 357 433 354z"
 ></path>,
 <path
   fill="#777677"
   stroke="#777677"
   d="M442 340L450 327 441 325z"
 ></path>,
 <path
   fill="#8A8D88"
   stroke="#8A8D88"
   d="M413 398L446 357 437 361z"
 ></path>,
 <path
   fill="#532F23"
   stroke="#532F23"
   d="M120 396L132 403 123 390z"
 ></path>,
 <path
   fill="#3C292A"
   stroke="#3C292A"
   d="M127 430L137 427 135 422z"
 ></path>,
 <path
   fill="#4E332B"
   stroke="#4E332B"
   d="M119 384L124 388 124 384z"
 ></path>,
 <path
   fill="#180F0A"
   stroke="#180F0A"
   d="M119 381L119 384 124 384z"
 ></path>,
 <path
   fill="#462927"
   stroke="#462927"
   d="M143 452L143 451 140 450z"
 ></path>,
 <path
   fill="#39201E"
   stroke="#39201E"
   d="M140 450L143 451 149 445z"
 ></path>,
 <path
   fill="#5B302B"
   stroke="#5B302B"
   d="M144 455L149 460 152 459z"
 ></path>,
 <path
   fill="#5A2E27"
   stroke="#5A2E27"
   d="M152 459L154 467 159 455z"
 ></path>,
 <path
   fill="#5C2D27"
   stroke="#5C2D27"
   d="M149 461L154 467 152 459z"
 ></path>,
 <path
   fill="#6A3A31"
   stroke="#6A3A31"
   d="M176 463L154 467 190 463z"
 ></path>,
 <path
   fill="#693A32"
   stroke="#693A32"
   d="M190 463L154 467 234 462z"
 ></path>,
 <path
   fill="#5F322C"
   stroke="#5F322C"
   d="M149 460L149 461 152 459z"
 ></path>,
 <path
   fill="#442623"
   stroke="#442623"
   d="M143 451L143 452 156 451z"
 ></path>,
 <path
   fill="#3E2726"
   stroke="#3E2726"
   d="M140 450L149 445 139 437z"
 ></path>,
 <path
   fill="#63342E"
   stroke="#63342E"
   d="M144 461L149 461 149 460z"
 ></path>,
 <path
   fill="#542E21"
   stroke="#542E21"
   d="M119 395L120 396 123 390z"
 ></path>,
 <path
   fill="#512C1F"
   stroke="#512C1F"
   d="M119 395L123 390 120 390z"
 ></path>,
 <path
   fill="#4A2924"
   stroke="#4A2924"
   d="M143 452L144 455 156 451z"
 ></path>,
 <path
   fill="#492823"
   stroke="#492823"
   d="M141 454L144 455 143 452z"
 ></path>,
 <path
   fill="#5E3225"
   stroke="#5E3225"
   d="M120 396L118 401 132 403z"
 ></path>,
 <path
   fill="#5D3427"
   stroke="#5D3427"
   d="M117 390L119 395 120 390z"
 ></path>,
 <path
   fill="#7A7778"
   stroke="#7A7778"
   d="M437 310L433 293 421 296z"
 ></path>,
 <path
   fill="#797170"
   stroke="#797170"
   d="M421 296L433 293 405 292z"
 ></path>,
 <path
   fill="#828483"
   stroke="#828483"
   d="M447 313L433 293 437 310z"
 ></path>,
 <path
   fill="#3E2726"
   stroke="#3E2726"
   d="M133 447L140 450 139 437z"
 ></path>,
 <path
   fill="#562F22"
   stroke="#562F22"
   d="M119 384L117 390 120 390z"
 ></path>,
 <path
   fill="#392219"
   stroke="#392219"
   d="M119 381L116 382 119 384z"
 ></path>,
 <path
   fill="#3A211A"
   stroke="#3A211A"
   d="M115 372L125 369 114 366z"
 ></path>,
 <path
   fill="#663629"
   stroke="#663629"
   d="M117 400L118 401 120 396z"
 ></path>,
 <path
   fill="#4F2B1F"
   stroke="#4F2B1F"
   d="M116 382L117 390 119 384z"
 ></path>,
 <path
   fill="#341F19"
   stroke="#341F19"
   d="M114 366L125 369 122 357z"
 ></path>,
 <path
   fill="#422422"
   stroke="#422422"
   d="M140 450L141 454 143 452z"
 ></path>,
 <path
   fill="#5F322E"
   stroke="#5F322E"
   d="M144 455L144 461 149 460z"
 ></path>,
 <path
   fill="#66332C"
   stroke="#66332C"
   d="M149 461L148 467 154 467z"
 ></path>,
 <path
   fill="#4A2C2A"
   stroke="#4A2C2A"
   d="M137 453L141 454 140 450z"
 ></path>,
 <path
   fill="#47271F"
   stroke="#47271F"
   d="M115 372L114 378 119 381z"
 ></path>,
 <path
   fill="#5B3725"
   stroke="#5B3725"
   d="M120 341L114 366 122 357z"
 ></path>,
 <path
   fill="#5B2D20"
   stroke="#5B2D20"
   d="M117 400L120 396 116 399z"
 ></path>,
 <path
   fill="#382525"
   stroke="#382525"
   d="M127 430L135 422 132 418z"
 ></path>,
 <path
   fill="#562A1C"
   stroke="#562A1C"
   d="M120 396L119 395 116 399z"
 ></path>,
 <path
   fill="#51291D"
   stroke="#51291D"
   d="M115 395L117 390 116 382z"
 ></path>,
 <path
   fill="#372321"
   stroke="#372321"
   d="M127 430L132 418 126 414z"
 ></path>,
 <path
   fill="#4F2C20"
   stroke="#4F2C20"
   d="M114 366L114 378 115 372z"
 ></path>,
 <path
   fill="#422722"
   stroke="#422722"
   d="M115 421L127 430 126 414z"
 ></path>,
 <path
   fill="#5A2F23"
   stroke="#5A2F23"
   d="M118 401L112 413 126 414z"
 ></path>,
 <path
   fill="#603325"
   stroke="#603325"
   d="M116 399L119 395 115 395z"
 ></path>,
 <path
   fill="#522B24"
   stroke="#522B24"
   d="M141 454L144 461 144 455z"
 ></path>,
 <path
   fill="#663831"
   stroke="#663831"
   d="M141 465L144 461 141 454z"
 ></path>,
 <path
   fill="#6A3831"
   stroke="#6A3831"
   d="M144 461L148 467 149 461z"
 ></path>,
 <path
   fill="#5F2F23"
   stroke="#5F2F23"
   d="M117 400L113 402 118 401z"
 ></path>,
 <path
   fill="#613427"
   stroke="#613427"
   d="M115 395L119 395 117 390z"
 ></path>,
 <path
   fill="#52291D"
   stroke="#52291D"
   d="M114 378L115 395 116 382z"
 ></path>,
 <path
   fill="#878A88"
   stroke="#878A88"
   d="M446 357L452 349 442 340z"
 ></path>,
 <path
   fill="#858483"
   stroke="#858483"
   d="M441 325L447 313 440 324z"
 ></path>,
 <path
   fill="#6F3B32"
   stroke="#6F3B32"
   d="M144 461L141 465 148 467z"
 ></path>,
 <path
   fill="#391F1F"
   stroke="#391F1F"
   d="M133 447L137 453 140 450z"
 ></path>,
 <path
   fill="#3F2728"
   stroke="#3F2728"
   d="M133 447L139 437 130 436z"
 ></path>,
 <path
   fill="#331E1E"
   stroke="#331E1E"
   d="M117 429L130 436 127 430z"
 ></path>,
 <path
   fill="#472927"
   stroke="#472927"
   d="M109 451L133 447 130 436z"
 ></path>,
 <path
   fill="#868383"
   stroke="#868383"
   d="M454 337L450 327 442 340z"
 ></path>,
 <path
   fill="#888380"
   stroke="#888380"
   d="M450 327L447 313 441 325z"
 ></path>,
 <path
   fill="#5E2E1F"
   stroke="#5E2E1F"
   d="M116 399L113 402 117 400z"
 ></path>,
 <path
   fill="#633525"
   stroke="#633525"
   d="M115 395L113 402 116 399z"
 ></path>,
 <path
   fill="#552B1E"
   stroke="#552B1E"
   d="M114 378L113 402 115 395z"
 ></path>,
 <path
   fill="#653525"
   stroke="#653525"
   d="M112 413L108 423 113 419z"
 ></path>,
 <path
   fill="#968A87"
   stroke="#968A87"
   d="M450 327L454 337 447 313z"
 ></path>,
 <path
   fill="#38525C"
   stroke="#38525C"
   d="M452 349L454 337 442 340z"
 ></path>,
 <path
   fill="#572921"
   stroke="#572921"
   d="M130 464L141 465 137 453z"
 ></path>,
 <path
   fill="#512A25"
   stroke="#512A25"
   d="M137 453L141 465 141 454z"
 ></path>,
 <path
   fill="#562E23"
   stroke="#562E23"
   d="M113 419L115 421 126 414z"
 ></path>,
 <path
   fill="#452321"
   stroke="#452321"
   d="M133 447L130 464 137 453z"
 ></path>,
 <path
   fill="#653326"
   stroke="#653326"
   d="M113 402L112 413 118 401z"
 ></path>,
 <path
   fill="#6A3927"
   stroke="#6A3927"
   d="M112 413L113 402 108 423z"
 ></path>,
 <path
   fill="#3F2523"
   stroke="#3F2523"
   d="M115 421L117 429 127 430z"
 ></path>,
 <path
   fill="#65504A"
   stroke="#65504A"
   d="M115 430L117 429 115 421z"
 ></path>,
 <path
   fill="#582E22"
   stroke="#582E22"
   d="M112 413L113 419 126 414z"
 ></path>,
 <path
   fill="#5E3124"
   stroke="#5E3124"
   d="M113 419L113 420 115 421z"
 ></path>,
 <path
   fill="#5F3123"
   stroke="#5F3123"
   d="M115 421L113 420 108 423z"
 ></path>,
 <path
   fill="#613D33"
   stroke="#613D33"
   d="M110 428L115 430 115 421z"
 ></path>,
 <path
   fill="#432E2E"
   stroke="#432E2E"
   d="M117 429L115 430 130 436z"
 ></path>,
 <path
   fill="#492522"
   stroke="#492522"
   d="M110 456L130 464 133 447z"
 ></path>,
 <path
   fill="#6E362B"
   stroke="#6E362B"
   d="M141 465L128 471 148 467z"
 ></path>,
 <path
   fill="#472E2E"
   stroke="#472E2E"
   d="M115 430L109 437 130 436z"
 ></path>,
 <path
   fill="#5D2D1F"
   stroke="#5D2D1F"
   d="M108 423L110 428 115 421z"
 ></path>,
 <path
   fill="#5F3123"
   stroke="#5F3123"
   d="M108 423L113 420 113 419z"
 ></path>,
 <path
   fill="#663524"
   stroke="#663524"
   d="M108 423L113 402 114 378z"
 ></path>,
 <path
   fill="#673623"
   stroke="#673623"
   d="M106 430L108 423 114 378z"
 ></path>,
 <path
   fill="#593124"
   stroke="#593124"
   d="M106 430L109 431 110 428z"
 ></path>,
 <path
   fill="#593C35"
   stroke="#593C35"
   d="M110 428L109 431 115 430z"
 ></path>,
 <path
   fill="#693327"
   stroke="#693327"
   d="M130 464L128 471 141 465z"
 ></path>,
 <path
   fill="#763D31"
   stroke="#763D31"
   d="M148 467L128 471 154 467z"
 ></path>,
 <path
   fill="#6D3C34"
   stroke="#6D3C34"
   d="M154 467L128 471 234 462z"
 ></path>,
 <path
   fill="#5D2C22"
   stroke="#5D2C22"
   d="M109 458L128 471 130 464z"
 ></path>,
 <path
   fill="#422826"
   stroke="#422826"
   d="M109 431L109 437 115 430z"
 ></path>,
 <path
   fill="#472422"
   stroke="#472422"
   d="M105 434L109 437 109 431z"
 ></path>,
 <path
   fill="#653625"
   stroke="#653625"
   d="M108 423L106 430 110 428z"
 ></path>,
 <path
   fill="#5F3224"
   stroke="#5F3224"
   d="M114 366L106 430 114 378z"
 ></path>,
 <path
   fill="#452322"
   stroke="#452322"
   d="M105 434L107 438 109 437z"
 ></path>,
 <path
   fill="#482222"
   stroke="#482222"
   d="M109 437L107 443 130 436z"
 ></path>,
 <path
   fill="#582F26"
   stroke="#582F26"
   d="M106 430L105 434 109 431z"
 ></path>,
 <path
   fill="#6E3C29"
   stroke="#6E3C29"
   d="M114 366L105 434 106 430z"
 ></path>,
 <path
   fill="#431E1E"
   stroke="#431E1E"
   d="M105 434L107 443 107 438z"
 ></path>,
 <path
   fill="#492122"
   stroke="#492122"
   d="M107 438L107 443 109 437z"
 ></path>,
 <path
   fill="#572F2A"
   stroke="#572F2A"
   d="M107 443L109 451 130 436z"
 ></path>,
 <path
   fill="#401C1C"
   stroke="#401C1C"
   d="M109 458L110 456 103 455z"
 ></path>,
 <path
   fill="#4E2E27"
   stroke="#4E2E27"
   d="M109 451L110 456 133 447z"
 ></path>,
 <path
   fill="#4F2A24"
   stroke="#4F2A24"
   d="M103 455L109 451 107 443z"
 ></path>,
 <path
   fill="#41201E"
   stroke="#41201E"
   d="M103 455L110 456 109 451z"
 ></path>,
 <path
   fill="#4A221F"
   stroke="#4A221F"
   d="M110 456L109 458 130 464z"
 ></path>,
 <path
   fill="#552B26"
   stroke="#552B26"
   d="M105 434L103 455 107 443z"
 ></path>,
 <path
   fill="#53251E"
   stroke="#53251E"
   d="M109 458L104 460 128 471z"
 ></path>,
 <path
   fill="#391717"
   stroke="#391717"
   d="M103 455L104 460 109 458z"
 ></path>
 ];
 function Triangles() {
   const [reverse, setReverse] = React.useState(null);
   return (
     <div className="Triangles" onClick={() => setReverse(!reverse)}>
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
            >            
              Click me!
            </Heading>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 100 500 500"
         clip-path="url(#clip)"
         className={reverse ? "reverse" : ""}
       >
         <defs>
           <clipPath id="clip" clipPathUnits="objectBoundingBox">
             <rect x="0" y="0" width="100%" height="100%" />
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
 