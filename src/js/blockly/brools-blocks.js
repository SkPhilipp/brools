//    -[main]
//        package { name: string }
//
//    -[main]
//        import
//            { types }*
//
//    -[main]
//        rule { name: string } { [no-loop,loop] }
//        when
//        *	{ boolean }
//        then
//        *	{ action }
//        end
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
