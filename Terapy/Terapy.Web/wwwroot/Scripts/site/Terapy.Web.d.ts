﻿/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Terapy.Administration {
}
declare namespace Terapy.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace Terapy.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace Terapy.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Administration {
}
declare namespace Terapy.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace Terapy.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Terapy.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Terapy.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace Terapy.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Terapy.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace Terapy.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace Terapy.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace Terapy.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace Terapy.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace Terapy.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const ListConnections: string;
            const ListTables: string;
            const Generate: string;
        }
    }
}
declare namespace Terapy.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace Terapy.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Terapy.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Terapy.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace Terapy.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Terapy.Administration {
}
declare namespace Terapy.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
}
declare namespace Terapy.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Terapy.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Terapy.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace Terapy.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Terapy.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Terapy.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Terapy.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Terapy.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Terapy.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace Terapy.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.BasicSamples {
    namespace BasicSamplesService {
        const baseUrl = "BasicSamples/BasicSamples";
        function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const OrdersByShipper: string;
            const OrderBulkAction: string;
        }
    }
}
declare namespace Terapy.BasicSamples {
    class ChangingLookupTextForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangingLookupTextForm {
        ProductID: ChangingLookupTextEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
}
declare namespace Terapy.BasicSamples {
}
declare namespace Terapy.BasicSamples {
    interface CustomerGrossSalesListRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
    }
}
declare namespace Terapy.BasicSamples {
    namespace CustomerGrossSalesService {
        const baseUrl = "BasicSamples/CustomerGrossSales";
        function List(request: CustomerGrossSalesListRequest, onSuccess?: (response: Serenity.ListResponse<Northwind.CustomerGrossSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
        }
    }
}
declare namespace Terapy.BasicSamples {
}
declare namespace Terapy.BasicSamples {
    class DragDropSampleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DragDropSampleForm {
        Title: Serenity.StringEditor;
    }
}
declare namespace Terapy.BasicSamples {
    interface DragDropSampleRow {
        Id?: number;
        ParentId?: number;
        Title?: string;
    }
    namespace DragDropSampleRow {
        const idProperty = "Id";
        const nameProperty = "Title";
        const localTextPrefix = "BasicSamples.DragDropSample";
        namespace Fields {
            const Id: string;
            const ParentId: string;
            const Title: string;
        }
    }
}
declare namespace Terapy.BasicSamples {
    namespace DragDropSampleService {
        const baseUrl = "BasicSamples/DragDropSample";
        function Create(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.BasicSamples {
    class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FilteredLookupInDetailForm {
        CustomerID: Northwind.CustomerEditor;
        OrderDate: Serenity.DateEditor;
        CategoryID: Serenity.LookupEditor;
        DetailList: FilteredLookupDetailEditor;
    }
}
declare namespace Terapy.BasicSamples {
    class HardcodedValuesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HardcodedValuesForm {
        SomeValue: HardcodedValuesEditor;
    }
}
declare namespace Terapy.BasicSamples {
}
declare namespace Terapy.BasicSamples {
    class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LookupFilterByMultipleForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
}
declare namespace Terapy.BasicSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace Terapy.BasicSamples {
    interface OrdersByShipperRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Terapy.BasicSamples {
    interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}
declare namespace Terapy.BasicSamples {
    class PopulateLinkedDataForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PopulateLinkedDataForm {
        CustomerID: Northwind.CustomerEditor;
        CustomerContactName: Serenity.StringEditor;
        CustomerContactTitle: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerRegion: Serenity.StringEditor;
        CustomerCountry: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerFax: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: Northwind.OrderDetailsEditor;
    }
}
declare namespace Terapy.BasicSamples {
    class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
}
declare namespace Terapy.BasicSamples {
    namespace ProductExcelImportService {
        const baseUrl = "BasicSamples/ProductExcelImport";
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const ExcelImport: string;
        }
    }
}
declare namespace Terapy.BasicSamples {
    class StaticTextBlockForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StaticTextBlockForm {
        StaticText: StaticTextBlock;
        SomeInput: Serenity.StringEditor;
        HtmlList: StaticTextBlock;
        FromLocalText: StaticTextBlock;
        DisplayFieldValue: StaticTextBlock;
    }
}
declare namespace Terapy.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace Terapy.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Terapy.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Terapy.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace Terapy.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace Terapy.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Terapy {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Terapy {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Terapy {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Terapy {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Terapy.Meeting {
}
declare namespace Terapy.Meeting {
    class MeetingAgendaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingAgendaForm {
        MeetingId: Serenity.IntegerEditor;
        AgendaNumber: Serenity.IntegerEditor;
        Title: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        AgendaTypeId: Serenity.IntegerEditor;
        RequestedByContactId: Serenity.IntegerEditor;
        Images: Serenity.MultipleImageUploadEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }
}
declare namespace Terapy.Meeting {
}
declare namespace Terapy.Meeting {
    class MeetingAgendaRelevantForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingAgendaRelevantForm {
        AgendaId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
    }
}
declare namespace Terapy.Meeting {
    interface MeetingAgendaRelevantRow {
        AgendaRelevantId?: number;
        AgendaId?: number;
        ContactId?: number;
        AgendaMeetingId?: number;
        AgendaAgendaNumber?: number;
        AgendaTitle?: string;
        AgendaDescription?: string;
        AgendaAgendaTypeId?: number;
        AgendaRequestedByContactId?: number;
        AgendaImages?: string;
        AgendaAttachments?: string;
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }
    namespace MeetingAgendaRelevantRow {
        const idProperty = "AgendaRelevantId";
        const localTextPrefix = "Meeting.MeetingAgendaRelevant";
        namespace Fields {
            const AgendaRelevantId: string;
            const AgendaId: string;
            const ContactId: string;
            const AgendaMeetingId: string;
            const AgendaAgendaNumber: string;
            const AgendaTitle: string;
            const AgendaDescription: string;
            const AgendaAgendaTypeId: string;
            const AgendaRequestedByContactId: string;
            const AgendaImages: string;
            const AgendaAttachments: string;
            const ContactTitle: string;
            const ContactFirstName: string;
            const ContactLastName: string;
            const ContactEmail: string;
            const ContactIdentityNo: string;
            const ContactUserId: string;
        }
    }
}
declare namespace Terapy.Meeting {
    namespace MeetingAgendaRelevantService {
        const baseUrl = "Meeting/MeetingAgendaRelevant";
        function Create(request: Serenity.SaveRequest<MeetingAgendaRelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingAgendaRelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingAgendaRelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingAgendaRelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Meeting {
    interface MeetingAgendaRow {
        AgendaId?: number;
        MeetingId?: number;
        AgendaNumber?: number;
        Title?: string;
        Description?: string;
        AgendaTypeId?: number;
        RequestedByContactId?: number;
        Images?: string;
        Attachments?: string;
        MeetingMeetingName?: string;
        MeetingMeetingNumber?: string;
        MeetingMeetingGuid?: string;
        MeetingMeetingTypeId?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingLocationId?: number;
        MeetingUnitId?: number;
        MeetingOrganizerContactId?: number;
        MeetingReporterContactId?: number;
        MeetingInsertUserId?: number;
        MeetingInsertDate?: string;
        MeetingUpdateUserId?: number;
        MeetingUpdateDate?: string;
        AgendaTypeName?: string;
        RequestedByContactTitle?: string;
        RequestedByContactFirstName?: string;
        RequestedByContactLastName?: string;
        RequestedByContactFullName?: string;
        RequestedByContactEmail?: string;
        RequestedByContactIdentityNo?: string;
        RequestedByContactUserId?: number;
    }
    namespace MeetingAgendaRow {
        const idProperty = "AgendaId";
        const nameProperty = "Title";
        const localTextPrefix = "Meeting.MeetingAgenda";
        namespace Fields {
            const AgendaId: string;
            const MeetingId: string;
            const AgendaNumber: string;
            const Title: string;
            const Description: string;
            const AgendaTypeId: string;
            const RequestedByContactId: string;
            const Images: string;
            const Attachments: string;
            const MeetingMeetingName: string;
            const MeetingMeetingNumber: string;
            const MeetingMeetingGuid: string;
            const MeetingMeetingTypeId: string;
            const MeetingStartDate: string;
            const MeetingEndDate: string;
            const MeetingLocationId: string;
            const MeetingUnitId: string;
            const MeetingOrganizerContactId: string;
            const MeetingReporterContactId: string;
            const MeetingInsertUserId: string;
            const MeetingInsertDate: string;
            const MeetingUpdateUserId: string;
            const MeetingUpdateDate: string;
            const AgendaTypeName: string;
            const RequestedByContactTitle: string;
            const RequestedByContactFirstName: string;
            const RequestedByContactLastName: string;
            const RequestedByContactFullName: string;
            const RequestedByContactEmail: string;
            const RequestedByContactIdentityNo: string;
            const RequestedByContactUserId: string;
        }
    }
}
declare namespace Terapy.Meeting {
    namespace MeetingAgendaService {
        const baseUrl = "Meeting/MeetingAgenda";
        function Create(request: Serenity.SaveRequest<MeetingAgendaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingAgendaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingAgendaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingAgendaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Meeting {
}
declare namespace Terapy.Meeting {
    class MeetingAgendaTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingAgendaTypeForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace Terapy.Meeting {
    interface MeetingAgendaTypeRow {
        AgendaTypeId?: number;
        Name?: string;
    }
    namespace MeetingAgendaTypeRow {
        const idProperty = "AgendaTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Meeting.MeetingAgendaType";
        const lookupKey = "Meeting.MeetingAgendaType";
        function getLookup(): Q.Lookup<MeetingAgendaTypeRow>;
        namespace Fields {
            const AgendaTypeId: string;
            const Name: string;
        }
    }
}
declare namespace Terapy.Meeting {
    namespace MeetingAgendaTypeService {
        const baseUrl = "Meeting/MeetingAgendaType";
        function Create(request: Serenity.SaveRequest<MeetingAgendaTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingAgendaTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingAgendaTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingAgendaTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Meeting {
    enum MeetingAttendanceStatus {
        NotSet = 0,
        Attended = 1,
        Absent = 2,
        AbsentWithPermission = 3,
    }
}
declare namespace Terapy.Meeting {
}
declare namespace Terapy.Meeting {
    class MeetingAttendeeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingAttendeeForm {
        MeetingId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
        AttendeeType: Serenity.EnumEditor;
        AttendanceStatus: Serenity.EnumEditor;
    }
}
declare namespace Terapy.Meeting {
    interface MeetingAttendeeRow {
        AttendeeId?: number;
        MeetingId?: number;
        ContactId?: number;
        AttendeeType?: MeetingAttendeeType;
        AttendanceStatus?: MeetingAttendanceStatus;
        MeetingMeetingName?: string;
        MeetingMeetingNumber?: string;
        MeetingMeetingGuid?: string;
        MeetingMeetingTypeId?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingLocationId?: number;
        MeetingUnitId?: number;
        MeetingOrganizerContactId?: number;
        MeetingReporterContactId?: number;
        MeetingInsertUserId?: number;
        MeetingInsertDate?: string;
        MeetingUpdateUserId?: number;
        MeetingUpdateDate?: string;
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactFullName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }
    namespace MeetingAttendeeRow {
        const idProperty = "AttendeeId";
        const localTextPrefix = "Meeting.MeetingAttendee";
        namespace Fields {
            const AttendeeId: string;
            const MeetingId: string;
            const ContactId: string;
            const AttendeeType: string;
            const AttendanceStatus: string;
            const MeetingMeetingName: string;
            const MeetingMeetingNumber: string;
            const MeetingMeetingGuid: string;
            const MeetingMeetingTypeId: string;
            const MeetingStartDate: string;
            const MeetingEndDate: string;
            const MeetingLocationId: string;
            const MeetingUnitId: string;
            const MeetingOrganizerContactId: string;
            const MeetingReporterContactId: string;
            const MeetingInsertUserId: string;
            const MeetingInsertDate: string;
            const MeetingUpdateUserId: string;
            const MeetingUpdateDate: string;
            const ContactTitle: string;
            const ContactFirstName: string;
            const ContactLastName: string;
            const ContactFullName: string;
            const ContactEmail: string;
            const ContactIdentityNo: string;
            const ContactUserId: string;
        }
    }
}
declare namespace Terapy.Meeting {
    enum MeetingAttendeeType {
        Attendee = 1,
        Guest = 2,
    }
}
declare namespace Terapy.Meeting {
}
declare namespace Terapy.Meeting {
}
declare namespace Terapy.Meeting {
    class MeetingDecisionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingDecisionForm {
        MeetingId: Serenity.IntegerEditor;
        AgendaId: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        DecisionNumber: Serenity.IntegerEditor;
        ResponsibleContactId: Serenity.IntegerEditor;
        DueDate: Serenity.DateEditor;
        ResolutionStatus: Serenity.IntegerEditor;
        Images: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
    }
}
declare namespace Terapy.Meeting {
}
declare namespace Terapy.Meeting {
    class MeetingDecisionRelevantForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingDecisionRelevantForm {
        DecisionId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
    }
}
declare namespace Terapy.Meeting {
    interface MeetingDecisionRelevantRow {
        DecisionRelevantId?: number;
        DecisionId?: number;
        ContactId?: number;
        DecisionMeetingId?: number;
        DecisionAgendaId?: number;
        DecisionDescription?: string;
        DecisionDecisionNumber?: number;
        DecisionResponsibleContactId?: number;
        DecisionDueDate?: string;
        DecisionResolutionStatus?: number;
        DecisionImages?: string;
        DecisionAttachments?: string;
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }
    namespace MeetingDecisionRelevantRow {
        const idProperty = "DecisionRelevantId";
        const localTextPrefix = "Meeting.MeetingDecisionRelevant";
        namespace Fields {
            const DecisionRelevantId: string;
            const DecisionId: string;
            const ContactId: string;
            const DecisionMeetingId: string;
            const DecisionAgendaId: string;
            const DecisionDescription: string;
            const DecisionDecisionNumber: string;
            const DecisionResponsibleContactId: string;
            const DecisionDueDate: string;
            const DecisionResolutionStatus: string;
            const DecisionImages: string;
            const DecisionAttachments: string;
            const ContactTitle: string;
            const ContactFirstName: string;
            const ContactLastName: string;
            const ContactEmail: string;
            const ContactIdentityNo: string;
            const ContactUserId: string;
        }
    }
}
declare namespace Terapy.Meeting {
    namespace MeetingDecisionRelevantService {
        const baseUrl = "Meeting/MeetingDecisionRelevant";
        function Create(request: Serenity.SaveRequest<MeetingDecisionRelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingDecisionRelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingDecisionRelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingDecisionRelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Meeting {
    interface MeetingDecisionRow {
        DecisionId?: number;
        MeetingId?: number;
        AgendaId?: number;
        Description?: string;
        DecisionNumber?: number;
        ResponsibleContactId?: number;
        DueDate?: string;
        ResolutionStatus?: number;
        Images?: string;
        Attachments?: string;
        MeetingMeetingName?: string;
        MeetingMeetingNumber?: string;
        MeetingMeetingGuid?: string;
        MeetingMeetingTypeId?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingLocationId?: number;
        MeetingUnitId?: number;
        MeetingOrganizerContactId?: number;
        MeetingReporterContactId?: number;
        MeetingInsertUserId?: number;
        MeetingInsertDate?: string;
        MeetingUpdateUserId?: number;
        MeetingUpdateDate?: string;
        AgendaMeetingId?: number;
        AgendaNumber?: number;
        AgendaTitle?: string;
        AgendaDescription?: string;
        AgendaAgendaTypeId?: number;
        AgendaRequestedByContactId?: number;
        AgendaImages?: string;
        AgendaAttachments?: string;
        DecisionNumberName?: string;
        ResponsibleContactTitle?: string;
        ResponsibleContactFirstName?: string;
        ResponsibleContactLastName?: string;
        ResponsibleContactFullName?: string;
        ResponsibleContactEmail?: string;
        ResponsibleContactIdentityNo?: string;
        ResponsibleContactUserId?: number;
    }
    namespace MeetingDecisionRow {
        const idProperty = "DecisionId";
        const nameProperty = "Description";
        const localTextPrefix = "Meeting.MeetingDecision";
        namespace Fields {
            const DecisionId: string;
            const MeetingId: string;
            const AgendaId: string;
            const Description: string;
            const DecisionNumber: string;
            const ResponsibleContactId: string;
            const DueDate: string;
            const ResolutionStatus: string;
            const Images: string;
            const Attachments: string;
            const MeetingMeetingName: string;
            const MeetingMeetingNumber: string;
            const MeetingMeetingGuid: string;
            const MeetingMeetingTypeId: string;
            const MeetingStartDate: string;
            const MeetingEndDate: string;
            const MeetingLocationId: string;
            const MeetingUnitId: string;
            const MeetingOrganizerContactId: string;
            const MeetingReporterContactId: string;
            const MeetingInsertUserId: string;
            const MeetingInsertDate: string;
            const MeetingUpdateUserId: string;
            const MeetingUpdateDate: string;
            const AgendaMeetingId: string;
            const AgendaNumber: string;
            const AgendaTitle: string;
            const AgendaDescription: string;
            const AgendaAgendaTypeId: string;
            const AgendaRequestedByContactId: string;
            const AgendaImages: string;
            const AgendaAttachments: string;
            const DecisionNumberName: string;
            const ResponsibleContactTitle: string;
            const ResponsibleContactFirstName: string;
            const ResponsibleContactLastName: string;
            const ResponsibleContactFullName: string;
            const ResponsibleContactEmail: string;
            const ResponsibleContactIdentityNo: string;
            const ResponsibleContactUserId: string;
        }
    }
}
declare namespace Terapy.Meeting {
    namespace MeetingDecisionService {
        const baseUrl = "Meeting/MeetingDecision";
        function Create(request: Serenity.SaveRequest<MeetingDecisionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingDecisionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingDecisionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingDecisionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Meeting {
    class MeetingForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingForm {
        MeetingName: Serenity.StringEditor;
        MeetingTypeId: Serenity.LookupEditor;
        MeetingNumber: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        LocationId: Serenity.LookupEditor;
        UnitId: Organization.BusinessUnitEditor;
        OrganizerContactId: Serenity.LookupEditor;
        ReporterContactId: Serenity.LookupEditor;
        AttendeeList: MeetingAttendeeEditor;
    }
}
declare namespace Terapy.Meeting {
}
declare namespace Terapy.Meeting {
    class MeetingLocationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingLocationForm {
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
    }
}
declare namespace Terapy.Meeting {
    interface MeetingLocationRow {
        LocationId?: number;
        Name?: string;
        Address?: string;
        Latitude?: number;
        Longitude?: number;
    }
    namespace MeetingLocationRow {
        const idProperty = "LocationId";
        const nameProperty = "Name";
        const localTextPrefix = "Meeting.MeetingLocation";
        const lookupKey = "Meeting.MeetingLocation";
        function getLookup(): Q.Lookup<MeetingLocationRow>;
        namespace Fields {
            const LocationId: string;
            const Name: string;
            const Address: string;
            const Latitude: string;
            const Longitude: string;
        }
    }
}
declare namespace Terapy.Meeting {
    namespace MeetingLocationService {
        const baseUrl = "Meeting/MeetingLocation";
        function Create(request: Serenity.SaveRequest<MeetingLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Meeting {
    interface MeetingRow {
        MeetingId?: number;
        MeetingName?: string;
        MeetingNumber?: string;
        MeetingGuid?: string;
        MeetingTypeId?: number;
        StartDate?: string;
        EndDate?: string;
        LocationId?: number;
        UnitId?: number;
        OrganizerContactId?: number;
        ReporterContactId?: number;
        MeetingTypeName?: string;
        LocationName?: string;
        UnitName?: string;
        UnitParentUnitId?: number;
        OrganizerContactTitle?: string;
        OrganizerContactFirstName?: string;
        OrganizerContactLastName?: string;
        OrganizerContactFullName?: string;
        OrganizerContactEmail?: string;
        OrganizerContactIdentityNo?: string;
        OrganizerContactUserId?: number;
        ReporterContactTitle?: string;
        ReporterContactFirstName?: string;
        ReporterContactLastName?: string;
        ReporterContactFullName?: string;
        ReporterContactEmail?: string;
        ReporterContactIdentityNo?: string;
        ReporterContactUserId?: number;
        AttendeeList?: MeetingAttendeeRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace MeetingRow {
        const idProperty = "MeetingId";
        const nameProperty = "MeetingName";
        const localTextPrefix = "Meeting.Meeting";
        namespace Fields {
            const MeetingId: string;
            const MeetingName: string;
            const MeetingNumber: string;
            const MeetingGuid: string;
            const MeetingTypeId: string;
            const StartDate: string;
            const EndDate: string;
            const LocationId: string;
            const UnitId: string;
            const OrganizerContactId: string;
            const ReporterContactId: string;
            const MeetingTypeName: string;
            const LocationName: string;
            const UnitName: string;
            const UnitParentUnitId: string;
            const OrganizerContactTitle: string;
            const OrganizerContactFirstName: string;
            const OrganizerContactLastName: string;
            const OrganizerContactFullName: string;
            const OrganizerContactEmail: string;
            const OrganizerContactIdentityNo: string;
            const OrganizerContactUserId: string;
            const ReporterContactTitle: string;
            const ReporterContactFirstName: string;
            const ReporterContactLastName: string;
            const ReporterContactFullName: string;
            const ReporterContactEmail: string;
            const ReporterContactIdentityNo: string;
            const ReporterContactUserId: string;
            const AttendeeList: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace Terapy.Meeting {
    namespace MeetingService {
        const baseUrl = "Meeting/Meeting";
        function Create(request: Serenity.SaveRequest<MeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Meeting {
}
declare namespace Terapy.Meeting {
    class MeetingTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MeetingTypeForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace Terapy.Meeting {
    interface MeetingTypeRow {
        MeetingTypeId?: number;
        Name?: string;
    }
    namespace MeetingTypeRow {
        const idProperty = "MeetingTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Meeting.MeetingType";
        const lookupKey = "Meeting.MeetingType";
        function getLookup(): Q.Lookup<MeetingTypeRow>;
        namespace Fields {
            const MeetingTypeId: string;
            const Name: string;
        }
    }
}
declare namespace Terapy.Meeting {
    namespace MeetingTypeService {
        const baseUrl = "Meeting/MeetingType";
        function Create(request: Serenity.SaveRequest<MeetingTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeetingTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Terapy.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Terapy.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace Terapy.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Terapy.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace Terapy.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Terapy.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Terapy.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Terapy.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Terapy.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
}
declare namespace Terapy.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty = "Id";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.CategoryLang";
        namespace Fields {
            const Id: string;
            const CategoryId: string;
            const LanguageId: string;
            const CategoryName: string;
            const Description: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace CategoryLangService {
        const baseUrl = "Northwind/CategoryLang";
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty = "CategoryID";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.Category";
        const lookupKey = "Northwind.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        namespace Fields {
            const CategoryID: string;
            const CategoryName: string;
            const Description: string;
            const Picture: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace CategoryService {
        const baseUrl = "Northwind/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty = "ID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.CustomerCustomerDemo";
        namespace Fields {
            const ID: string;
            const CustomerID: string;
            const CustomerTypeID: string;
            const CustomerCompanyName: string;
            const CustomerContactName: string;
            const CustomerContactTitle: string;
            const CustomerAddress: string;
            const CustomerCity: string;
            const CustomerRegion: string;
            const CustomerPostalCode: string;
            const CustomerCountry: string;
            const CustomerPhone: string;
            const CustomerFax: string;
            const CustomerTypeCustomerDesc: string;
        }
    }
}
declare namespace Terapy.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty = "ID";
        const nameProperty = "CustomerTypeID";
        const localTextPrefix = "Northwind.CustomerDemographic";
        namespace Fields {
            const ID: string;
            const CustomerTypeID: string;
            const CustomerDesc: string;
        }
    }
}
declare namespace Terapy.Northwind {
    interface CustomerDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }
    namespace CustomerDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Northwind.CustomerDetails";
        namespace Fields {
            const Id: string;
            const LastContactDate: string;
            const LastContactedBy: string;
            const Email: string;
            const SendBulletin: string;
            const LastContactedByLastName: string;
            const LastContactedByFirstName: string;
            const LastContactedByTitle: string;
            const LastContactedByTitleOfCourtesy: string;
            const LastContactedByBirthDate: string;
            const LastContactedByHireDate: string;
            const LastContactedByAddress: string;
            const LastContactedByCity: string;
            const LastContactedByRegion: string;
            const LastContactedByPostalCode: string;
            const LastContactedByCountry: string;
            const LastContactedByHomePhone: string;
            const LastContactedByExtension: string;
            const LastContactedByPhoto: string;
            const LastContactedByNotes: string;
            const LastContactedByReportsTo: string;
            const LastContactedByPhotoPath: string;
        }
    }
}
declare namespace Terapy.Northwind {
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }
}
declare namespace Terapy.Northwind {
    interface CustomerGrossSalesRow {
        CustomerId?: string;
        ContactName?: string;
        ProductId?: number;
        ProductName?: string;
        GrossAmount?: number;
    }
    namespace CustomerGrossSalesRow {
        const nameProperty = "ContactName";
        const localTextPrefix = "BasicSamples.GrossSales";
        namespace Fields {
            const CustomerId: string;
            const ContactName: string;
            const ProductId: string;
            const ProductName: string;
            const GrossAmount: string;
        }
    }
}
declare namespace Terapy.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "CustomerRepresentatives";
        namespace Fields {
            const RepresentativeId: string;
            const CustomerId: string;
            const EmployeeId: string;
        }
    }
}
declare namespace Terapy.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
    }
    namespace CustomerRow {
        const idProperty = "ID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Customer";
        const lookupKey = "Northwind.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        namespace Fields {
            const ID: string;
            const CustomerID: string;
            const CompanyName: string;
            const ContactName: string;
            const ContactTitle: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Fax: string;
            const NoteList: string;
            const Representatives: string;
            const LastContactDate: string;
            const LastContactedBy: string;
            const Email: string;
            const SendBulletin: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace CustomerService {
        const baseUrl = "Northwind/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const GetNextNumber: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty = "EmployeeID";
        const nameProperty = "FullName";
        const localTextPrefix = "Northwind.Employee";
        const lookupKey = "Northwind.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        namespace Fields {
            const EmployeeID: string;
            const LastName: string;
            const FirstName: string;
            const FullName: string;
            const Title: string;
            const TitleOfCourtesy: string;
            const BirthDate: string;
            const HireDate: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const HomePhone: string;
            const Extension: string;
            const Photo: string;
            const Notes: string;
            const ReportsTo: string;
            const PhotoPath: string;
            const ReportsToFullName: string;
            const ReportsToLastName: string;
            const ReportsToFirstName: string;
            const ReportsToTitle: string;
            const ReportsToTitleOfCourtesy: string;
            const ReportsToBirthDate: string;
            const ReportsToHireDate: string;
            const ReportsToAddress: string;
            const ReportsToCity: string;
            const ReportsToRegion: string;
            const ReportsToPostalCode: string;
            const ReportsToCountry: string;
            const ReportsToHomePhone: string;
            const ReportsToExtension: string;
            const ReportsToPhoto: string;
            const ReportsToNotes: string;
            const ReportsToReportsTo: string;
            const ReportsToPhotoPath: string;
            const Gender: string;
        }
    }
}
declare namespace Terapy.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty = "EmployeeID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.EmployeeTerritory";
        namespace Fields {
            const EmployeeID: string;
            const TerritoryID: string;
            const EmployeeLastName: string;
            const EmployeeFirstName: string;
            const EmployeeTitle: string;
            const EmployeeTitleOfCourtesy: string;
            const EmployeeBirthDate: string;
            const EmployeeHireDate: string;
            const EmployeeAddress: string;
            const EmployeeCity: string;
            const EmployeeRegion: string;
            const EmployeePostalCode: string;
            const EmployeeCountry: string;
            const EmployeeHomePhone: string;
            const EmployeeExtension: string;
            const EmployeePhoto: string;
            const EmployeeNotes: string;
            const EmployeeReportsTo: string;
            const EmployeePhotoPath: string;
            const TerritoryTerritoryDescription: string;
            const TerritoryRegionID: string;
        }
    }
}
declare namespace Terapy.Northwind {
    enum Gender {
        Male = 1,
        Female = 2,
    }
}
declare namespace Terapy.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Northwind.Note";
        namespace Fields {
            const NoteId: string;
            const EntityType: string;
            const EntityId: string;
            const Text: string;
            const InsertUserId: string;
            const InsertDate: string;
            const InsertUserDisplayName: string;
        }
    }
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
}
declare namespace Terapy.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty = "DetailID";
        const localTextPrefix = "Northwind.OrderDetail";
        namespace Fields {
            const DetailID: string;
            const OrderID: string;
            const ProductID: string;
            const UnitPrice: string;
            const Quantity: string;
            const Discount: string;
            const OrderCustomerID: string;
            const OrderEmployeeID: string;
            const OrderDate: string;
            const OrderShippedDate: string;
            const OrderShipVia: string;
            const OrderShipCity: string;
            const OrderShipCountry: string;
            const ProductName: string;
            const ProductDiscontinued: string;
            const ProductSupplierID: string;
            const ProductQuantityPerUnit: string;
            const ProductUnitPrice: string;
            const LineTotal: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace OrderDetailService {
        const baseUrl = "Northwind/OrderDetail";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }
}
declare namespace Terapy.Northwind {
    interface OrderListRequest extends Serenity.ListRequest {
        ProductID?: number;
    }
}
declare namespace Terapy.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty = "OrderID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.Order";
        const lookupKey = "Northwind.OrderShipCity";
        function getLookup(): Q.Lookup<OrderRow>;
        namespace Fields {
            const OrderID: string;
            const CustomerID: string;
            const EmployeeID: string;
            const OrderDate: string;
            const RequiredDate: string;
            const ShippedDate: string;
            const ShipVia: string;
            const Freight: string;
            const ShipName: string;
            const ShipAddress: string;
            const ShipCity: string;
            const ShipRegion: string;
            const ShipPostalCode: string;
            const ShipCountry: string;
            const CustomerCompanyName: string;
            const CustomerContactName: string;
            const CustomerContactTitle: string;
            const CustomerCity: string;
            const CustomerRegion: string;
            const CustomerCountry: string;
            const CustomerPhone: string;
            const CustomerFax: string;
            const EmployeeFullName: string;
            const EmployeeGender: string;
            const EmployeeReportsToFullName: string;
            const ShipViaCompanyName: string;
            const ShipViaPhone: string;
            const ShippingState: string;
            const DetailList: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace OrderService {
        const baseUrl = "Northwind/Order";
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: OrderListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1,
    }
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
}
declare namespace Terapy.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.ProductLang";
        namespace Fields {
            const Id: string;
            const ProductId: string;
            const LanguageId: string;
            const ProductName: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace ProductLangService {
        const baseUrl = "Northwind/ProductLang";
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty = "ProductLogID";
        const localTextPrefix = "Northwind.ProductLog";
        namespace Fields {
            const ProductLogID: string;
            const OperationType: string;
            const ChangingUserId: string;
            const ValidFrom: string;
            const ValidUntil: string;
            const ProductID: string;
            const ProductName: string;
            const ProductImage: string;
            const Discontinued: string;
            const SupplierID: string;
            const CategoryID: string;
            const QuantityPerUnit: string;
            const UnitPrice: string;
            const UnitsInStock: string;
            const UnitsOnOrder: string;
            const ReorderLevel: string;
        }
    }
}
declare namespace Terapy.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty = "ProductID";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.Product";
        const lookupKey = "Northwind.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        namespace Fields {
            const ProductID: string;
            const ProductName: string;
            const ProductImage: string;
            const Discontinued: string;
            const SupplierID: string;
            const CategoryID: string;
            const QuantityPerUnit: string;
            const UnitPrice: string;
            const UnitsInStock: string;
            const UnitsOnOrder: string;
            const ReorderLevel: string;
            const SupplierCompanyName: string;
            const SupplierContactName: string;
            const SupplierContactTitle: string;
            const SupplierAddress: string;
            const SupplierCity: string;
            const SupplierRegion: string;
            const SupplierPostalCode: string;
            const SupplierCountry: string;
            const SupplierPhone: string;
            const SupplierFax: string;
            const SupplierHomePage: string;
            const CategoryName: string;
            const CategoryDescription: string;
            const CategoryPicture: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace ProductService {
        const baseUrl = "Northwind/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }
}
declare namespace Terapy.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty = "RegionID";
        const nameProperty = "RegionDescription";
        const localTextPrefix = "Northwind.Region";
        const lookupKey = "Northwind.Region";
        function getLookup(): Q.Lookup<RegionRow>;
        namespace Fields {
            const RegionID: string;
            const RegionDescription: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace RegionService {
        const baseUrl = "Northwind/Region";
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.SalesByCategory";
        namespace Fields {
            const CategoryId: string;
            const CategoryName: string;
            const ProductName: string;
            const ProductSales: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace SalesByCategoryService {
        const baseUrl = "Northwind/SalesByCategory";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
}
declare namespace Terapy.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty = "ShipperID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Shipper";
        const lookupKey = "Northwind.Shipper";
        function getLookup(): Q.Lookup<ShipperRow>;
        namespace Fields {
            const ShipperID: string;
            const CompanyName: string;
            const Phone: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace ShipperService {
        const baseUrl = "Northwind/Shipper";
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
}
declare namespace Terapy.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty = "SupplierID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Supplier";
        const lookupKey = "Northwind.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        namespace Fields {
            const SupplierID: string;
            const CompanyName: string;
            const ContactName: string;
            const ContactTitle: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Fax: string;
            const HomePage: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace SupplierService {
        const baseUrl = "Northwind/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Northwind {
}
declare namespace Terapy.Northwind {
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }
}
declare namespace Terapy.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty = "ID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.Territory";
        const lookupKey = "Northwind.Territory";
        function getLookup(): Q.Lookup<TerritoryRow>;
        namespace Fields {
            const ID: string;
            const TerritoryID: string;
            const TerritoryDescription: string;
            const RegionID: string;
            const RegionDescription: string;
        }
    }
}
declare namespace Terapy.Northwind {
    namespace TerritoryService {
        const baseUrl = "Northwind/Territory";
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Organization {
}
declare namespace Terapy.Organization {
    class BusinessUnitForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BusinessUnitForm {
        Name: Serenity.StringEditor;
        ParentUnitId: BusinessUnitEditor;
    }
}
declare namespace Terapy.Organization {
    interface BusinessUnitRow {
        UnitId?: number;
        Name?: string;
        ParentUnitId?: number;
        ParentUnitName?: string;
        ParentUnitParentUnitId?: number;
    }
    namespace BusinessUnitRow {
        const idProperty = "UnitId";
        const nameProperty = "Name";
        const localTextPrefix = "Organization.BusinessUnit";
        const lookupKey = "Organization.BusinessUnit";
        function getLookup(): Q.Lookup<BusinessUnitRow>;
        namespace Fields {
            const UnitId: string;
            const Name: string;
            const ParentUnitId: string;
            const ParentUnitName: string;
            const ParentUnitParentUnitId: string;
        }
    }
}
declare namespace Terapy.Organization {
    namespace BusinessUnitService {
        const baseUrl = "Organization/BusinessUnit";
        function Create(request: Serenity.SaveRequest<BusinessUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BusinessUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BusinessUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BusinessUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Organization {
}
declare namespace Terapy.Organization {
    class ContactForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ContactForm {
        Title: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        IdentityNo: Serenity.StringEditor;
        UserId: Serenity.LookupEditor;
    }
}
declare namespace Terapy.Organization {
    interface ContactRow {
        ContactId?: number;
        Title?: string;
        FirstName?: string;
        LastName?: string;
        FullName?: string;
        Email?: string;
        IdentityNo?: string;
        UserId?: number;
        Username?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
    }
    namespace ContactRow {
        const idProperty = "ContactId";
        const nameProperty = "FullName";
        const localTextPrefix = "Organization.Contact";
        const lookupKey = "Organization.Contact";
        function getLookup(): Q.Lookup<ContactRow>;
        namespace Fields {
            const ContactId: string;
            const Title: string;
            const FirstName: string;
            const LastName: string;
            const FullName: string;
            const Email: string;
            const IdentityNo: string;
            const UserId: string;
            const Username: string;
            const UserDisplayName: string;
            const UserEmail: string;
            const UserSource: string;
            const UserPasswordHash: string;
            const UserPasswordSalt: string;
            const UserLastDirectoryUpdate: string;
            const UserUserImage: string;
            const UserInsertDate: string;
            const UserInsertUserId: string;
            const UserUpdateDate: string;
            const UserUpdateUserId: string;
            const UserIsActive: string;
        }
    }
}
declare namespace Terapy.Organization {
    namespace ContactService {
        const baseUrl = "Organization/Contact";
        function Create(request: Serenity.SaveRequest<ContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Terapy.TerapyDB {
}
declare namespace Terapy.TerapyDB {
    class CategoriesTerapyForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CategoriesTerapyForm {
        CategoryName: Serenity.StringEditor;
    }
}
declare namespace Terapy.TerapyDB {
    interface CategoriesTerapyRow {
        CategoryId?: number;
        CategoryName?: string;
    }
    namespace CategoriesTerapyRow {
        const idProperty = "CategoryId";
        const nameProperty = "CategoryName";
        const localTextPrefix = "TerapyDB.CategoriesTerapy";
        const lookupKey = "TerapyDb.CategoriesTerapy";
        function getLookup(): Q.Lookup<CategoriesTerapyRow>;
        namespace Fields {
            const CategoryId: string;
            const CategoryName: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    namespace CategoriesTerapyService {
        const baseUrl = "TerapyDB/CategoriesTerapy";
        function Create(request: Serenity.SaveRequest<CategoriesTerapyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriesTerapyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesTerapyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesTerapyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
}
declare namespace Terapy.TerapyDB {
    class CustomersForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomersForm {
        CustomerName: Serenity.StringEditor;
        CustomerSurname: Serenity.StringEditor;
        UnableTerapy: Serenity.LookupEditor;
        Turns: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }
}
declare namespace Terapy.TerapyDB {
    interface CustomersRow {
        CustomerId?: number;
        CustomerName?: string;
        CustomerSurname?: string;
        UnableTerapy?: number[];
        Turns?: number[];
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Email?: string;
    }
    namespace CustomersRow {
        const idProperty = "CustomerId";
        const nameProperty = "CustomerName";
        const localTextPrefix = "TerapyDB.Customers";
        const lookupKey = "TerapyDB.Customers";
        function getLookup(): Q.Lookup<CustomersRow>;
        namespace Fields {
            const CustomerId: string;
            const CustomerName: string;
            const CustomerSurname: string;
            const UnableTerapy: string;
            const Turns: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Email: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    namespace CustomersService {
        const baseUrl = "TerapyDB/Customers";
        function Create(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    interface CustomerTurnRow {
        CustomerTurnID?: number;
        CustomerId?: number;
        TurnID?: number;
    }
    namespace CustomerTurnRow {
        const idProperty = "CustomerTurnID";
        const localTextPrefix = "CustomerTurn";
        namespace Fields {
            const CustomerTurnID: string;
            const CustomerId: string;
            const TurnID: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
}
declare namespace Terapy.TerapyDB {
    class EmployeesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeesForm {
        LastName: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Photo: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
    }
}
declare namespace Terapy.TerapyDB {
    interface EmployeesRow {
        EmployeeId?: number;
        LastName?: string;
        FirstName?: string;
        BirthDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Photo?: number[];
        Notes?: string;
    }
    namespace EmployeesRow {
        const idProperty = "EmployeeId";
        const nameProperty = "LastName";
        const localTextPrefix = "TerapyDB.Employees";
        const lookupKey = "TerapyDb.Employees";
        function getLookup(): Q.Lookup<EmployeesRow>;
        namespace Fields {
            const EmployeeId: string;
            const LastName: string;
            const FirstName: string;
            const BirthDate: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Photo: string;
            const Notes: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    namespace EmployeesService {
        const baseUrl = "TerapyDB/Employees";
        function Create(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
}
declare namespace Terapy.TerapyDB {
    class MessagesTranslationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MessagesTranslationForm {
        MessageEn: Serenity.StringEditor;
    }
}
declare namespace Terapy.TerapyDB {
    interface MessagesTranslationRow {
        MessageId?: number;
        MessageEn?: string;
    }
    namespace MessagesTranslationRow {
        const idProperty = "MessageId";
        const nameProperty = "MessageEn";
        const localTextPrefix = "TerapyDB.MessagesTranslation";
        namespace Fields {
            const MessageId: string;
            const MessageEn: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    namespace MessagesTranslationService {
        const baseUrl = "TerapyDB/MessagesTranslation";
        function Create(request: Serenity.SaveRequest<MessagesTranslationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MessagesTranslationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MessagesTranslationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MessagesTranslationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
}
declare namespace Terapy.TerapyDB {
    class RoomsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoomsForm {
        RoomName: Serenity.StringEditor;
        Terapies: Serenity.LookupEditor;
    }
}
declare namespace Terapy.TerapyDB {
    interface RoomsRow {
        RoomId?: number;
        RoomName?: string;
        Terapies?: number[];
    }
    namespace RoomsRow {
        const idProperty = "RoomId";
        const nameProperty = "RoomName";
        const localTextPrefix = "TerapyDB.Rooms";
        const lookupKey = "TerapyDb.Rooms";
        function getLookup(): Q.Lookup<RoomsRow>;
        namespace Fields {
            const RoomId: string;
            const RoomName: string;
            const Terapies: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    namespace RoomsService {
        const baseUrl = "TerapyDB/Rooms";
        function Create(request: Serenity.SaveRequest<RoomsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoomsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoomsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoomsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
}
declare namespace Terapy.TerapyDB {
    class SchedulerTerapyForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SchedulerTerapyForm {
        SchedulerDateTime: Serenity.DateEditor;
        SchedEmploy: Serenity.IntegerEditor;
        SchedCustomerId: Serenity.IntegerEditor;
        SchedTurnId: Serenity.IntegerEditor;
        SchedTerapyTypeId: Serenity.IntegerEditor;
        SchedNote: Serenity.StringEditor;
    }
}
declare namespace Terapy.TerapyDB {
    interface SchedulerTerapyRow {
        SchedulerId?: number;
        SchedulerDateTime?: string;
        SchedEmploy?: number;
        SchedCustomerId?: number;
        SchedTurnId?: number;
        SchedTerapyTypeId?: number;
        SchedNote?: string;
        SchedEmployLastName?: string;
        SchedEmployFirstName?: string;
        SchedEmployBirthDate?: string;
        SchedEmployAddress?: string;
        SchedEmployCity?: string;
        SchedEmployRegion?: string;
        SchedEmployPostalCode?: string;
        SchedEmployCountry?: string;
        SchedEmployPhone?: string;
        SchedEmployPhoto?: number[];
        SchedEmployNotes?: string;
        SchedCustomerCustomerName?: string;
        SchedCustomerCustomerSurname?: string;
        SchedCustomerAddress?: string;
        SchedCustomerCity?: string;
        SchedCustomerRegion?: string;
        SchedCustomerPostalCode?: string;
        SchedCustomerCountry?: string;
        SchedCustomerPhone?: string;
        SchedCustomerEmail?: string;
        SchedTurnTurnName?: string;
        SchedTurnTurnDataStart?: string;
        SchedTurnTurnEndDate?: string;
        SchedTerapyTypeTerapyTypeName?: string;
        SchedTerapyTypePersonXSession?: number;
        SchedTerapyTypeTerapyTypeCategoryId?: number;
        SchedTerapyTypeReportOrder?: number;
    }
    namespace SchedulerTerapyRow {
        const idProperty = "SchedulerId";
        const nameProperty = "SchedNote";
        const localTextPrefix = "TerapyDB.SchedulerTerapy";
        namespace Fields {
            const SchedulerId: string;
            const SchedulerDateTime: string;
            const SchedEmploy: string;
            const SchedCustomerId: string;
            const SchedTurnId: string;
            const SchedTerapyTypeId: string;
            const SchedNote: string;
            const SchedEmployLastName: string;
            const SchedEmployFirstName: string;
            const SchedEmployBirthDate: string;
            const SchedEmployAddress: string;
            const SchedEmployCity: string;
            const SchedEmployRegion: string;
            const SchedEmployPostalCode: string;
            const SchedEmployCountry: string;
            const SchedEmployPhone: string;
            const SchedEmployPhoto: string;
            const SchedEmployNotes: string;
            const SchedCustomerCustomerName: string;
            const SchedCustomerCustomerSurname: string;
            const SchedCustomerAddress: string;
            const SchedCustomerCity: string;
            const SchedCustomerRegion: string;
            const SchedCustomerPostalCode: string;
            const SchedCustomerCountry: string;
            const SchedCustomerPhone: string;
            const SchedCustomerEmail: string;
            const SchedTurnTurnName: string;
            const SchedTurnTurnDataStart: string;
            const SchedTurnTurnEndDate: string;
            const SchedTerapyTypeTerapyTypeName: string;
            const SchedTerapyTypePersonXSession: string;
            const SchedTerapyTypeTerapyTypeCategoryId: string;
            const SchedTerapyTypeReportOrder: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    namespace SchedulerTerapyService {
        const baseUrl = "TerapyDB/SchedulerTerapy";
        function Create(request: Serenity.SaveRequest<SchedulerTerapyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SchedulerTerapyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SchedulerTerapyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SchedulerTerapyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    interface TerapyRoomRow {
        RoomId?: number;
        TerapyTypeID?: number;
    }
    namespace TerapyRoomRow {
        const idProperty = "RoomId";
        const localTextPrefix = "TerapyDB.TerapyRoom";
        const lookupKey = "TerapyDb.TerapyRoom";
        function getLookup(): Q.Lookup<TerapyRoomRow>;
        namespace Fields {
            const RoomId: string;
            const TerapyTypeID: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
}
declare namespace Terapy.TerapyDB {
    class TerapyTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TerapyTypeForm {
        TerapyTypeName: Serenity.StringEditor;
        TerapyTypeCategoryId: Serenity.LookupEditor;
        TerapyTimeXTurnXPatient: Serenity.IntegerEditor;
        TerapyXHour: Serenity.IntegerEditor;
        Rooms: Serenity.LookupEditor;
        TerapyRaccomandedByDoctor: Serenity.BooleanEditor;
        TerapyByAgeAndSex: Serenity.BooleanEditor;
        TerapyDefaultIfNotRaccomanded: Serenity.LookupEditor;
    }
}
declare namespace Terapy.TerapyDB {
    interface TerapyTypeRow {
        TerapyTypeId?: number;
        TerapyTypeName?: string;
        TerapyTimeXTurnXPatient?: number;
        TerapyXHour?: number;
        TerapyDefaultIfNotRaccomanded?: number;
        TerapyRaccomandedByDoctor?: boolean;
        TerapyByAgeAndSex?: boolean;
        Rooms?: number[];
        TerapyTypeCategoryId?: number;
        TerapyTypeCategoryCategoryName?: string;
    }
    namespace TerapyTypeRow {
        const idProperty = "TerapyTypeId";
        const nameProperty = "TerapyTypeName";
        const localTextPrefix = "TerapyDB.TerapyType";
        const lookupKey = "TerapyDB.TerapyType";
        function getLookup(): Q.Lookup<TerapyTypeRow>;
        namespace Fields {
            const TerapyTypeId: string;
            const TerapyTypeName: string;
            const TerapyTimeXTurnXPatient: string;
            const TerapyXHour: string;
            const TerapyDefaultIfNotRaccomanded: string;
            const TerapyRaccomandedByDoctor: string;
            const TerapyByAgeAndSex: string;
            const Rooms: string;
            const TerapyTypeCategoryId: string;
            const TerapyTypeCategoryCategoryName: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    namespace TerapyTypeService {
        const baseUrl = "TerapyDB/TerapyType";
        function Create(request: Serenity.SaveRequest<TerapyTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerapyTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerapyTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerapyTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
}
declare namespace Terapy.TerapyDB {
    class TurnTerapyForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TurnTerapyForm {
        TurnName: Serenity.StringEditor;
        TurnDataStart: Serenity.DateEditor;
        TurnEndDate: Serenity.DateEditor;
        TurnToGenerate: Serenity.BooleanEditor;
    }
}
declare namespace Terapy.TerapyDB {
    interface TurnTerapyRow {
        TurnId?: number;
        TurnName?: string;
        TurnDataStart?: string;
        TurnEndDate?: string;
        TurnToGenerate?: boolean;
    }
    namespace TurnTerapyRow {
        const idProperty = "TurnId";
        const nameProperty = "TurnName";
        const localTextPrefix = "TerapyDB.TurnTerapy";
        const lookupKey = "TerapyDB.TurnTerapy";
        function getLookup(): Q.Lookup<TurnTerapyRow>;
        namespace Fields {
            const TurnId: string;
            const TurnName: string;
            const TurnDataStart: string;
            const TurnEndDate: string;
            const TurnToGenerate: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    namespace TurnTerapyService {
        const baseUrl = "TerapyDB/TurnTerapy";
        function Create(request: Serenity.SaveRequest<TurnTerapyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TurnTerapyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TurnTerapyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TurnTerapyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
}
declare namespace Terapy.TerapyDB {
    class UnableTerapyCustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UnableTerapyCustomerForm {
        CustomerId: Serenity.IntegerEditor;
    }
}
declare namespace Terapy.TerapyDB {
    interface UnableTerapyCustomerRow {
        TerapyTypeId?: number;
        CustomerId?: number;
    }
    namespace UnableTerapyCustomerRow {
        const idProperty = "TerapyTypeId";
        const localTextPrefix = "TerapyDB.UnableTerapyCustomer";
        namespace Fields {
            const TerapyTypeId: string;
            const CustomerId: string;
        }
    }
}
declare namespace Terapy.TerapyDB {
    namespace UnableTerapyCustomerService {
        const baseUrl = "TerapyDB/UnableTerapyCustomer";
        function Create(request: Serenity.SaveRequest<UnableTerapyCustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnableTerapyCustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnableTerapyCustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnableTerapyCustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Terapy.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Terapy.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Terapy.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Terapy.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Terapy.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace Terapy.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): RSVP.Promise<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Terapy.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Terapy.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Terapy.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Terapy.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Terapy.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Terapy.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Terapy.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare var Morris: any;
declare namespace Terapy.BasicSamples {
    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace Terapy.Northwind {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
    }
}
declare namespace Terapy.BasicSamples {
    class CloneableEntityDialog extends Northwind.ProductDialog {
        protected updateInterface(): void;
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity(): Northwind.ProductRow;
    }
}
declare namespace Terapy.Northwind {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter(ctx);
        private stringInputFormatter(ctx);
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter(ctx, idField, lookup);
        private getEffectiveValue(item, field);
        protected getColumns(): Slick.Column[];
        private inputsChange(e);
        private setSaveButtonState();
        private saveClick();
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class CloneableEntityGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof CloneableEntityDialog;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Northwind {
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        set_shippingState(value: number): void;
    }
}
declare namespace Terapy.BasicSamples {
    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called when New Item button is clicked.
         * By default, it calls EditItem with an empty entity.
         * This is a good place to fill in default values for New Item button.
         */
        protected addButtonClick(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Terapy.BasicSamples.DialogBoxes {
    function initializePage(): void;
}
declare namespace Terapy.Northwind {
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    class EntityDialogAsPanel extends Northwind.OrderDialog {
        constructor();
    }
}
declare namespace Terapy.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
    }
}
declare namespace Terapy.BasicSamples {
    class GetInsertedRecordIdDialog extends Northwind.CategoryDialog {
        /**
         * This method is called after the save request to service
         * is completed succesfully. This can be an insert or update.
         *
         * @param response Response that is returned from server
         */
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace Terapy.Northwind {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
     */
    class GetInsertedRecordIdGrid extends Northwind.CategoryGrid {
        protected getDialogType(): typeof GetInsertedRecordIdDialog;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Styling for columns is done with CSS in site.basicsamples.less file.
     * When comparing this to MultiColumnDialog sample, you may notice that
     * this version requires much less JS and CSS code.
     */
    class MultiColumnResponsiveDialog extends Northwind.OrderDialog {
        constructor();
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
     */
    class MultiColumnResponsiveGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof MultiColumnResponsiveDialog;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     */
    class OtherFormInTabDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
     */
    class OtherFormInTabGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormInTabDialog;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     * With single toolbar for all forms
     */
    class OtherFormOneBarDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        private selfChange;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
        protected saveCustomer(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void): boolean;
        protected saveOrder(callback: (response: Serenity.SaveResponse) => void): void;
        protected saveAll(callback: (response: Serenity.SaveResponse) => void): void;
        protected save(callback: (response: Serenity.SaveResponse) => void): void;
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
     */
    class OtherFormInTabOneBarGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormOneBarDialog;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.BasicSamples {
    class PopulateLinkedDataDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PopulateLinkedDataForm;
        constructor();
        private setCustomerDetails(details);
        /**
         * This dialog will have CSS class "s-PopulateLinkedDataDialog"
         * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
         * This has no effect other than looks on populate linked data demonstration
         */
        protected getCssClass(): string;
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * A subclass of OrderGrid that launches PopulateLinkedDataDialog
     */
    class PopulateLinkedDataGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof PopulateLinkedDataDialog;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Northwind {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        protected getLanguages(): string[][];
    }
}
declare namespace Terapy.BasicSamples {
    class ReadOnlyDialog extends Northwind.SupplierDialog {
        /**
         * This is the method that gets list of tool
         * buttons to be created in a dialog.
         *
         * Here we'll remove save and close button, and
         * apply changes buttons.
         */
        protected getToolbarButtons(): Serenity.ToolButton[];
        /**
         * This method is a good place to update states of
         * interface elements. It is called after dialog
         * is initialized and an entity is loaded into dialog.
         * This is also called in new item mode.
         */
        protected updateInterface(): void;
        /**
         * This method is called when dialog title needs to be updated.
         * Base class returns something like 'Edit xyz' for edit mode,
         * and 'New xyz' for new record mode.
         *
         * But our dialog is readonly, so we should change it to 'View xyz'
         */
        protected getEntityTitle(): string;
        /**
         * This method is actually the one that calls getEntityTitle()
         * and updates the dialog title. We could do it here too...
         */
        protected updateTitle(): void;
    }
}
declare namespace Terapy.Northwind {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * A readonly grid that launches ReadOnlyDialog
     */
    class ReadOnlyGrid extends Northwind.SupplierGrid {
        protected getDialogType(): typeof ReadOnlyDialog;
        constructor(container: JQuery);
        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Adding Responsive attribute makes this dialog use full screen in mobile devices.
     */
    class ResponsiveDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to ResponsiveDialog
     */
    class ResponsiveGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof ResponsiveDialog;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Northwind {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private ordersGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace Terapy.BasicSamples {
    class SerialAutoNumberDialog extends Northwind.CustomerDialog {
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber();
    }
}
declare namespace Terapy.Northwind {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
     */
    class SerialAutoNumberGrid extends Northwind.CustomerGrid {
        protected getDialogType(): typeof SerialAutoNumberDialog;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Terapy.BasicSamples {
    class ChangingLookupTextDialog extends Common.GridEditorDialog<Northwind.OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ChangingLookupTextForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Our custom product editor type
     */
    class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.ProductRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: Northwind.ProductRow, lookup: Q.Lookup<Northwind.ProductRow>): string;
    }
}
declare namespace Terapy.Northwind {
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        constructor();
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Our subclass of order detail dialog with a CategoryID property
     * that will be used to set CascadeValue of product editor
     */
    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
        constructor();
        /**
         * This method is called just before an entity is loaded to dialog
         * This is also called for new record mode with an empty entity
         */
        protected beforeLoadEntity(entity: any): void;
        categoryID: number;
    }
}
declare namespace Terapy.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Terapy.Northwind {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Our subclass of Order Details editor with a CategoryID property
     */
    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        protected getDialogType(): typeof FilteredLookupOrderDetailDialog;
        constructor(container: JQuery);
        categoryID: number;
        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Basic order dialog with a category selection
     */
    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private form;
        constructor();
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
     */
    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof FilteredLookupInDetailDialog;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * This is our custom product dialog that uses a different product form
     * (LookupFilterByMultipleForm) with our special category editor.
     */
    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
        protected getFormKey(): string;
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof LookupFilterByMultipleDialog;
        constructor(container: JQuery);
        /**
         * This method is called just before List request is sent to service.
         * You have an opportunity here to cancel request or modify it.
         * Here we'll add a custom criteria to list request.
         */
        protected onViewSubmit(): boolean;
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.CategoryRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Northwind.CategoryRow>): Northwind.CategoryRow[];
    }
}
declare namespace Terapy.BasicSamples {
    class HardcodedValuesDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: HardcodedValuesForm;
        constructor();
    }
}
declare namespace Terapy.BasicSamples {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HardcodedValuesEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace Terapy {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent();
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace Terapy.BasicSamples {
    class StaticTextBlockDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: StaticTextBlockForm;
        constructor();
        /**
         * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
         * If this was an EntityDialog, your field value would be originating from server side entity.
         */
        protected loadInitialEntity(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace Terapy.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Terapy.BasicSamples {
    class OrderBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace Terapy.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace Terapy.BasicSamples {
    class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string;
    }
}
declare namespace Terapy.BasicSamples {
    class CustomLinksInGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * We override getColumns() to change format functions for some columns.
         * You could also write them as formatter classes, and use them at server side
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        /**
         * This method is called for columns with [EditLink] attribute,
         * but only for edit links of this grid's own item type.
         * It is also called by Add Product button with a NULL entityOrId
         * parameter so we should check that entityOrId is a string
         * to be sure it is originating from a link.
         *
         * As we changed format for other columns, this will only be called
         * for links in remaining OrderID column
         */
        protected editItem(entityOrId: any): void;
    }
}
declare namespace Terapy.BasicSamples {
    class DragDropSampleDialog extends Serenity.EntityDialog<DragDropSampleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DragDropSampleForm;
    }
}
declare namespace Terapy.BasicSamples {
    class DragDropSampleGrid extends Serenity.EntityGrid<DragDropSampleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DragDropSampleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private dragging;
        constructor(container: JQuery);
        /**
         * This method will determine if item can be moved under a given target
         * An item can't be moved under itself, under one of its children
         */
        private canMoveUnder(item, target);
        /**
         * Gets children list of an item
         */
        private getChildren(item);
        /**
         * Gets all parents of an item
         */
        private getParents(item);
        protected getButtons(): any[];
        protected usePager(): boolean;
    }
}
declare namespace Terapy {
    class SelectableEntityGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace Terapy.BasicSamples {
    class RowSelectionGrid extends SelectableEntityGrid<Northwind.SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.BasicSamples {
    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace Terapy.BasicSamples {
    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace Terapy.BasicSamples {
    class InitialValuesForQuickFilters extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        /**
         * This method is another possible place to modify quick filter widgets.
         * It is where the quick filter widgets are actually created.
         *
         * By default, it calls getQuickFilters() then renders UI for these
         * quick filters.
         *
         * We could use getQuickFilters() method for ShipVia too,
         * but this is for demonstration purposes
         */
        protected createQuickFilters(): void;
    }
}
declare namespace Terapy.BasicSamples {
    class InlineActionGrid extends Northwind.CustomerGrid {
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Terapy.BasicSamples {
    class InlineImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
    }
}
declare namespace Terapy.BasicSamples {
    class InlineImageInGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace Terapy.BasicSamples {
    class ProductExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace Terapy.BasicSamples {
    class ProductExcelImportGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Terapy.BasicSamples {
    class QuickFilterCustomization extends Serenity.EntityGrid<Northwind.OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Northwind.OrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Terapy.BasicSamples {
    class RemovingAddButton extends Northwind.SupplierGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Terapy.BasicSamples {
    class CustomerGrossSalesGrid extends Serenity.EntityGrid<Northwind.CustomerGrossSalesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Terapy.BasicSamples {
    class TreeGrid extends Northwind.OrderGrid {
        private treeMixin;
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace Terapy.BasicSamples {
    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
    }
}
declare namespace Terapy.BasicSamples {
    class WrappedHeadersGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
}
declare namespace Terapy.LanguageList {
    function getValue(): string[][];
}
declare namespace Terapy.ScriptInitialization {
}
declare namespace Terapy {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Terapy.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Terapy.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Terapy.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Terapy.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Terapy.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Terapy.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace Terapy.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Terapy.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Terapy.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Terapy.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Terapy.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Terapy.Meeting {
    class MeetingDialog extends Serenity.EntityDialog<MeetingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeetingForm;
        private agendaGrid;
        private decisionGrid;
        constructor();
        protected arrange(): void;
        loadEntity(entity: MeetingRow): void;
    }
}
declare namespace Terapy.Meeting {
    class MeetingGrid extends Serenity.EntityGrid<MeetingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Meeting {
    class MeetingAgendaDialog extends Serenity.EntityDialog<MeetingAgendaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeetingAgendaForm;
    }
}
declare namespace Terapy.Meeting {
    class MeetingAgendaGrid extends Serenity.EntityGrid<MeetingAgendaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingAgendaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _meetingId;
        meetingId: string;
    }
}
declare namespace Terapy.Meeting {
    class MeetingAgendaRelevantDialog extends Serenity.EntityDialog<MeetingAgendaRelevantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: MeetingAgendaRelevantForm;
    }
}
declare namespace Terapy.Meeting {
    class MeetingAgendaRelevantGrid extends Serenity.EntityGrid<MeetingAgendaRelevantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingAgendaRelevantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Meeting {
    class MeetingAgendaTypeDialog extends Serenity.EntityDialog<MeetingAgendaTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeetingAgendaTypeForm;
    }
}
declare namespace Terapy.Meeting {
    class MeetingAgendaTypeGrid extends Serenity.EntityGrid<MeetingAgendaTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingAgendaTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Meeting {
    class MeetingAttendeeDialog extends Common.GridEditorDialog<MeetingAttendeeRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: MeetingAttendeeForm;
    }
}
declare namespace Terapy.Meeting {
    class MeetingAttendeeEditor extends Common.GridEditorBase<MeetingAttendeeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingAttendeeDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected createToolbarExtensions(): void;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Terapy.Meeting {
    class MeetingDecisionDialog extends Serenity.EntityDialog<MeetingDecisionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeetingDecisionForm;
    }
}
declare namespace Terapy.Meeting {
    class MeetingDecisionGrid extends Serenity.EntityGrid<MeetingDecisionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingDecisionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _meetingId;
        meetingId: string;
    }
}
declare namespace Terapy.Meeting {
    class MeetingDecisionRelevantDialog extends Serenity.EntityDialog<MeetingDecisionRelevantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: MeetingDecisionRelevantForm;
    }
}
declare namespace Terapy.Meeting {
    class MeetingDecisionRelevantGrid extends Serenity.EntityGrid<MeetingDecisionRelevantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingDecisionRelevantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Meeting {
    class MeetingLocationDialog extends Serenity.EntityDialog<MeetingLocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeetingLocationForm;
    }
}
declare namespace Terapy.Meeting {
    class MeetingLocationGrid extends Serenity.EntityGrid<MeetingLocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingLocationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Meeting {
    class MeetingTypeDialog extends Serenity.EntityDialog<MeetingTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeetingTypeForm;
    }
}
declare namespace Terapy.Meeting {
    class MeetingTypeGrid extends Serenity.EntityGrid<MeetingTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeetingTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Northwind {
    class CustomerEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CustomerRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace Terapy.Northwind {
    class CustomerOrderDialog extends OrderDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace Terapy.Northwind {
    class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: string;
    }
}
declare namespace Terapy.Northwind {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Terapy.Northwind {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace Terapy.Northwind {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace Terapy.Northwind {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace Terapy.Northwind {
    class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Terapy.Northwind {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
        protected getLanguages(): string[][];
    }
}
declare namespace Terapy.Northwind {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Northwind {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace Terapy.Northwind {
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
        protected getLanguages(): string[][];
    }
}
declare namespace Terapy.Northwind {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Terapy.Northwind {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Northwind {
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerritoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace Terapy.Northwind {
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.Organization {
    class BusinessUnitDialog extends Serenity.EntityDialog<BusinessUnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BusinessUnitForm;
    }
}
declare namespace Terapy.Organization {
    class BusinessUnitEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, BusinessUnitRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: BusinessUnitRow, lookup: Q.Lookup<BusinessUnitRow>): string;
    }
}
declare namespace Terapy.Organization {
    class BusinessUnitGrid extends Serenity.EntityGrid<BusinessUnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessUnitDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected subDialogDataChange(): void;
        protected usePager(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Terapy.Organization {
    class ContactDialog extends Serenity.EntityDialog<ContactRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ContactForm;
    }
}
declare namespace Terapy.Organization {
    class ContactGrid extends Serenity.EntityGrid<ContactRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContactDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.TerapyDB {
    class CategoriesTerapyDialog extends Serenity.EntityDialog<CategoriesTerapyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoriesTerapyForm;
    }
}
declare namespace Terapy.TerapyDB {
    class CategoriesTerapyGrid extends Serenity.EntityGrid<CategoriesTerapyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoriesTerapyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.TerapyDB {
    class CustomerListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Terapy.TerapyDB {
    class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomersForm;
    }
}
declare namespace Terapy.TerapyDB {
    class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.TerapyDB {
    class TerapyListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Terapy.TerapyDB {
    class TurnTerapyListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Terapy.TerapyDB {
    class EmployeesDialog extends Serenity.EntityDialog<EmployeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmployeesForm;
    }
}
declare namespace Terapy.TerapyDB {
    class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.TerapyDB {
    class MessagesTranslationDialog extends Serenity.EntityDialog<MessagesTranslationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MessagesTranslationForm;
    }
}
declare namespace Terapy.TerapyDB {
    class MessagesTranslationGrid extends Serenity.EntityGrid<MessagesTranslationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MessagesTranslationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.TerapyDB {
    class RoomsDialog extends Serenity.EntityDialog<RoomsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoomsForm;
    }
}
declare namespace Terapy.TerapyDB {
    class RoomsGrid extends Serenity.EntityGrid<RoomsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoomsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.TerapyDB {
    class SchedulerTerapyDialog extends Serenity.EntityDialog<SchedulerTerapyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SchedulerTerapyForm;
    }
}
declare namespace Terapy.TerapyDB {
    class SchedulerTerapyGrid extends Serenity.EntityGrid<SchedulerTerapyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SchedulerTerapyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.TerapyDB {
    class RoomListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Terapy.TerapyDB {
    class TerapyTypeDialog extends Serenity.EntityDialog<TerapyTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerapyTypeForm;
    }
}
declare namespace Terapy.TerapyDB {
    class TerapyTypeGrid extends Serenity.EntityGrid<TerapyTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TerapyTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.TerapyDB {
    class TurnTerapyDialog extends Serenity.EntityDialog<TurnTerapyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TurnTerapyForm;
    }
}
declare namespace Terapy.TerapyDB {
    class TurnTerapyGrid extends Serenity.EntityGrid<TurnTerapyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TurnTerapyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Terapy.TerapyDB {
    class UnableTerapyCustomerDialog extends Serenity.EntityDialog<UnableTerapyCustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: UnableTerapyCustomerForm;
    }
}
declare namespace Terapy.TerapyDB {
    class UnableTerapyCustomerGrid extends Serenity.EntityGrid<UnableTerapyCustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnableTerapyCustomerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
