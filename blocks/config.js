module.exports = [
    {
        name: "HDC1080",
        blocks: [
            {
                xml:
                    `<block type="hbc1080">
                        <value name="HBC1080ADD">
                            <shadow type="math_number">
                                <field name="NUM">40</field>
                            </shadow>
                        </value>
                        <value name="HBC1080SDA">
                            <shadow type="math_number">
                                <field name="NUM">21</field>
                            </shadow>
                        </value>
                        <value name="HBC1080SCL">
                            <shadow type="math_number">
                                <field name="NUM">22</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="gethumidity">
                     </block>
                     <block type="gettemperature">
                     </block>`
            }
        ]
    }
];