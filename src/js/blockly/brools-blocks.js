// void rule { name: string }, { [no-loop,loop] }
//      { when: statement: boolean }
//      { then: statement: any }
Blockly.Blocks['rule'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("Rule")
        .appendField(new Blockly.FieldTextInput("name"), "name")
        .appendField(", ")
        .appendField(new Blockly.FieldDropdown([["no-loop", "no-loop"], ["loop", "loop"]]), "loop");
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

//
//    -[boolean]
//        match fact of { type } with
//        *	{ matchers }
//
//    -[matcher]
//        *	not { matcher }
//
//    -[matcher]
//        *	fact available with { property-name: string  } { [matching, not matching] } { property-value }
//
//    -[matcher]
//        *	fact available with { property-name: string  }
//
//    -[action]
//        *	insert question { question id: string }




Blockly.Blocks['sample'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(210);
        this.appendDummyInput()
            .appendField("Sometext");
        this.appendValueInput("somevalue")
            .setCheck("Number");
        this.appendStatementInput("Somestatement")
            .setCheck("Boolean")
            .appendField(new Blockly.FieldDropdown([
                ["someoptionvalue", "someoptionvalueidentifier"]
            ]), "someoption");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "null");
        this.setNextStatement(true, "null");
        this.setTooltip('');
    }
};
