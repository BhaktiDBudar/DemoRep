define("UsrPage_1xx3ljp", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_fy0f3pz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_4m9fkwv_y7204e1",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_4m9fkwv_y7204e1"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ns7pqwy",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_o7whfq1",
					"labelPosition": "above",
					"control": "$LookupAttribute_o7whfq1",
					"listActions": [],
					"showValueAsLink": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_bjbryk1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_bjbryk1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ns7pqwy",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_2d1y6h2",
				"values": {
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.StringAttribute_l2z89k3",
					"labelPosition": "above",
					"control": "$StringAttribute_l2z89k3"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_hwb35da",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_pbo1818",
					"labelPosition": "above",
					"control": "$LookupAttribute_pbo1818",
					"listActions": [],
					"showValueAsLink": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_5tphz67",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5tphz67_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hwb35da",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"LookupAttribute_o7whfq1": {
					"modelConfig": {
						"path": "UsrRealtyVisitDS.UsrPotentialCustomer"
					}
				},
				"StringAttribute_l2z89k3": {
					"modelConfig": {
						"path": "UsrRealtyVisitDS.UsrColumn5"
					}
				},
				"LookupAttribute_pbo1818": {
					"modelConfig": {
						"path": "UsrRealtyVisitDS.UsrManager"
					}
				},
				"DateTimeAttribute_4m9fkwv_y7204e1": {
					"modelConfig": {
						"path": "UsrRealtyVisitDS.UsrVisitDateTime"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"UsrRealtyVisitDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "UsrRealtyVisit"
					}
				}
			},
			"primaryDataSourceName": "UsrRealtyVisitDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});