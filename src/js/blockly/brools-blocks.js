/**
 * void rule { name: string }, { [no-loop,loop] }
 *     { when: statement: boolean }
 *     { then: statement: any }
 */
Blockly.Blocks['rule'] = {
    init: function () {
        this.setColour(20);
        this.appendDummyInput()
            .appendField("Rule")
            .appendField(new Blockly.FieldTextInput("name"), "name")
            .appendField(", ")
            .appendField(new Blockly.FieldDropdown([
                ["no-loop", "no-loop"],
                ["loop", "loop"]
            ]), "loop");
        this.appendStatementInput("when")
            .setCheck("Boolean")
            .appendField("when ");
        this.appendStatementInput("then")
            .setCheck("null")
            .appendField("then");
        this.setInputsInline(true);
        this.setTooltip('');
    }
};

/**
 * boolean all of the below is true }
 *      { conditions: statement: boolean }
 */
Blockly.Blocks['all_is_true'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(40);
        this.appendDummyInput()
            .appendField("All of the below is true");
        this.appendStatementInput("conditions")
            .setCheck("Boolean");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "Boolean");
        this.setTooltip('');
    }
};
/**
 * boolean fact available with { property: string } matching { value: string }
 */
Blockly.Blocks['fact_available'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Fact available with")
        .appendField(new Blockly.FieldTextInput("property"), "property")
        .appendField("matching")
        .appendField(new Blockly.FieldTextInput("value"), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true, "Boolean");
    this.setTooltip('');
  }
};

/**
 * void insert question { with identifier: string } into response
 */
Blockly.Blocks['insert_question'] = {
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
        .appendField("Insert question")
        .appendField(new Blockly.FieldTextInput("with identifier"), "identifier")
        .appendField("into response");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};