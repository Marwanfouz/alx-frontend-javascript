/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />

import { cpp as cppSubject } from './subjects/Cpp';
import { java as javaSubject } from './subjects/Java';
import { react as reactSubject } from './subjects/React';
import { cTeacher } from './subjects/Teacher';

console.log('C++');
cppSubject.setTeacher(cTeacher);
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

console.log('\nJava');
javaSubject.setTeacher(cTeacher);
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

console.log('\nReact');
reactSubject.setTeacher(cTeacher);
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
