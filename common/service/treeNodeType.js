!function(E){function T(){var E={TREETYPE_COMPONENTMODELING:1,TREETYPE_IOTPLATFORM:2,TREETYPE_BUSINESSOPERATIONS:3,TREETYPE_USERPERMISSION:4,TREETYPE_USERCENTER:5,NODETYPE_FOLDER:0,NODETYPE_FILE:1,FOLDERTYPE_ROOTFOLDER:1,FOLDERTYPE_COMMONFOLDER:2,FOLDERTYPE_DEVFOLDER:3,FOLDERTYPE_USER_GROUP_AREA:4,FOLDERTYPE_WAIT_APPLICATION:5,FOLDERTYPE_PERGROUP:6,FOLDERTYPE_USERGROUP:7,FOLDERTYPE_NEWBUSINESS:8,FOLDERTYPE_BUSINESSMODELING:9,FOLDERTYPE_OPERMANAGE:10,FILETYPE_IOTDEVICE:1,FILETYPE_PROJECTVIEW:2,FILETYPE_MODELING:3,FILETYPE_USERPER:4,FILRTYPE_USERCENTER:5,FILRTYPE_BUSINESSOPERATIONS:6,FILETYPE_CT:1,FILETYPE_DT:2,FILETYPE_GM:3,FILETYPE_COUNT:4,FILETYPE_AIM:5,FILETYPE_PN:6,FILETYPE_MT:7,FILETYPE_3D:8,FILETYPE_LIVE:9,FILETYPE_AI:1,FILETYPE_DL:2,FILETYPE_DH:3,FILETYPE_ML:4,FILETYPE_TC:5,FILETYPE_DEV_COUNT:6,FILETYPE_BM:7,FILETYPE_GLB_AI:8,FILETYPE_GLB_DL:9,FILETYPE_GLB_GM:10,FILETYPE_GLB_MAP:11,FILETYPE_PRO_DATATYPE:12,FILETYPE_LOCATION:13,FILETYPE_CTSTATUS:14,FILETYPE_GLB_3D:15,FILETYPE_PROCESS_CREATE:1,FILETYPE_PROCESS_Pending:2,FILETYPE_PROCESS_SEARCH:3,FILETYPE_PROCESS_USERSGROUPS:4,FILETYPE_WAIT_APPLICATION_USER:1,FILETYPE_USERGROUP:2,FILETYPE_PERGROUP:3,FILETYPE_SPACE_USER:4,FILETYPE_DISTRIBUTE_PERMISSION:5,FILETYPE_CONCERSPACE:1,FILETYPE_FINDLOGS:2,FILETYPE_GLB_CONFIG:3,FILETYPE_CREATESERVICE:4,FILETYPE_IOTBASICCONFIG:5,FILETYPE_BUY:6,FILETYPE_FUNCTIONCONFIG:7,FILETYPE_USER_INFO_CHANGE:8,encTreeNodeType:function(E,T,e,P){return E|T<<5|e<<6|P<<12}},T={NODETYPE_MODEL_GROUP:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FOLDER,E.FOLDERTYPE_COMMONFOLDER),NODETYPE_CT:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_CT),NODETYPE_DT:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_DT),NODETYPE_GM:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_GM),NODETYPE_CA:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_COUNT),NODETYPE_AL:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_AIM),NODETYPE_PN:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_PN),NODETYPE_MT:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_MT),NODETYPE_3D:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_3D),NODETYPE_LIVE:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_LIVE),NODETYPE_DEV:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FOLDER,E.FOLDERTYPE_DEVFOLDER),NODETYPE_AI:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_IOTDEVICE,E.FILETYPE_AI),NODETYPE_DM:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_IOTDEVICE,E.FILETYPE_DL),NODETYPE_DMH:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_IOTDEVICE,E.FILETYPE_DH),NODETYPE_DC:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_IOTDEVICE,E.FILETYPE_ML),NODETYPE_TC:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_IOTDEVICE,E.FILETYPE_TC),NODETYPE_DCOUNT:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_IOTDEVICE,E.FILETYPE_DEV_COUNT),NODETYPE_BM:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_IOTDEVICE,E.FILETYPE_BM),NODETYPE_GDL:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_PROJECTVIEW,E.FILETYPE_GLB_DL),NODETYPE_GLB_GM:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_PROJECTVIEW,E.FILETYPE_GLB_GM),GLB_LOCATION:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_PROJECTVIEW,E.FILETYPE_GLB_MAP),DATATYPE_PRO:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_PROJECTVIEW,E.FILETYPE_PRO_DATATYPE),NODETYPE_GLB_3D:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_PROJECTVIEW,E.FILETYPE_GLB_3D),NODETYPE_PERGROUP_FOLDER:E.encTreeNodeType(E.TREETYPE_USERPERMISSION,E.NODETYPE_FOLDER,E.FOLDERTYPE_PERGROUP),NODETYPE_PERGROUP:E.encTreeNodeType(E.TREETYPE_USERPERMISSION,E.NODETYPE_FILE,E.FILETYPE_USERPER,E.FILETYPE_PERGROUP),NODETYPE_USERGROUP_FOLDER:E.encTreeNodeType(E.TREETYPE_USERPERMISSION,E.NODETYPE_FOLDER,E.FOLDERTYPE_USERGROUP),NODETYPE_USER_GROUP:E.encTreeNodeType(E.TREETYPE_USERPERMISSION,E.NODETYPE_FILE,E.FILETYPE_USERPER,E.FILETYPE_USERGROUP),ROOT_CATALOGTYPE:E.encTreeNodeType(E.TREETYPE_COMPONENTMODELING,E.NODETYPE_FOLDER,E.FILETYPE_IOTDEVICE),ROOT_DEVICETYPE:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FOLDER,E.FILETYPE_IOTDEVICE),ROOT_BUSINESSOPERATIONS:E.encTreeNodeType(E.TREETYPE_BUSINESSOPERATIONS,E.NODETYPE_FOLDER,E.FILETYPE_IOTDEVICE),WAIT_APPLICATION:E.encTreeNodeType(E.TREETYPE_USERPERMISSION,E.NODETYPE_FOLDER,E.FOLDERTYPE_WAIT_APPLICATION),WAIT_APPLICATION_USER:E.encTreeNodeType(E.TREETYPE_USERPERMISSION,E.NODETYPE_FILE,E.FILETYPE_USERPER,E.FILETYPE_WAIT_APPLICATION_USER),SPACE_USER:E.encTreeNodeType(E.TREETYPE_USERPERMISSION,E.NODETYPE_FILE,E.FILETYPE_USERPER,E.FILETYPE_SPACE_USER),DISTRIBUTE_PERMISSION:E.encTreeNodeType(E.TREETYPE_USERPERMISSION,E.NODETYPE_FILE,E.FILETYPE_USERPER,E.FILETYPE_DISTRIBUTE_PERMISSION),ATTENTION_SPACE:E.encTreeNodeType(E.TREETYPE_USERCENTER,E.NODETYPE_FILE,E.FILRTYPE_USERCENTER,E.FILETYPE_CONCERSPACE),LOG_INFO:E.encTreeNodeType(E.TREETYPE_USERCENTER,E.NODETYPE_FILE,E.FILRTYPE_USERCENTER,E.FILETYPE_FINDLOGS),GLB_CONFIG:E.encTreeNodeType(E.TREETYPE_USERCENTER,E.NODETYPE_FILE,E.FILRTYPE_USERCENTER,E.FILETYPE_GLB_CONFIG),SERVER_CONFIG:E.encTreeNodeType(E.TREETYPE_USERCENTER,E.NODETYPE_FILE,E.FILRTYPE_USERCENTER,E.FILETYPE_CREATESERVICE),CONFIG_MSG:E.encTreeNodeType(E.TREETYPE_USERCENTER,E.NODETYPE_FILE,E.FILRTYPE_USERCENTER,E.FILETYPE_IOTBASICCONFIG),USER_INFO_CHANGE:E.encTreeNodeType(E.TREETYPE_USERCENTER,E.NODETYPE_FILE,E.FILRTYPE_USERCENTER,E.FILETYPE_USER_INFO_CHANGE),DEVICE_FOLDER:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FOLDER,E.FOLDERTYPE_COMMONFOLDER),COMMUNICATION_STATUS:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FILE,E.FILETYPE_MODELING,E.FILETYPE_CTSTATUS),BUY:E.encTreeNodeType(E.TREETYPE_USERCENTER,E.NODETYPE_FILE,E.FILRTYPE_USERCENTER,E.FILETYPE_BUY),BUS_NEWBUS:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FOLDER,E.FOLDERTYPE_NEWBUSINESS),BUS_BUSMODELING:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FOLDER,E.FOLDERTYPE_BUSINESSMODELING),BUS_OPERMANAGE:E.encTreeNodeType(E.TREETYPE_IOTPLATFORM,E.NODETYPE_FOLDER,E.FOLDERTYPE_OPERMANAGE),NODETYPE_PC:E.encTreeNodeType(E.TREETYPE_BUSINESSOPERATIONS,E.NODETYPE_FILE,E.FILRTYPE_BUSINESSOPERATIONS,E.FILETYPE_PROCESS_CREATE),NODETYPE_PP:E.encTreeNodeType(E.TREETYPE_BUSINESSOPERATIONS,E.NODETYPE_FILE,E.FILRTYPE_BUSINESSOPERATIONS,E.FILETYPE_PROCESS_Pending),NODETYPE_PS:E.encTreeNodeType(E.TREETYPE_BUSINESSOPERATIONS,E.NODETYPE_FILE,E.FILRTYPE_BUSINESSOPERATIONS,E.FILETYPE_PROCESS_SEARCH),NODETYPE_PG:E.encTreeNodeType(E.TREETYPE_BUSINESSOPERATIONS,E.NODETYPE_FILE,E.FILRTYPE_BUSINESSOPERATIONS,E.FILETYPE_PROCESS_USERSGROUPS),isTreeType_ComponentModeling:function(T){return(31&T)==E.TREETYPE_COMPONENTMODELING},isTreeType_IotPlatForm:function(T){return(31&T)==E.TREETYPE_IOTPLATFORM},isTreeType_UserPermission:function(T){return(31&T)==E.TREETYPE_USERPERMISSION},isTreeType_UserCenter:function(T){return(31&T)==E.TREETYPE_USERCENTER},isFolder:function(T){return(T>>5&1)==E.NODETYPE_FOLDER},isFiles:function(T){return(T>>5&1)==E.NODETYPE_FILE},isRootFolder:function(T){return(T>>6&15)==E.FOLDERTYPE_ROOTFOLDER},isDevFolder:function(T){return(T>>6&15)==E.FOLDERTYPE_DEVFOLDER},isFolder_CommonFolder:function(T){return(T>>6&15)==E.FOLDERTYPE_COMMONFOLDER},isFolder_SpaceUser:function(e){return T.isTreeType_UserPermission(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_SPACE_USER},isFolder_PermissionGroup:function(e){return T.isTreeType_UserPermission(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_DISTRIBUTE_PERMISSION},isFolder_WaitApplication:function(e){return T.isTreeType_UserPermission(e)&&T.isFolder(e)&&(e>>6&15)==E.FOLDERTYPE_WAIT_APPLICATION},isFile_DevFile:function(T){return(T>>6&15)==E.FILETYPE_IOTDEVICE},isFile_ProjectView:function(T){return(T>>6&15)==E.FILETYPE_PROJECTVIEW},isFile_Modeling:function(T){return(T>>6&15)==E.FILETYPE_MODELING},isFile_UserPer:function(T){return(T>>6&15)==E.FILETYPE_USERPER},isFile_userCenter:function(T){return(T>>6&15)==E.FILRTYPE_USERCENTER},isFileType_ModelCTFile:function(e){return T.isTreeType_ComponentModeling(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_CT&&T.isFile_Modeling(e)},isFileType_ModelDTFile:function(e){return T.isTreeType_ComponentModeling(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_DT&&T.isFile_Modeling(e)},isFileType_ModelAIMFile:function(e){return T.isTreeType_ComponentModeling(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_AIM&&T.isFile_Modeling(e)},isFileType_ModelGMFile:function(e){return T.isTreeType_ComponentModeling(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_GM&&T.isFile_Modeling(e)},isFileType_ModelCOUNTFile:function(e){return T.isTreeType_ComponentModeling(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_COUNT&&T.isFile_Modeling(e)},isFileType_DevAIFile:function(e){return T.isTreeType_ComponentModeling(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_AI},isFileType_PNFile:function(e){return T.isTreeType_ComponentModeling(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_PN},isFileType_DevDLFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_DL},isFileType_DevDHFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_DH},isFileType_DevMLFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_ML},isFileType_DevTCFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_TC},isFileType_DevCOUNTFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_DEV_COUNT},isFileType_DevBMFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_BM},isFileType_GLB_AIFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_GLB_AI},isFileType_GLB_DLFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_GLB_DL},isFileType_GLB_GMFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_GLB_GM},isFileType_GLB_MAPFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_GLB_MAP},isFileType_GLB_MAPFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.NODETYPE_GLB_3D},isFileType_PRO_DATATYPEFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_PRO_DATATYPE},isFileType_CTSTATUSFile:function(e){return T.isTreeType_IotPlatForm(e)&&T.isFiles(e)&&(e>>6&15)==E.FILETYPE_CTSTATUS},isFileType_UserPermission_WaitUserFile:function(e){return T.isTreeType_UserPermission(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_WAIT_APPLICATION_USER},isFileType_UserPermission_UserGroupFolder:function(e){return T.isTreeType_UserPermission(e)&&T.isFolder(e)&&(e>>6&15)==E.FOLDERTYPE_USERGROUP},isFileType_UserPermission_UserGroup:function(e){return T.isTreeType_UserPermission(e)&&T.isFiles(e)&&(e>>6&15)==E.FILETYPE_USERPER&&(e>>12&15)==E.FILETYPE_USERGROUP},isFileType_UserPermission_PerGroupFolder:function(e){return T.isTreeType_UserPermission(e)&&T.isFolder(e)&&(e>>6&15)==E.FOLDERTYPE_PERGROUP},isFileType_UserPermission_PerGroup:function(e){return T.isTreeType_UserPermission(e)&&T.isFiles(e)&&(e>>6&15)==E.FILETYPE_USERPER&&(e>>12&15)==E.FILETYPE_PERGROUP},isFileType_UserCenter_CONCERSPACEFile:function(e){return T.isTreeType_UserCenter(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_CONCERSPACE},isFileType_UserCenter_FINDLOGSFile:function(e){return T.isTreeType_UserCenter(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_FINDLOGS},isFileType_UserCenter_GLB_CONFIGFile:function(e){return T.isTreeType_UserCenter(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_GLB_CONFIG},isFileType_UserCenter_CREATESERVICEFile:function(e){return T.isTreeType_UserCenter(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_CREATESERVICE},isFileType_UserCenter_IBCCONFIGFile:function(e){return T.isTreeType_UserCenter(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_IOTBASICCONFIG},isFileType_usercenter_BUY:function(e){return T.isTreeType_UserCenter(e)&&T.isFiles(e)&&(e>>12&15)==E.FILETYPE_BUY}};return T}E.module("app.service").factory("TREETYPE",T),T.$inject=[]}(window.angular);