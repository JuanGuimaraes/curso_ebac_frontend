"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Aluno = /*#__PURE__*/_createClass(function Aluno(nome, nota) {
  _classCallCheck(this, Aluno);
  this.nome = nome;
  this.nota = nota;
});
var alunos = [{
  nome: 'Jose',
  nota: 10
}, {
  nome: 'Maria',
  nota: 3
}, {
  nome: 'Aline',
  nota: 6
}, {
  nome: 'Marcos',
  nota: 9
}, {
  nome: 'Julia',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 1
}, {
  nome: 'João',
  nota: 10
}];
var alunosAprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunosAprovados);

// let aluno1 = new Aluno("Jose", 10)
// let aluno2 = new Aluno("Maria", 9)
// let aluno3 = new Aluno("Aline", 6)
// let aluno4 = new Aluno("Marcos",3)

//     const media = (nome, nota) => {
//                 let notaMinima = 6;
//                 this.nome = nome
//                 this.nota = nota

//                 if (notaMinima <= nota) {
//                     return (`Olá ${nome}, sua nota ${nota} é otima, aprovado`);
//                 } else{
//                     return (`Olá ${nome}, sua ${nota} está baixa, reprovado`);
//                 }
//             };

// const exibeMedia = media;

// console.log(media(aluno1.nome, aluno1.nota));