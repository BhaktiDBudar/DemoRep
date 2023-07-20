namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyFreedomUIEventsSchema

	/// <exclude/>
	public class UsrRealtyFreedomUIEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyFreedomUIEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyFreedomUIEventsSchema(UsrRealtyFreedomUIEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e347fb8e-5b43-48a8-8314-519e63ffee5b");
			Name = "UsrRealtyFreedomUIEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ec326f4f-772c-472c-993c-0bbab86d3e42");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,203,110,219,48,16,188,235,43,22,66,15,18,96,16,201,181,110,3,196,174,19,24,8,218,34,150,123,41,122,160,169,181,194,128,15,129,75,57,117,11,255,123,73,209,78,44,59,69,178,39,105,57,59,59,51,88,195,53,82,203,5,66,133,206,113,178,107,207,166,214,172,101,211,57,238,165,53,217,223,12,66,117,36,77,3,139,45,121,212,227,163,206,241,148,214,214,252,239,205,33,155,25,47,189,68,122,7,132,205,54,104,252,30,249,179,239,110,251,214,157,12,2,12,186,98,33,30,80,243,175,65,61,124,134,124,73,238,30,185,242,219,188,252,213,207,180,221,74,73,1,66,113,34,72,79,175,176,192,71,152,112,194,87,94,122,146,228,252,136,206,110,130,92,89,35,108,172,172,225,155,153,27,66,231,131,143,194,174,30,81,120,32,52,53,186,17,36,198,9,174,131,169,158,247,218,53,4,88,62,19,190,80,199,90,5,17,236,152,238,192,131,229,120,0,76,188,224,122,67,193,120,145,26,101,194,15,177,53,10,169,185,130,214,73,17,67,74,67,236,22,125,181,109,177,158,90,213,105,243,131,171,14,63,237,161,87,69,12,242,123,196,47,23,95,242,147,221,114,13,69,226,186,130,203,139,67,149,3,204,208,86,44,100,115,154,114,35,80,97,29,68,120,215,225,56,59,67,145,119,241,26,194,41,18,111,176,66,221,42,238,163,104,131,79,112,103,5,87,242,15,95,41,92,244,184,98,111,101,25,226,10,183,106,66,242,225,80,217,61,146,237,156,8,32,235,2,203,232,108,75,172,151,83,185,113,136,181,213,203,121,186,181,124,4,249,217,38,98,125,64,115,170,172,157,200,38,253,229,37,171,236,94,73,249,166,153,96,34,53,216,141,117,154,251,226,196,100,88,123,201,46,38,31,78,227,142,229,31,156,125,234,51,152,253,22,216,70,151,135,241,19,244,46,27,126,237,178,221,63,5,53,125,104,218,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueisTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueisTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("ee913203-e54f-51f4-b6ac-a76b24b61f06"),
				Name = "ValueisTooBig",
				CreatedInPackageId = new Guid("ec326f4f-772c-472c-993c-0bbab86d3e42"),
				CreatedInSchemaUId = new Guid("e347fb8e-5b43-48a8-8314-519e63ffee5b"),
				ModifiedInSchemaUId = new Guid("e347fb8e-5b43-48a8-8314-519e63ffee5b")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e347fb8e-5b43-48a8-8314-519e63ffee5b"));
		}

		#endregion

	}

	#endregion

}

