import { TextDecoder, TextEncoder } from 'util';

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;
global.IS_REACT_ACT_ENVIRONMENT = true;
