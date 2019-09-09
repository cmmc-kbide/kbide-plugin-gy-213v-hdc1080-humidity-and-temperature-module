Blockly.JavaScript['hbc1080'] = function(block) {
  var variable_hdc10801 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('HDC10801'), Blockly.Variables.NAME_TYPE);
  var value_hbc1080add = Blockly.JavaScript.valueToCode(block, 'HBC1080ADD', Blockly.JavaScript.ORDER_ATOMIC);
  var value_hbc1080sda = Blockly.JavaScript.valueToCode(block, 'HBC1080SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_hbc1080scl = Blockly.JavaScript.valueToCode(block, 'HBC1080SCL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
        var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include "ClosedCube_HDC1080.h"#END

#VARIABLE
ClosedCube_HDC1080 ${variable_hdc10801};
#END
Wire.begin(${value_hbc1080sda},${value_hbc1080scl});\n
${variable_hdc10801}.begin(0x${value_hbc1080add});


\n
`;
  return code;
};
Blockly.JavaScript['gethumidity'] = function(block) {
  var variable_hdc10801 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('HDC10801'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_hdc10801}.readHumidity()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gettemperature'] = function(block) {
 var variable_hdc10801 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('HDC10801'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_hdc10801}.readTemperature()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};