Blockly.Blocks['hbc1080'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HDC10801", null,["Plugin.HDC1080"], ["Plugin.HDC1080"]), "HDC10801")
        .appendField("begin ADD")
        .appendField(new Blockly.FieldTextInput("0x40"), "HDC1080ADD");
    this.appendValueInput("HBC1080SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("HBC1080SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['gethumidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HDC10801", null,["Plugin.HDC1080"], ["Plugin.HDC1080"]), "HDC10801")
        .appendField("GetHumidity");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['gettemperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("HDC10801", null,["Plugin.HDC1080"], ["Plugin.HDC1080"]), "HDC10801")
        .appendField("GetTemperature");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};