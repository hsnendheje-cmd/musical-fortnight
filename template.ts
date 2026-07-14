const CLICK_PCM_BASE64 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/f8AAAAAAwAAAAAA/f8DAAAAAAAAAP3/AwAAAAYA+v8DAP3/AwD6/xMABgAGAPb/EwDt//D/" +
    "/f8QAPb/AwANAP3/8P8DAPP/EwAAAP3/AwAAAGAAzf4DATYD4+sjCGk+xhSBjJ6P7Dr/f6AeAIAD2rZteSNaqYG/vQ4pFRb3hv6QFxMW7QPg/g0EQwJj+9b5Sv2K/nP9hv0j/xoAsP+t/wMAZgAgAPb/GgBaAEMAKgAKADoAKgAKABYAEAAWAAoAAwAWAB0AGgDz/xMA9v8AAAoADQADAO3/AwDt/wAAEAAqAP3/AAAAABoA9v8AAAMAIAD9//b/" +
    "6v8NAP3//f8WAAAAAwD6/w0A9v/j/wMA9v/6//3/+v/2/w0A8/8QAAMAEwDz/wAAEwANAPr/HQD9//r//f8NAP3/AwD9/wMA/f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
const CLICK_PCM_SAMPLES = 384;
const CLICK_PCM_RATE = 8000;
declare const Il2Cpp: any;
declare const XRNode: any;
declare const AnimalCompany: any;
declare const IIl2Cpp: any;
function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}
interface ButtonInfoConfig {
    buttonText: string;
    method?: () => void;
    enableMethod?: () => void;
    disableMethod?: () => void;
    isTogglable?: boolean;
    toolTip?: string;
    stepDown?: ButtonInfo;
    stepUp?: ButtonInfo;
}
let nextButtonActivationId = 0;
class ButtonInfo {
    readonly activationId: string;
    buttonText: string;
    method?: () => void;
    enableMethod?: () => void;
    disableMethod?: () => void;
    isTogglable: boolean;
    toolTip: string;
    enabled: boolean = false;
    stepDown?: ButtonInfo;
    stepUp?: ButtonInfo;
    constructor(config: ButtonInfoConfig) {
        this.activationId = "syte_button_" + nextButtonActivationId++;
        this.buttonText = config.buttonText;
        this.method = config.method;
        this.enableMethod = config.enableMethod;
        this.disableMethod = config.disableMethod;
        this.isTogglable = config.isTogglable || false;
        this.toolTip = config.toolTip || "";
        this.stepDown = config.stepDown;
        this.stepUp = config.stepUp;
    }
}
Il2Cpp.$config.exports = {
    il2cpp_init: () => Il2Cpp.module.findExportByName("XeIEvYU_Q_T"),
    il2cpp_init_utf16: () => Il2Cpp.module.findExportByName("ZXUryBlYxZN"),
    il2cpp_shutdown: () => Il2Cpp.module.findExportByName("_etzuLaYwrk"),
    il2cpp_set_config_dir: () => Il2Cpp.module.findExportByName("Ft_utQKXNou"),
    il2cpp_set_data_dir: () => Il2Cpp.module.findExportByName("MAZnYewZkIq"),
    il2cpp_set_temp_dir: () => Il2Cpp.module.findExportByName("FIUjIomSINM"),
    il2cpp_set_commandline_arguments: () => Il2Cpp.module.findExportByName("hpesgi__hN_"),
    il2cpp_set_commandline_arguments_utf16: () => Il2Cpp.module.findExportByName("zEGUtjqldbd"),
    il2cpp_set_config_utf16: () => Il2Cpp.module.findExportByName("uykRxzTRRuW"),
    il2cpp_set_config: () => Il2Cpp.module.findExportByName("hFnuOKBFhaP"),
    il2cpp_set_memory_callbacks: () => Il2Cpp.module.findExportByName("GjkLbrlCyXx"),
    il2cpp_memory_pool_set_region_size: () => Il2Cpp.module.findExportByName("BUKQchFcXKD"),
    il2cpp_memory_pool_get_region_size: () => Il2Cpp.module.findExportByName("owIThvzucAL"),
    il2cpp_get_corlib: () => Il2Cpp.module.findExportByName("Bw_TTa_tHFr"),
    il2cpp_add_internal_call: () => Il2Cpp.module.findExportByName("BytdxJOskMz"),
    il2cpp_resolve_icall: () => Il2Cpp.module.findExportByName("umSEfDcwxcE"),
    il2cpp_alloc: () => Il2Cpp.module.findExportByName("a__ZZYIkqdm"),
    il2cpp_free: () => Il2Cpp.module.findExportByName("kJnJsYwAsCC"),
    il2cpp_array_class_get: () => Il2Cpp.module.findExportByName("jIOVDeJsFsH"),
    il2cpp_array_length: () => Il2Cpp.module.findExportByName("JwkALyTSbkH"),
    il2cpp_array_get_byte_length: () => Il2Cpp.module.findExportByName("tWZbdd_QZci"),
    il2cpp_array_new: () => Il2Cpp.module.findExportByName("KnNmXYnHHZu"),
    il2cpp_array_new_specific: () => Il2Cpp.module.findExportByName("cmnqmUtgohV"),
    il2cpp_array_new_full: () => Il2Cpp.module.findExportByName("KDgnPEuGhAk"),
    il2cpp_bounded_array_class_get: () => Il2Cpp.module.findExportByName("HIolBGDTZGz"),
    il2cpp_array_element_size: () => Il2Cpp.module.findExportByName("VNcOjkSZhcp"),
    il2cpp_assembly_get_image: () => Il2Cpp.module.findExportByName("hDkhLRLgeew"),
    il2cpp_class_for_each: () => Il2Cpp.module.findExportByName("sUjTAqLorFX"),
    il2cpp_class_enum_basetype: () => Il2Cpp.module.findExportByName("oBSTPOVjPdZ"),
    il2cpp_class_is_inited: () => Il2Cpp.module.findExportByName("NrDZFwekKkq"),
    il2cpp_class_is_generic: () => Il2Cpp.module.findExportByName("JfcHexutOd_"),
    il2cpp_class_is_inflated: () => Il2Cpp.module.findExportByName("asOngMWGLGu"),
    il2cpp_class_is_assignable_from: () => Il2Cpp.module.findExportByName("ZUtVpAqalCT"),
    il2cpp_class_is_subclass_of: () => Il2Cpp.module.findExportByName("OClSjwnkuWm"),
    il2cpp_class_has_parent: () => Il2Cpp.module.findExportByName("NNWmOlFjnPU"),
    il2cpp_class_from_il2cpp_type: () => Il2Cpp.module.findExportByName("_zxHRRECNGP"),
    il2cpp_class_from_name: () => Il2Cpp.module.findExportByName("KkKxDTxPbgO"),
    il2cpp_class_from_system_type: () => Il2Cpp.module.findExportByName("sYEcXvwSZnT"),
    il2cpp_class_get_element_class: () => Il2Cpp.module.findExportByName("SZwYcHULHOb"),
    il2cpp_class_get_events: () => Il2Cpp.module.findExportByName("hPxNZTygjAM"),
    il2cpp_class_get_fields: () => Il2Cpp.module.findExportByName("qVsEoqeCpRW"),
    il2cpp_class_get_nested_types: () => Il2Cpp.module.findExportByName("PIfRzEidDjI"),
    il2cpp_class_get_interfaces: () => Il2Cpp.module.findExportByName("_UFsnF_KWhR"),
    il2cpp_class_get_properties: () => Il2Cpp.module.findExportByName("qYiVZwrnqdb"),
    il2cpp_class_get_property_from_name: () => Il2Cpp.module.findExportByName("PIPpruQKFmW"),
    il2cpp_class_get_field_from_name: () => Il2Cpp.module.findExportByName("vHKBHgJnpUH"),
    il2cpp_class_get_methods: () => Il2Cpp.module.findExportByName("VGQtKubBxOp"),
    il2cpp_class_get_method_from_name: () => Il2Cpp.module.findExportByName("fXGMKYGHlxH"),
    il2cpp_class_get_name: () => Il2Cpp.module.findExportByName("ZUznTccvNSU"),
    il2cpp_type_get_name_chunked: () => Il2Cpp.module.findExportByName("jRuBndzkBPc"),
    il2cpp_class_get_namespace: () => Il2Cpp.module.findExportByName("xVhzpuXPbJB"),
    il2cpp_class_get_parent: () => Il2Cpp.module.findExportByName("nBnUsWmapuD"),
    il2cpp_class_get_declaring_type: () => Il2Cpp.module.findExportByName("mFGbbfOpERO"),
    il2cpp_class_instance_size: () => Il2Cpp.module.findExportByName("tXPAkIbhUAK"),
    il2cpp_class_num_fields: () => Il2Cpp.module.findExportByName("eBrECuvoxBM"),
    il2cpp_class_is_valuetype: () => Il2Cpp.module.findExportByName("KHHNbePjUWp"),
    il2cpp_class_value_size: () => Il2Cpp.module.findExportByName("FsxNwGbVSrG"),
    il2cpp_class_is_blittable: () => Il2Cpp.module.findExportByName("WHumMatenwf"),
    il2cpp_class_get_flags: () => Il2Cpp.module.findExportByName("gNdzaaqAQmV"),
    il2cpp_class_is_abstract: () => Il2Cpp.module.findExportByName("dbzMKmvXyDq"),
    il2cpp_class_is_interface: () => Il2Cpp.module.findExportByName("QqRjYa_mENJ"),
    il2cpp_class_array_element_size: () => Il2Cpp.module.findExportByName("zqAzzFAGKNQ"),
    il2cpp_class_from_type: () => Il2Cpp.module.findExportByName("FYxZrVwXBpO"),
    il2cpp_class_get_type: () => Il2Cpp.module.findExportByName("SSoScJDDnCl"),
    il2cpp_class_get_type_token: () => Il2Cpp.module.findExportByName("rNyXgYmC_fo"),
    il2cpp_class_has_attribute: () => Il2Cpp.module.findExportByName("SthwyExcMwN"),
    il2cpp_class_has_references: () => Il2Cpp.module.findExportByName("NqOrmWBywsy"),
    il2cpp_class_is_enum: () => Il2Cpp.module.findExportByName("yLyrjeJbt_Y"),
    il2cpp_class_get_image: () => Il2Cpp.module.findExportByName("VYycjuVUBWP"),
    il2cpp_class_get_assemblyname: () => Il2Cpp.module.findExportByName("_LCEmnsTrR_"),
    il2cpp_class_get_rank: () => Il2Cpp.module.findExportByName("mFbJBbNarqw"),
    il2cpp_class_get_data_size: () => Il2Cpp.module.findExportByName("ZRaAoYiNnvu"),
    il2cpp_class_get_static_field_data: () => Il2Cpp.module.findExportByName("KcNbcYfgIDG"),
    il2cpp_stats_dump_to_file: () => Il2Cpp.module.findExportByName("pNaMzRfxnus"),
    il2cpp_stats_get_value: () => Il2Cpp.module.findExportByName("VqnjdgaNmxT"),
    il2cpp_domain_get: () => Il2Cpp.module.findExportByName("wCLzObRXOSu"),
    il2cpp_domain_assembly_open: () => Il2Cpp.module.findExportByName("GyJpmjSwVNI"),
    il2cpp_domain_get_assemblies: () => Il2Cpp.module.findExportByName("QCsQNlhfIbp"),
    il2cpp_raise_exception: () => Il2Cpp.module.findExportByName("IgxGjudgxtG"),
    il2cpp_exception_from_name_msg: () => Il2Cpp.module.findExportByName("lVSphMgjuCU"),
    il2cpp_get_exception_argument_null: () => Il2Cpp.module.findExportByName("IhROfWquiUL"),
    il2cpp_format_exception: () => Il2Cpp.module.findExportByName("XnctowhkkqQ"),
    il2cpp_format_stack_trace: () => Il2Cpp.module.findExportByName("CyfcENSQrJe"),
    il2cpp_unhandled_exception: () => Il2Cpp.module.findExportByName("tJkNhVJkEDk"),
    il2cpp_native_stack_trace: () => Il2Cpp.module.findExportByName("weVEbeziheJ"),
    il2cpp_field_get_flags: () => Il2Cpp.module.findExportByName("GsFilLMjSlH"),
    il2cpp_field_get_from_reflection: () => Il2Cpp.module.findExportByName("UQrJEMeoaJR"),
    il2cpp_field_get_name: () => Il2Cpp.module.findExportByName("LNIPAuaVlXr"),
    il2cpp_field_get_parent: () => Il2Cpp.module.findExportByName("OJnoeEQAuZa"),
    il2cpp_field_get_object: () => Il2Cpp.module.findExportByName("WlInKxgkjHE"),
    il2cpp_field_get_offset: () => Il2Cpp.module.findExportByName("FIaZytGf_Pq"),
    il2cpp_field_get_type: () => Il2Cpp.module.findExportByName("tOOXyoNKpxy"),
    il2cpp_field_get_value: () => Il2Cpp.module.findExportByName("gwLLbrWrRHB"),
    il2cpp_field_get_value_object: () => Il2Cpp.module.findExportByName("HyEdigtbYTs"),
    il2cpp_field_has_attribute: () => Il2Cpp.module.findExportByName("KPGcoDhdbLB"),
    il2cpp_field_set_value: () => Il2Cpp.module.findExportByName("JYnTxTXGvbu"),
    il2cpp_field_static_get_value: () => Il2Cpp.module.findExportByName("jwrUGCfyDLb"),
    il2cpp_field_static_set_value: () => Il2Cpp.module.findExportByName("tDfRhPCONuO"),
    il2cpp_field_set_value_object: () => Il2Cpp.module.findExportByName("tCVPPpJfpwM"),
    il2cpp_field_is_literal: () => Il2Cpp.module.findExportByName("ICC_brjzTiR"),
    il2cpp_gc_collect: () => Il2Cpp.module.findExportByName("nqEGCvlnvRW"),
    il2cpp_gc_collect_a_little: () => Il2Cpp.module.findExportByName("MyYzEpJOxFW"),
    il2cpp_gc_start_incremental_collection: () => Il2Cpp.module.findExportByName("tiYlroplxWf"),
    il2cpp_gc_disable: () => Il2Cpp.module.findExportByName("FtihVIqvonR"),
    il2cpp_gc_enable: () => Il2Cpp.module.findExportByName("JWPnuBlBfkx"),
    il2cpp_gc_is_disabled: () => Il2Cpp.module.findExportByName("bxgPbJlloYj"),
    il2cpp_gc_set_mode: () => Il2Cpp.module.findExportByName("kTJlKbZmmqg"),
    il2cpp_gc_get_max_time_slice_ns: () => Il2Cpp.module.findExportByName("STrDMpakosz"),
    il2cpp_gc_set_max_time_slice_ns: () => Il2Cpp.module.findExportByName("POvURsUPrYQ"),
    il2cpp_gc_is_incremental: () => Il2Cpp.module.findExportByName("cYxcBczPiOD"),
    il2cpp_gc_get_used_size: () => Il2Cpp.module.findExportByName("VApnsUVEQSQ"),
    il2cpp_gc_get_heap_size: () => Il2Cpp.module.findExportByName("UaxdGVAYMel"),
    il2cpp_gc_wbarrier_set_field: () => Il2Cpp.module.findExportByName("gIVPJAxGafE"),
    il2cpp_gc_has_strict_wbarriers: () => Il2Cpp.module.findExportByName("_XyOqBqYvYi"),
    il2cpp_gc_set_external_allocation_tracker: () => Il2Cpp.module.findExportByName("iUwfOBHNMAj"),
    il2cpp_gc_set_external_wbarrier_tracker: () => Il2Cpp.module.findExportByName("tIU_rTQlQQM"),
    il2cpp_gc_foreach_heap: () => Il2Cpp.module.findExportByName("zPAXAnxWkxU"),
    il2cpp_stop_gc_world: () => Il2Cpp.module.findExportByName("RJedOIBOlGC"),
    il2cpp_start_gc_world: () => Il2Cpp.module.findExportByName("kdmOKTuwBan"),
    il2cpp_gc_alloc_fixed: () => Il2Cpp.module.findExportByName("izHgKjOHQhc"),
    il2cpp_gc_free_fixed: () => Il2Cpp.module.findExportByName("HODkuWeIjSK"),
    il2cpp_gchandle_new: () => Il2Cpp.module.findExportByName("nbfMxz_J_NG"),
    il2cpp_gchandle_new_weakref: () => Il2Cpp.module.findExportByName("EkCPE_pvPYF"),
    il2cpp_gchandle_get_target: () => Il2Cpp.module.findExportByName("ciGzpVWQcFo"),
    il2cpp_gchandle_free: () => Il2Cpp.module.findExportByName("OeaoqwyRQBJ"),
    il2cpp_gchandle_foreach_get_target: () => Il2Cpp.module.findExportByName("bnpcACBFfB_"),
    il2cpp_object_header_size: () => Il2Cpp.module.findExportByName("ppyIdMwikXD"),
    il2cpp_array_object_header_size: () => Il2Cpp.module.findExportByName("PHNmGxOyEQL"),
    il2cpp_offset_of_array_length_in_array_object_header: () => Il2Cpp.module.findExportByName("oNHAyRzlkRJ"),
    il2cpp_offset_of_array_bounds_in_array_object_header: () => Il2Cpp.module.findExportByName("ePhEuYADqsK"),
    il2cpp_allocation_granularity: () => Il2Cpp.module.findExportByName("zfdUDCtHpli"),
    il2cpp_unity_liveness_allocate_struct: () => Il2Cpp.module.findExportByName("SmJsnzVScEd"),
    il2cpp_unity_liveness_calculation_from_root: () => Il2Cpp.module.findExportByName("zF_zhGgVmgn"),
    il2cpp_unity_liveness_calculation_from_statics: () => Il2Cpp.module.findExportByName("zoWpcfEZngn"),
    il2cpp_unity_liveness_finalize: () => Il2Cpp.module.findExportByName("gYybXHoYOjs"),
    il2cpp_unity_liveness_free_struct: () => Il2Cpp.module.findExportByName("XGWuUHEwpuT"),
    il2cpp_method_get_return_type: () => Il2Cpp.module.findExportByName("syBOtpohNLU"),
    il2cpp_method_get_declaring_type: () => Il2Cpp.module.findExportByName("tDoSHrb_keM"),
    il2cpp_method_get_name: () => Il2Cpp.module.findExportByName("oJlBweHtmlI"),
    il2cpp_method_get_from_reflection: () => Il2Cpp.module.findExportByName("PhFjhcwplsG"),
    il2cpp_method_get_object: () => Il2Cpp.module.findExportByName("BRrZgVFozno"),
    il2cpp_method_is_generic: () => Il2Cpp.module.findExportByName("KgzLZOfNqJk"),
    il2cpp_method_is_inflated: () => Il2Cpp.module.findExportByName("DZQovwxTsjM"),
    il2cpp_method_is_instance: () => Il2Cpp.module.findExportByName("HTvhDkieeEc"),
    il2cpp_method_get_param_count: () => Il2Cpp.module.findExportByName("zIuNXlaoiuq"),
    il2cpp_method_get_param: () => Il2Cpp.module.findExportByName("HTFDrhjhYVX"),
    il2cpp_method_get_class: () => Il2Cpp.module.findExportByName("EEfpeMdmGDe"),
    il2cpp_method_has_attribute: () => Il2Cpp.module.findExportByName("QPiNihDLeTk"),
    il2cpp_method_get_flags: () => Il2Cpp.module.findExportByName("bkrOvCHGbLS"),
    il2cpp_method_get_token: () => Il2Cpp.module.findExportByName("GVQDAEBnCrB"),
    il2cpp_method_get_param_name: () => Il2Cpp.module.findExportByName("yrtqWbYIzrL"),
    il2cpp_property_get_flags: () => Il2Cpp.module.findExportByName("rLscAecGqLJ"),
    il2cpp_property_get_get_method: () => Il2Cpp.module.findExportByName("VcpMncsDvGq"),
    il2cpp_property_get_set_method: () => Il2Cpp.module.findExportByName("ldxHPLjIwXG"),
    il2cpp_property_get_name: () => Il2Cpp.module.findExportByName("oHigrBcfGqH"),
    il2cpp_property_get_parent: () => Il2Cpp.module.findExportByName("WfsmUlJFymF"),
    il2cpp_object_get_class: () => Il2Cpp.module.findExportByName("rpSOwTJXkki"),
    il2cpp_object_get_size: () => Il2Cpp.module.findExportByName("VojbsxhKRQB"),
    il2cpp_object_get_virtual_method: () => Il2Cpp.module.findExportByName("plvQareRfmV"),
    il2cpp_object_new: () => Il2Cpp.module.findExportByName("RpTgKbnjDtW"),
    il2cpp_object_unbox: () => Il2Cpp.module.findExportByName("UWeZOKOPPkv"),
    il2cpp_value_box: () => Il2Cpp.module.findExportByName("ZjWyghUqhiE"),
    il2cpp_monitor_enter: () => Il2Cpp.module.findExportByName("MiTVUeICXNt"),
    il2cpp_monitor_try_enter: () => Il2Cpp.module.findExportByName("LGhMv_Pqjnu"),
    il2cpp_monitor_exit: () => Il2Cpp.module.findExportByName("ijHbQiTGCkd"),
    il2cpp_monitor_pulse: () => Il2Cpp.module.findExportByName("hHrrFdyWRJo"),
    il2cpp_monitor_pulse_all: () => Il2Cpp.module.findExportByName("oLVdFBjFPhJ"),
    il2cpp_monitor_wait: () => Il2Cpp.module.findExportByName("PSXucNGRnUh"),
    il2cpp_monitor_try_wait: () => Il2Cpp.module.findExportByName("oSloJpjMWmN"),
    il2cpp_runtime_invoke: () => Il2Cpp.module.findExportByName("LDEAhZIDWeu"),
    il2cpp_runtime_invoke_convert_args: () => Il2Cpp.module.findExportByName("UwzdcqDrsZV"),
    il2cpp_runtime_class_init: () => Il2Cpp.module.findExportByName("IYlkxULSLXV"),
    il2cpp_runtime_object_init: () => Il2Cpp.module.findExportByName("LYouSPFTqAi"),
    il2cpp_runtime_object_init_exception: () => Il2Cpp.module.findExportByName("mHezQPQlJzC"),
    il2cpp_runtime_unhandled_exception_policy_set: () => Il2Cpp.module.findExportByName("ihFJRxOVYVY"),
    il2cpp_string_length: () => Il2Cpp.module.findExportByName("yeMUiRwzybC"),
    il2cpp_string_chars: () => Il2Cpp.module.findExportByName("BwSHYWFLzWQ"),
    il2cpp_string_new: () => Il2Cpp.module.findExportByName("IxGvakP_VJQ"),
    il2cpp_string_new_len: () => Il2Cpp.module.findExportByName("HpSiENSvbvZ"),
    il2cpp_string_new_utf16: () => Il2Cpp.module.findExportByName("Of_JOTLAlTM"),
    il2cpp_string_new_wrapper: () => Il2Cpp.module.findExportByName("QdHoJSEyCNx"),
    il2cpp_string_intern: () => Il2Cpp.module.findExportByName("KXZuZZtHUmz"),
    il2cpp_string_is_interned: () => Il2Cpp.module.findExportByName("kVeAtofcGze"),
    il2cpp_thread_current: () => Il2Cpp.module.findExportByName("NnEeZEtErqp"),
    il2cpp_thread_attach: () => Il2Cpp.module.findExportByName("SnLfphasdXg"),
    il2cpp_thread_detach: () => Il2Cpp.module.findExportByName("cQJzTJEFmyZ"),
    il2cpp_is_vm_thread: () => Il2Cpp.module.findExportByName("SHjtKOlbiMD"),
    il2cpp_current_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("wSQpcUSZpXd"),
    il2cpp_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("jCDPSPgzlvF"),
    il2cpp_current_thread_get_top_frame: () => Il2Cpp.module.findExportByName("IaKRfjLjydn"),
    il2cpp_thread_get_top_frame: () => Il2Cpp.module.findExportByName("RvxFZZETLka"),
    il2cpp_current_thread_get_frame_at: () => Il2Cpp.module.findExportByName("ycwzTMwJ_WE"),
    il2cpp_thread_get_frame_at: () => Il2Cpp.module.findExportByName("BdVxjDIUdvs"),
    il2cpp_current_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("hTMOfelvgo_"),
    il2cpp_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("XesHuEpovIR"),
    il2cpp_override_stack_backtrace: () => Il2Cpp.module.findExportByName("xqWhPfEWVIb"),
    il2cpp_type_get_object: () => Il2Cpp.module.findExportByName("xteSzUoN_or"),
    il2cpp_type_get_type: () => Il2Cpp.module.findExportByName("eosEmuWoInW"),
    il2cpp_type_get_class_or_element_class: () => Il2Cpp.module.findExportByName("unfmFZnPLee"),
    il2cpp_type_get_name: () => Il2Cpp.module.findExportByName("y_wJeRGuxJQ"),
    il2cpp_type_is_byref: () => Il2Cpp.module.findExportByName("HQRUoOdZZc_"),
    il2cpp_type_get_attrs: () => Il2Cpp.module.findExportByName("dXzYBIwhgIX"),
    il2cpp_type_equals: () => Il2Cpp.module.findExportByName("V_nbvNRQoxm"),
    il2cpp_type_get_assembly_qualified_name: () => Il2Cpp.module.findExportByName("JYDSmDgRFJT"),
    il2cpp_type_get_reflection_name: () => Il2Cpp.module.findExportByName("EzTpEcvaPUy"),
    il2cpp_type_is_static: () => Il2Cpp.module.findExportByName("ImhekgAdnxt"),
    il2cpp_type_is_pointer_type: () => Il2Cpp.module.findExportByName("Ng_MIeEZJCo"),
    il2cpp_image_get_assembly: () => Il2Cpp.module.findExportByName("vDvGKIOwhKV"),
    il2cpp_image_get_name: () => Il2Cpp.module.findExportByName("rexsCibGJvJ"),
    il2cpp_image_get_filename: () => Il2Cpp.module.findExportByName("iHAHrsyCbXD"),
    il2cpp_image_get_entry_point: () => Il2Cpp.module.findExportByName("VWlUAYAMOKf"),
    il2cpp_image_get_class_count: () => Il2Cpp.module.findExportByName("kYxxbTKJchn"),
    il2cpp_image_get_class: () => Il2Cpp.module.findExportByName("ByDkBdHfkdY"),
    il2cpp_capture_memory_snapshot: () => Il2Cpp.module.findExportByName("bicMkCZWZVT"),
    il2cpp_free_captured_memory_snapshot: () => Il2Cpp.module.findExportByName("AYEkIDyvYVv"),
    il2cpp_set_find_plugin_callback: () => Il2Cpp.module.findExportByName("zvsTRtWabbi"),
    il2cpp_register_log_callback: () => Il2Cpp.module.findExportByName("tOukzykCnDq"),
    il2cpp_debugger_set_agent_options: () => Il2Cpp.module.findExportByName("CjODpWAuMrW"),
    il2cpp_is_debugger_attached: () => Il2Cpp.module.findExportByName("jkGRYqBUehG"),
    il2cpp_register_debugger_agent_transport: () => Il2Cpp.module.findExportByName("EMtuolDfoCq"),
    il2cpp_debug_foreach_method: () => Il2Cpp.module.findExportByName("_VzOengrMGP"),
    il2cpp_debug_get_method_info: () => Il2Cpp.module.findExportByName("eRRwzDNnJtr"),
    il2cpp_unity_install_unitytls_interface: () => Il2Cpp.module.findExportByName("vQEQZuIxYhy"),
    il2cpp_custom_attrs_from_class: () => Il2Cpp.module.findExportByName("qecaTUmHZor"),
    il2cpp_custom_attrs_from_method: () => Il2Cpp.module.findExportByName("BTwfnLPjZuq"),
    il2cpp_custom_attrs_from_field: () => Il2Cpp.module.findExportByName("AkOztEXrTRH"),
    il2cpp_custom_attrs_get_attr: () => Il2Cpp.module.findExportByName("tlHYkQpnpAJ"),
    il2cpp_custom_attrs_has_attr: () => Il2Cpp.module.findExportByName("XDscwuUiQaY"),
    il2cpp_custom_attrs_construct: () => Il2Cpp.module.findExportByName("U_sraDcqIaP"),
    il2cpp_custom_attrs_free: () => Il2Cpp.module.findExportByName("_ofGbowtzHs"),
    il2cpp_class_set_userdata: () => Il2Cpp.module.findExportByName("qOGpWmKGrmx"),
    il2cpp_class_get_userdata_offset: () => Il2Cpp.module.findExportByName("epYyNYwXmZr"),
    il2cpp_set_default_thread_affinity: () => Il2Cpp.module.findExportByName("GEoReqSnceG"),
    il2cpp_unity_set_android_network_up_state_func: () => Il2Cpp.module.findExportByName("MYHdLqQMzYK"),
};
function n5RemapBridgeExports() {
    const bridgeNames = {
        il2cpp_init: "ITAtHOcJERU",
        il2cpp_init_utf16: "BlSILClfTep",
        il2cpp_shutdown: "jCVEUrxpedn",
        il2cpp_set_config_dir: "JryofZSebey",
        il2cpp_set_data_dir: "cgaouadRzLD",
        il2cpp_set_temp_dir: "HdRIGbVLnGY",
        il2cpp_set_commandline_arguments: "saQPIPNVdZU",
        il2cpp_set_commandline_arguments_utf16: "XvXKfb_yQaZ",
        il2cpp_set_config_utf16: "j_LI_KVfkVR",
        il2cpp_set_config: "zJjLhNYNYiI",
        il2cpp_set_memory_callbacks: "hEJfNbmJJxm",
        il2cpp_memory_pool_set_region_size: "ayTpxtziFgv",
        il2cpp_memory_pool_get_region_size: "XBJCaQzTRzd",
        il2cpp_get_corlib: "W_EZfNinobw",
        il2cpp_add_internal_call: "zqFIKBCzVXG",
        il2cpp_resolve_icall: "VDohxPcfmOo",
        il2cpp_alloc: "nbgkwNMFMWS",
        il2cpp_free: "NKdwYSJKuWa",
        il2cpp_array_class_get: "uGAKdfVXUYF",
        il2cpp_array_length: "zkLVaBozXmK",
        il2cpp_array_get_byte_length: "EzrhlBEPUnt",
        il2cpp_array_new: "uyODkVCPbB_",
        il2cpp_array_new_specific: "DzDXafEZdYY",
        il2cpp_array_new_full: "vXjAPzjdlRx",
        il2cpp_bounded_array_class_get: "AV_RyTzfUjq",
        il2cpp_array_element_size: "KHIS_rBpjOx",
        il2cpp_assembly_get_image: "jSgUUtKmzjJ",
        il2cpp_class_for_each: "qTaypczsgNu",
        il2cpp_class_enum_basetype: "xCrKFJVatRx",
        il2cpp_class_is_inited: "gohwXWMoVsP",
        il2cpp_class_is_generic: "YAnWWaaSyxY",
        il2cpp_class_is_inflated: "BsaDwKfCNUz",
        il2cpp_class_is_assignable_from: "YUSKnDCkyvb",
        il2cpp_class_is_subclass_of: "XzXAfzwGxpu",
        il2cpp_class_has_parent: "JyPTPPoncKG",
        il2cpp_class_from_il2cpp_type: "wNBNvEBtQlW",
        il2cpp_class_from_name: "FyvyMhNLRDJ",
        il2cpp_class_from_system_type: "nAMbSbUGKXf",
        il2cpp_class_get_element_class: "bXWTIbdsnKM",
        il2cpp_class_get_events: "BEcsOEyuyjx",
        il2cpp_class_get_fields: "ZiMTlEgMOse",
        il2cpp_class_get_nested_types: "tqxCIJuCNxS",
        il2cpp_class_get_interfaces: "bSipThwVkzk",
        il2cpp_class_get_properties: "pFBYzvaneKA",
        il2cpp_class_get_property_from_name: "hCSUmsEHcYJ",
        il2cpp_class_get_field_from_name: "JxphAhsacRP",
        il2cpp_class_get_methods: "rkYWCsMMSRJ",
        il2cpp_class_get_method_from_name: "KehkDYpuqtm",
        il2cpp_class_get_name: "BKyvutYOQWy",
        il2cpp_type_get_name_chunked: "WVd_wXShTtc",
        il2cpp_class_get_namespace: "jUIxtjpaEgZ",
        il2cpp_class_get_parent: "EpBIFuvgYkH",
        il2cpp_class_get_declaring_type: "blRcfaOEkdA",
        il2cpp_class_instance_size: "vGzmvsgxiLa",
        il2cpp_class_num_fields: "lZlznRxDwlE",
        il2cpp_class_is_valuetype: "_yg__YmkhDx",
        il2cpp_class_value_size: "PELMfsGlYBZ",
        il2cpp_class_is_blittable: "wsSMQyuNKUT",
        il2cpp_class_get_flags: "nZLTJNkZFfG",
        il2cpp_class_is_abstract: "niLRakrIsUc",
        il2cpp_class_is_interface: "pHHrkHlFFxT",
        il2cpp_class_array_element_size: "imPLRdorAxR",
        il2cpp_class_from_type: "DqxnMROBhFx",
        il2cpp_class_get_type: "NzhKMx_zMAJ",
        il2cpp_class_get_type_token: "HyxXnCDkecx",
        il2cpp_class_has_attribute: "JeSnHuExdXB",
        il2cpp_class_has_references: "EkalqYpjVcc",
        il2cpp_class_is_enum: "ZaZWOL_XAAG",
        il2cpp_class_get_image: "ULpdDBUoYyf",
        il2cpp_class_get_assemblyname: "CkeihoBVqsA",
        il2cpp_class_get_rank: "_pDSOzAxRxU",
        il2cpp_class_get_data_size: "MyS_hpoaRFP",
        il2cpp_class_get_static_field_data: "BTDPpKx_xsF",
        il2cpp_stats_dump_to_file: "xGrkIVbsYvQ",
        il2cpp_stats_get_value: "TNFyIMmnJYn",
        il2cpp_domain_get: "QXGKPSTsshv",
        il2cpp_domain_assembly_open: "CDpeHBKPTjI",
        il2cpp_domain_get_assemblies: "HvmuUYxcjJQ",
        il2cpp_raise_exception: "OpifnxBSIGQ",
        il2cpp_exception_from_name_msg: "zlpZvaBeFzF",
        il2cpp_get_exception_argument_null: "VRbZnnSLRxy",
        il2cpp_format_exception: "AUGxm_hdVby",
        il2cpp_format_stack_trace: "gTXVUdSQKbL",
        il2cpp_unhandled_exception: "BjOGxXDEyfb",
        il2cpp_native_stack_trace: "EEHjoOaDjxY",
        il2cpp_field_get_flags: "sPTtiWyVLvA",
        il2cpp_field_get_from_reflection: "KeLPjHSGaBe",
        il2cpp_field_get_name: "cFFMPsnQkYN",
        il2cpp_field_get_parent: "tTAKxvovSsn",
        il2cpp_field_get_object: "MRdaMwgCpuK",
        il2cpp_field_get_offset: "LHgbcouwEdH",
        il2cpp_field_get_type: "vTjLsZNYsgm",
        il2cpp_field_get_value: "WpIpaCLVtoX",
        il2cpp_field_get_value_object: "FmTZgtZLpcx",
        il2cpp_field_has_attribute: "BmRPqycjkIA",
        il2cpp_field_set_value: "hYFOwqDwWmw",
        il2cpp_field_static_get_value: "SKmtNUnQodL",
        il2cpp_field_static_set_value: "CDXcwprKcDQ",
        il2cpp_field_set_value_object: "ELfQKYxtWjA",
        il2cpp_field_is_literal: "kofUhyXWhsx",
        il2cpp_gc_collect: "rxMnIkmwwfr",
        il2cpp_gc_collect_a_little: "SwDfg_deZSI",
        il2cpp_gc_start_incremental_collection: "G_fzrBpwCAR",
        il2cpp_gc_disable: "wDInLGLkAey",
        il2cpp_gc_enable: "l_zrrZmryYB",
        il2cpp_gc_is_disabled: "YJSHDwxYChD",
        il2cpp_gc_set_mode: "EuiIVss_doF",
        il2cpp_gc_get_max_time_slice_ns: "cmIWAzRixkW",
        il2cpp_gc_set_max_time_slice_ns: "uztINxPKuvv",
        il2cpp_gc_is_incremental: "EThwCrxZBrf",
        il2cpp_gc_get_used_size: "EUxUI_FEuYV",
        il2cpp_gc_get_heap_size: "Jh__gmjiyRU",
        il2cpp_gc_wbarrier_set_field: "ZBkRwmxBszr",
        il2cpp_gc_has_strict_wbarriers: "iGsugrYeSiG",
        il2cpp_gc_set_external_allocation_tracker: "MlekwcLdkV_",
        il2cpp_gc_set_external_wbarrier_tracker: "KcJlGhmUlKj",
        il2cpp_gc_foreach_heap: "CpPYcguYHdT",
        il2cpp_stop_gc_world: "daGRpZwGJWi",
        il2cpp_start_gc_world: "bamnjNlEeUN",
        il2cpp_gc_alloc_fixed: "DvWJRvbEHSE",
        il2cpp_gc_free_fixed: "SqPTWHPOedy",
        il2cpp_gchandle_new: "XWHBgdaTbpZ",
        il2cpp_gchandle_new_weakref: "rLGufLFxvaK",
        il2cpp_gchandle_get_target: "nmuHCRJdURA",
        il2cpp_gchandle_free: "vhbSCe_tXHi",
        il2cpp_gchandle_foreach_get_target: "h_myBtxOvDN",
        il2cpp_object_header_size: "ZUdwTNNUuRH",
        il2cpp_array_object_header_size: "YmEHeZNSJMo",
        il2cpp_offset_of_array_length_in_array_object_header: "paWBeqlyuHj",
        il2cpp_offset_of_array_bounds_in_array_object_header: "kOUHuocCvJW",
        il2cpp_allocation_granularity: "R_FAxsUMiEw",
        il2cpp_unity_liveness_allocate_struct: "xGozcIPTgvq",
        il2cpp_unity_liveness_calculation_from_root: "jyztBfwKdVu",
        il2cpp_unity_liveness_calculation_from_statics: "mVdIOVxZehR",
        il2cpp_unity_liveness_finalize: "cD_AxP_DLxj",
        il2cpp_unity_liveness_free_struct: "YCaFJbsWOQL",
        il2cpp_method_get_return_type: "wNWoU_rKrWK",
        il2cpp_method_get_declaring_type: "JxdNRDLRSCZ",
        il2cpp_method_get_name: "ayDZwIpRwyB",
        il2cpp_method_get_from_reflection: "uzMqolwNNHg",
        il2cpp_method_get_object: "QJLdHBQonMo",
        il2cpp_method_is_generic: "McrI_RbkHcj",
        il2cpp_method_is_inflated: "PVjShiOvsxt",
        il2cpp_method_is_instance: "uXbnEwTdviU",
        il2cpp_method_get_param_count: "ZBshdAOKZYu",
        il2cpp_method_get_param: "neTyOIDNdQt",
        il2cpp_method_get_class: "uBl_utkxpVH",
        il2cpp_method_has_attribute: "gWAUjWoURJM",
        il2cpp_method_get_flags: "QtneASmrREC",
        il2cpp_method_get_token: "lgVrRBIYKqQ",
        il2cpp_method_get_param_name: "dFHZqoystRU",
        il2cpp_property_get_flags: "OJuYYtUNNGv",
        il2cpp_property_get_get_method: "Eg_ruGcFlCn",
        il2cpp_property_get_set_method: "FSwZUZsOjNE",
        il2cpp_property_get_name: "jtpOMctdvlh",
        il2cpp_property_get_parent: "hItzOVJNJkY",
        il2cpp_object_get_class: "ZjrdMEkmuJA",
        il2cpp_object_get_size: "VwFJVFspdOf",
        il2cpp_object_get_virtual_method: "fmuimZSfNxX",
        il2cpp_object_new: "ScVayGdXprz",
        il2cpp_object_unbox: "anLbQchRyPa",
        il2cpp_value_box: "IrRrDTFMtkv",
        il2cpp_monitor_enter: "lwoSVwUWIXX",
        il2cpp_monitor_try_enter: "ZZuGJzswWUL",
        il2cpp_monitor_exit: "GLGovyiNsre",
        il2cpp_monitor_pulse: "qpvHJVrwjle",
        il2cpp_monitor_pulse_all: "fkadyvVPmVs",
        il2cpp_monitor_wait: "spIC_FwfAON",
        il2cpp_monitor_try_wait: "OikhWlbtzjR",
        il2cpp_runtime_invoke: "SzNqsCMVqNX",
        il2cpp_runtime_invoke_convert_args: "XvgHXOcOilK",
        il2cpp_runtime_class_init: "StBVUcvptdh",
        il2cpp_runtime_object_init: "PNZXyaADrSE",
        il2cpp_runtime_object_init_exception: "DVKCCvtTKOd",
        il2cpp_runtime_unhandled_exception_policy_set: "YoeEYsRYUDm",
        il2cpp_string_length: "JMiFbyvMzDo",
        il2cpp_string_chars: "_JxuSxXJkxu",
        il2cpp_string_new: "OHHYrn_OLCw",
        il2cpp_string_new_len: "DaL_bTFWwLM",
        il2cpp_string_new_utf16: "NIsxj_nmDdi",
        il2cpp_string_new_wrapper: "Itm_zyYHBRf",
        il2cpp_string_intern: "ONirQBHHmjO",
        il2cpp_string_is_interned: "_Nguducyldj",
        il2cpp_thread_current: "brgaqnrsLjx",
        il2cpp_thread_attach: "XZkKiKosyHC",
        il2cpp_thread_detach: "HWyKlOeVHgV",
        il2cpp_is_vm_thread: "tOniezYQdLe",
        il2cpp_current_thread_walk_frame_stack: "VVkKMpWMRPm",
        il2cpp_thread_walk_frame_stack: "dwQnauFAnWw",
        il2cpp_current_thread_get_top_frame: "HaLYfKsToXA",
        il2cpp_thread_get_top_frame: "DFqEEXfVVgu",
        il2cpp_current_thread_get_frame_at: "VTAZaJamXif",
        il2cpp_thread_get_frame_at: "EPfxEBbbVva",
        il2cpp_current_thread_get_stack_depth: "AAurdoCYvce",
        il2cpp_thread_get_stack_depth: "TmpTUDznYUN",
        il2cpp_override_stack_backtrace: "MTngjclvBeM",
        il2cpp_type_get_object: "PFwXVWGeckf",
        il2cpp_type_get_type: "jDLSsrBahVH",
        il2cpp_type_get_class_or_element_class: "ZZhKRUWWOib",
        il2cpp_type_get_name: "VNwdSYN_Ac_",
        il2cpp_type_is_byref: "JACoGlJjCCC",
        il2cpp_type_get_attrs: "cvxuQAlmPys",
        il2cpp_type_equals: "ZQcDKobJMFm",
        il2cpp_type_get_assembly_qualified_name: "jsLiEGdBz_G",
        il2cpp_type_get_reflection_name: "krqMStJVxEC",
        il2cpp_type_is_static: "VyZMlTfANyg",
        il2cpp_type_is_pointer_type: "NJTtQPEmFPK",
        il2cpp_image_get_assembly: "cqfGzZtAbZi",
        il2cpp_image_get_name: "FZa_z_AueBS",
        il2cpp_image_get_filename: "oytwlOhdSXu",
        il2cpp_image_get_entry_point: "wXXCxtShaIZ",
        il2cpp_image_get_class_count: "FIGgipFzgMY",
        il2cpp_image_get_class: "NWWdAoXBDBY",
        il2cpp_capture_memory_snapshot: "IpzYwEzNyAK",
        il2cpp_free_captured_memory_snapshot: "lXeeYyqKDhC",
        il2cpp_set_find_plugin_callback: "pAkICKehGFC",
        il2cpp_register_log_callback: "gXEFLzgaVtv",
        il2cpp_debugger_set_agent_options: "yIpecOtGPCL",
        il2cpp_is_debugger_attached: "XtYfuqdCIbt",
        il2cpp_register_debugger_agent_transport: "DKCQIqXjPYD",
        il2cpp_debug_foreach_method: "dEXqxwPqxij",
        il2cpp_debug_get_method_info: "SmfSoPUDjlb",
        il2cpp_unity_install_unitytls_interface: "BMmxhoqLNeZ",
        il2cpp_custom_attrs_from_class: "qWXIOQxZSnI",
        il2cpp_custom_attrs_from_method: "k_kCMxiXNDK",
        il2cpp_custom_attrs_from_field: "O_nquqNBkem",
        il2cpp_custom_attrs_get_attr: "hkiBhXTKVPq",
        il2cpp_custom_attrs_has_attr: "pBrTnTuumkx",
        il2cpp_custom_attrs_construct: "ajXoRvRYfdX",
        il2cpp_custom_attrs_free: "fmIkkpoyoEW",
        il2cpp_class_set_userdata: "QNtCJwCnlQZ",
        il2cpp_class_get_userdata_offset: "HInTIGwaBVN",
        il2cpp_set_default_thread_affinity: "bQdgGOrZMaz",
        il2cpp_unity_set_android_network_up_state_func: "sYMiZ_dajKA",
    };
    const exports = Il2Cpp.$config.exports;
    for (const key in bridgeNames) {
        if (exports[key])
            exports[bridgeNames[key]] = exports[key];
    }
}
const version = "1.1.0";
let boardMaterial = null;
let buttonClickDelay = 0.0;
let menu = null;
let reference = null;
let referenceCollider = null;
let animatedMenuTexts: Array<{
    component: any;
    text: string;
    phase: number;
}> = [];
let goopFishGunEnabled = false;
let goopFishDelay = 0;
let itemDupeEnabled = false;
let leftPrimary = false;
let leftSecondary = false;
let rightPrimary = false;
let rightSecondary = false;
let leftGrab = false;
let rightGrab = false;
let leftTrigger = false;
let rightTrigger = false;
let leftStick = false;
let rightStick = false;
let mobGunEnabled = false;
let prefabGunEnabled = false;
let spawnGunEnabled = false;
let omniFloatVictims = [];
let omniFloatBalls = [];
let omniKidnapTarget: any = null;
let lastGunTime = 0;
let prefabGunDelay = 0;
let selectedItemLauncherEnabled = false;
let selectedItemLauncherDelay = 0;
let spawnItemMethodsChecked = false;
let spawnItemStringMethod: any = null;
let spawnItemPrefabMethod: any = null;
let mobSpawnAsyncBroken = false;
let mobValidatorBypassEnabled = false;
let beforeMobSpawnDelegate: any = null;
let beforeMobSpawnDelegateClass: any = null;
let completedMobSpawnDelegate: any = null;
let completedMobSpawnDelegateClass: any = null;
let protectedMobHooksInstalled = false;
const protectedMobNetworkIds = new Set<string>();
const protectedMobHandles = new Set<string>();
let _omniFLChargeEnabled = false;
let _omniFLForceEnabled = false;
let _omniFLAutoFireEnabled = false;
let _omniFLTeleportEnabled = false;
let omniFLTeleportDelay = 0;
let _omniFLHooksSet = false;
let omniFLSuperLaunchDelay = 0;
let omniFLLaunchAllDelay = 0;
let protectedMobRunnerKey = "";
let nextProtectedMobRunnerCheck = 0;
let cachedNetworkMobGroups: any[] = [];
let cachedNetworkMobGroupRunnerKey = "";
let pendingNetworkMobSpawn: {
    group: any;
    mobId: any;
    name: string;
    requestedPosition: any;
    deadline: number;
    nextCheck: number;
} | null = null;
const MOB_SPAWN_PENDING = { pending: true };
let stashDupeEnabled = false;
let backpackDupeEnabled = false;
let stashAllowMoves = false;
let stashQOLFix = false;
let allowPutGBO = false;
let freeGrabEnabled = false;
let forceTpLoopEnabled = false;
let spinPlayersEnabled = false;
let invincibleEnabled = false;
let sizeChangerEnabled = false;
let tpAllGunEnabled = false;
let freezeAllEnabled = false;
let ragdollAllEnabled = false;
let orbitGunEnabled = false;
let explosionGunEnabled = false;
let launchAllGunEnabled = false;
let arenaItemKillerDisabled = false;
let deleteItemGunEnabled = false;
let deleteItemDelay = 0;
let carLauncherEnabled = false;
let carLaunchDelay = 0;
let prefabSpamGunEnabled = false;
let prefabSpamDelay = 0;
let prefabRainEnabled = false;
let prefabRainDelay = 0;
let prefabTornadoEnabled = false;
let prefabTornadoAngle = 0;
let prefabTornadoDelay = 0;
let prefabFollowEnabled = false;
let prefabFollowObject: any = null;
let prefabPathEnabled = false;
let prefabPathDelay = 0;
let _cachedPlayers = null;
let _cachedPlayersFrame = -1;
function getAllNetPlayers() {
    if (_cachedPlayersFrame !== frameCount) {
        const objectClass = Il2Cpp.domain
            .assembly("UnityEngine.CoreModule")
            .image.class("UnityEngine.Object");
        const netPlayerClass = Il2Cpp.domain
            .assembly("AnimalCompany")
            .image.class("AnimalCompany.NetPlayer");
        _cachedPlayers = objectClass
            .method("FindObjectsByType", 1)
            .inflate(netPlayerClass)
            .invoke(0);
        _cachedPlayersFrame = frameCount;
    }
    return _cachedPlayers;
}
let whitelist: string[] = [];
let whitelistEnabled = false;
let wlFlyEnabled = false;
let InfAmmo = false;
let wlRocketEnabled = false;
let wlFlareEnabled = false;
let wlCarEnabled = false;
let wlCrateEnabled = false;
let wlSuitcaseEnabled = false;
let wlBombEnabled = false;
let wlEggEnabled = false;
let wlBalloonEnabled = false;
let wlGiveawayEnabled = false;
let wlDisintegrateEnabled = false;
let wlGunBuffEnabled = false;
let wlAddGunEnabled = false;
let wlRemoveGunEnabled = false;
let wlSpazRainbowEnabled = false;
let wlTarget: any = null;
let wlLastGunTime = 0;
let followedPrefabObject: any = null;
let followedPrefabName: string = "";
let trapGunEnabled = false;
let orbitprefabs: any[] = [];
let rocketFistEnabled = false;
let boomspearFistEnabled = false;
let eggFistEnabled = false;
let dogFistEnabled = false;
let flameFistEnabled = false;
let bombFistEnabled = false;
let spearFistEnabled = false;
let balloonFistEnabled = false;
let carFistEnabled = false;
let shotgunFistEnabled = false;
let nukeFistEnabled = false;
const Renderer = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Renderer");
let minefieldFistEnabled = false;
let itemLauncherEnabled = false;
let sparkzCopyCosmeticsUnlocked = false;
let sparkzCopyCosmeticsDelay = 0;
let itemLauncherSelfDelay = 0;
let lastFistTime = 0;
let boulderLauncherEnabled = false;
let boulderLauncherDelay = 0;
let boulderLauncherWasHeld = false;
let boulderLauncherObjects: Array<{
    object: any;
    expiresAt: number;
}> = [];


let laserEyesEnabled = false;
let laserEyesObjects: any[] = [];
let laserEyesSpawnDelay = 0;
let laserEyesWasFiring = false;
let silentStepEnabled = false;
let antivoidEnabled = false;
let noclipHoldEnabled = false;
let autolootEnabled = false;
let localInvisibleEnabled = false;
let floatAllEnabled = false;
let gravityCrusherEnabled = false;
let speedDemonEnabled = false;
let fastHandsEnabled = false;
let nukeAllEnabled = false;
let nukeDelay = 0;
let spawnRainEnabled = false;
let spawnRainDelay = 0;
let mobSwarmEnabled = false;
let mobSwarmDelay = 0;
let disintegrateAllEnabled = false;
let disintegrateDelay = 0;
let antigravityEnabled = false;
let blackHoleEnabled = false;
let infAmmoJetpack = false;
let infAmmoFlare = false;
let infAmmoZipline = false;
let infAmmoRevolver = false;
let infAmmoArena = false;
let infAmmoShotgun = false;
let infAmmoRPG = false;
let autoCockRevolver = false;
let rapidFireEnabled = false;
let rapidFirePulseDelay = 0;
let infiniteSellValueEnabled = false;
let itemColorHue = 0;
let itemColorSaturation = 110;
let itemColorScale = 1;
let itemColorUpdateDelay = 0;
let cachedColorItems: any = null;
let cachedColorItemsFrame = -1;
let forceAllStashSlotsEnabled = false;
let forceAllStashSlotsDelay = 0;
let containerFreedomEnabled = false;
let containerFreedomDelay = 0;
let spawnMobEnabled = false;
let spawnMobGunEnabled = false;
let kamehamehaEnabled = false;
let lastKameTime = 0;
let inPlayerSubMenu = false;
let chainEnabled = false;
let chainObjects: any[] = [];
const CHAIN_LENGTH = 10;
const CHAIN_SPACING = 0.35;
let domeEnabled = false;
let domeObjects: any[] = [];
let floatingMachineEnabled = false;
let floatingMachine: any = null;
let floatingMachineState = "up";
let floatingMachinePauseTimer = 0;
let floatingMachineRotation = 0;
let floatingChristmasEnabled = false;
let telekinesisGunEnabled = false;
let telekinesisTarget: any = null;
let floatingChristmas: any = null;
let floatingChristmasState = "up";
let floatingChristmasPauseTimer = 0;
let floatingChristmasRotation = 0;
let lastRocketTime = 0;
let lastBoomspearTime = 0;
let lastEggTime = 0;
let inPlayerMenu = false;
let fistFlyVelocity: [
    number,
    number,
    number
] = [0, 0, 0];
let joystickFlyVelocity: [
    number,
    number,
    number
] = [0, 0, 0];
let trailEnabled = false;
let trailObjects: any[] = [];
let trailPositions: {
    x: number;
    y: number;
    z: number;
}[] = [];
const TRAIL_LENGTH = 15;
const TRAIL_SPACING = 0.35;
let hueValue = 0;
let satValue = 0;
let scaleValue = 0;
let randomizeOnSpawn = false;
let gridSize = 4;
let flyTriggerEnabled = false;
let flySpeed = 10.0;
let spazRainbowEnabled = false;
let playerList: any[] = [];
let selectedPlayer: any = null;
let selectedPlayerName: string = "";
let selectedPlayerKey: string = "";
let infHealthEnabled = false;
let blueNameTagsEnabled = false;
let visualNameTagsEnabled = false;
let dualRevolverPunchDelay = 0;
let selectedPlayerYeetDelay = 0;
let playerCagePrefabs: any[] = [];
let playerCageEntries: any[] = [];
const blueNameTagEntries = new Map<string, any>();
const sytePlayerEspEntries = new Map<string, any>();
let showPlayerOptions = false;
let playerPositions: Map<string, any> = new Map();
let updateTimer = 0;
let dysonSphereEnabled = false;
let dysonSphereRings: any[] = [[], []];
let dysonSphereRingAngles: number[] = [0, 0];
let dysonSphereRingTilt: number = 0;
let dysonSphereTiltDirection: number = 1;
let cloneSquadEnabled = false;
let cloneSquadPlayers: any[] = [];
let flyEnabled = false;
let platformsEnabled = false;
let noclipEnabled = false;
let raspWasdFlyEnabled = false;
let raspFlyEnabled = false;
let raspSmoothFlyEnabled = false;
let raspHandFlyEnabled = false;
let raspPlatformsEnabled = false;
let raspGhostEnabled = false;
let raspGhostHidden = false;
let raspGhostWasPressed = false;
let raspInvisibleWasPressed = false;
let raspNoclipHeld = false;
let raspHandFlyHoldPosition: any = null;
let raspHandFlyOriginalGravity: boolean | null = null;
let raspLongArmsCycle = 0;
let joystickFlyEnabled = false;
let flySpeedIndex = 1;
let flySpeeds = [2, 5, 12, 28];
let longArmsLevel = 0;
let superJumpEnabled = false;
let dashEnabled = false;
let airControlEnabled = false;
let wallClimbEnabled = false;
let freezeSelfEnabled = false;
let speedBoostEnabled = false;
let speedMultiplier = 1;
let customGravityValue = -9.81;
let customGravityEnabled = false;
let spiralEnabled = false;
let spiralObjects: any[] = [];
let spiralAngle = 0;
let spiralHeight = 0;
let spiralChristmasEnabled = false;
let spiralChristmasObjects: any[] = [];
let spiralChristmasAngle = 0;
let spiralChristmasHeight = 0;
let smoothFlyEnabled = false;
let flyVelocity: [
    number,
    number,
    number
] = [0, 0, 0];
let flySmoothRotation: any = null;
let _pcSmoothYaw = 0;
let _pcSmoothPitch = 0;
let _pcMouseSensitivity = 0.15;
let _pcFlyAcceleration = 2.5;
let _pcFlyDeceleration = 1.2;
let shopUnlockEnabled = false;
let cosmeticOwnEnabled = false;
let blueprintAbuseEnabled = false;
let noSpendEnabled = false;
let infFartEnabled = false;
let infFartDelay = 0;
let autoKickAllEnabled = false;
let tagGunEnabled = false;
let lagGunEnabled = false;
let itemGunEnabled = false;
let noRecoilEnabled = false;
let shopHooksInstalled = false;
let rgbMenuEnabled = false;
let espEnabled = false;
let tracersEnabled = false;
let ghostModeEnabled = false;
let ghostPosition: [
    number,
    number,
    number
] = [0, 0, 0];
let ghostRotation: [
    number,
    number,
    number,
    number
] = [0, 0, 0, 1];
let handPlatformsEnabled = false;
let movementPlatformLeft: any = null;
let movementPlatformRight: any = null;
let prevLeftGrab = false;
let prevRightGrab = false;
let thunderEnabled = false;
let thunderObject: any = null;
let buttonSound = 44;
let LerpMenu = true;
let menuSnapNextFrame = true;
let menuFollowSmoothness = 15;
let menuscale = 1.15;
let vrMenuUpOffset = 0.08;
let vrMenuPalmInset = 0.045;
let vrMenuRightOffset = 0.025;
let vrMenuTilt = -8;
let menuOutlineColor: [
    number,
    number,
    number,
    number
] = [0.05, 0.1, 0.35, 1];
let pageOutlineColor: [
    number,
    number,
    number,
    number
] = menuOutlineColor;
let buttonOutlineColor: [
    number,
    number,
    number,
    number
] = pageOutlineColor;
let menuOutlineThickness = 0.009;
let controlOutlineThickness = 0.0075;
let rowOutlineThickness = 0.0065;
let outlinesEnabled = true;
let rowButtonHeight = 0.065;
let rowButtonWidth = 0.65;
let rowButtonSpacing = 0.032;
let disconnectButtonWidth = 0.62;
let pageButtonWidth = 0.135;
let cornerRoundness = 0.28;
let titleWidth = 0.64;
let titleHeight = 0.063;
let pcMenuDistance = 0.7;
let menuOpenSpeed = 2.5;
let menuCloseSpeed = 3.0;
function getButtonsPerPage(): number {
    const effectiveStep = Math.max(rowButtonSpacing, rowButtonHeight * 0.45);
    return Math.max(4, Math.min(8, Math.floor(0.225 / effectiveStep) + 1));
}
let menuAnimation = 0;
let menuClosing = false;
let menuReloading = false;
let customClickClip: any = null;
let customClickAudioSource: any = null;
let customClickLoadAttempted = false;
let leftPlatform = null;
let rightPlatform = null;
let flingGunEnabled = false;
let flingGunDelay = 0;
let kickGunEnabled = false;
let kickAllGripEnabled = false;
let teleportGunEnabled = false;
let colorGunEnabled = false;
let spazColorGunEnabled = false;
let selectedTeleportLocation = 0;
let assemblyImages,
  acImage,
  coreImage,
  physImage,
  uiImage,
  uiModuleImage,
  textRenderImage,
  fusionImage,
  tmpImage,
  xrImage,
  audioImage,
  OculusPlatformSettings,
  GorillaLocomotionCls,
  NetPlayerCls,
  ItemVendingMachineViewCls,
  ElevatorManagerCls,
  ArenaGameManagerCls,
  GrabbableObjectCls,
  ItemSellingMachineControllerCls,
  PrefabGeneratorCls,
  GrabbableItemCls,
  PlayerControllerCls,
  GrabbableObjectCls2,
  SFXManagerCls,
  NetworkManagerCls,
  ComputerTerminalKeyCls,
  InputDevicesCls,
  XRCommonUsagesCls,
  GameObjectCls,
  UnityObjectCls,
  Vector3Cls,
  QuaternionCls,
  TimeCls,
  ResourcesCls,
  MaterialCls,
  MeshRendererCls,
  ShaderCls,
  RectTransformCls,
  LineRendererCls,
  BoxColliderCls,
  ColliderCls,
  RigidbodyCls,
  PhysicsCls,
  ComponentCls,
  ParticleManagerCls,
  ParticleManagerCls2,
  CanvasCls,
  CanvasScalerCls,
  GraphicRaycasterCls,
  UITextCls,
  FontCls,
  gorillaLocomotionInstance,
  urpUnlitShader,
  uiDefaultShader,
  vec3Zero,
  vec3One,
  identityRotation,
  arialFont,
  nullObjectRef;
let _vx53f,
  _vx2eb,
  _sparkzWlPruneTimer = 0,
  _vx5c4,
  _iterItem,
  _iterMob,
  _vx574,
  _vx2a4,
  _gunOverrideLayer;
const teleportLocations = [
    "Lake",
    "Moon",
    "Sewers",
    "Spawn",
    "Water Tower",
    "Skybox",
    "Void",
];
const teleportCoords = [
    [-213.17, 56.764, -15.242],
    [1021.538, 980.105, 1054.145],
    [88.541, -103.024, 140.867],
    [-397.684, 2.135, -399.209],
    [49.446, 50.186, -33.34],
    [0, 500, 0],
    [0, -9999999, 0],
];

let orbiters: any[] = [];
let orbitPrefabs: any[] = [];
let orbitEnabled: boolean = false;
let orbitUpdateRunning: boolean = false;
let playerOrbitEnabled: boolean = false;
let playerOrbiters: any[] = [];
let jailGunEnabled = false;
let jailGunDelay = 0;
let lagGunDelay = 0;
let audioManager = null;
let visualizer: any[] = [];
let giantChristmas: any = null;
let giantChristmasEnabled = false;
let giantChristmasSize = 3.0;
let giantMachine: any = null;
let giantMachineEnabled = false;
let giantMachineSize = 3.0;
let tpLakeEnabled = false;
let tpMoonEnabled = false;
let tpSewersEnabled = false;
let tpSpawnEnabled = false;
let tpWaterTowerEnabled = false;
let tpSkyboxEnabled = false;
let tpVoidEnabled = false;
let handTextObj = null;
let bgColor: [
    number,
    number,
    number,
    number
] = [0.02, 0.04, 0.15, 0.98];
let textColor: [
    number,
    number,
    number,
    number
] = [0.95, 0.95, 0.95, 1.0];
let buttonColor: [
    number,
    number,
    number,
    number
] = [0.04, 0.08, 0.25, 0.95];
let buttonPressedColor: [
    number,
    number,
    number,
    number
] = [
    0.08, 0.14, 0.5, 0.95,
];
let textGradientEnabled = true;
let textGradientSpeed = 2.4;
let textGradientDarkTone = 112;
let textGradientLightTone = 222;
let menuName: string = "<b>Omni Menu</b>";
let themeIndex = 0;
let buttonIndex = 0;
let spawnBalloonEnabled = false;
let spawnHeartBalloonEnabled = false;
let spawnDelay = 0;
let spamRainbowAllEnabled = false;
let ejectDupeIndex = 0;
let ejectDupeAmount = 2;
const ejectDupeValues = [2, 5, 10, 15, 20, 25, 30];
let tagGunDelay = 0.0;
let perviousSpawnKey = false;
let itemGunDelay = 0.0;
let GunPointer = null;
let GunLine = null;
let GunPointerMaterial = null;
let GunLineObject = null;
let GunLineMaterial = null;
let physicsRaycastAllVec4: any = null;
let physicsRaycastOutVec4: any = null;
let physicsRaycastOutVec5: any = null;
let gunLastRenderFrame = -1;
let gunResultFrame = -1;
let gunFrameResult: any = null;
let noSpendEnabled2 = false;
let ownCosmeticsEnabled2 = false;
let devSpoofEnabled2 = false;
let buffSpamEnabled2 = false;
let buffSpamDelay2 = 0;
let killGunDelay = 0;
let itemSpawnDelay = 0;
const VFXTypes = {
    None: 255,
    MuzzleFlash_Shotgun: 0, MuzzleFlash_FlareGun: 1, CrateBreak: 2,
    MuzzleFlash_SmallGun: 3, MuzzleFlash_GoldRevolver: 4, MuzzleFlash_DragonPistol: 5,
    MuzzleFlash_ViperShotgun: 6,
    Explosion_FlareGun: 32, Explosion_Coins: 33, Explosion_Nuts: 34, Explosion_Keys: 35,
    Explosion_Balloon: 36, Explosion_TeleGrenadeSrc: 37, Player_Touch_Lava: 38,
    Portal_Teleport: 39, Explosion_Coins_Vertical: 40, Autumn_Leaves_Burst: 41,
    Explosion_Feathers: 42, Explosion_Popcorn: 43, Electricity_Small: 44,
    Impact_Flaregun: 64, Impact_Snowball: 65, Impact_GoldRevolver: 66,
    Impact_MeleeHit: 67, Impact_BigGroundHit: 68, Impact_MeleeHit_CriticalSmall: 69,
    Impact_MeleeHit_CriticalLarge: 70, Impact_MeleeHit_AoE: 71,
    Research_ZiplineAttachDetach: 96, Research_Purchase1RP: 97, Research_Purchase5RP: 98,
    Research_Purchase10RP: 99, Research_PurchaseRPBundle: 100, Rope_ZiplineAttachDetach: 110,
    MeatExplosion_1: 128, MeatExplosion_2: 129, MeatExplosion_Headshot: 130,
    ServerRoomSplash_Small: 160, ServerRoomSplash_Big: 161, RAMActivationSparks: 162,
    GreenBlink: 170, ConfettiBurst: 174, Ethereal_Void: 180, MomBoss_NailBreak: 181,
    MidAirJump_Fart: 182, FuelExplosion: 183, HeartBurst: 184, EatingLoop: 185,
    SmileyBurst: 186, TomatoBurst: 187,
};
let prefabSpawnDelay = 0;
let allItemsSpawnDelay = 0;
let allMobsSpawnDelay = 0;
let allPrefabsSpawnDelay = 0;
let despawnItemDelay = 0;
let killMobDelay = 0;
let vfxSpawnDelay = 0;
let itemForceDelay = 0;
let pissGunDelay = 0;
let grabGunDelay = 0;
let openDoorsDelay = 0;
let buffSpamId2 = 1;
let buffAllSpamEnabled2 = false;
let buffAllSpamDelay2 = 0;
let infFartEnabled2 = false;
let infFartDelay2 = 0;
let toiletSpamEnabled2 = false;
let toiletSpamDelay2 = 0;
let timebombSpamEnabled2 = false;
let timebombSpamDelay2 = 0;
let sellingSpasmEnabled2 = false;
let sellingSpamDelay2 = 0;
let arenaSpamEnabled2 = false;
let arenaSpamDelay2 = 0;
let oreSpawnGunEnabled2 = false;
let oreSpawnDelay2 = 0;
let rigSpamGunEnabled2 = false;
let rigSpamGunDelay2 = 0;
let hoverpadInfBattery = false;
let rainbowCycleSelfEnabled = false;
let godModeEnabled = false;
let noClipEnabled = false;
let fullbrightEnabled = false;
let longArmsEnabled = false;
const itemIDs = [
'item_pelican_case','item_ac_cola','item_taki','item_alien_cube','item_alphablade','item_ampbattery','item_ampbattery_mega','item_anti_gravity_grenade','item_apple','item_arena_pistol','item_arena_shotgun','item_arrow','item_arrow_bomb','item_arrow_heart','item_arrow_lightbulb','item_arrow_teleport','item_axe','item_backpack','item_backpack_black','item_backpack_fish','item_backpack_green','item_backpack_large_base','item_backpack_large_basketball','item_backpack_large_clover','item_backpack_monkey','item_backpack_pink','item_backpack_realistic','item_backpack_small_base','item_backpack_space','item_backpack_white','item_backpack_with_flashlight','item_bait_beetle','item_bait_fly','item_bait_glowworm','item_bait_magmar_ball','item_bait_mouse_trap','item_bait_sardine','item_bait_shell','item_bait_starfish','item_bait_wallet','item_balloon','item_balloon_heart','item_bamboo_fishing_rod','item_banana','item_banana_chips','item_baseball_bat','item_basic_fishing_rod','item_batterycell_hydra','item_beans','item_big_cup','item_bighead_larva','item_bloodlust_vial','item_blox_cube','item_blox_moon','item_blox_sphere','item_blox_star','item_blox_triangle','item_boombox','item_boombox_fishing','item_boombox_neon','item_boomerang','item_box_fan','item_brain_chunk','item_brainslug_blue','item_brainslug_green','item_brainslug_pink','item_broccoli_grenade','item_broccoli_shrink_grenade','item_broom','item_broom_halloween','item_bubble_gun','item_bubble_staff','item_burrito','item_butcherpipe','item_butcherspear','item_butchersword','item_calculator','item_cardboard_box','item_cardboard_dragon_body','item_cardboard_dragon_head','item_carrot','item_ceo_plaque','item_chakra','item_clapper','item_cluster_grenade','item_coconut_shell','item_cola','item_cola_large','item_company_ration','item_company_ration_heal','item_cracker','item_crate','item_crossbow','item_crossbow_heart','item_crowbar','item_cube_frame','item_cubetrident','item_cuboid_anomaly','item_cutie_dead','item_d20','item_deadmans_draw','item_deadmans_draw_card','item_deadmans_draw_card_comedy_drama','item_deadmans_draw_comedy_drama','item_demon_sword','item_disc','item_disposable_camera','item_dragons_claw','item_drill','item_drill_fists','item_drill_galaxy','item_drill_neon','item_dwarven_hammer','item_dynamite','item_dynamite_cube','item_easter_egg','item_egg','item_egg_easter_blue','item_egg_easter_red','item_egg_easter_yellow','item_electrical_tape','item_energy_axe','item_energy_sword_dual','item_energy_sword_green','item_energy_sword_red','item_eraser','item_eye_googly','item_film_reel','item_finger_board','item_fish_anglerfish','item_fish_big_shark','item_fish_boomfish','item_fish_boot','item_fish_bottled_message','item_fish_carp','item_fish_chewna','item_fish_clam_hookshot','item_fish_cowfish','item_fish_crappie','item_fish_crispie','item_fish_cube','item_fish_diamond_jade_koi','item_fish_dollar_bill','item_fish_dragonfish','item_fish_fishsword','item_fish_ghost_sword','item_fish_gold_fish','item_fish_hydracarp','item_fish_irontusk','item_fish_kissy','item_fish_license_plate','item_fish_magma_carp','item_fish_nebula_fish','item_fish_nutfish','item_fish_pufferfish','item_fish_rainbow_trout','item_fish_redacted','item_fish_rotten_fish','item_fish_salmon','item_fish_salmonster','item_fish_scaldfish','item_fish_seahorse','item_fish_seamine','item_fish_shellfish_shield','item_fish_spicy_salmon','item_fish_teeth','item_fish_triclops','item_fish_tuna','item_fish_yellowcake','item_fishing_terminal_bait_button','item_flamethrower','item_flamethrower_skull','item_flamethrower_skull_ruby','item_flaregun','item_flashbang','item_flashlight','item_flashlight_galaxy','item_flashlight_mega','item_flashlight_red','item_flipflop_realistic','item_floppy3','item_floppy5','item_football','item_four_leaf_clover','item_four_leaf_clover_gold','item_four_leaf_radar','item_friend_launcher','item_frying_pan','item_fungi_blue','item_fungi_red','item_gameboy','item_glitched_banana','item_glowing_fishing_rod','item_glowstick','item_goldbar','item_goldcoin','item_goop','item_goopfish','item_grappling_hook','item_great_sword','item_great_sword_galaxy','item_grenade','item_grenade_gold','item_grenade_launcher','item_guided_boomerang','item_gyroid_anomaly','item_hammer_candy_cane','item_harddrive','item_hatchet','item_hawaiian_drum','item_heart_chunk','item_heart_gun','item_heartchocolatebox','item_hh_key','item_hookshot','item_hookshot_galaxy','item_hookshot_sword','item_hot_cocoa','item_hoverpad','item_hoverpad_galaxy','item_hydra','item_impulse_grenade','item_jetpack','item_joystick','item_joystick_inv_y','item_katana_big','item_katana_medium','item_keycard','item_lance','item_landmine','item_landmine_bee','item_lantern_cny','item_large_banana','item_lava_fishing_rod','item_love_grenade','item_mage_pirate_sword','item_mannequin_arm','item_mannequin_arm_left','item_mannequin_arm_right','item_mannequin_head','item_mannequin_leg','item_mannequin_leg_left','item_mannequin_leg_right','item_mannequin_torso','item_marshmallow_bunny_bomb','item_megaphone','item_metal_ball','item_metal_ball_easter','item_metal_ball_xmas','item_metal_plate','item_metal_plate_small','item_metal_plate_xmas','item_metal_rod','item_metal_rod_curved','item_metal_rod_easter','item_metal_rod_small','item_metal_rod_xmas','item_metal_triangle','item_midipad','item_midipad_animal','item_mining_laser','item_mining_laser_orange','item_module_gun_1','item_module_gun_2','item_module_gun_3','item_module_hull_1','item_module_hull_2','item_module_hull_3','item_module_joust_1','item_module_joust_2','item_module_joust_3','item_module_laser_1','item_module_laser_2','item_module_laser_3','item_module_tether_1','item_module_tractor_beam_1','item_momboss_box','item_moneygun','item_moonhorror_key','item_moonrock','item_moonrock_cheesy','item_moonrock_friend','item_motor','item_mountain_key','item_mug','item_needle','item_nut','item_nut_drop','item_ogre_hands','item_orange','item_ore_copper_l','item_ore_copper_m','item_ore_copper_s','item_ore_gold_l','item_ore_gold_m','item_ore_gold_s','item_ore_hell','item_ore_silver_l','item_ore_silver_m','item_ore_silver_s','item_painting_canvas','item_paperpack','item_pennant_spring','item_pickaxe','item_pickaxe_cny','item_pickaxe_cube','item_pickaxe_realistic','item_pickaxe_realistic_galaxy','item_pickaxe_spacedwarf','item_pinata_bat','item_pineapple','item_pipe','item_pistol_dragon','item_plank','item_plank_easter','item_plate_round','item_plunger','item_pogostick','item_police_baton','item_popcorn','item_portable_safe_zone','item_portable_teleporter','item_prismatic_anomaly','item_prop_scanner','item_pumpkin_bomb','item_pumpkin_pie','item_pumpkinjack','item_pumpkinjack_small','item_pyramidal_anomaly','item_quest_gy_skull','item_quest_gy_skull_special','item_quest_hlal_brain','item_quest_hlal_eyeball','item_quest_hlal_flesh','item_quest_hlal_heart','item_quest_key_graveyard','item_quest_vhs','item_quest_vhs_backlots','item_quest_vhs_basement','item_quest_vhs_cave','item_quest_vhs_circus_day','item_quest_vhs_circus_ext','item_quest_vhs_circus_fac','item_quest_vhs_dam_facility','item_quest_vhs_dam_servers','item_quest_vhs_dark_forest','item_quest_vhs_eden','item_quest_vhs_forest','item_quest_vhs_foundation','item_quest_vhs_graveyard','item_quest_vhs_haunted_house','item_quest_vhs_hell','item_quest_vhs_lab','item_quest_vhs_lake','item_quest_vhs_lobby','item_quest_vhs_megalodon','item_quest_vhs_megalodon_lake','item_quest_vhs_mines','item_quest_vhs_moon','item_quest_vhs_moon_horror_rocket','item_quest_vhs_mountain','item_quest_vhs_mountainbot','item_quest_vhs_mountainshack','item_quest_vhs_mountainvault','item_quest_vhs_obsidianhalls','item_quest_vhs_odd_core','item_quest_vhs_office','item_quest_vhs_office_basement','item_quest_vhs_powerplant_microwave','item_quest_vhs_powerplant_reactorcore','item_quest_vhs_powerplant_security','item_quest_vhs_powerplant_supportfacility','item_quest_vhs_sandbox','item_quest_vhs_sewers','item_quest_vhs_vhs-core','item_quiver','item_quiver_heart','item_radiation_gun','item_radioactive_broccoli','item_radioactive_fishing_rod','item_randombox_mobloot_big','item_randombox_mobloot_medium','item_randombox_mobloot_small','item_randombox_mobloot_weapons','item_randombox_mobloot_weapons_big','item_randombox_mobloot_zombie','item_rare_card','item_remote_controller','item_repair_wrench','item_revolver','item_revolver_ammo','item_revolver_gold','item_ring_buoy','item_ringmaster_staff','item_robo_monke','item_robot_arm_left','item_robot_arm_left_galaxy','item_robot_arm_right','item_robot_arm_right_galaxy','item_robot_head','item_rope','item_rpg','item_rpg_ammo','item_rpg_ammo_egg','item_rpg_ammo_shoe','item_rpg_ammo_spear','item_rpg_cny','item_rpg_easter','item_rpg_shoe','item_rpg_smshr','item_rpg_spear','item_rubberducky','item_ruby','item_saddle','item_salmoncannon','item_sawblade','item_sawblade_launcher','item_scanner','item_scissors','item_server_pad','item_shadowboss_key','item_shield','item_shield_bones','item_shield_candy_cane','item_shield_galaxy','item_shield_police','item_shield_viking_1','item_shield_viking_2','item_shield_viking_3','item_shield_viking_4','item_shotgun','item_shotgun_ammo','item_shotgun_gold','item_shotgun_sawed','item_shotgun_viper','item_shovel','item_shredder','item_shrinking_broccoli','item_skipole','item_skishoe','item_skishoe_2','item_skishoe_3','item_skishoe_4','item_snail_friend','item_snowball','item_snowboard','item_snowboard_2','item_snowboard_3','item_snowboard_4','item_snowboard_auto','item_snowboard_galaxy','item_spear_candy_cane','item_special_fishing_rod','item_special_fishing_rod_radar_part','item_special_fishing_rod_with_radar','item_stapler','item_stash_grenade','item_steel_beam','item_steel_beam_xmas','item_stellarsword_blue','item_stellarsword_gold','item_stellate_anomaly','item_stick_armbones','item_stick_bone','item_sticker_dispenser','item_sticky_dynamite','item_stinky_cheese','item_stopwatch','item_tablet','item_tapedispenser','item_tele_grenade','item_tele_pearl','item_teleport_dagger','item_teleport_gun','item_teleport_gun_galaxy','item_theremin','item_timebomb','item_toilet_paper','item_toilet_paper_mega','item_toilet_paper_roll_empty','item_token_circus','item_trampoline','item_treestick','item_tripwire_explosive','item_trophy','item_truss','item_truss_easter','item_truss_small','item_truss_xmas','item_turkey_leg','item_turkey_whole','item_ukulele','item_ukulele_gold','item_umbrella','item_umbrella_clover','item_umbrella_squirrel','item_unidentified','item_upsidedown_loot','item_uranium_chunk_l','item_uranium_chunk_m','item_uranium_chunk_s','item_viking_hammer','item_viking_hammer_twilight','item_war_fan','item_wheelhandle','item_wheelhandle_big','item_whoopie','item_wireframe_cube','item_wireframe_gun','item_wood_log','item_wood_pallet','item_wood_pallet_easter','item_wyrmpiercer','item_zipline_gun','item_zombie_meat',
'item_apescalibur','item_balloon_smiley','item_grimstaff','item_soccer_ball','item_soccer_goalposts',
'item_module_minigun_1','item_module_minigun_2','item_module_minigun_3','item_module_gravity_1',
'item_module_boost_1','item_module_boost_2','item_module_boost_3','item_module_blast_1','item_module_blast_2','item_module_blast_3',
'item_module_stasis_1','item_quest_vhs_asteroids','item_quest_vhs_derelictvessel','item_quest_vhs_wormhole',
'item_randombox_modules','item_alienblaster','item_quest_dball_1','item_quest_dball_2','item_quest_dball_3',
'item_quest_dball_4','item_quest_dball_5','item_quest_dball_6','item_quest_dball_7',
'item_tv_remote','item_backpack_dragon','item_hookshot_gold','item_sticky_dynamite_goldf',
];
let itemIndex = 0;
const mobIDs: {
    name: string;
    id: number;
}[] = [
    { name: "Angler", id: 1 },
    { name: "AnglerMad", id: 2 },
    { name: "Armstrong", id: 3 },
    { name: "ArmstrongMad", id: 4 },
    { name: "Banshee", id: 5 },
    { name: "Bomb", id: 6 },
    { name: "Bomber", id: 7 },
    { name: "BomberFlashbang", id: 8 },
    { name: "BomberMad", id: 9 },
    { name: "Chicken", id: 10 },
    { name: "Cyst", id: 11 },
    { name: "FakeGorilla", id: 12 },
    { name: "BigHead", id: 13 },
    { name: "RedGreen", id: 14 },
    { name: "Phantom", id: 15 },
    { name: "EvilEye", id: 16 },
    { name: "GiantThrower", id: 17 },
    { name: "RedGreenMad", id: 18 },
    { name: "Spider", id: 19 },
    { name: "FlyingSwarm", id: 20 },
    { name: "NextBot", id: 21 },
    { name: "Segway", id: 22 },
    { name: "NextBotStatic", id: 23 },
    { name: "EvilEyePinata", id: 24 },
    { name: "EvilEyePinataLarge", id: 25 },
    { name: "Lanky", id: 26 },
    { name: "Blob", id: 27 },
    { name: "Cutie", id: 28 },
    { name: "SpiderCave", id: 29 },
    { name: "ForestMob", id: 30 },
    { name: "Mimic", id: 31 },
    { name: "GraveyardBoss", id: 32 },
    { name: "Ringmaster", id: 33 },
    { name: "Puppet", id: 34 },
    { name: "PolypMass", id: 35 },
    { name: "RobotDog", id: 36 },
    { name: "Shadow", id: 37 },
    { name: "Heart", id: 38 },
    { name: "Slimey", id: 39 },
    { name: "ShadowBoss", id: 40 },
    { name: "BigShark", id: 41 },
    { name: "EdenZombie", id: 42 },
    { name: "Skinwalker", id: 43 },
    { name: "YinWorm", id: 44 },
    { name: "YangWorm", id: 45 },
    { name: "ArmstrongSpace", id: 46 },
    { name: "Smiley", id: 47 },
    { name: "MurderRabbit", id: 48 },
    { name: "MurderBunny", id: 49 },
    { name: "DeltaUFO", id: 50 },
    { name: "BetaUFO", id: 51 },
    { name: "AlphaUFO", id: 52 },
    { name: "GlitchedGorilla", id: 53 },
];
const prefabList = [
    "Shipwheel",
    "TeleportMachine",
    "FourLeafQuest_FourLeafSpawner",
    "EasterEgg_QuestSpawner",
    "RadarPartSpawner",
    "SimpleKeypadDoor",
    "GiantController_GraveyardBoss_backup",
    "MetaCameraControls",
    "GrenadeProjectile",
    "LaserMirror",
    "mom_pillow",
    "RiggedPlank",
    "SharkScareTriggerObject",
    "Uvula",
    "BaitShopButton_Spawner",
    "NetworkedLever_SecretLeft",
    "CoreTeleporter",
    "LaserSource",
    "LaserSink",
    "grababble_fish_paper_message",
    "AutoDestroyItem_OilSplatter",
    "AutoDestroyItem_Splash0",
    "AutoDestroyItem_Splash1",
    "AutoDestroyItem_Splash2",
    "AutoDestroyItem_Splash3",
    "AutoDestroyItem_Splash4",
    "AutoDestroyItem_Splash5",
    "BarrelBeansDynamic",
    "BarrelBeansStatic",
    "BarrelExplodingDynamic",
    "BarrelExplodingStatic",
    "BarrelOilDynamic",
    "BarrelOilStatic",
    "Basketball",
    "BigBanana",
    "BigHatchdoorNetObject",
    "BigWheelhandleSpawner",
    "BonfireController",
    "BrainPowerPlug",
    "ChoppableTreeManager",
    "ChristmasBox",
    "ChristmasBoxManager",
    "ClawMachineNetObject",
    "DiggableGrave",
    "DummyPlayerTarget",
    "DummyTarget",
    "Duplicator",
    "EscherToyBlockObject",
    "ExplosiveEgg",
    "ExplosiveEggClustered",
    "FlareGunProjectile",
    "FortuneTellerNet",
    "FuelCanisterNetObject",
    "FuelCanisterSpawner",
    "GenericWorldItemSpawner",
    "GiantRockObject",
    "GiantRockObject_Fire",
    "GreenscreenNET",
    "HatchdoorGrabHandle",
    "HatchdoorNetObject",
    "HellAltar",
    "HH_LockedDoor",
    "HingedDoorNetworked",
    "HordeMobController",
    "HordeMobLobbyHandler",
    "InflatedBalloon",
    "InflatedHeartBalloon",
    "ItemSellingMachineController",
    "KeypadDoorNetObject",
    "LakePineapple_Spawner",
    "Landmine",
    "LeaderBoardMonsterKill",
    "LockedDoor_KeySpawner",
    "LockedShippingContainer_Quest",
    "LogQuestItemSpawner",
    "LootLantern",
    "Mausoleum_01",
    "MazeManager",
    "MimicSpawner_CemeteryTile1",
    "MimicSpawner_CemeteryTile3",
    "MomToyBlockObject",
    "MomToyBlockObject_DisappearOnDrop",
    "MountainKey_Spawner",
    "MovieTheater",
    "Net",
    "NetGameTimeManager",
    "NetLootSpawnGroup",
    "NetMobSpawnGroup",
    "NetPlayer",
    "Pillar_Arched_Broken_01",
    "RamEventNet",
    "remote_controller_receiver",
    "RobotDogRPG",
    "RPGRocket",
    "RPGRocketEgg",
    "RPGRocketSpear",
    "RuinTower_FloatingPlatform",
    "RuinTower_FloatingSmall",
    "ScaffoldTrap",
    "SkiRaceController",
    "Snail_Spawner",
    "SpaceshipTeleporter",
    "SpawnableZipline",
    "Spawner_Key",
    "StickyAnchor",
    "TeleportationManager",
    "ThunderController",
    "TubeMonster",
    "Vehicle_Buggy",
    "VHSQuests_VHSSpawner",
    "WinterFilm_ReelSpawner",
    "item_randombox_base",
    "Blackhole",
    "RPGRocketShoe",
    "InflatedSmileyBalloon",
    "RaceTrack_Circle",
    "RaceTrack_DAA",
    "Vehicle_Spacebike_B",
    "Vehicle_Spaceship_1",
    "Vehicle_Spaceship_2",
    "Vehicle_Spaceship_3",
    "Vehicle_Spaceship_4",
    "Vehicle_Spaceship_5",
    "Vehicle_Spaceship_6",
    "Vehicle_Spaceship_7",
    "UFO_Easy",
    "UFO_Medium",
    "UFO_Hard",
    "SpiderController",
];
let mobIndex = 0;
let mobGunDelay = 0.0;
let prefabIndex = 0;
n5RemapBridgeExports();
interface MenuToggleOptions {
    onEnable?: () => void;
    onDisable?: () => void;
    onUpdate?: () => void;
    toolTip?: string;
}
interface MenuTemplateCategory {
    kind: "category";
    title: string;
    entries: MenuTemplateEntry[];
    toolTip?: string;
}
type MenuTemplateEntry = ButtonInfoConfig | MenuTemplateCategory;
interface MenuTemplateAddition {
    category: string;
    entries: ButtonInfoConfig[];
}
function menuButton(buttonText: string, onPress: () => void, toolTip: string = ""): ButtonInfoConfig {
    return { buttonText, method: onPress, isTogglable: false, toolTip };
}
function menuToggle(buttonText: string, options: MenuToggleOptions): ButtonInfoConfig {
    return {
        buttonText,
        enableMethod: options.onEnable,
        disableMethod: options.onDisable,
        method: options.onUpdate,
        isTogglable: true,
        toolTip: options.toolTip || "",
    };
}
function menuStepper(buttonText: string, decrease: () => void, increase: () => void, toolTip: string = ""): ButtonInfoConfig {
    return {
        buttonText,
        method: increase,
        isTogglable: false,
        toolTip,
        stepDown: new ButtonInfo(menuButton(buttonText + " -", decrease)),
        stepUp: new ButtonInfo(menuButton(buttonText + " +", increase)),
    };
}

try {
    const flareGunAmmoHook = acImage.class("AnimalCompany.FlareGun").method("get_hasAmmo");
    flareGunAmmoHook.implementation = function () {
        if (InfAmmo) return true;
        return this.method("get_hasAmmo").invoke();
    };
} catch(_) {}

try {
    const revolverAmmoHook = acImage.class("AnimalCompany.Revolver").method("get_ammoLoaded");
    revolverAmmoHook.implementation = function () {
        if (InfAmmo) return 255;
        return this.method("get_ammoLoaded").invoke();
    };
} catch(_) {}

try {
    const revolverHammerHook = acImage.class("AnimalCompany.Revolver").method("get_isHammerCocked");
    revolverHammerHook.implementation = function () {
        if (InfAmmo) return true;
        return this.method("get_isHammerCocked").invoke();
    };
} catch(_) {}

try {
    const ziplineAmmoHook = acImage.class("AnimalCompany.ZiplineGun").method("get_isLoaded");
    ziplineAmmoHook.implementation = function () {
        if (InfAmmo) return true;
        return this.method("get_isLoaded").invoke();
    };
} catch(_) {}

try {
    const shotgunAmmoHook = acImage.class("AnimalCompany.Shotgun").method("get__ammoLeft");
    shotgunAmmoHook.implementation = function () {
        if (InfAmmo) return 255;
        return this.method("get__ammoLeft").invoke();
    };
} catch(_) {}

try {
    const rpgAmmoHook = acImage.class("AnimalCompany.RPG").method("get_loadedState");
    rpgAmmoHook.implementation = function () {
        const state = this.method("get_loadedState").invoke();
        if (InfAmmo) {
            state.field("isLoaded").value = true;
            this.method("set_loadedState").invoke(state);
        }
        return state;
    };
} catch(_) {}

try {
    const autoReloadHook = acImage.class("AnimalCompany.AutoReloadGun").method("get__ammoLeft");
    autoReloadHook.implementation = function () {
        if (InfAmmo) return 255;
        return this.method("get__ammoLeft").invoke();
    };
} catch(_) {}

try {
    const jetpackHook = acImage.class("AnimalCompany.JetpackHandy").method("RPC_UseJetpack");
    jetpackHook.implementation = function () {
        if (InfAmmo) {
            this.method("RPC_UseJetpack").invoke();
            this.field("_isUsed").value = false;
        } else {
            this.method("RPC_UseJetpack").invoke();
        }
    };
} catch(_) {}

try {
    const arenaPistolHook = acImage.class("AnimalCompany.ArenaPistol").method("get_ammoLeft");
    arenaPistolHook.implementation = function () {
        if (InfAmmo) return 255;
        return this.method("get_ammoLeft").invoke();
    };
} catch(_) {}

try {
    const arenaShotgunHook = acImage.class("AnimalCompany.ArenaShotgun").method("get_ammoLeft");
    arenaShotgunHook.implementation = function () {
        if (InfAmmo) return 255;
        return this.method("get_ammoLeft").invoke();
    };
} catch(_) {}

function getAllNetPlayersList(includeLocal: boolean = true): any[] {
    const players: any[] = [];
    try {
        const playerDict = NetPlayerCls.field("playerIDToNetPlayer").value;
        if (!playerDict || playerDict.isNull()) return players;
        const vals = playerDict.method("get_Values").invoke();
        const en = vals.method("GetEnumerator").invoke();
        while (en.method("MoveNext").invoke()) {
            const p = en.method("get_Current").invoke();
            if (!p || p.isNull?.()) continue;
            if (!includeLocal && playerIsLocal(p)) continue;
            players.push(p);
        }
    } catch(_) {}
    return players;
}

function playerIsLocal(_p: any): boolean {
    try {
        return !!_p && _p.method("get_IsMine").invoke();
    } catch (_) {
        return false;
    }
}

function sparkzFindAllClass(_className) {
    try {
        const _cls = acImage.class(_className);
        const _arr = UnityObjectCls.method("FindObjectsOfType", 0)
            .inflate(_cls)
            .invoke();
        const _out = [];
        let _len = 0;
        try {
            if (_arr && typeof _arr.length === "number") _len = _arr.length;
        } catch (_) {}
        try {
            if (!_len && _arr && _arr.method)
                _len = _arr.method("get_Length").invoke();
        } catch (_) {}
        for (let _i = 0; _i < _len; _i++) {
            try {
                let _o = null;
                try {
                    _o = _arr.get ? _arr.get(_i) : null;
                } catch (_e) {}
                try {
                    if (!_o && _arr.method) _o = _arr.method("GetValue").invoke(_i);
                } catch (_e) {}
                if (!_o) _o = _arr[_i];
                if (_o && (!_o.handle || !_o.handle.isNull())) _out.push(_o);
            } catch (_) {}
        }
        return _out;
    } catch (_) {
        return [];
    }
}

function sparkzAllRemoteUsers() {
    const _out = [];
    for (const _pl of sparkzAllNetPlayers()) {
        try {
            if (!_pl || (_pl.handle && _pl.handle.isNull()) || sparkzIsLocalPlayer(_pl))
                continue;
            _out.push(_pl);
        } catch (_) {}
    }
    return _out;
}

function sparkzAllNetPlayers() {
    const _out = [];
    const _push = (_pl) => {
        try {
            if (_pl && (!_pl.handle || !_pl.handle.isNull())) _out.push(_pl);
        } catch (_) {}
    };
    try {
        const _net = acImage.class("AnimalCompany.NetPlayer");
        for (const _src of [
            () => _net.method("get_spawnedPlayers").invoke(),
            () => _net.field("_spawnedPlayers").value,
            () => _net.field("playerIDToNetPlayer").value,
        ]) {
            try {
                for (const _pl of sparkzCollectionToArray(_src())) _push(_pl);
            } catch (_) {}
        }
        try {
            _push(_net.method("get_localPlayer").invoke());
        } catch (_) {}
    } catch (_) {}
    try {
        const _en = NetPlayerCls.field("playerIDToNetPlayer")
            .value.method("get_Values")
            .invoke()
            .method("GetEnumerator")
            .invoke();
        while (_en.method("MoveNext").invoke())
            _push(_en.method("get_Current").invoke());
    } catch (_) {}
    try {
        for (const _pl of sparkzFindAllClass("AnimalCompany.NetPlayer")) _push(_pl);
    } catch (_e) {}
    const _dedup = [], _seen = new Set();
    for (const _pl of _out) {
        let _key = "";
        try {
            _key = sparkzGetPlayerUserId(_pl) || String(_pl.handle || _pl);
        } catch (_) {
            _key = String(_pl);
        }
        if (_seen.has(_key)) continue;
        _seen.add(_key);
        _dedup.push(_pl);
    }
    return _dedup;
}

function sparkzIsLocalPlayer(_rig) {
    try {
        return !!_rig.method("get_IsMine").invoke();
    } catch (_) {}
    try {
        return !!_rig.method("get_IsMine").invoke();
    } catch (_) {}
    try {
        return !!_rig.property("IsMine").value;
    } catch (_) {}
    return false;
}

function sparkzGetPlayerUserId(_rig) {
    try {
        const _s = sparkzValueString(_rig.method("get_userID").invoke());
        if (_s && _s !== "null" && _s !== "???" && _s !== "[object Object]")
            return _s;
    } catch (_) {}
    try {
        const _s = sparkzValueString(_rig.field("_userID").value);
        if (_s && _s !== "null" && _s !== "???" && _s !== "[object Object]")
            return _s;
    } catch (_) {}
    try {
        const _s = sparkzValueString(_rig.field("userID").value);
        if (_s && _s !== "null" && _s !== "???" && _s !== "[object Object]")
            return _s;
    } catch (_) {}
    try {
        const _pid = _rig.method("get_playerID").invoke();
        return "pid:" + _pid;
    } catch (_) {}
    return "";
}

function sparkzValueString(_v) {
    try {
        if (_v && typeof _v.content === "string") return _v.content;
    } catch (_) {}
    try {
        if (_v && _v.value !== undefined) return sparkzValueString(_v.value);
    } catch (_) {}
    try {
        if (_v && _v.method)
            return sparkzValueString(_v.method("get_Value").invoke());
    } catch (_) {}
    try {
        const _m = sparkzManagedString(_v);
        if (_m && _m !== "???" && _m !== "null" && _m !== "undefined" && _m !== "[object Object]")
            return _m;
    } catch (_) {}
    try {
        if (_v && _v.toString) return String(_v.toString());
    } catch (_) {}
    return String(_v || "");
}

function sparkzCollectionToArray(_col) {
    const _out = [];
    if (!_col || (_col.handle && _col.handle.isNull())) return _out;
    let _vals = _col;
    try {
        _vals = _col.method("get_Values").invoke();
    } catch (_) {}
    try {
        _vals = _col.field("Values").value;
    } catch (_) {}
    try {
        const _en = _vals.method("GetEnumerator").invoke();
        while (_en.method("MoveNext").invoke()) {
            let _cur = _en.method("get_Current").invoke();
            try {
                _cur = _cur.method("get_Value").invoke();
            } catch (_) {}
            try {
                if (_cur && _cur.field) {
                    const _v = _cur.field("value").value;
                    if (_v) _cur = _v;
                }
            } catch (_) {}
            if (_cur && (!_cur.handle || !_cur.handle.isNull())) _out.push(_cur);
        }
    } catch (_) {}
    if (_out.length === 0) {
        let _len = 0;
        try {
            _len = _vals.length;
        } catch (_) {}
        try {
            if (!_len) _len = _vals.method("get_Count").invoke();
        } catch (_) {}
        try {
            if (!_len) _len = _vals.method("get_Length").invoke();
        } catch (_) {}
        for (let _i = 0; _i < _len; _i++) {
            let _v = null;
            try {
                _v = _vals.get ? _vals.get(_i) : null;
            } catch (_) {}
            try {
                if (!_v) _v = _vals.method("get_Item").invoke(_i);
            } catch (_) {}
            try {
                if (!_v) _v = _vals.method("GetValue").invoke(_i);
            } catch (_) {}
            if (!_v)
                try {
                    _v = _vals[_i];
                } catch (_) {}
            if (_v && (!_v.handle || !_v.handle.isNull())) _out.push(_v);
        }
    }
    return _out;
}

function sparkzManagedString(_s) {
    try {
        if (_s && typeof _s.content === "string") return _s.content;
    } catch (_) {}
    try {
        if (_s && _s.content) return String(_s.content);
    } catch (_) {}
    return String(_s);
}


function menuCategory(title: string, entries: MenuTemplateEntry[], toolTip: string = ""): MenuTemplateCategory {
    return { kind: "category", title, entries, toolTip };
}
function menuAddTo(category: string, entries: ButtonInfoConfig[]): MenuTemplateAddition {
    return { category, entries };
}
let buttons: ButtonInfo[][] = [];
let currentCategory = 0, currentPage = 0, righthand = false;
let GTPlayer: any = null, instance: any = null, instanceField: any = null, UberShader: any = null, TextShader: any = null;
let rightHandTransform: any = null, leftHandTransform: any = null, headCollider: any = null, bodyCollider: any = null, playerRigidBody: any = null, rigidbody: any = null;
let deltaTime = 0, time = 0, frameCount = 0;
let _pcMode = false, _pcMenuOpen = false, _pcFlyEnabled = false, _pcLastCursorX = -1, _pcLastCursorY = -1, _pcMenuSelector = 0, _pcQWasDown = false, _pcEscWasDown = false, _pcUpWasDown = false, _pcDownWasDown = false, _pcEnterWasDown = false, _pcMinusWasDown = false, _pcPlusWasDown = false, _pcLeftWasDown = false, _pcRightWasDown = false, _pcRmbWasDown = false, _pcLmbMenuWasDown = false;
let _VK_Q = 81, _VK_ESCAPE = 27, _VK_RBUTTON = 2, _VK_LBUTTON = 1, _VK_W = 87, _VK_A = 65, _VK_S = 83, _VK_D = 68, _VK_SPACE_PC = 32, _VK_SHIFT_PC = 16, _VK_UP_PC = 38, _VK_DOWN_PC = 40, _VK_LEFT_PC = 37, _VK_RIGHT_PC = 39, _VK_OEM_MINUS_PC = 0xbd, _VK_OEM_PLUS_PC = 0xbb, _VK_SUBTRACT_PC = 0x6d, _VK_ADD_PC = 0x6b, _VK_RETURN_PC = 13;
let _GAKS: any = null, _GCP: any = null, _pcPoint: any = Memory.alloc(8);
let _pcWin32InitAttempted = false, _pcWin32ReadyLogged = false;
let _pcYaw = 0, _pcPitch = 0;
let _pcFlyVel: [
    number,
    number,
    number
] = [0, 0, 0];
let _pcFlySpeed = 8.0;
Il2Cpp.perform(() => {
    if ((globalThis as any).syteInitialized)
        return;
    (globalThis as any).syteInitialized = true;
    function syteLog(msg: string) {
        console.log(" " + msg);
    }
    function syteError(msg: string) {
        console.log("[-] " + msg);
    }
    function syteInfo(msg: string) {
        console.log("[i] " + msg);
    }
    function initPcWin32Input() {
        if (_pcWin32InitAttempted)
            return !!_GAKS;
        _pcWin32InitAttempted = true;
        try {
            let user32: any = null;
            try {
                user32 = (Process as any).getModuleByName("user32.dll");
            }
            catch (_) {
                try {
                    user32 = (Process as any).findModuleByName("user32.dll");
                }
                catch (_) { }
            }
            if (!user32) {
                try {
                    user32 = (Module as any).load("user32.dll");
                }
                catch (_) { }
            }
            let gaksPtr: any = null;
            let gcpPtr: any = null;
            try {
                gaksPtr = user32?.getExportByName
                    ? user32.getExportByName("GetAsyncKeyState")
                    : (Module as any).getExportByName("user32.dll", "GetAsyncKeyState");
            }
            catch (_) { }
            try {
                gcpPtr = user32?.getExportByName
                    ? user32.getExportByName("GetCursorPos")
                    : (Module as any).getExportByName("user32.dll", "GetCursorPos");
            }
            catch (_) { }
            if (!gaksPtr) {
                syteError("[Syte PC] GetAsyncKeyState not found");
                return false;
            }
            _GAKS = new NativeFunction(gaksPtr, "int", ["int"]);
            if (gcpPtr)
                _GCP = new NativeFunction(gcpPtr, "bool", ["pointer"]);
            if (!_pcWin32ReadyLogged) {
                _pcWin32ReadyLogged = true;
                syteLog("");
            }
            return true;
        }
        catch (e) {
            syteError("[Syte PC] Win32 init failed: " + e);
            return false;
        }
    }
    function _pcKeyDown(vk: number): boolean {
        try {
            if (!_GAKS && !initPcWin32Input())
                return false;
            return (Number(_GAKS(vk)) & 0x8000) !== 0;
        }
        catch (_) {
            return false;
        }
    }
    function syteHookReturn(cls: any, methodName: string, condition: () => boolean, value: any, paramCount: number = 0) {
        try {
            const method = cls.method(methodName, paramCount);
            const original = method.nativeFunction;
            method.implementation = function (...args: any[]) {
                if (condition())
                    return value;
                return original.call(this, ...args);
            };
            return true;
        }
        catch (e) {
            return false;
        }
    }

    function UnlockAll() {
    try {
        const AppClass = acImage.class("AnimalCompany.App");
        const appState = AppClass.method("get_state").invoke();
        if (!appState || appState.isNull()) { sendNotification("No app state", false); return; }
        try {
            const GISCls = acImage.class("AnimalCompany.GameplayItemState");
            GISCls.method("get_isHidden").implementation = function() { return false; };
        } catch(_) {}
        let unlockedItems = 0;
        try {
            const gameplayItems = appState.method("get_gameplayItems").invoke();
            if (gameplayItems && !gameplayItems.isNull()) {
                const allDict = gameplayItems.method("get_all").invoke();
                if (allDict && !allDict.isNull()) {
                    const values = allDict.method("get_Values").invoke();
                    if (values && !values.isNull()) {
                        const enumerator = values.method("GetEnumerator").invoke();
                        while (enumerator.method("MoveNext").invoke()) {
                            try {
                                const item = enumerator.method("get_Current").invoke();
                                if (!item || item.isNull()) continue;
                                try { const isUnlocked = item.method("get_isUnlocked").invoke(); if (isUnlocked && !isUnlocked.isNull()) isUnlocked.method("set_value").invoke(true); } catch(_) {}
                                try { const depsSatisfied = item.method("get_unlockDependenciesSatisfied").invoke(); if (depsSatisfied && !depsSatisfied.isNull()) depsSatisfied.method("set_value").invoke(true); } catch(_) {}
                                try { const unlockable = item.method("get_unlockable").invoke(); if (unlockable && !unlockable.isNull()) unlockable.method("set_value").invoke(true); } catch(_) {}
                                unlockedItems++;
                            } catch(_) {}
                        }
                    }
                }
            }
        } catch(e) { console.error("[UnlockAll] gameplayItems:", e); }
        let unlockedAvatarItems = 0;
        try {
            const avatarItems = appState.method("get_avatarItems").invoke();
            if (avatarItems && !avatarItems.isNull()) {
                const allDict = avatarItems.method("get_all").invoke();
                if (allDict && !allDict.isNull()) {
                    const values = allDict.method("get_Values").invoke();
                    if (values && !values.isNull()) {
                        const enumerator = values.method("GetEnumerator").invoke();
                        while (enumerator.method("MoveNext").invoke()) {
                            try {
                                const item = enumerator.method("get_Current").invoke();
                                if (!item || item.isNull()) continue;
                                try { const isOwned = item.method("get_isOwned").invoke(); if (isOwned && !isOwned.isNull()) isOwned.method("set_value").invoke(true); } catch(_) {}
                                try { const canPurchase = item.method("get_canPurchaseDirectly").invoke(); if (canPurchase && !canPurchase.isNull()) canPurchase.method("set_value").invoke(true); } catch(_) {}
                                try { const isDevItem = item.method("get_isDevItem")?.invoke(); if (isDevItem && !isDevItem.isNull()) isDevItem.method("set_value").invoke(true); } catch(_) {}
                                unlockedAvatarItems++;
                            } catch(_) {}
                        }
                    }
                }
            }
        } catch(e) { console.error("[UnlockAll] avatarItems:", e); }
        sendNotification("Unlocked " + unlockedItems + " items + " + unlockedAvatarItems + " cosmetics!", false);
    } catch(e) { console.error("[UnlockAll]", e); sendNotification("Unlock All failed: " + e, false); }
}

function getGunPointerResult(layerOverride = null, allowLock = true) {
    try {
        const startPos = rightHandTransform.method("get_position").invoke();
        const dir = rightHandTransform.method("get_forward").invoke();
        const dirDiv = Vector3Cls.method("op_Division").invoke(dir, 4);
        const rayStart = Vector3Cls.method("op_Addition").invoke(startPos, dirDiv);
        const layerMask = layerOverride || -1;
        const hits = PhysicsCls.method("RaycastAll", 4).invoke(rayStart, dir, 512, layerMask);
        let finalDist = 999999, finalRay = null;
        try {
            for (const hit of hits) {
                try {
                    const pt = hit.method("get_point").invoke();
                    const d = Vector3Cls.method("Distance").invoke(pt, startPos);
                    if (typeof d === "number" && !isNaN(d) && d < finalDist) { finalRay = hit; finalDist = d; }
                } catch (_) {}
            }
        } catch (_) {}
        let endPos = null;
        if (finalRay) { endPos = finalRay.method("get_point").invoke(); }
        else { endPos = Vector3Cls.method("op_Addition").invoke(startPos, Vector3Cls.method("op_Multiply").invoke(dir, 512)); }
        return { ray: finalRay, gunPointer: null, endPosition: endPos };
    } catch (_) { return { ray: null, gunPointer: null, endPosition: null }; }
}

function resolveGunTargetPlayer(gd, maxDist = 8.0) {
    if (!gd) return null;
    try {
        const ray = gd.ray;
        if (ray && !(ray.handle && ray.handle.isNull && ray.handle.isNull())) {
            try {
                const hc = ray.method("get_collider").invoke();
                if (hc && !hc.isNull && !hc.isNull()) {
                    try {
                        const dp = hc.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                        if (dp && !dp.isNull()) return dp;
                    } catch (_) {}
                    try {
                        const hgo = hc.method("get_gameObject").invoke();
                        if (hgo && !hgo.isNull()) {
                            const hp = hgo.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                            if (hp && !hp.isNull()) return hp;
                        }
                    } catch (_) {}
                }
            } catch (_) {}
        }
    } catch (_) {}
    try {
        const pp = gd.endPosition;
        if (!pp) return null;
        let nearest = null, nd = maxDist;
        const players = getAllNetPlayersList(false);
        for (const p of players) {
            try {
                const pos = getTransform(p).method("get_position").invoke();
                const d = Vector3Cls.method("Distance").invoke(pp, pos);
                if (d < nd) { nd = d; nearest = p; }
            } catch (_) {}
        }
        return nearest;
    } catch (_) { return null; }
}

function getPlayerName(player) {
    try {
        return player.method("get_displayName").invoke()?.content || "player";
    } catch (_) {
        return "player";
    }
}

function getAllNetPlayersList(includeLocal = true) {
    const players = [];
    try {
        const playerDict = NetPlayerCls.field("playerIDToNetPlayer").value;
        if (!playerDict || playerDict.isNull()) return players;
        const vals = playerDict.method("get_Values").invoke();
        const en = vals.method("GetEnumerator").invoke();
        while (en.method("MoveNext").invoke()) {
            const p = en.method("get_Current").invoke();
            if (!p || p.isNull?.()) continue;
            if (!includeLocal && playerIsLocal(p)) continue;
            players.push(p);
        }
    } catch(_) {}
    return players;
}

function playerIsLocal(player) {
    try {
        return player.method("get_IsMine").invoke();
    } catch (_) {
        return false;
    }
}

function omniInstallFriendLauncherHooks() {
    if (_omniFLHooksSet) return true;
    try {
        const flCls = AssemblyCSharp.class("AnimalCompany.FriendLauncher");
        const origUpdateImpl = flCls.method("Update").implementation;
        flCls.method("Update").implementation = function () {
            try {
                if (_omniFLChargeEnabled || _omniFLAutoFireEnabled) {
                    if (_omniFLChargeEnabled) {
                        this.field("_charge").value = 255;
                        this.field("_currPower").value = 1.0;
                        this.field("_chargedTime").value = 999;
                    }
                    if (_omniFLAutoFireEnabled && rightTrigger) {
                        try { this.method("Shoot").invoke(); } catch (_) {}
                    }
                }
            } catch (_) {}
            if (origUpdateImpl) return origUpdateImpl.apply(this, arguments);
        };
        if (_omniFLForceEnabled) {
            try {
                flCls.field("MAX_FORCE_MAG").value = 999999.0;
            } catch (_) {
                console.error("[FL] Force field set failed");
            }
        }
        _omniFLHooksSet = true;
    } catch (_e) {
        console.error("[FL] Hook install failed:", _e);
    }
}
    function syteInstallShopHooks() {
        if (shopHooksInstalled)
            return;
        try {
            const gameplay = AssemblyCSharp.class("AnimalCompany.GameplayItemState");
            for (const m of [
                "get_isPurchasable",
                "get_isResearchable",
                "get_isProduct",
            ]) {
                syteHookReturn(gameplay, m, () => shopUnlockEnabled, true);
            }
            for (const m of [
                "get_allowSaving",
                "get_allowBlueprintSaving",
                "get_canBeSavedToLoadoutTemplate",
            ]) {
                syteHookReturn(gameplay, m, () => blueprintAbuseEnabled, true);
            }
            syteHookReturn(gameplay, "get_maxInBlueprint", () => blueprintAbuseEnabled, 999);
            const gm = AssemblyCSharp.class("AnimalCompany.GameManager");
            syteHookReturn(gm, "TrySpendMoney", () => noSpendEnabled, true, 1);
            syteHookReturn(gm, "TrySpendFishy", () => noSpendEnabled, true, 1);
            shopHooksInstalled = true;
        }
        catch (e) {
            syteError("Shop hooks failed: " + e);
        }
    }
    function syteSafeImage(asmName: string) {
        try {
            const asm = Il2Cpp.domain.assembly(asmName);
            if (asm && !asm.handle.isNull())
                return asm.image;
        }
        catch (_) { }
        syteError("Assembly not found: " + asmName);
        return null;
    }
    const images = {
        AnimalCompany: syteSafeImage("AnimalCompany"),
        "UnityEngine.CoreModule": syteSafeImage("UnityEngine.CoreModule"),
        "UnityEngine.PhysicsModule": syteSafeImage("UnityEngine.PhysicsModule"),
        "UnityEngine.UIModule": syteSafeImage("UnityEngine.UIModule"),
        "UnityEngine.UI": syteSafeImage("UnityEngine.UI"),
        "UnityEngine.TextRenderingModule": syteSafeImage("UnityEngine.TextRenderingModule"),
        PhotonFusionNetworking: syteSafeImage("Fusion.Runtime"),
        PhotonFusionNetworkingRealtime: syteSafeImage("Fusion.Realtime"),
        "Unity.TextMeshPro": syteSafeImage("Unity.TextMeshPro"),
        "UnityEngine.XRModule": syteSafeImage("UnityEngine.XRModule"),
        "UnityEngine.UnityWebRequestModule": syteSafeImage("UnityEngine.UnityWebRequestModule"),
        "UnityEngine.AudioModule": syteSafeImage("UnityEngine.AudioModule"),
    };
    const AssemblyCSharp = images["AnimalCompany"];
    function syteApplyVrSpoof() {
        try {
            const appUtilsClass = AssemblyCSharp.class("AnimalCompany.AppUtils");
            if (!appUtilsClass) {
                syteError("VR spoof failed: AppUtils not found");
                return;
            }
            let applied = false;
            try {
                appUtilsClass.method("IsSteamVRHeadsetActive").implementation =
                    function () {
                        return true;
                    };
                applied = true;
            }
            catch (_) { }
            try {
                appUtilsClass.method("GetXRBackend").implementation = function () {
                    return 2;
                };
                applied = true;
            }
            catch (_) { }
            try {
                const status = appUtilsClass.nested("SteamVRHeadsetStatus");
                appUtilsClass.method("GetSteamVRHeadsetStatus").implementation =
                    function () {
                        const spoof = status.new().unbox();
                        spoof.field("activeLoaderPresent").value = true;
                        spoof.field("xrDisplayRunning").value = true;
                        spoof.field("headDeviceValid").value = true;
                        spoof.field("userPresenceKnown").value = true;
                        spoof.field("userPresent").value = true;
                        return spoof;
                    };
                applied = true;
            }
            catch (_) { }
            try {
                const versionMethod = appUtilsClass.methods.find((method) => /CalculatePhotonAppVersion/i.test(method.name) &&
                    (method.returnType?.name || "") === "System.String");
                if (versionMethod) {
                    versionMethod.implementation = function (...args: any[]) {
                        return this.method(versionMethod.name).invoke(...args);
                    };
                    applied = true;
                }
                else {
                    syteInfo("VR spoof warning: version method not found");
                }
            }
            catch (e) {
                syteError("VR spoof platform hook failed: " + e);
            }
            if (applied)
                syteLog("VR spoof applied successfully");
            else
                syteError("VR spoof failed: no hooks applied");
        }
        catch (e) {
            syteError("VR spoof failed: " + e);
        }
    }

    function destroyObject(_vx49e) {
      Object.method("Destroy", 1).invoke(_vx49e);
    }
    function spawnNetworkPrefab(prefabName: string, pos: any, rot: any, authPlayerRef: any = null) {
        try {
            const runner = PrefabGen.field("_instance").value.method("get_runner").invoke();
            if (!runner || runner.isNull()) return null;
            const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
            const count = sources.method("get_Count").invoke();
            for (let i = 0; i < count; i++) {
                try {
                    const source = sources.method("get_Item").invoke(i);
                    const desc = source.method("get_Description").invoke().toString();
                    if (desc.toLowerCase().includes(String(prefabName).toLowerCase())) {
                        const no = source.method("WaitForResult").invoke();
                        if (!no || no.isNull()) return null;
                        const makeZeroForType = (type) => {
                            if (type.class.isEnum || type.isPrimitive) return 0;
                            if (!type.class.isValueType) return NULL;
                            const fields = type.class.fields.filter(f => !f.isStatic);
                            if (fields.length === 0) return 0;
                            return fields.map(f => makeZeroForType(f.type));
                        };
                        const buildNullableArg = (nullableType, hasValue, value) => {
                            const fields = nullableType.class.fields.filter(f => !f.isStatic);
                            return fields.map(f => {
                                const lname = f.name.toLowerCase();
                                if (lname.includes("hasvalue")) return hasValue ? 1 : 0;
                                if (lname === "value") return hasValue ? value : makeZeroForType(f.type);
                                return makeZeroForType(f.type);
                            });
                        };
                        const normalizeValue = (type, value) => {
                            if (typeof value === "boolean") return value ? 1 : 0;
                            if (value instanceof Il2Cpp.ValueType) {
                                const fields = type.class.fields.filter(f => !f.isStatic);
                                if (fields.length === 0) return 0;
                                return fields.map(f => normalizeValue(f.type, f.bind(value).value));
                            }
                            if (Array.isArray(value)) return value.map(v => normalizeValue(type, v));
                            return value;
                        };
                        const buildNullableFromValueType = (nullableType, valueType) => {
                            return buildNullableArg(nullableType, true, normalizeValue(valueType.type, valueType));
                        };
                        let spawnMethod = null;
                        for (const m of runner.method("Spawn").overloads()) {
                            if (m.parameterCount !== 6 || m.isGeneric) continue;
                            const p = m.parameters;
                            if (p[0].type.name.includes("Fusion.NetworkObject") &&
                                p[1].type.name.startsWith("System.Nullable") && p[1].type.name.includes("Vector3") &&
                                p[2].type.name.startsWith("System.Nullable") && p[2].type.name.includes("Quaternion") &&
                                p[3].type.name.startsWith("System.Nullable") && p[3].type.name.includes("PlayerRef") &&
                                p[4].type.name.includes("OnBeforeSpawned") &&
                                p[5].type.name.includes("NetworkSpawnFlags")) {
                                spawnMethod = m; break;
                            }
                        }
                        if (!spawnMethod) return null;
                        const posArg = buildNullableFromValueType(spawnMethod.parameters[1].type, pos);
                        const rotArg = buildNullableFromValueType(spawnMethod.parameters[2].type, rot);
                        let authArg;
                        if (authPlayerRef && !authPlayerRef.isNull?.()) {
                            try { authArg = buildNullableFromValueType(spawnMethod.parameters[3].type, authPlayerRef); }
                            catch(_) { authArg = buildNullableArg(spawnMethod.parameters[3].type, false, makeZeroForType(spawnMethod.parameters[3].type)); }
                        } else {
                            authArg = buildNullableArg(spawnMethod.parameters[3].type, false, makeZeroForType(spawnMethod.parameters[3].type));
                        }
                        const onBeforeArg = spawnMethod.parameters[4].type.class.isValueType ? makeZeroForType(spawnMethod.parameters[4].type) : NULL;
                        const spawned = spawnMethod.bind(runner).invoke(no, posArg, rotArg, authArg, onBeforeArg, 0);
                        return spawned;
                    }
                } catch(_) {}
            }
        } catch(e) { console.error("spawnNetworkPrefab error: " + e); }
        return null;
    }

    let _spawnItemStrOverload: any = null;
    let _spawnItemPrefabOverload: any = null;
    let _spawnItemOverloadsResolved = false;
    const ITEM_SPAWN_SOURCE_PLAYER = 1;
    const ITEM_SPAWN_SOURCE_SYSTEM = 0;
    function resolveSpawnItemOverloads() {
        if (_spawnItemOverloadsResolved) return;
        _spawnItemOverloadsResolved = true;
        try {
            for (const o of PrefabGen.method("SpawnItem").overloads()) {
                try {
                    if (o.parameterCount !== 5) continue;
                    const t0 = String(o.parameters[0].type.name ?? "");
                    if (t0.includes("GrabbableItemPrefab")) _spawnItemPrefabOverload = o;
                    else if (t0.includes("System.String")) _spawnItemStrOverload = o;
                } catch(_) {}
            }
        } catch(_) {}
    }
    function spawnItemAtPos(bareID: string, pos: any, rot: any): any {
        resolveSpawnItemOverloads();
        try {
            const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(bareID));
            if (prefab && !prefab.isNull?.() && _spawnItemPrefabOverload) {
                for (const src of [ITEM_SPAWN_SOURCE_PLAYER, ITEM_SPAWN_SOURCE_SYSTEM]) {
                    try { const r = _spawnItemPrefabOverload.invoke(prefab, pos, rot, NULL, src); if (r && !r.isNull?.()) return r; } catch(_) {}
                }
            }
        } catch(_) {}
        if (_spawnItemStrOverload) {
            for (const key of [bareID, "item_prefab/" + bareID]) {
                for (const src of [ITEM_SPAWN_SOURCE_PLAYER, ITEM_SPAWN_SOURCE_SYSTEM]) {
                    try { const r = _spawnItemStrOverload.invoke(Il2Cpp.string(key), pos, rot, NULL, src); if (r && !r.isNull?.()) return r; } catch(_) {}
                }
            }
        }
        console.error("[spawnItemAtPos] failed: " + bareID);
        return null;
    }
    function spawnItemPrefab(itemID: string, pos: any, rot: any): any {
        return spawnItemAtPos(itemID, pos, rot);
    }

    syteApplyVrSpoof();
    const UnityEngineCore = images["UnityEngine.CoreModule"];
    const UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
    const UnityEngineUI = images["UnityEngine.UI"];
    const UnityEngineUIModule = images["UnityEngine.UIModule"];
    const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
    const PhotonFusionNetworking = images["PhotonFusionNetworking"];
    const UnityEngineXR = images["UnityEngine.XRModule"];
    const UnityEngineAudio = images["UnityEngine.AudioModule"];
    let GTPlayerClass: any = null, PCClass: any = null, NetPlayer: any = null, GBIClass: any = null, PrefabGen: any = null, SFXManager: any = null, ParticleManagerClass: any = null, NetworkObjectClass: any = null;
    let NManager: any = null, GorillaReportButton: any = null, InputDevices: any = null, CommonUsages: any = null, GameObject: any = null, Object: any = null, Vector3: any = null, Quaternion: any = null, Time: any = null, Resources: any = null, Material: any = null;
    let Renderer: any = null, Shader: any = null, Color: any = null, Mesh: any = null, MeshFilter: any = null, RectTransform: any = null, LineRenderer: any = null, Camera: any = null, PlayerPrefs: any = null, GBOClass: any = null, BackpackItemClass: any = null, Light: any = null, AudioSource: any = null, MeshCollider: any = null, BoxCollider: any = null, Collider: any = null, Rigidbody: any = null, Physics: any = null;
    let Canvas: any = null, CanvasScaler: any = null, GraphicRaycaster: any = null, Text: any = null, Font: any = null;
    GTPlayer = null;
    instance = null;
    UberShader = null;
    TextShader = null;
    GTPlayerClass = AssemblyCSharp.class("AnimalCompany.GorillaLocomotion");
    PCClass = AssemblyCSharp.class("AnimalCompany.PlayerController");
    NetPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer");
    GBIClass = AssemblyCSharp.class("AnimalCompany.GrabbableItem");
    PrefabGen = AssemblyCSharp.class("AnimalCompany.PrefabGenerator");
    SFXManager = AssemblyCSharp.class("AnimalCompany.SFXManager");
    ParticleManagerClass = AssemblyCSharp.class("AnimalCompany.ParticleManager");
    NetworkObjectClass = PhotonFusionNetworking
        ? PhotonFusionNetworking.class("Fusion.NetworkObject")
        : null;
    NManager = AssemblyCSharp.class("AnimalCompany.NetworkManager");
    GorillaReportButton = AssemblyCSharp.class("AnimalCompany.ComputerTerminalKey");
    InputDevices = UnityEngineXR.class("UnityEngine.XR.InputDevices");
    CommonUsages = UnityEngineXR.class("UnityEngine.XR.CommonUsages");
    try {
        const maxHealthHook = NetPlayer.method("get_maxHealth");
        maxHealthHook.implementation = function () {
            try {
                if (infHealthEnabled && this.method("get_IsMine").invoke())
                    return 999999;
            }
            catch (_) { }
            return this.method("get_maxHealth").invoke();
        };
    }
    catch (_) { }
    GameObject = UnityEngineCore.class("UnityEngine.GameObject");
    Object = UnityEngineCore.class("UnityEngine.Object");
    Vector3 = UnityEngineCore.class("UnityEngine.Vector3");
    Quaternion = UnityEngineCore.class("UnityEngine.Quaternion");
    identityRotation = Quaternion.field("identityQuaternion").value;
    Time = UnityEngineCore.class("UnityEngine.Time");
    Resources = UnityEngineCore.class("UnityEngine.Resources");
    Material = UnityEngineCore.class("UnityEngine.Material");
    Renderer = UnityEngineCore.class("UnityEngine.Renderer");
    Shader = UnityEngineCore.class("UnityEngine.Shader");
    Color = UnityEngineCore.class("UnityEngine.Color");
    Mesh = UnityEngineCore.class("UnityEngine.Mesh");
    MeshFilter = UnityEngineCore.class("UnityEngine.MeshFilter");
    RectTransform = UnityEngineCore.class("UnityEngine.RectTransform");
    LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer");
    Camera = UnityEngineCore.class("UnityEngine.Camera");
    PlayerPrefs = UnityEngineCore.class("UnityEngine.PlayerPrefs");
    GBOClass = AssemblyCSharp.class("AnimalCompany.GrabbableObject");
    BackpackItemClass = AssemblyCSharp.class("AnimalCompany.BackpackItem");
    Light = UnityEngineCore.class("UnityEngine.Light");
    AudioSource = UnityEngineAudio.class("UnityEngine.AudioSource");
    MeshCollider = UnityEnginePhysics.class("UnityEngine.MeshCollider");
    BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider");
    Collider = UnityEnginePhysics.class("UnityEngine.Collider");
    Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody");
    Physics = UnityEnginePhysics.class("UnityEngine.Physics");
    Canvas = UnityEngineUIModule.class("UnityEngine.Canvas");
    CanvasScaler = UnityEngineUI.class("UnityEngine.UI.CanvasScaler");
    GraphicRaycaster = UnityEngineUI.class("UnityEngine.UI.GraphicRaycaster");
    Text = UnityEngineUI.class("UnityEngine.UI.Text");
    Font = UnityEngineTextRendering.class("UnityEngine.Font");
    // -- init module-level aliases so paste-ins from menu1.ts/sparkz.ts work --
    assemblyImages = Il2Cpp.domain.assemblies;
    acImage = images["AnimalCompany"];
    coreImage = images["UnityEngine.CoreModule"];
    physImage = images["UnityEngine.PhysicsModule"];
    uiImage = images["UnityEngine.UI"];
    uiModuleImage = images["UnityEngine.UIModule"];
    textRenderImage = images["UnityEngine.TextRenderingModule"];
    fusionImage = images["Fusion.Runtime"];
    tmpImage = images["Unity.TextMeshPro"];
    xrImage = images["UnityEngine.XRModule"];
    audioImage = images["UnityEngine.AudioModule"];
    GorillaLocomotionCls = GTPlayerClass;
    NetPlayerCls = NetPlayer;
    ItemVendingMachineViewCls = AssemblyCSharp.class("AnimalCompany.ItemVendingMachineView");
    ElevatorManagerCls = AssemblyCSharp.class("AnimalCompany.ElevatorManager");
    ArenaGameManagerCls = AssemblyCSharp.class("AnimalCompany.ArenaGameManager");
    GrabbableObjectCls = GBOClass;
    ItemSellingMachineControllerCls = AssemblyCSharp.class("AnimalCompany.ItemSellingMachineController");
    PrefabGeneratorCls = PrefabGen;
    GrabbableItemCls = GBIClass;
    PlayerControllerCls = PCClass;
    GrabbableObjectCls2 = GBOClass;
    SFXManagerCls = SFXManager;
    NetworkManagerCls = NManager;
    ComputerTerminalKeyCls = GorillaReportButton;
    InputDevicesCls = InputDevices;
    XRCommonUsagesCls = CommonUsages;
    GameObjectCls = GameObject;
    UnityObjectCls = Object;
    Vector3Cls = Vector3;
    QuaternionCls = Quaternion;
    TimeCls = Time;
    ResourcesCls = Resources;
    MaterialCls = Material;
    MeshRendererCls = Renderer;
    ShaderCls = Shader;
    RectTransformCls = RectTransform;
    LineRendererCls = LineRenderer;
    BoxColliderCls = BoxCollider;
    ColliderCls = Collider;
    RigidbodyCls = Rigidbody;
    PhysicsCls = Physics;
    ComponentCls = UnityEngineCore.class("UnityEngine.Component");
    ParticleManagerCls = ParticleManagerClass;
    ParticleManagerCls2 = ParticleManagerClass;
    CanvasCls = Canvas;
    CanvasScalerCls = CanvasScaler;
    GraphicRaycasterCls = GraphicRaycaster;
    UITextCls = Text;
    FontCls = Font;
    nullObjectRef = Il2Cpp.reference(Il2Cpp.domain.assembly("mscorlib").image.class("System.Object").alloc());
    function syteValid(obj) {
        try {
            if (!obj)
                return false;
            if (obj.isNull && obj.isNull())
                return false;
            if (obj.handle && obj.handle.isNull && obj.handle.isNull())
                return false;
            return true;
        }
        catch (_) {
            return !!obj;
        }
    }
    instanceField =
        GTPlayerClass && GTPlayerClass.fields
            ? GTPlayerClass.fields.find((f) => f.name.includes("Instance"))
            : null;
    GTPlayer = null;
    try {
        if (GTPlayerClass && !GTPlayerClass.handle.isNull()) {
            GTPlayer = GTPlayerClass.field("<Instance>k__BackingField").value;
        }
    }
    catch (_) { }
    if (!syteValid(GTPlayer))
        GTPlayer = null;
    instance = GTPlayer;
    if (!syteValid(instance) && instanceField) {
        try {
            instance = instanceField.value;
        }
        catch (_) { }
    }
    if (!syteValid(instance))
        instance = null;
    if (!syteValid(GTPlayer))
        GTPlayer = instance;
    rigidbody = null;
    try {
        if (syteValid(GTPlayer))
            rigidbody = GTPlayer.field("_playerRigidBody").value;
    }
    catch (_) { }
    UberShader = null;
    TextShader = null;
    function ensureShaders() {
        if (UberShader && TextShader)
            return;
        try {
            UberShader = Shader.method("Find").invoke(Il2Cpp.string("Universal Render Pipeline/Unlit"));
            TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default"));
        }
        catch (e) {
            syteLog("[-] Shader lookup failed (standard)");
        }
    }
    const zeroVector = Vector3.field("zeroVector").value;
    const oneVector = Vector3.field("oneVector").value;
    const identityQuaternion = Quaternion.field("identityQuaternion").value;
    const NULL = Il2Cpp.reference(Il2Cpp.domain.assembly("mscorlib").image.class("System.Object").alloc());
    rightHandTransform = syteValid(instance)
        ? instance.field("rightHandTransform").value
        : null;
    leftHandTransform = syteValid(instance)
        ? instance.field("leftHandTransform").value
        : null;
    headCollider = syteValid(instance)
        ? instance.field("headCollider").value
        : null;
    bodyCollider = syteValid(instance)
        ? instance.field("bodyCollider").value
        : null;
    let leftHandFollower = syteValid(instance)
        ? instance.field("leftHandFollower").value
        : null;
    let rightHandFollower = syteValid(instance)
        ? instance.field("rightHandFollower").value
        : null;
    let playerRigidBody = syteValid(instance)
        ? instance.field("_playerRigidBody").value
        : null;
    let menuFont = null;
    function ensureFont() {
        if (syteValid(menuFont))
            return;
        menuFont = null;
        try {
            const comicSansFactory = Font.methods.find((method: any) => method.name === "CreateDynamicFontFromOSFont" &&
                method.parameterCount === 2 &&
                method.parameters[0].type.name === "System.String");
            if (comicSansFactory) {
                menuFont = comicSansFactory.invoke(Il2Cpp.string("Comic Sans MS"), 28);
                if (syteValid(menuFont))
                    syteLog("[+] Comic Sans MS loaded");
            }
        }
        catch (_) { }
        if (syteValid(menuFont))
            return;
        menuFont = null;
        try {
            menuFont = Resources.method("GetBuiltinResource", 1)
                .inflate(Font)
                .invoke(Il2Cpp.string("Arial.ttf"));
        }
        catch (e) {
            syteLog("[-] Could not load menu font");
        }
    }
    function Destroy(object) {
        Object.method("Destroy", 1).invoke(object);
    }
    function getComponent(obj: any, type) {
        return obj.method("GetComponent", 1).inflate(type).invoke();
    }
    function addComponent(obj: any, type) {
        return obj.method("AddComponent", 1).inflate(type).invoke();
    }
    function getTransform(obj: any) {
        return obj.method("get_transform").invoke();
    }
    function omniGetHandTransform() {
        try {
            if (rightHandTransform && !rightHandTransform.isNull()) return rightHandTransform;
        } catch (_) {}
        return null;
    }
    function omniGunAimPlayer() {
        try {
            let _o, _f;
            if (_pcMode) {
                const _cam = Camera.method("get_main").invoke();
                if (!_cam || _cam.isNull()) return null;
                const _ct = getTransform(_cam);
                _o = _ct.method("get_position").invoke();
                _f = _ct.method("get_forward").invoke();
            } else {
                const _h = omniGetHandTransform();
                if (!_h) return null;
                _o = _h.method("get_position").invoke();
                _f = _h.method("get_forward").invoke();
            }
            const _ox = _o.field("x").value,
                _oy = _o.field("y").value,
                _oz = _o.field("z").value,
                _fx = _f.field("x").value,
                _fy = _f.field("y").value,
                _fz = _f.field("z").value;
            const LOCK_RADIUS = 3.5,
                LOCK_RANGE = 300.0;
            let _bestPerp = LOCK_RADIUS,
                _bestPl = null;
            const _vals = NetPlayerCls.field("playerIDToNetPlayer")
                .value.method("get_Values")
                .invoke();
            const _en = _vals.method("GetEnumerator").invoke();
            while (_en.method("MoveNext").invoke()) {
                const _pl = _en.method("get_Current").invoke();
                if (!_pl || _pl.handle.isNull()) continue;
                try {
                    if (_pl.method("get_IsMine").invoke()) continue;
                    const _pp = getTransform(_pl).method("get_position").invoke();
                    const _px = _pp.field("x").value,
                        _py = _pp.field("y").value,
                        _pz = _pp.field("z").value;
                    const _dx = _px - _ox,
                        _dy = _py - _oy,
                        _dz = _pz - _oz;
                    const _t = _dx * _fx + _dy * _fy + _dz * _fz;
                    if (_t < 0.5 || _t > LOCK_RANGE) continue;
                    const _cx = _ox + _fx * _t,
                        _cy = _oy + _fy * _t,
                        _cz = _oz + _fz * _t;
                    const _ex = _px - _cx,
                        _ey = _py - _cy,
                        _ez = _pz - _cz;
                    const _perp = Math.sqrt(_ex * _ex + _ey * _ey + _ez * _ez);
                    if (_perp < _bestPerp) {
                        _bestPerp = _perp;
                        _bestPl = _pl;
                    }
                } catch (_) {}
            }
            return _bestPl;
        } catch (_) {
            return null;
        }
    }
    function syteSetVelocity(rb: any, velocity: [number, number, number] | any) {
        try {
            let value = velocity;
            if (Array.isArray(velocity)) {
                value = Vector3.method("get_zero").invoke();
                value.field("x").value = velocity[0];
                value.field("y").value = velocity[1];
                value.field("z").value = velocity[2];
            }
            try {
                rb.method("set_linearVelocity").invoke(value);
            }
            catch (_) {
                rb.method("set_velocity").invoke(value);
            }
        }
        catch (_) { }
    }
    function getPlainMenuText(text: string): string {
        return text.replace(/</g, "\u2039").replace(/>/g, "\u203a");
    }
    function makeAnimatedGradientText(text: string, phase: number): string {
        let result = "";
        let visibleIndex = 0;
        const displayText = getPlainMenuText(text);
        for (const character of displayText) {
            if (character === " " || character === "\n") {
                result += character;
                continue;
            }
            const wave = 0.5 + 0.5 * Math.sin(phase + visibleIndex * 0.48);
            const red = Math.round(textGradientDarkTone * 0.1 +
                wave * (textGradientLightTone * 0.1 - textGradientDarkTone * 0.1));
            const green = Math.round(textGradientDarkTone * 0.1 +
                wave * (textGradientLightTone * 0.1 - textGradientDarkTone * 0.1));
            const blue = Math.round(textGradientDarkTone +
                wave * (textGradientLightTone - textGradientDarkTone));
            const rHex = red.toString(16).padStart(2, "0");
            const gHex = green.toString(16).padStart(2, "0");
            const bHex = blue.toString(16).padStart(2, "0");
            result += `<color=#${rHex}${gHex}${bHex}>${character}</color>`;
            visibleIndex++;
        }
        return result;
    }
    function updateAnimatedMenuText() {
        if (!textGradientEnabled || !menu || frameCount % 4 !== 0)
            return;
        for (const item of animatedMenuTexts) {
            try {
                if (!item.component || item.component.isNull?.())
                    continue;
                item.component
                    .method("set_text")
                    .invoke(Il2Cpp.string(makeAnimatedGradientText(item.text, time * textGradientSpeed + item.phase)));
            }
            catch (_) { }
        }
    }
    function renderMenuText(canvasObject, text: string = "", color: [
        number,
        number,
        number,
        number
    ] = [1, 1, 1, 1], pos = zeroVector, size = oneVector) {
        ensureFont();
        const title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
        try { const c = getComponent(title, Collider); if (c && !c.isNull?.()) Destroy(c); } catch (_) { }
        try { const rb = getComponent(title, Rigidbody); if (rb && !rb.isNull?.()) Destroy(rb); } catch (_) { }
        const textPhase = animatedMenuTexts.length * 0.73;
        title.method("set_supportRichText").invoke(true);
        title
            .method("set_text")
            .invoke(Il2Cpp.string(textGradientEnabled
            ? makeAnimatedGradientText(text, time * textGradientSpeed + textPhase)
            : getPlainMenuText(text)));
        title.method("set_font").invoke(menuFont);
        title.method("set_fontSize").invoke(1);
        title
            .method("set_color")
            .invoke(textGradientEnabled ? [1, 1, 1, color[3]] : color);
        title.method("set_fontStyle").invoke(0);
        title.method("set_alignment").invoke(4);
        title.method("set_resizeTextForBestFit").invoke(true);
        title.method("set_resizeTextMinSize").invoke(0);
        const rectTransform = getComponent(title, RectTransform);
        rectTransform.method("set_sizeDelta").invoke(size);
        rectTransform.method("set_position").invoke(pos);
        rectTransform
            .method("set_rotation")
            .invoke(Quaternion.method("Euler").invoke(180.0, 90.0, 90.0));
        if (textGradientEnabled)
            animatedMenuTexts.push({ component: title, text, phase: textPhase });
    }
    function createObject(pos = zeroVector, rot = identityQuaternion, scale = oneVector, primitiveType: number = 3, colorArr: [
        number,
        number,
        number,
        number
    ] = [1, 1, 1, 1], parent = null) {
        const obj = GameObject.method("CreatePrimitive").invoke(primitiveType);
        const renderer = getComponent(obj, Renderer);
        if (colorArr[3] == 0) {
            renderer.method("set_enabled").invoke(false);
        }
        else {
            ensureShaders();
            const material = renderer.method("get_material").invoke();
            if (UberShader)
                material.method("set_shader").invoke(UberShader);
            material.method("set_color").invoke(colorArr);
        }
        const transform = getTransform(obj);
        if (parent != null)
            transform.method("SetParent", 2).invoke(parent, false);
        transform.method("set_position").invoke(pos);
        transform.method("set_rotation").invoke(rot);
        transform.method("set_localScale").invoke(scale);
        return obj;
    }
    const roundedMeshCache = new Map<string, any>();
    function getRoundedBoxMesh(width: number, height: number, cornerRadius: number): any {
        const normalizedY = Math.max(0.001, Math.min(0.46, cornerRadius / Math.max(width, 0.001)));
        const normalizedZ = Math.max(0.001, Math.min(0.46, cornerRadius / Math.max(height, 0.001)));
        const cacheKey = normalizedY.toFixed(4) + ":" + normalizedZ.toFixed(4);
        const cached = roundedMeshCache.get(cacheKey);
        if (cached && !cached.isNull?.())
            return cached;
        const perimeter: Array<[
            number,
            number
        ]> = [];
        const cornerSegments = 10;
        const corners: Array<[
            number,
            number,
            number,
            number
        ]> = [
            [0.5 - normalizedY, 0.5 - normalizedZ, 0, Math.PI * 0.5],
            [
                -0.5 + normalizedY,
                0.5 - normalizedZ,
                Math.PI * 0.5,
                Math.PI,
            ],
            [
                -0.5 + normalizedY,
                -0.5 + normalizedZ,
                Math.PI,
                Math.PI * 1.5,
            ],
            [
                0.5 - normalizedY,
                -0.5 + normalizedZ,
                Math.PI * 1.5,
                Math.PI * 2,
            ],
        ];
        for (const [centerY, centerZ, startAngle, endAngle] of corners) {
            for (let segment = 0; segment <= cornerSegments; segment++) {
                const t = segment / cornerSegments;
                const angle = startAngle + (endAngle - startAngle) * t;
                perimeter.push([
                    centerY + Math.cos(angle) * normalizedY,
                    centerZ + Math.sin(angle) * normalizedZ,
                ]);
            }
        }
        const vertices: Array<[
            number,
            number,
            number
        ]> = [];
        for (const [y, z] of perimeter)
            vertices.push([0.5, y, z]);
        for (const [y, z] of perimeter)
            vertices.push([-0.5, y, z]);
        const ringCount = perimeter.length;
        const frontCenter = vertices.length;
        vertices.push([0.5, 0, 0]);
        const backCenter = vertices.length;
        vertices.push([-0.5, 0, 0]);
        const triangles: number[] = [];
        for (let index = 0; index < ringCount; index++) {
            const next = (index + 1) % ringCount;
            triangles.push(frontCenter, index, next);
            triangles.push(backCenter, next + ringCount, index + ringCount);
            triangles.push(index, index + ringCount, next + ringCount);
            triangles.push(index, next + ringCount, next);
        }
        const vertexArray = Il2Cpp.array(Vector3, vertices.length);
        for (let index = 0; index < vertices.length; index++) {
            vertexArray.set(index, Il2Cpp.fromFridaValue(vertices[index], Vector3.type));
        }
        const triangleArray = Il2Cpp.array(Il2Cpp.corlib.class("System.Int32"), triangles);
        const mesh = Mesh.alloc();
        mesh.method(".ctor", 0).invoke();
        mesh.method("set_vertices").invoke(vertexArray);
        mesh.method("set_triangles").invoke(triangleArray);
        mesh.method("RecalculateBounds", 0).invoke();
        mesh.method("RecalculateNormals", 0).invoke();
        roundedMeshCache.set(cacheKey, mesh);
        return mesh;
    }
    function createOutlinedRoundedObject(pos: [
        number,
        number,
        number
    ], scale: [
        number,
        number,
        number
    ], fillColor: [
        number,
        number,
        number,
        number
    ], outlineColor: [
        number,
        number,
        number,
        number
    ], parent: any, interactive: boolean = false, outlineSize: number = 0.025) {
        const createLayer = (center: [
            number,
            number,
            number
        ], size: [
            number,
            number,
            number
        ], color: [
            number,
            number,
            number,
            number
        ], keepCollider: boolean, cornerRadius: number) => {
            const layer = createObject(center, identityQuaternion, size, 3, color, parent);
            try {
                const filter = getComponent(layer, MeshFilter);
                filter
                    .method("set_sharedMesh")
                    .invoke(getRoundedBoxMesh(size[1], size[2], cornerRadius));
            }
            catch (e) {
                syteLog("[-] Rounded mesh fallback: " + e);
            }
            if (!keepCollider) {
                try { const c = getComponent(layer, Collider); if (c && !c.isNull?.()) Destroy(c); } catch (_) { }
            }
            else {
                try {
                    const c = getComponent(layer, Collider);
                    if (c && !c.isNull?.()) c.method("set_isTrigger").invoke(true);
                } catch (_) { }
            }
            try { const rb = getComponent(layer, Rigidbody); if (rb && !rb.isNull?.()) Destroy(rb); } catch (_) { }
            return layer;
        };
        const fillRadius = Math.min(Math.min(scale[1], scale[2]) * cornerRoundness, 0.06);
        if (outlinesEnabled && outlineSize > 0) {
            createLayer([pos[0] - 0.001, pos[1], pos[2]], [
                scale[0],
                scale[1] + outlineSize * 2,
                scale[2] + outlineSize * 2,
            ], outlineColor, false, fillRadius + outlineSize);
        }
        return createLayer(pos, scale, fillColor, interactive, fillRadius);
    }
    function sendNotification(_text: string = "", _reload: boolean = true, _t: number = 5) { void _text; void _reload; void _t; }








    function renderMenu() {
        animatedMenuTexts = [];
        if (!buttons[currentCategory]) {
            currentCategory = 0;
            currentPage = 0;
        }
        const buttonsPerPage = getButtonsPerPage();
        const categoryButtons = buttons[currentCategory] || buttons[0];
        const maxCurrentPage = Math.max(Math.ceil(categoryButtons.length / buttonsPerPage) - 1, 0);
        if (currentPage > maxCurrentPage)
            currentPage = maxCurrentPage;
        const targetMods = categoryButtons
            .slice(currentPage * buttonsPerPage)
            .slice(0, buttonsPerPage);
        const rowStartZ = 0.075;
        const panelCenterZ = -0.03;
        const panelScaleZ = 0.76;
        const pageCenterZ = -0.045;
        const pageScaleZ = 0.64;
        menu = createObject(zeroVector, identityQuaternion, [0.1, 0.3, 0.3825], 3, [0, 0, 0, 0]);
        menuSnapNextFrame = true;
        try { const c = getComponent(menu, Collider); if (c && !c.isNull?.()) Destroy(c); } catch (_) { }
        try { const rb = getComponent(menu, Rigidbody); if (rb && !rb.isNull?.()) Destroy(rb); } catch (_) { }
        const menuBackground = createOutlinedRoundedObject([0.1, 0, panelCenterZ], [0.1, 0.72, panelScaleZ], bgColor, menuOutlineColor, getTransform(menu), false, menuOutlineThickness);
        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        try { const c = getComponent(canvasObject, Collider); if (c && !c.isNull?.()) Destroy(c); } catch (_) { }
        try { const rb = getComponent(canvasObject, Rigidbody); if (rb && !rb.isNull?.()) Destroy(rb); } catch (_) { }
        const canvas = addComponent(canvasObject, Canvas);
        const canvasScaler = addComponent(canvasObject, CanvasScaler);
        addComponent(canvasObject, GraphicRaycaster);
        canvas.method("set_renderMode").invoke(2);
        canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1000.0);
        renderMenuText(canvasObject, "OMNI MENU", textColor, [0.11, 0, 0.103], [titleWidth, titleHeight]);
        const disconnectButton = createOutlinedRoundedObject([0.1, 0.0, 0.142], [0.09, disconnectButtonWidth, 0.065], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
        disconnectButton.method("set_name").invoke(Il2Cpp.string("@Disconnect"));
        addComponent(disconnectButton, GorillaReportButton);
        renderMenuText(canvasObject, "Disconnect", textColor, [0.11, 0, 0.142], [0.6, 0.065]);
        {
            {
                const pageButton = createOutlinedRoundedObject([0.1, 0.14, pageCenterZ], [0.09, pageButtonWidth, pageScaleZ], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
                pageButton.method("set_name").invoke(Il2Cpp.string("@PreviousPage"));
                addComponent(pageButton, GorillaReportButton);
                renderMenuText(canvasObject, "<", textColor, [0.11, 0.14, pageCenterZ], [0.25, 0.075]);
            }
            {
                const pageButton = createOutlinedRoundedObject([0.1, -0.14, pageCenterZ], [0.09, pageButtonWidth, pageScaleZ], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
                pageButton.method("set_name").invoke(Il2Cpp.string("@NextPage"));
                addComponent(pageButton, GorillaReportButton);
                renderMenuText(canvasObject, ">", textColor, [0.11, -0.14, pageCenterZ], [0.25, 0.075]);
            }
        }
        let i = 0;
        targetMods.forEach((buttonData, index) => {
            const rowZ = rowStartZ - i * rowButtonSpacing;
            if (buttonData.stepDown && buttonData.stepUp) {
                const labelWidth = rowButtonWidth * 0.56;
                const sideWidth = rowButtonWidth * 0.18;
                const sideOffset = rowButtonWidth * 0.12;
                createOutlinedRoundedObject([0.105, 0, rowZ], [0.09, labelWidth, rowButtonHeight], buttonColor, buttonOutlineColor, getTransform(menu), false, rowOutlineThickness);
                for (const [control, y, symbol] of [
                    [buttonData.stepDown, sideOffset, "-"],
                    [buttonData.stepUp, -sideOffset, "+"],
                ] as Array<[
                    ButtonInfo,
                    number,
                    string
                ]>) {
                    const stepButton = createOutlinedRoundedObject([0.105, y, rowZ], [0.09, sideWidth, rowButtonHeight], buttonColor, buttonOutlineColor, getTransform(menu), true, rowOutlineThickness);
                    stepButton
                        .method("set_name")
                        .invoke(Il2Cpp.string("@" + control.activationId));
                    addComponent(stepButton, GorillaReportButton);
                    renderMenuText(canvasObject, symbol, textColor, [0.11, y, rowZ], [sideWidth * 0.8, 0.045]);
                }
                let stepLabel = buttonData.buttonText;
                if (_pcMode && _pcMenuOpen && i === _pcMenuSelector)
                    stepLabel = "> " + stepLabel;
                renderMenuText(canvasObject, stepLabel, textColor, [0.11, 0, rowZ], [labelWidth * 0.92, 0.046]);
                i++;
                return;
            }
            const button = createOutlinedRoundedObject([0.105, 0, rowZ], [0.09, rowButtonWidth, rowButtonHeight], buttonColor, buttonOutlineColor, getTransform(menu), true, rowOutlineThickness);
            button
                .method("set_name")
                .invoke(Il2Cpp.string("@" + buttonData.activationId));
            addComponent(button, GorillaReportButton);
            let finalBtnText = buttonData.buttonText;
            if (_pcMode && _pcMenuOpen && i === _pcMenuSelector) {
                finalBtnText = "> " + finalBtnText;
            }
            renderMenuText(canvasObject, finalBtnText, textColor, [0.11, 0, rowZ], [0.8, 0.048]);
            updateButtonColor(button, buttonData, i);
            i++;
        });
        getTransform(menu)
            .method("set_localScale")
            .invoke(Vector3.method("op_Multiply").invoke(Vector3.method("op_Multiply").invoke(getTransform(menu).method("get_localScale").invoke(), GTPlayer.field("<playerScale>k__BackingField").value), menuscale));
        menuClosing = false;
        recenterMenu();
    }
    function renderReference() {
        if (righthand) {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, leftHandTransform);
            referenceCollider = getComponent(reference, Collider);
            getTransform(reference)
                .method("set_localPosition")
                .invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        }
        else {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, rightHandTransform);
            referenceCollider = getComponent(reference, Collider);
            getTransform(reference)
                .method("set_localPosition")
                .invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        }
    }
    function recenterMenu() {
        try {
            if (!menu)
                return;
            const menuTransform = getTransform(menu);
            let targetPos: any = zeroVector;
            let targetRot: any = identityQuaternion;
            if (_pcMode) {
                const headTransform = getTransform(headCollider);
                if (headTransform && !headTransform.isNull?.()) {
                    const headPos = headTransform.method("get_position").invoke();
                    const headFwd = headTransform.method("get_forward").invoke();
                    const headRot = headTransform.method("get_rotation").invoke();
                    targetPos = Vector3.method("op_Addition").invoke(headPos, Vector3.method("op_Multiply", 2).invoke(headFwd, pcMenuDistance));
                    targetRot = Quaternion.method("op_Multiply").invoke(headRot, Quaternion.method("Euler").invoke(-90, 90, 0));
                }
            }
            else {
                const handTransform = righthand
                    ? rightHandTransform
                    : leftHandTransform;
                if (!handTransform || handTransform.isNull?.())
                    return;
                const handPos = handTransform.method("get_position").invoke();
                const handRight = handTransform.method("get_right").invoke();
                const palmInset = Vector3.method("op_Multiply").invoke(handRight, righthand ? vrMenuPalmInset : -vrMenuPalmInset);
                let viewRightOffset: any = zeroVector;
                try {
                    const headRight = getTransform(headCollider)
                        .method("get_right")
                        .invoke();
                    viewRightOffset = Vector3.method("op_Multiply", 2).invoke(headRight, vrMenuRightOffset);
                }
                catch (_) { }
                targetPos = Vector3.method("op_Addition").invoke(Vector3.method("op_Addition").invoke(Vector3.method("op_Addition").invoke(handPos, [0, vrMenuUpOffset, 0]), palmInset), viewRightOffset);
                targetRot = handTransform.method("get_rotation").invoke();
                if (righthand) {
                    targetRot = Quaternion.method("op_Multiply").invoke(targetRot, Quaternion.method("Euler").invoke(0, 0, 180));
                }
                targetRot = Quaternion.method("op_Multiply").invoke(targetRot, Quaternion.method("Euler").invoke(0, vrMenuTilt, 0));
            }
            if (menuSnapNextFrame || !LerpMenu) {
                menuTransform.method("set_position").invoke(targetPos);
                menuTransform.method("set_rotation").invoke(targetRot);
                menuSnapNextFrame = false;
                return;
            }
            const followAlpha = Math.min(1, Math.max(deltaTime, 0.0001) * Math.max(2, menuFollowSmoothness));
            menuTransform
                .method("set_position")
                .invoke(Vector3.method("Lerp").invoke(menuTransform.method("get_position").invoke(), targetPos, followAlpha));
            menuTransform
                .method("set_rotation")
                .invoke(Quaternion.method("Slerp").invoke(menuTransform.method("get_rotation").invoke(), targetRot, followAlpha));
        }
        catch (_) { }
    }
    function reloadMenu() {
        if (menu != null) {
            menuReloading = true;
            Object.method("Destroy", 1).invoke(menu);
            menu = null;
            menuAnimation = 1;
        }
    }
    function updateMenuAnimation(opening: boolean) {
        if (!menu)
            return;
        const speed = opening ? menuOpenSpeed : menuCloseSpeed;
        menuAnimation += (opening ? 1 : -1) * deltaTime * speed;
        menuAnimation = Math.max(0, Math.min(1, menuAnimation));
        const eased = opening
            ? 1 - Math.pow(1 - menuAnimation, 3)
            : menuAnimation * menuAnimation;
        const playerScale = GTPlayer.field("<playerScale>k__BackingField").value;
        const animatedScale = Math.max(0.025, eased) * menuscale * playerScale;
        getTransform(menu)
            .method("set_localScale")
            .invoke(Vector3.method("op_Multiply").invoke([0.1, 0.3, 0.3825], animatedScale));
    }
    function updateButtonColor(button: any, buttonData: ButtonInfo, index: number = -1) {
        const RendererClass = Il2Cpp.domain
            .assembly("UnityEngine.CoreModule")
            .image.class("UnityEngine.Renderer");
        const finalColor = buttonData.enabled ? buttonPressedColor : buttonColor;
        try {
            const renderer = getComponent(button, RendererClass);
            if (!renderer || renderer.isNull?.())
                return;
            renderer
                .method("get_material")
                .invoke()
                .method("set_color")
                .invoke(finalColor);
        }
        catch (_) { }
    }
    function createEmbeddedCustomClickClip() {
        if (customClickClip && customClickAudioSource)
            return;
        let setupStage = "decode PCM";
        try {
            const convert = Il2Cpp.corlib.class("System.Convert");
            const pcmBytes = convert
                .method("FromBase64String", 1)
                .invoke(Il2Cpp.string(CLICK_PCM_BASE64));
            const floats = new Float32Array(CLICK_PCM_SAMPLES);
            for (let i = 0; i < CLICK_PCM_SAMPLES; i++) {
                const lo = Number(pcmBytes.get(i * 2)) & 0xff;
                const hi = Number(pcmBytes.get(i * 2 + 1)) & 0xff;
                let sample = lo | (hi << 8);
                if (sample >= 0x8000)
                    sample -= 0x10000;
                floats[i] = sample / 32768;
            }
            setupStage = "create AudioClip";
            const audioClipClass = images["UnityEngine.AudioModule"].class("UnityEngine.AudioClip");
            customClickClip = audioClipClass
                .method("Create", 5)
                .invoke(Il2Cpp.string("SyteClick"), CLICK_PCM_SAMPLES, 1, CLICK_PCM_RATE, false);
            const sampleArray = Il2Cpp.array(Il2Cpp.corlib.class("System.Single"), CLICK_PCM_SAMPLES);
            setupStage = "upload samples";
            sampleArray.elements.write(floats);
            customClickClip.method("SetData", 2).invoke(sampleArray, 0);
            setupStage = "create AudioSource";
            const audioObject = GameObject.alloc();
            audioObject.method(".ctor", 1).invoke(Il2Cpp.string("SyteMenuAudio"));
            customClickAudioSource = addComponent(audioObject, AudioSource);
            customClickAudioSource.method("set_spatialBlend").invoke(0);
            customClickAudioSource.method("set_volume").invoke(1);
        }
        catch (e) {
            customClickClip = null;
            customClickAudioSource = null;
            syteError("Custom click PCM setup failed (" + setupStage + "): " + e);
        }
    }
    function beginCustomClickLoad() {
        if (customClickLoadAttempted)
            return;
        customClickLoadAttempted = true;
        createEmbeddedCustomClickClip();
    }
    function updateCustomClickLoad() {
        if (!customClickLoadAttempted)
            beginCustomClickLoad();
    }
    function playButtonSound() {
        if (customClickAudioSource && customClickClip) {
            try {
                customClickAudioSource.method("PlayOneShot", 1).invoke(customClickClip);
                return;
            }
            catch (_) { }
        }
        const sound = buttonSound;
        const NetworkRunner = SFXManager.method("get__currentRunner").invoke();
        SFXManager.method("RPC_PlaySFX").invoke(NetworkRunner, sound, 1, leftHandTransform.method("get_position").invoke(), 1.0);
    }
    function styleActionButton(label: string, action: () => void): ButtonInfo {
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                action();
                reloadMenu();
            },
            isTogglable: false,
            toolTip: "Menu style: " + label,
        });
    }
    function styleStepper(label: string, decrease: () => void, increase: () => void): ButtonInfo {
        const down = styleActionButton(label + " -", decrease);
        const up = styleActionButton(label + " +", increase);
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                increase();
                reloadMenu();
            },
            isTogglable: false,
            stepDown: down,
            stepUp: up,
        });
    }
    const selectionStepperRefreshers: Array<() => void> = [];
    function selectionStepper(label: string, selectedValue: () => string, decrease: () => void, increase: () => void): ButtonInfo {
        let selector: ButtonInfo;
        const refreshLabel = () => {
            selector.buttonText = label + ": " + selectedValue();
        };
        const changeSelection = (change: () => void) => {
            change();
            selectionStepperRefreshers.forEach((refresh) => refresh());
            sendNotification(selector.buttonText, false);
        };
        const down = new ButtonInfo({
            buttonText: "Previous " + label,
            method: () => changeSelection(decrease),
            isTogglable: false,
        });
        const up = new ButtonInfo({
            buttonText: "Next " + label,
            method: () => changeSelection(increase),
            isTogglable: false,
        });
        selector = new ButtonInfo({
            buttonText: label + ": " + selectedValue(),
            method: () => changeSelection(increase),
            isTogglable: false,
            stepDown: down,
            stepUp: up,
        });
        selectionStepperRefreshers.push(refreshLabel);
        refreshLabel();
        return selector;
    }
    function styleToggleButton(label: string, enabled: boolean, enable: () => void, disable: () => void, toolTip: string): ButtonInfo {
        const button = new ButtonInfo({
            buttonText: label,
            enableMethod: enable,
            disableMethod: disable,
            isTogglable: true,
            toolTip,
        });
        button.enabled = enabled;
        return button;
    }
    let omniBetterGodModeEnabled = false;
    let omniBetterGodModeHookSet = false;
    let omniGodModeEnabled = false;
    function omniVecNum(_p: any, _i: number, _f: string): number {
        try {
            let _v = _p[_i];
            if ((_v === undefined || _v === null) && _p.field) _v = _p.field(_f).value;
            return Number(_v || 0);
        } catch (_) { return 0; }
    }
    function omniIsGoodPosition(_p: any): boolean {
        try {
            if (!_p) return false;
            const _x = omniVecNum(_p, 0, "x"), _y = omniVecNum(_p, 1, "y"), _z = omniVecNum(_p, 2, "z");
            if (!isFinite(_x) || !isFinite(_y) || !isFinite(_z)) return false;
            if (Math.abs(_x) + Math.abs(_y) + Math.abs(_z) < 0.01) return false;
            if (Math.abs(_x) > 100000 || Math.abs(_y) > 100000 || Math.abs(_z) > 100000) return false;
            return true;
        } catch (_) { return false; }
    }
    function omniGetPlayerControllerInstance(): any {
        try { return PCClass.method("get_instance").invoke(); } catch (_e) { return null; }
    }
    function omniGetLocalPlayer(): any {
        try { return NetPlayer.method("get_localPlayer").invoke(); } catch (_e) { return null; }
    }
    function omniGetLocalNetPlayerSafe(): any {
        try { return NetPlayer.method("get_localPlayer").invoke(); } catch (_e) { return omniGetLocalPlayer(); }
    }
    function omniGetSafeSelfPosition(): any {
        try { const _p = getTransform(headCollider).method("get_position").invoke(); if (omniIsGoodPosition(_p)) return _p; } catch (_) {}
        try { const _pc = omniGetPlayerControllerInstance(); if (_pc && !_pc.handle.isNull()) { const _p = getTransform(_pc).method("get_position").invoke(); if (omniIsGoodPosition(_p)) return _p; } } catch (_) {}
        try { const _lp = omniGetLocalNetPlayerSafe(); if (_lp && !_lp.handle.isNull()) { const _p = getTransform(_lp).method("get_position").invoke(); if (omniIsGoodPosition(_p)) return _p; } } catch (_) {}
        try { const _p = rightHandTransform.method("get_position").invoke(); if (omniIsGoodPosition(_p)) return _p; } catch (_) {}
        return null;
    }
    function omniRestoreSelfPosition(_pos: any): boolean {
        if (!omniIsGoodPosition(_pos)) return false;
        let _ok = false;
        try { const _pc = omniGetPlayerControllerInstance(); if (_pc && !_pc.handle.isNull()) { try { getTransform(_pc).method("set_position").invoke(_pos); _ok = true; } catch (_) {} } } catch (_) {}
        try { const _lp = omniGetLocalNetPlayerSafe(); if (_lp && !_lp.handle.isNull()) { try { getTransform(_lp).method("set_position").invoke(_pos); _ok = true; } catch (_) {} } } catch (_) {}
        return _ok;
    }
    function omniReviveSelf(): void {
        let _ok = false;
        const _keepPos = omniGetSafeSelfPosition();
        try {
            const _pc = omniGetPlayerControllerInstance();
            if (_pc && !_pc.handle.isNull()) {
                try { _pc.method("CancelReviveInvincibility").invoke(); } catch (_) {}
                try { _pc.method("RealiveWithHealth").invoke(100); _ok = true; } catch (_) {}
                try { _pc.method("Revive").invoke(); _ok = true; } catch (_) {}
                try { _pc.method("AddPlayerHealth").invoke(999); } catch (_) {}
                try { _pc.field("_isDie").value = false; _ok = true; } catch (_) {}
                try { _pc.field("_isInvincible").value = true; } catch (_) {}
                try { _pc.field("_maxHealth").value = 100; } catch (_) {}
                try { _pc.field("<healthLost>k__BackingField").value = 0; } catch (_) {}
                try { _pc.field("<healthHealed>k__BackingField").value = 100; } catch (_) {}
                try { _pc.method("UpdateReviving").invoke(false); } catch (_) {}
                try { _pc.field("_deathCoroutine").value = null; } catch (_) {}
                try { omniRestoreSelfPosition(_keepPos); } catch (_) {}
            }
        } catch (_e) { console.error("[NoDeath ReviveSelf PlayerController]", _e); }
        try {
            const _lp = omniGetLocalNetPlayerSafe();
            if (_lp && !_lp.handle.isNull()) {
                try { _lp.method("set_isDie").invoke(false); _ok = true; } catch (_) {}
                try { _lp.method("set_isInvincible").invoke(true); } catch (_) {}
                try { _lp.method("set_isControllingBody").invoke(true); } catch (_) {}
                try { _lp.method("HandleLocalPlayerDie").invoke(false); } catch (_) {}
                try { _lp.method("RPC_DoPlayerDie").invoke(false); _ok = true; } catch (_) {}
                try { omniRestoreSelfPosition(_keepPos); } catch (_) {}
            }
        } catch (_e2) { console.error("[NoDeath ReviveSelf NetPlayer]", _e2); }
    }
    function omniIsLocalPlayerController(_self: any): boolean {
        try {
            const _pc = omniGetPlayerControllerInstance();
            return (_pc && _self && _pc.handle && _self.handle && _pc.handle.equals(_self.handle));
        } catch (_) {}
        return true;
    }
    function omniInstallBetterGodModeHook(): boolean {
        if (omniBetterGodModeHookSet) return true;
        let _ok = false;
        try {
            const _pcCls = PCClass;
            const _blockVoid = (_name: string, _argc: number) => {
                try {
                    const _m = _pcCls.method(_name, _argc);
                    _m.implementation = function () {
                        if ((omniBetterGodModeEnabled || omniGodModeEnabled) && omniIsLocalPlayerController(this)) return;
                        return this.method(_name, _argc).invoke(...arguments);
                    };
                    _ok = true;
                } catch (_) {}
            };
            _blockVoid("PlayerHit", 6);
            _blockVoid("PlayerHit", 4);
            _blockVoid("PlayerStun", 4);
            _blockVoid("ForcePlayerStun", 2);
            _blockVoid("SubtractPlayerHealthButNotDie", 1);
            _blockVoid("SubtractPlayerHealth", 1);
            _blockVoid("Die", 0);
            _blockVoid("PlayerDie", 3);
            try {
                const _deathFx = _pcCls.method("PlayerDeathEffect");
                _deathFx.implementation = function () {
                    if ((omniBetterGodModeEnabled || omniGodModeEnabled) && omniIsLocalPlayerController(this)) return;
                    return this.method("PlayerDeathEffect").invoke();
                };
                _ok = true;
            } catch (_) {}
        } catch (_e) { console.error("[NoDeath PlayerController]", _e); }
        try {
            const _npCls = NetPlayer;
            const _hook = (_name: string, _argc: number) => {
                try {
                    const _m = _npCls.method(_name, _argc);
                    _m.implementation = function () {
                        if (omniBetterGodModeEnabled || omniGodModeEnabled) {
                            try { if (this.method("get_IsMine").invoke()) return; } catch (_) {}
                            try { if (this.method("get_isMine").invoke()) return; } catch (_) {}
                        }
                        return this.method(_name, _argc).invoke(...arguments);
                    };
                    _ok = true;
                } catch (_) {}
            };
            _hook("RPC_PlayerHit", 3);
            _hook("RPC_PlayerHit", 6);
            _hook("RPC_PlayerStun", 4);
            try {
                const _rpcDie = _npCls.method("RPC_DoPlayerDie", 1);
                _rpcDie.implementation = function (isDie: any) {
                    if ((omniBetterGodModeEnabled || omniGodModeEnabled) && isDie) {
                        try { this.method("set_isDie").invoke(false); } catch (_) {}
                        try { omniReviveSelf(); } catch (_) {}
                        return;
                    }
                    return this.method("RPC_DoPlayerDie", 1).invoke(isDie);
                };
                _ok = true;
            } catch (_) {}
        } catch (_e2) { console.error("[NoDeath NetPlayer]", _e2); }
        omniBetterGodModeHookSet = _ok;
        return _ok;
    }
    function omniKeepAliveSelf(): void {
        try {
            const _pc = omniGetPlayerControllerInstance();
            if (_pc && !_pc.handle.isNull()) {
                try { _pc.field("_isDie").value = false; } catch (_) {}
                try { _pc.field("_isInvincible").value = true; } catch (_) {}
                try { _pc.field("_maxHealth").value = 100; } catch (_) {}
                try { _pc.field("<healthLost>k__BackingField").value = 0; } catch (_) {}
                try { _pc.method("AddPlayerHealth").invoke(999); } catch (_) {}
                try { if (_pc.method("get_isDead").invoke()) omniReviveSelf(); } catch (_) {}
            }
        } catch (_) {}
        try {
            const _lp = omniGetLocalNetPlayerSafe();
            if (_lp && !_lp.handle.isNull()) {
                try { _lp.method("set_isDie").invoke(false); } catch (_) {}
                try { _lp.method("set_isInvincible").invoke(true); } catch (_) {}
            }
        } catch (_) {}
    }
    const TEMPLATE_MENU_CATEGORIES: MenuTemplateCategory[] = [];
    const TEMPLATE_MENU_BUTTONS: MenuTemplateAddition[] = [];
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("credits", [
        { buttonText: "Qstar - idk", method: () => {}, isTogglable: false },
        { buttonText: "Byte - menu design", method: () => { try { Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Application").method("OpenURL", 1).invoke(Il2Cpp.string("https://discord.gg/sU7MwGCwUC")); } catch(_) {} }, isTogglable: false, toolTip: "join the discord" },    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("player", [
        menuToggle("Fly", {
            onUpdate: () => {
                if (!playerRigidBody || playerRigidBody.isNull?.()) return;
                if (rightTrigger) {
                    const fwd = rightHandTransform.method("get_forward").invoke();
                    const force = Vector3.method("op_Multiply", 2).invoke(fwd, flySpeed * deltaTime);
                    playerRigidBody.method("AddForce", 2).invoke(force, 2);
                }
                if (leftTrigger) {
                    const fwd = leftHandTransform.method("get_forward").invoke();
                    const force = Vector3.method("op_Multiply", 2).invoke(fwd, flySpeed * deltaTime);
                    playerRigidBody.method("AddForce", 2).invoke(force, 2);
                }
            },
            toolTip: "hold triggers to fly bro",
        }),
        menuStepper("Fly Speed", () => {
            flySpeedIndex = Math.max(0, flySpeedIndex - 1);
            flySpeed = flySpeeds[flySpeedIndex];
            sendNotification("Fly Speed: " + flySpeed, false);
        }, () => {
            flySpeedIndex = Math.min(flySpeeds.length - 1, flySpeedIndex + 1);
            flySpeed = flySpeeds[flySpeedIndex];
            sendNotification("Fly Speed: " + flySpeed, false);
        }, "adjust fly speed"),
        menuToggle("GodMode", {
            onEnable: () => {
                omniBetterGodModeEnabled = omniInstallBetterGodModeHook();
                if (omniBetterGodModeEnabled) omniKeepAliveSelf();
                sendNotification(omniBetterGodModeEnabled ? "GodMode ON" : "GodMode failed", false, 2);
            },
            onDisable: () => {
                omniBetterGodModeEnabled = false;
                sendNotification("GodMode OFF", false, 2);
            },
            onUpdate: () => {
                if (omniBetterGodModeEnabled) omniKeepAliveSelf();
            },
            toolTip: "godmode ig",
        }),
        menuButton("Unlock All", () => {
        try {
            const AppClass = AssemblyCSharp.class("AnimalCompany.App");
            const appState = AppClass.method("get_state").invoke();
            if (!appState || appState.isNull()) {
                console.error("[UnlockAll] No app state");
                return;
            }
            let unlockedItems = 0;
            try {
                const gameplayItems = appState.method("get_gameplayItems").invoke();
                if (gameplayItems && !gameplayItems.isNull()) {
                    const allDict = gameplayItems.method("get_all").invoke();
                    if (allDict && !allDict.isNull()) {
                        const values = allDict.method("get_Values").invoke();
                        if (values && !values.isNull()) {
                            const enumerator = values.method("GetEnumerator").invoke();
                            while (enumerator.method("MoveNext").invoke()) {
                                try {
                                    const item = enumerator.method("get_Current").invoke();
                                    if (!item || item.isNull()) continue;
                                    try { const isUnlocked = item.method("get_isUnlocked").invoke(); if (isUnlocked && !isUnlocked.isNull()) isUnlocked.method("set_value").invoke(true); } catch(_) {}
                                    try { const depsSatisfied = item.method("get_unlockDependenciesSatisfied").invoke(); if (depsSatisfied && !depsSatisfied.isNull()) depsSatisfied.method("set_value").invoke(true); } catch(_) {}
                                    try { const unlockable = item.method("get_unlockable").invoke(); if (unlockable && !unlockable.isNull()) unlockable.method("set_value").invoke(true); } catch(_) {}
                                    unlockedItems++;
                                } catch(_) {}
                            }
                        }
                    }
                }
            } catch(e) { console.error("[UnlockAll] gameplayItems:", e); }
            let unlockedAvatarItems = 0;
            try {
                const avatarItems = appState.method("get_avatarItems").invoke();
                if (avatarItems && !avatarItems.isNull()) {
                    const allDict = avatarItems.method("get_all").invoke();
                    if (allDict && !allDict.isNull()) {
                        const values = allDict.method("get_Values").invoke();
                        if (values && !values.isNull()) {
                            const enumerator = values.method("GetEnumerator").invoke();
                            while (enumerator.method("MoveNext").invoke()) {
                                try {
                                    const item = enumerator.method("get_Current").invoke();
                                    if (!item || item.isNull()) continue;
                                    try { const isOwned = item.method("get_isOwned").invoke(); if (isOwned && !isOwned.isNull()) isOwned.method("set_value").invoke(true); } catch(_) {}
                                    try { const canPurchase = item.method("get_canPurchaseDirectly").invoke(); if (canPurchase && !canPurchase.isNull()) canPurchase.method("set_value").invoke(true); } catch(_) {}
                                    try { const isDevItem = item.method("get_isDevItem")?.invoke(); if (isDevItem && !isDevItem.isNull()) isDevItem.method("set_value").invoke(true); } catch(_) {}
                                    unlockedAvatarItems++;
                                } catch(_) {}
                            }
                        }
                    }
                }
            } catch(e) { console.error("[UnlockAll] avatarItems:", e); }
            console.log("[UnlockAll] unlocked " + unlockedItems + " items + " + unlockedAvatarItems + " cosmetics");
        } catch(e) { console.error("[UnlockAll]", e); }
    }, "Unlocks all gameplay items and avatar cosmetics."),
    ]));
    let orbitAllEnabled = false;
    let orbitPhase = 0;
    let orbitSpeed = 0.35;
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("others", [
        menuToggle("Orbit All", {
            onEnable: () => {
                orbitAllEnabled = true;
                sendNotification("Orbit All ON", false, 2);
            },
            onDisable: () => {
                orbitAllEnabled = false;
                sendNotification("Orbit All OFF", false, 2);
            },
            onUpdate: () => {
                if (!orbitAllEnabled) return;
                orbitPhase += deltaTime * orbitSpeed;
                try {
                    const je = NetPlayer.method("get_localPlayer").invoke();
                    if (je && !je.handle.isNull()) {
                        const jf = je.method("get_transform").invoke().method("get_position").invoke();
                        const jg = NetPlayer.field("playerIDToNetPlayer").value.method("get_Values").invoke().method("GetEnumerator").invoke();
                        let jh = 0;
                        while (jg.method("MoveNext").invoke()) {
                            const ji = jg.method("get_Current").invoke();
                            if (!ji || ji.handle.isNull() || ji.method("get_IsMine").invoke()) { jh++; continue; }
                            const jj = orbitPhase + jh * (Math.PI * 2 / 8);
                            const jk = Vector3.method("op_Addition").invoke(jf, [Math.cos(jj) * 2.5, 3.5, Math.sin(jj) * 2.5]);
                            ji.method("RPC_Teleport").invoke(jk);
                            jh++;
                        }
                    }
                } catch (_) {}
            },
            toolTip: "everyone orbits u",
        }),
        menuStepper("Orbit Speed", () => {
            orbitSpeed = Math.max(0.05, +(orbitSpeed - 0.25).toFixed(2));
            sendNotification("Orbit speed: " + orbitSpeed.toFixed(2), false, 1.5);
        }, () => {
            orbitSpeed = Math.min(5.0, +(orbitSpeed + 0.25).toFixed(2));
            sendNotification("Orbit speed: " + orbitSpeed.toFixed(2), false, 1.5);
        }, "adjust orbit speed"),

menuToggle("Copy Player Gun", {
    onEnable: () => {
        if (!sparkzCopyCosmeticsUnlocked) {
            try { UnlockAll(); } catch(_) {}
            sparkzCopyCosmeticsUnlocked = true;
        }
        sendNotification("copy cosmetics gun on - aim & shoot", false);
    },
    onUpdate: () => {
        if (!rightGrab) return;
        const gd = getGunPointerResult(-1);
        const ray = gd.ray;
        if (!rightTrigger || !ray || ray.isNull?.() || !(time > sparkzCopyCosmeticsDelay)) return;
        sparkzCopyCosmeticsDelay = time + 1.5;
        
        let target = null;
        try {
            const hitCollider = ray.method("get_collider").invoke();
            if (hitCollider && !hitCollider.isNull()) {
                target = hitCollider.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                if (!target || target.isNull()) {
                    const hitGO = hitCollider.method("get_gameObject").invoke();
                    if (hitGO && !hitGO.isNull()) {
                        target = hitGO.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                    }
                }
            }
        } catch(_) {}
        
        if (!target || target.isNull?.() || playerIsLocal(target)) {
            try {
                let nearest = null;
                let nearestDist = 30;
                const pos = gd.endPosition;
                const players = getAllNetPlayersList(false);
                for (const p of players) {
                    try {
                        const dist = Vector3Cls.method("Distance").invoke(getTransform(p).method("get_position").invoke(), pos);
                        if (dist < nearestDist) { nearestDist = dist; nearest = p; }
                    } catch(_) {}
                }
                target = nearest;
            } catch(_) {}
        }
        
        if (!target || target.isNull?.() || playerIsLocal(target)) { 
            sendNotification("no player there", false); 
            return; 
        }
        
        try {
            const _me = NetPlayerCls.method("get_localPlayer").invoke();
            if (!_me || _me.isNull()) { 
                sendNotification("no local player", false); 
                return; 
            }
            
            let avatarData = null, avatarOverrides = null, playerColor = null;
            try { avatarData = target.method("get_avatarData").invoke(); } catch(_) {}
            try { avatarOverrides = target.method("get_avatarOverrides").invoke(); } catch(_) {}
            try { playerColor = target.method("get_playerColor").invoke(); } catch(_) {}
            
            if (avatarData) { try { _me.method("set_avatarData").invoke(avatarData); } catch(_) {} }
            if (avatarOverrides) { try { _me.method("set_avatarOverrides").invoke(avatarOverrides); } catch(_) {} }
            if (playerColor) { try { _me.method("set_playerColor").invoke(playerColor); } catch(_) {} }
            
            try {
                const view = _me.method("get_view").invoke();
                if (view && !view.isNull()) {
                    view.method("UpdateAvatar").invoke();
                }
            } catch(_) {}
            
            try {
                const avatarRoot = _me.field("avatarRoot").value;
                if (avatarRoot && !avatarRoot.isNull()) {
                    const children = avatarRoot.method("GetComponentsInChildren", 1)
                        .inflate(Renderer)
                        .invoke(true);
                    if (children) {
                        for (let i = 0; i < children.length; i++) {
                            try {
                                const child = children.get(i);
                                if (child && !child.isNull()) {
                                    child.method("set_enabled").invoke(true);
                                }
                            } catch(_) {}
                        }
                    }
                }
            } catch(_) {}
            
            try { _me.method("CopyBackingFieldsToState").invoke(true); } catch(_) {}
            try { _me.method("RPC_SyncAvatar").invoke(); } catch(_) {}
            
            sendNotification("copied cosmetics from " + getPlayerName(target), false);
        } catch(e) { 
            console.error("Copy Cosmetics Gun:", e); 
            sendNotification("error: " + e, false); 
        }
    },
    onDisable: () => {},
    toolTip: "aim at a player & trigger to copy their exact cosmetics onto you.",
}),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("items", [
    menuToggle("Stash Dupe", {
        onEnable: () => { stashDupeEnabled = true; installStashDupeHooks(); },
        onDisable: () => { stashDupeEnabled = false; },
        onUpdate: () => {},
        toolTip: "Lets you eject more times using your stash.",
    }),
    menuButton("change the dupe amount", () => {
        ejectDupeIndex++;
        ejectDupeIndex %= ejectDupeValues.length;
        ejectDupeAmount = ejectDupeValues[ejectDupeIndex];
        sendNotification("New eject dupe amount: " + ejectDupeAmount, false);
    }, "Cycles through preset dupe amounts."),
        menuToggle("Randomized Item Launcher", {
        onUpdate: () => {
            if (!rightSecondary) return;
            function rand(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            try {
                const handTransform = rightHandTransform;
                const spawnPos = handTransform.method("get_position").invoke();
                const spawnRot = handTransform.method("get_rotation").invoke();
                const randomItem = itemIDs[rand(0, itemIDs.length - 1)];
                const spawnedItem = spawnItemAtPos(randomItem, spawnPos, spawnRot);
                if (!spawnedItem || spawnedItem.isNull?.()) return;
                try {
                    const grabbable = spawnedItem.method("GetComponent", 1).inflate(GBOClass).invoke();
                    if (grabbable && !grabbable.isNull?.()) {
                        grabbable.method("set_scaleModifier").invoke(rand(-128, 127));
                        grabbable.method("set_colorHue").invoke(rand(-127, 127));
                        grabbable.method("set_colorSaturation").invoke(rand(-127, 127));
                    }
                } catch(_) {}
                let forward = handTransform.method("get_forward").invoke();
                forward.x += (Math.random() - 0.5) * 0.3;
                forward.y += (Math.random() - 0.5) * 0.3;
                forward.z += (Math.random() - 0.5) * 0.3;
                const velocity = Vector3.method("op_Multiply", 2).invoke(forward, 15);
                try { spawnedItem.method("AddExternalForceVelocity", 1).invoke(velocity); } catch(_) {}
            } catch (e) {
                console.error("Random Item Launcher error:", e);
            }
        },
        toolTip: "Launches a RANDOM item from your item list with random effects (hold B).",
    }),
]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("others", [
        menuToggle("Fling Player Gun", {
            onUpdate: () => {
                if (!rightGrab) return;
                const gunData = omniRenderGun();
                const ray = gunData.ray;
                if (!rightTrigger || !ray || ray.isNull?.() || !(time > flingGunDelay)) return;
                flingGunDelay = time + 0.3;
                try {
                    let target = null;
                    const hitCollider = ray.method("get_collider").invoke();
                    if (hitCollider && !hitCollider.isNull()) {
                        target = hitCollider.method("GetComponentInParent", 0).inflate(NetPlayer).invoke();
                        if (!target || target.isNull()) {
                            const hitGO = hitCollider.method("get_gameObject").invoke();
                            if (hitGO && !hitGO.isNull()) {
                                target = hitGO.method("GetComponentInParent", 0).inflate(NetPlayer).invoke();
                            }
                        }
                    }
                    if (!target || target.isNull() || target.method("get_IsMine").invoke()) {
                        const hitPos = gunData.endPosition || gunData.gunPointer?.method("get_position").invoke();
                        if (!hitPos) return;
                        let minD = Number.MAX_SAFE_INTEGER;
                        const en = NetPlayer.field("playerIDToNetPlayer").value.method("get_Values").invoke().method("GetEnumerator").invoke();
                        while (en.method("MoveNext").invoke()) {
                            const pl = en.method("get_Current").invoke();
                            if (!pl || pl.handle.isNull() || pl.method("get_IsMine").invoke()) continue;
                            const d = Vector3.method("Distance").invoke(hitPos, pl.method("get_transform").invoke().method("get_position").invoke());
                            if (d < minD) { minD = d; target = pl; }
                        }
                    }
                    if (target && !target.handle.isNull() && !target.method("get_IsMine").invoke())
                        target.method("RPC_AddForce").invoke(Vector3.method("op_Addition").invoke([0, 0, 0], [0, 80, 0]));
                } catch (_e) { console.error("Fling Player Gun:", _e); }
            },
            toolTip: "fling nearest player up",
        }),
    ]));
    function getComponentInParent(obj: any, type: any): any {
        return obj.method("GetComponentInParent", 0).inflate(type).invoke();
    }
    function kickPlayer(player: any): void {
        try {
            const rpcs = AssemblyCSharp.class("AnimalCompany.NetSessionRPCs");
            const netinst = rpcs.field("_instance").value;
            if (!netinst) return;
            const plrID = player.field("_userID").value;
            if (!plrID) return;
            const parsed = Il2Cpp.corlib.class("System.Guid").method("Parse").invoke(plrID);
            netinst.method("RPC_KickPlayer").invoke(parsed);
            rpcs.method("KickPlayer").invoke(plrID);
        } catch (_) {}
    }
    let acAntiCheatBypassInstalled = false;
    let stashDupeHooksInstalled = false;
    function installStashDupeHooks(): void {
        if (stashDupeHooksInstalled) return;
        try {
            const stashCls = AssemblyCSharp.class("AnimalCompany.ItemStash");
            try { stashCls.method("get_canEject").implementation = function () { if (stashDupeEnabled) return true; return this.method("get_canEject").invoke(); }; } catch(_) {}
            try { stashCls.method("get_ejectCount").implementation = function () { if (stashDupeEnabled) return 999; return this.method("get_ejectCount").invoke(); }; } catch(_) {}
            try { stashCls.method("get_remainingEjects").implementation = function () { if (stashDupeEnabled) return 999; return this.method("get_remainingEjects").invoke(); }; } catch(_) {}
            try { stashCls.method("get_maxEjects").implementation = function () { if (stashDupeEnabled) return 999; return this.method("get_maxEjects").invoke(); }; } catch(_) {}
            try { stashCls.method("get_ejectCountMax").implementation = function () { if (stashDupeEnabled) return 999; return this.method("get_ejectCountMax").invoke(); }; } catch(_) {}
        } catch(_) {}
        try {
            const stashSlotCls = AssemblyCSharp.class("AnimalCompany.StashSlot");
            try { stashSlotCls.method("get_canEject").implementation = function () { if (stashDupeEnabled) return true; return this.method("get_canEject").invoke(); }; } catch(_) {}
            try { stashSlotCls.method("get_remainingEjects").implementation = function () { if (stashDupeEnabled) return 999; return this.method("get_remainingEjects").invoke(); }; } catch(_) {}
        } catch(_) {}
        try {
            const stashContainerCls = AssemblyCSharp.class("AnimalCompany.StashContainer");
            try { stashContainerCls.method("get_remainingEjects").implementation = function () { if (stashDupeEnabled) return 999; return this.method("get_remainingEjects").invoke(); }; } catch(_) {}
            try { stashContainerCls.method("get_canEject").implementation = function () { if (stashDupeEnabled) return true; return this.method("get_canEject").invoke(); }; } catch(_) {}
        } catch(_) {}
        try {
            const gboCls = AssemblyCSharp.class("AnimalCompany.GrabbableObject");
            try { gboCls.method("get_stashedEjectCount").implementation = function () { if (stashDupeEnabled) return ejectDupeAmount; return this.method("get_stashedEjectCount").invoke(); }; } catch(_) {}
        } catch(_) {}
        stashDupeHooksInstalled = true;
    }
    function installAntiCheatBypass(): void {
        try {
            try { AssemblyCSharp.class("AnimalCompany.AntiCheatSystem").method("OnUpdate").implementation = function () { return; }; } catch(e) { console.error("[ac] OnUpdate:", e); }
            try { AssemblyCSharp.class("AnimalCompany.VPNDetector").method("CheckVPNIsActive").implementation = function () { return; }; } catch(e) { console.error("[ac] CheckVPNIsActive:", e); }
            try { AssemblyCSharp.class("AnimalCompany.VPNDetector").method("Update").implementation = function () { return; }; } catch(_) {}
            try {
                const completed = Il2Cpp.corlib.class("System.Threading.Tasks.Task").method("get_CompletedTask").invoke();
                if (completed && !completed.isNull?.()) {
                    AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", 3).implementation = function () { return completed; };
                }
            } catch(e) { console.error("[ac] AntiCheatCheck (voice-mod ban):", e); }
            try { AssemblyCSharp.class("AnimalCompany.NotificationManager").method("FormatModerationTranscript", 1).implementation = function () { return Il2Cpp.string(""); }; } catch(_) {}
            try { AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("Start").implementation = function () { return; }; } catch(_) {}
            try { AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("OnSelectedChoice", 1).implementation = function () { return; }; } catch(_) {}
            try {
                AssemblyCSharp.class("AnimalCompany.NetPlayer").method("set_accumLocalVoiceBroadcastSeconds").implementation = function () { return; };
            } catch(_) {}
            for (const argc of [1, 2, 4]) {
                try {
                    const completed2 = Il2Cpp.corlib.class("System.Threading.Tasks.Task").method("get_CompletedTask").invoke();
                    AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", argc).implementation = function () { return completed2; };
                } catch(_) {}
            }
            acAntiCheatBypassInstalled = true;
            console.log("[ac] anticheat neutralized: AntiCheatCheck report swallowed (anti voice-mod ban) + transcript/survey/accumulator killed + VPN detector killed");
        } catch(e) { console.error("[anticheatbypass]", e); }
    }
    function revertAntiCheatBypass(): void {
        try {
            try { AssemblyCSharp.class("AnimalCompany.AntiCheatSystem").method("OnUpdate").implementation = null; } catch(_) {}
            try { AssemblyCSharp.class("AnimalCompany.VPNDetector").method("CheckVPNIsActive").implementation = null; } catch(_) {}
            try { AssemblyCSharp.class("AnimalCompany.VPNDetector").method("Update").implementation = null; } catch(_) {}
            try { AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", 3).implementation = null; } catch(_) {}
            try { AssemblyCSharp.class("AnimalCompany.NotificationManager").method("FormatModerationTranscript", 1).implementation = null; } catch(_) {}
            try { AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("Start").implementation = null; } catch(_) {}
            try { AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("OnSelectedChoice", 1).implementation = null; } catch(_) {}
            try { AssemblyCSharp.class("AnimalCompany.NetPlayer").method("set_accumLocalVoiceBroadcastSeconds").implementation = null; } catch(_) {}
            for (const argc of [1, 2, 4]) { try { AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", argc).implementation = null; } catch(_) {} }
            acAntiCheatBypassInstalled = false;
        } catch(_) {}
    }
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("others", [
        menuToggle("Stinky Gun", {
            onUpdate: () => {
                if (!rightGrab) return;
                const gunData = omniRenderGun();
                const ray = gunData.ray;
                if (!rightTrigger || !ray || ray.isNull?.() || !(time > tagGunDelay)) return;
                tagGunDelay = time + 0.3;
                try {
                    const target = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                    if (target && !target.handle.isNull() && !target.method("get_IsMine").invoke())
                        target.method("RPC_TagAsStinky").invoke();
                } catch (_) {}
            },
            toolTip: "Stinkies whoever your hand desires.",
        }),
        menuToggle("TP ALL Gun", {
            onUpdate: () => {
                if (!rightGrab) return;
                const gunData = omniRenderGun();
                if (!rightTrigger) return;
                const ray = gunData.ray;
                if (!ray || ray.isNull?.()) return;
                try {
                    const hitPoint = ray.method("get_point").invoke();
                    const en = NetPlayer.field("playerIDToNetPlayer").value.method("get_Values").invoke().method("GetEnumerator").invoke();
                    while (en.method("MoveNext").invoke()) {
                        const pl = en.method("get_Current").invoke();
                        if (!pl || pl.handle.isNull() || pl.method("get_IsMine").invoke()) continue;
                        pl.method("RPC_Teleport").invoke(hitPoint);
                    }
                } catch (e) { console.error("TP ALL Gun error:", e); }
            },
            toolTip: "Teleports all players to your gun pointer.",
        }),
    ]));

    TEMPLATE_MENU_BUTTONS.push(menuAddTo("combat", [
menuToggle("Kill Gun", {
    onUpdate: () => {
        if (!rightGrab) return;
        const gd = omniRenderGun();
        const ray = gd.ray;
        if (!rightTrigger || !ray || ray.isNull?.() || time <= killGunDelay) return;
        killGunDelay = time + 0.3;
        
        try {
            let target = null;
            const hitCollider = ray.method("get_collider").invoke();
            if (hitCollider && !hitCollider.isNull()) {
                target = hitCollider.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                if (!target || target.isNull()) {
                    const hitGO = hitCollider.method("get_gameObject").invoke();
                    if (hitGO && !hitGO.isNull()) {
                        target = hitGO.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                    }
                }
            }
            
            if (!target || target.isNull?.() || playerIsLocal(target)) {
                let nearest = null;
                let nearestDist = 30;
                const pos = gd.endPosition;
                const players = getAllNetPlayersList(false);
                for (const p of players) {
                    try {
                        const dist = Vector3Cls.method("Distance").invoke(getTransform(p).method("get_position").invoke(), pos);
                        if (dist < nearestDist) { nearestDist = dist; nearest = p; }
                    } catch(_) {}
                }
                target = nearest;
            }
            
            if (!target || target.isNull?.() || playerIsLocal(target)) { 
                sendNotification("no player there", false); 
                return; 
            }
            
            target.method("RPC_DoPlayerDie").invoke(true);
            sendNotification("killed " + getPlayerName(target) + " (100dmg)", false);
        } catch(e) { console.error("Kill Gun:", e); }
    },
    toolTip: "hold grip & aim at a player, trigger to deal 100 damage.",
}),

menuToggle("Insta Kill All", {
    onUpdate: () => {
        if (!(time > nukeDelay)) return;
        nukeDelay = time + 0.5;
        try {
            let count = 0;
            for (const p of getAllNetPlayersList(false)) {
                try {
                    if (!p || p.handle.isNull()) continue;
                    p.method("RPC_DoPlayerDie").invoke(true);
                    count++;
                } catch(_) {}
            }
            sendNotification("Killed all: " + count, false);
        } catch(e) { console.error("Insta Kill All:", e); }
    },
    toolTip: "Kills every other player instantly.",
}),

menuToggle("Inf Ammo", {
    onEnable: () => { InfAmmo = true; },
    onDisable: () => { InfAmmo = false; },
    onUpdate: () => {},
    toolTip: "Infinite ammo",
}),
]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("overpowered", [
        menuToggle("Kick Gun", {
            onUpdate: () => {
                if (!rightGrab) return;
                const gunData = omniRenderGun();
                const ray = gunData.ray;
                if (!rightTrigger || !ray || ray.isNull?.() || !(time > tagGunDelay)) return;
                tagGunDelay = time + 0.3;
                try {
                    const target = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                    if (target && !target.handle.isNull() && !target.method("get_IsMine").invoke())
                        kickPlayer(target);
                } catch (_) {}
            },
            toolTip: "Kicks whoever your hand desires.",
        }),

        menuToggle("Kick All", {
    onUpdate: () => {
        const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
        if (players) {
            for (let i = 0; i < players.length; i++) {
                const netPlayer = players.get(i);
                if (playerIsLocal(netPlayer)) continue;
                kickPlayer(netPlayer);
            }
        }
    },
    toolTip: "Kicks every other player in the lobby.",
}),

menuToggle("Instant Max Charge", {
    onEnable: () => { 
        _omniFLChargeEnabled = true; 
        omniInstallFriendLauncherHooks(); 
    },
    onDisable: () => { _omniFLChargeEnabled = false; },
    onUpdate: () => {},
    toolTip: "instantly maxes charge on friend launcher",
}),

menuToggle("Infinite Launch Force", {
    onEnable: () => {
        _omniFLForceEnabled = true;
        try { AssemblyCSharp.class("AnimalCompany.FriendLauncher").field("MAX_FORCE_MAG").value = 9999999.0; } catch (_) {}
    },
    onDisable: () => {
        _omniFLForceEnabled = false;
        try { AssemblyCSharp.class("AnimalCompany.FriendLauncher").field("MAX_FORCE_MAG").value = 2000.0; } catch (_) {}
    },
    onUpdate: () => {},
    toolTip: "sets MAX_FORCE_MAG to 999999",
}),

menuToggle("Auto Rapid Fire (FRIEND LAUNCHER)", {
    onEnable: () => { 
        _omniFLAutoFireEnabled = true; 
        omniInstallFriendLauncherHooks(); 
    },
    onDisable: () => { _omniFLAutoFireEnabled = false; },
    onUpdate: () => {},
    toolTip: "fires friend launcher while holding trigger",
}),

menuToggle("Fling All", {
    onUpdate: () => {
        if (!(time > flingGunDelay)) return;
        flingGunDelay = time + 0.3;
        try {
            const _en = NetPlayerCls.field("playerIDToNetPlayer")
                .value.method("get_Values")
                .invoke()
                .method("GetEnumerator")
                .invoke();
            let _cnt = 0;
            while (_en.method("MoveNext").invoke()) {
                const _pl = _en.method("get_Current").invoke();
                if (!_pl || _pl.handle.isNull() || _pl.method("get_IsMine").invoke()) continue;
                _pl.method("RPC_AddForce").invoke(Vector3Cls.method("op_Multiply").invoke([0, 1, 0], 80));
                _cnt++;
            }
            sendNotification("Flung " + _cnt + " players!", false);
        } catch (_e) {
            console.error("Fling All:", _e);
        }
    },
    toolTip: "fling everyone up",
}),

menuToggle("Float All", {
    onDisable: () => {
        for (let _i = 0; _i < omniFloatBalls.length; _i++) {
            try { destroyObject(omniFloatBalls[_i]); } catch (_) {}
        }
        omniFloatVictims = [];
        omniFloatBalls = [];
    },
    onUpdate: () => {
        try {
            for (let _i = omniFloatVictims.length - 1; _i >= 0; _i--) {
                const _v = omniFloatVictims[_i];
                const _b = omniFloatBalls[_i];
                if (!_v || _v.isNull() || !_b || _b.isNull()) {
                    omniFloatVictims.splice(_i, 1);
                    omniFloatBalls.splice(_i, 1);
                    continue;
                }
                try {
                    const _bt = getTransform(_b);
                    if (!_bt) {
                        omniFloatVictims.splice(_i, 1);
                        omniFloatBalls.splice(_i, 1);
                        continue;
                    }
                    const _bp = _bt.method("get_position").invoke();
                    if (_bp.field("y").value < -50) {
                        try { destroyObject(_b); } catch (_) {}
                        omniFloatVictims.splice(_i, 1);
                        omniFloatBalls.splice(_i, 1);
                        continue;
                    }
                    _v.method("RPC_Teleport").invoke([
                        _bp.field("x").value,
                        _bp.field("y").value + 0.5,
                        _bp.field("z").value,
                    ]);
                } catch (_) {}
            }
            if (!rightTrigger) return;
            if (!_pcMode && !rightGrab) return;
            if (time < tagGunDelay) return;
            tagGunDelay = time + 0.5;
            try {
                const _en = NetPlayer.field("playerIDToNetPlayer").value.method("get_Values").invoke().method("GetEnumerator").invoke();
                while (_en.method("MoveNext").invoke()) {
                    const _pl = _en.method("get_Current").invoke();
                    if (!_pl || _pl.handle.isNull() || _pl.method("get_IsMine").invoke()) continue;
                    let _dup = false;
                    for (let _i = 0; _i < omniFloatVictims.length; _i++) {
                        try {
                            if (omniFloatVictims[_i] && !omniFloatVictims[_i].isNull() && omniFloatVictims[_i].handle === _pl.handle) { _dup = true; break; }
                        } catch (_) {}
                    }
                    if (_dup) continue;
                    try {
                        const _tp = _pl.method("get_transform").invoke().method("get_position").invoke();
                        const _ball = spawnNetworkPrefab("item_soccer_ball", _tp, identityRotation);
                        if (!_ball || _ball.isNull()) continue;
                        omniFloatVictims.push(_pl);
                        omniFloatBalls.push(_ball);
                    } catch (_) {}
                }
            } catch (_e) {
                console.error("[OMNI Float All]", _e);
            }
        } catch (_e) {
            console.error("[OMNI Float All loop]", _e);
        }
    },
    toolTip: "floats everyone with trigger and grip pressed at the same time",
}),

menuToggle("Kidnap Gun", {
    toolTip: "Kinda buggy",
    onUpdate: () => {
        try {
            if (rightGrab) omniRenderGun();
            if (omniKidnapTarget && !omniKidnapTarget.isNull()) {
                if (!rightGrab) {
                    omniKidnapTarget = null;
                    return;
                }
                const _ht = omniGetHandTransform();
                if (_ht) {
                    const _hp = _ht.method("get_position").invoke();
                    try {
                        omniKidnapTarget.method("RPC_Teleport").invoke([
                            _hp.field("x").value,
                            _hp.field("y").value - 1.25,
                            _hp.field("z").value,
                        ]);
                    } catch (_) {}
                }
            }
            if (!rightGrab) return;
            if (rightTrigger && !omniKidnapTarget) {
                const _target = omniGunAimPlayer();
                if (_target && !_target.isNull()) {
                    try {
                        if (_target.method("get_IsMine").invoke()) return;
                    } catch (_) { return; }
                    omniKidnapTarget = _target;
                }
            }
        } catch (_e) {
            console.error("[OMNI Kidnap Gun]", _e);
        }
    },
    onDisable: () => {
        omniKidnapTarget = null;
    },
}),

    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("combat", [
    menuToggle("Fling All (Combat)", {
        onUpdate: () => {
            if (!(time > flingGunDelay)) return;
            flingGunDelay = time + 0.3;
            try {
                const _en = NetPlayerCls.field("playerIDToNetPlayer")
                    .value.method("get_Values")
                    .invoke()
                    .method("GetEnumerator")
                    .invoke();
                let _cnt = 0;
                while (_en.method("MoveNext").invoke()) {
                    const _pl = _en.method("get_Current").invoke();
                    if (!_pl || _pl.handle.isNull() || _pl.method("get_IsMine").invoke()) continue;
                    _pl.method("RPC_AddForce").invoke(Vector3Cls.method("op_Multiply").invoke([0, 1, 0], 80));
                    _cnt++;
                }
                sendNotification("Flung " + _cnt + " players!", false);
            } catch (_e) {
                console.error("Fling All:", _e);
            }
        },
        toolTip: "fling everyone up",
    }),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("settings", [
        menuToggle("Anticheat Bypass", {
            onEnable: () => { installAntiCheatBypass(); sendNotification("anticheat + vpn bypass ON", false); },
            onDisable: () => { revertAntiCheatBypass(); sendNotification("anticheat bypass OFF", false); },
            toolTip: "kills anticheat + VPN detector (anti voice-mod-ban)",
        }),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("items", [
    menuToggle("Spawn Item Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < itemSpawnDelay) return;
            itemSpawnDelay = time + 0.2;
            const gd = omniRenderGun();
            if (!gd.ray || gd.ray.isNull?.()) return;
            try {
                spawnItemAtPos(itemIDs[itemIndex], gd.endPosition, identityRotation);
            } catch(e) { console.error("Spawn Item Gun:", e); }
        },
        toolTip: "hold grip+trigger to spawn selected item at aim",
    }),
    menuToggle("Despawn Item Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < despawnItemDelay) return;
            despawnItemDelay = time + 0.3;
            const gd = omniRenderGun();
            if (!gd.ray || gd.ray.isNull?.()) return;
            try {
                const allItems = UnityObjectCls.method("FindObjectsByType", 2).inflate(GBIClass).invoke(0);
                if (!allItems || allItems.length === 0) return;
                let nearest = null, nearDist = 2;
                for (let i = 0; i < allItems.length; i++) {
                    try {
                        const item = allItems.get(i);
                        if (!item || item.handle.isNull()) continue;
                        const d = Vector3.method("Distance").invoke(gd.endPosition, getTransform(item).method("get_position").invoke());
                        if (d < nearDist) { nearDist = d; nearest = item; }
                    } catch(_) {}
                }
                if (nearest) {
                    const go = nearest.method("get_gameObject").invoke();
                    Destroy(go);
                }
            } catch(e) { console.error("Despawn Item Gun:", e); }
        },
        toolTip: "hold grip+trigger to despawn nearest item to aim",
    }),
    menuToggle("Spawn ALL Items Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < allItemsSpawnDelay) return;
            allItemsSpawnDelay = time + 5;
            const gd = omniRenderGun();
            if (!gd.endPosition) return;
            try {
                let count = 0;
                for (let i = 0; i < itemIDs.length; i++) {
                    const pos = Vector3.method("op_Addition").invoke(gd.endPosition, [i % 6 * 1.5 - 3.75, 0.5, Math.floor(i / 6) * 1.5]);
                    try {
                        const r = spawnItemAtPos(itemIDs[i], pos, identityRotation);
                        if (r) count++;
                    } catch(_) {}
                }
            } catch(e) { console.error("Spawn ALL Items:", e); }
        },
        toolTip: "spawn all items in a grid at aim (5s cd)",
    }),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("id", [
    menuButton("Item: " + itemIDs[itemIndex], () => {}, "currently selected item"),
    menuButton("Next Item ▶", () => { itemIndex = (itemIndex + 1) % itemIDs.length; reloadMenu(); }, "cycle to next item ID"),
    menuButton("◀ Prev Item", () => { itemIndex = (itemIndex - 1 + itemIDs.length) % itemIDs.length; reloadMenu(); }, "cycle to prev item ID"),
    ...itemIDs.map((id, i) => menuButton(id.replace(/^item_/, ""), () => { itemIndex = i; reloadMenu(); }, "select " + id)),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("combat", [
    menuToggle("Spawn Mob Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < mobGunDelay) return;
            mobGunDelay = time + 0.5;
            const gd = omniRenderGun();
            if (!gd.ray || gd.ray.isNull?.()) return;
            try {
                const mobName = mobIDs[mobIndex].name;
                const result = spawnNetworkPrefab(mobName + "Controller", gd.endPosition, identityRotation) || spawnNetworkPrefab("mob_prefab/" + mobName + "Controller", gd.endPosition, identityRotation);
            } catch(e) { console.error("Spawn Mob Gun:", e); }
        },
        toolTip: "hold grip+trigger to spawn selected mob at aim",
    }),
    menuButton("Mob ID +", () => { mobIndex = (mobIndex + 1) % mobIDs.length; sendNotification("Mob: " + mobIDs[mobIndex].name, false); }, "next mob ID"),
    menuButton("Mob ID -", () => { mobIndex = (mobIndex - 1 + mobIDs.length) % mobIDs.length; sendNotification("Mob: " + mobIDs[mobIndex].name, false); }, "prev mob ID"),
    menuToggle("Kill Mob Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < killMobDelay) return;
            killMobDelay = time + 0.3;
            const gd = omniRenderGun();
            if (!gd.ray || gd.ray.isNull?.()) return;
            try {
                const allMobs = UnityObjectCls.method("FindObjectsByType", 2).inflate(GBOClass).invoke(0);
                if (!allMobs || allMobs.length === 0) return;
                let nearest = null, nearDist = 3;
                for (let i = 0; i < allMobs.length; i++) {
                    try {
                        const mob = allMobs.get(i);
                        if (!mob || mob.handle.isNull()) continue;
                        const isPlayer = mob.method("GetComponent", 1).inflate(NetPlayer).invoke();
                        if (isPlayer && !isPlayer.isNull()) continue;
                        const d = Vector3.method("Distance").invoke(gd.endPosition, getTransform(mob).method("get_position").invoke());
                        if (d < nearDist) { nearDist = d; nearest = mob; }
                    } catch(_) {}
                }
                if (nearest) {
                    Destroy(nearest.method("get_gameObject").invoke());
                }
            } catch(e) { console.error("Kill Mob Gun:", e); }
        },
        toolTip: "hold grip+trigger to kill nearest mob to aim",
    }),
    menuToggle("Spawn ALL Mobs Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < allMobsSpawnDelay) return;
            allMobsSpawnDelay = time + 5;
            const gd = omniRenderGun();
            if (!gd.endPosition) return;
            try {
                let count = 0;
                for (let i = 0; i < mobIDs.length; i++) {
                    const pos = Vector3.method("op_Addition").invoke(gd.endPosition, [i % 6 * 1.5 - 3.75, 0, Math.floor(i / 6) * 1.5]);
                    try {
                        const r = spawnNetworkPrefab(mobIDs[i].name + "Controller", pos, identityRotation) || spawnNetworkPrefab("mob_prefab/" + mobIDs[i].name + "Controller", pos, identityRotation);
                        if (r) count++;
                    } catch(_) {}
                }
            } catch(e) { console.error("Spawn ALL Mobs:", e); }
        },
        toolTip: "spawn all mobs in a grid at aim (5s cd)",
    }),
    menuToggle("Item Force Cannon", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < itemForceDelay) return;
            itemForceDelay = time + 0.3;
            const gd = omniRenderGun();
            if (!gd.endPosition) return;
            try {
                const allItems = UnityObjectCls.method("FindObjectsByType", 2).inflate(GBIClass).invoke(0);
                if (!allItems) return;
                const dir = rightHandTransform.method("get_forward").invoke();
                for (let i = 0; i < allItems.length; i++) {
                    try {
                        const item = allItems.get(i);
                        if (!item || item.handle.isNull()) continue;
                        const d = Vector3.method("Distance").invoke(gd.endPosition, getTransform(item).method("get_position").invoke());
                        if (d < 5) {
                            const rb = item.method("GetComponent", 1).inflate(Rigidbody).invoke();
                            if (rb && !rb.isNull()) rb.method("AddExplosionForce").invoke(50, gd.endPosition, 10, 3);
                        }
                    } catch(_) {}
                }
            } catch(e) { console.error("Item Force Cannon:", e); }
        },
        toolTip: "blasts nearby items away from aim point",
    }),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("world", [
    menuButton("Prefab ID +", () => { prefabIndex = (prefabIndex + 1) % prefabList.length; sendNotification("Prefab: " + prefabList[prefabIndex], false); }, "next prefab"),
    menuButton("Prefab ID -", () => { prefabIndex = (prefabIndex - 1 + prefabList.length) % prefabList.length; sendNotification("Prefab: " + prefabList[prefabIndex], false); }, "prev prefab"),
    menuToggle("Spawn Prefab Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < prefabSpawnDelay) return;
            prefabSpawnDelay = time + 0.3;
            const gd = omniRenderGun();
            if (!gd.ray || gd.ray.isNull?.()) return;
            try {
                const result = spawnNetworkPrefab(prefabList[prefabIndex], gd.endPosition, identityRotation);
            } catch(e) { console.error("Spawn Prefab Gun:", e); }
        },
        toolTip: "hold grip+trigger to spawn selected prefab at aim",
    }),
    menuToggle("Despawn Prefab Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < despawnItemDelay) return;
            despawnItemDelay = time + 0.3;
            const gd = omniRenderGun();
            if (!gd.ray || gd.ray.isNull?.()) return;
            try {
                const allObjs = UnityObjectCls.method("FindObjectsByType", 2).inflate(NetworkObjectClass).invoke(0);
                if (!allObjs || allObjs.length === 0) return;
                let nearest = null, nearDist = 3;
                for (let i = 0; i < allObjs.length; i++) {
                    try {
                        const obj = allObjs.get(i);
                        if (!obj || obj.handle.isNull()) continue;
                        const hasInput = obj.method("HasInputAuthority").invoke();
                        if (hasInput) continue;
                        const d = Vector3.method("Distance").invoke(gd.endPosition, getTransform(obj).method("get_position").invoke());
                        if (d < nearDist) { nearDist = d; nearest = obj; }
                    } catch(_) {}
                }
                if (nearest) {
                    try { nearest.method("get_Runner").invoke().method("Despawn").invoke(nearest); } catch(_) {}
                    try { Destroy(nearest.method("get_gameObject").invoke()); } catch(_) {}
                }
            } catch(e) { console.error("Despawn Prefab Gun:", e); }
        },
        toolTip: "despawn nearest networked object to aim",
    }),
    menuToggle("SPAWN ALL PREFABS Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < allPrefabsSpawnDelay) return;
            allPrefabsSpawnDelay = time + 6;
            const gd = omniRenderGun();
            if (!gd.endPosition) return;
            try {
                let count = 0, skipped = 0;
                for (let i = 0; i < prefabList.length; i++) {
                    if (prefabList[i] === "NetPlayer" || prefabList[i] === "NetSpectator") { skipped++; continue; }
                    const pos = Vector3.method("op_Addition").invoke(gd.endPosition, [i % 8 * 2 - 7, 0, Math.floor(i / 8) * 2]);
                    try {
                        const r = spawnNetworkPrefab(prefabList[i], pos, identityRotation);
                        if (r) count++;
                    } catch(_) {}
                }
            } catch(e) { console.error("Spawn ALL Prefabs:", e); }
        },
        toolTip: "spawn all prefabs in a grid at aim (6s cd)",
    }),
    menuToggle("VFX Spawner Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < vfxSpawnDelay) return;
            vfxSpawnDelay = time + 0.2;
            const gd = omniRenderGun();
            if (!gd.ray || gd.ray.isNull?.()) return;
            try {
                const vfxKeys = Object.keys(VFXTypes).filter(k => k !== "None");
                const idx = Math.floor(Math.random() * vfxKeys.length);
                const vfxId = VFXTypes[vfxKeys[idx]];
                const vfxManager = ParticleManagerClass.field("_instance").value;
                if (vfxManager && !vfxManager.isNull()) {
                    vfxManager.method("SpawnVFX").invoke(vfxId, gd.endPosition, identityRotation);
                }
            } catch(e) { console.error("VFX Gun:", e); }
        },
        toolTip: "shoot random VFX at aim",
    }),
    menuToggle("Open All Doors", {
        onUpdate: () => {
            if (time < openDoorsDelay) return;
            openDoorsDelay = time + 1;
            try {
                const doors = UnityObjectCls.method("FindObjectsByType", 2).invoke(AssemblyCSharp.class("AnimalCompany.AreaDoorsNetObject"), 0);
                if (doors) {
                    for (let i = 0; i < doors.length; i++) {
                        try { doors.get(i).method("OpenAllDoors").invoke(); } catch(_) {}
                    }
                }
            } catch(e) { console.error("Open Doors:", e); }
        },
        toolTip: "opens all area doors",
    }),
    menuButton("Thunder Strike", () => {
        try {
            const thunder = UnityObjectCls.method("FindObjectsByType", 2).invoke(AssemblyCSharp.class("AnimalCompany.ThunderController"), 0);
            if (thunder && thunder.length > 0) { thunder.get(0).method("ThunderStrike").invoke(); }
        } catch(e) { console.error("Thunder:", e); }
    }, "trigger thunder strike"),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("overpowered", [
    menuToggle("Piss Gun", {
        onUpdate: () => {
            if (!rightGrab || !rightTrigger || time < pissGunDelay) return;
            pissGunDelay = time + 0.1;
            const gd = omniRenderGun();
            if (!gd.endPosition) return;
            try {
                const goopId = VFXTypes.EatingLoop || 185;
                const vfxManager = ParticleManagerClass.field("_instance").value;
                if (vfxManager && !vfxManager.isNull()) {
                    vfxManager.method("SpawnVFX").invoke(goopId, gd.endPosition, identityRotation);
                }
                const goopItem = spawnNetworkPrefab("AutoDestroyItem_Splash0", gd.endPosition, identityRotation);
                if (goopItem) {
                    const rb = goopItem.method("GetComponent", 1).inflate(Rigidbody).invoke();
                    if (rb && !rb.isNull()) {
                        const dir = rightHandTransform.method("get_forward").invoke();
                        rb.method("AddForce").invoke(Vector3.method("op_Multiply", 2).invoke(dir, 5));
                    }
                }
            } catch(e) { console.error("Piss Gun:", e); }
        },
        toolTip: "hold grip+trigger to spray yellow goop at aim",
    }),
    ]));
    installAntiCheatBypass();
    function omniRenderGun(overrideLayerMask: any = null): any {
        try {
            const startPos = rightHandTransform.method("get_position").invoke();
            const dir = rightHandTransform.method("get_forward").invoke();
            const dirDiv = Vector3.method("op_Division").invoke(dir, 4);
            const rayStart = Vector3.method("op_Addition").invoke(startPos, dirDiv);
            const layerMask = overrideLayerMask || -3180559;
            const hits = Physics.method("RaycastAll", 4).invoke(rayStart, dir, 512, layerMask);
            let finalDist = 999999, finalRay: any = null;
            try {
                for (const hit of hits) {
                    try {
                        const pt = hit.method("get_point").invoke();
                        const d = Vector3.method("Distance").invoke(pt, startPos);
                        if (typeof d === "number" && !isNaN(d) && d < finalDist) { finalRay = hit; finalDist = d; }
                    } catch (_) {}
                }
            } catch (_) {}
            let endPos: any;
            if (finalRay) { endPos = finalRay.method("get_point").invoke(); }
            else { endPos = Vector3.method("op_Addition").invoke(startPos, Vector3.method("op_Multiply").invoke(dir, 512)); }
            if (Vector3.method("op_Equality").invoke(endPos, zeroVector)) {
                endPos = Vector3.method("op_Addition").invoke(startPos, Vector3.method("op_Multiply").invoke(dir, 512));
            }
            if (!GunPointer || (GunPointer.isNull?.() ?? true)) {
                GunPointer = createObject(endPos, identityQuaternion, [0.1, 0.1, 0.1], 0, [0, 0.5, 1, 1]);
            }
            GunPointer.method("SetActive").invoke(true);
            getTransform(GunPointer).method("set_position").invoke(endPos);
            const ptrRend = getComponent(GunPointer, Renderer);
            const ptrMat = ptrRend.method("get_material").invoke();
            try { ptrMat.method("set_shader").invoke(TextShader); } catch (_) {}
            const ptrColor = rightTrigger ? [0, 0.25, 0.6, 1] : [0, 0.5, 1, 0.85];
            ptrMat.method("set_color").invoke(ptrColor);
            try { const c2 = getComponent(GunPointer, Collider); if (c2 != null) Destroy(c2); } catch (_) {}
            if (!GunLine || (GunLine.isNull?.() ?? true)) {
                const lineObj = createObject(zeroVector, identityQuaternion, oneVector, 0, [0, 0, 0, 0]);
                GunLine = addComponent(lineObj, LineRenderer);
            }
            else { GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true); }
            const lineMat = GunLine.method("get_material").invoke();
            try { lineMat.method("set_shader").invoke(TextShader); } catch (_) {}
            const lineColor: [number, number, number, number] = [0, 0.5, 1, 0.55];
            GunLine.method("set_startColor").invoke(lineColor);
            GunLine.method("set_endColor").invoke(lineColor);
            GunLine.method("set_startWidth").invoke(0.025);
            GunLine.method("set_endWidth").invoke(0.025);
            GunLine.method("set_positionCount").invoke(2);
            GunLine.method("set_useWorldSpace").invoke(true);
            GunLine.method("SetPosition").invoke(0, startPos);
            GunLine.method("SetPosition").invoke(1, endPos);
            if (rightTrigger) {
                const step = 24;
                GunLine.method("set_positionCount").invoke(step);
                GunLine.method("SetPosition").invoke(0, startPos);
                const right = rightHandTransform.method("get_right").invoke();
                const up = rightHandTransform.method("get_up").invoke();
                for (let i = 1; i < step - 1; i++) {
                    const t = i / (step - 1);
                    const base = Vector3.method("Lerp").invoke(startPos, endPos, t);
                    const angle = t * Math.PI * 2 * 4;
                    const amp = 0.08 * Math.sin(t * Math.PI);
                    const rOff = Vector3.method("op_Multiply", 2).invoke(right, Math.cos(angle) * amp);
                    const uOff = Vector3.method("op_Multiply", 2).invoke(up, Math.sin(angle) * amp);
                    let spiral = Vector3.method("op_Addition").invoke(rOff, uOff);
                    if (Math.random() > 0.75) {
                        spiral = Vector3.method("op_Addition").invoke(spiral, [(Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2]);
                    }
                    GunLine.method("SetPosition").invoke(i, Vector3.method("op_Addition").invoke(base, spiral));
                }
                GunLine.method("SetPosition").invoke(step - 1, endPos);
            }
            return { ray: finalRay, gunPointer: GunPointer };
        } catch (_) { return { ray: null, gunPointer: null }; }
    }
    function openTemplateCategory(label: string, category: number): ButtonInfo {
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                currentCategory = category;
                currentPage = 0;
                _pcMenuSelector = 0;
            },
            isTogglable: false,
            toolTip: label,
        });
    }
    function templateBackButton(label: string = "Back to Main", category: number = 0): ButtonInfo {
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                currentCategory = category;
                currentPage = 0;
                _pcMenuSelector = 0;
            },
            isTogglable: false,
            toolTip: label,
        });
    }
    const allSettingsButtons: ButtonInfo[] = [
        new ButtonInfo({
            buttonText: "Back to Main",
            method: () => {
                currentCategory = 0;
                currentPage = 0;
            },
            isTogglable: false,
            toolTip: "Returns to main category.",
        }),
        new ButtonInfo({
            buttonText: "Outlines",
            enableMethod: () => {
                outlinesEnabled = true;
            },
            disableMethod: () => {
                outlinesEnabled = false;
            },
            isTogglable: true,
        }),
        styleStepper("Outline", () => {
            menuOutlineThickness = Math.max(0.002, menuOutlineThickness - 0.001);
            controlOutlineThickness = Math.max(0.0015, controlOutlineThickness - 0.001);
            rowOutlineThickness = Math.max(0.001, rowOutlineThickness - 0.001);
        }, () => {
            menuOutlineThickness = Math.min(0.014, menuOutlineThickness + 0.001);
            controlOutlineThickness = Math.min(0.014, controlOutlineThickness + 0.001);
            rowOutlineThickness = Math.min(0.012, rowOutlineThickness + 0.001);
        }),
        styleStepper("Outline Shade", () => {
            const shade = Math.max(0.04, menuOutlineColor[0] - 0.02);
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [
                shade,
                shade,
                Math.min(0.35, shade + 0.015),
                1,
            ];
        }, () => {
            const shade = Math.min(0.3, menuOutlineColor[0] + 0.02);
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [
                shade,
                shade,
                Math.min(0.35, shade + 0.015),
                1,
            ];
        }),
        styleStepper("Corner Roundness", () => {
            cornerRoundness = Math.max(0.12, cornerRoundness - 0.04);
        }, () => {
            cornerRoundness = Math.min(0.44, cornerRoundness + 0.04);
        }),
        styleStepper("Background Shade", () => {
            bgColor = [0.045, 0.045, 0.05, bgColor[3]];
        }, () => {
            bgColor = [0.13, 0.13, 0.14, bgColor[3]];
        }),
        styleStepper("Button Shade", () => {
            buttonColor = [0.1, 0.1, 0.11, buttonColor[3]];
        }, () => {
            buttonColor = [0.22, 0.22, 0.235, buttonColor[3]];
        }),
        styleStepper("Enabled Shade", () => {
            buttonPressedColor = [0.2, 0.2, 0.215, buttonPressedColor[3]];
        }, () => {
            buttonPressedColor = [0.4, 0.4, 0.43, buttonPressedColor[3]];
        }),
        styleToggleButton("Text Gradient", textGradientEnabled, () => {
            textGradientEnabled = true;
        }, () => {
            textGradientEnabled = false;
        }, "Animate menu text between the selected dark and light tones."),
        styleStepper("Gradient Speed", () => {
            textGradientSpeed = Math.max(0.4, textGradientSpeed - 0.4);
        }, () => {
            textGradientSpeed = Math.min(6, textGradientSpeed + 0.4);
        }),
        styleStepper("Gradient Dark", () => {
            textGradientDarkTone = Math.max(24, textGradientDarkTone - 8);
        }, () => {
            textGradientDarkTone = Math.min(textGradientLightTone - 16, textGradientDarkTone + 8);
        }),
        styleStepper("Gradient Light", () => {
            textGradientLightTone = Math.max(textGradientDarkTone + 16, textGradientLightTone - 8);
        }, () => {
            textGradientLightTone = Math.min(255, textGradientLightTone + 8);
        }),
        styleStepper("Panel Opacity", () => {
            bgColor = [bgColor[0], bgColor[1], bgColor[2], Math.max(0.35, bgColor[3] - 0.05)];
        }, () => {
            bgColor = [bgColor[0], bgColor[1], bgColor[2], Math.min(1, bgColor[3] + 0.05)];
        }),
        styleStepper("Button Opacity", () => {
            buttonColor = [
                buttonColor[0], buttonColor[1], buttonColor[2],
                Math.max(0.35, buttonColor[3] - 0.05),
            ];
            buttonPressedColor = [
                buttonPressedColor[0], buttonPressedColor[1], buttonPressedColor[2],
                Math.max(0.35, buttonPressedColor[3] - 0.05),
            ];
        }, () => {
            buttonColor = [
                buttonColor[0], buttonColor[1], buttonColor[2],
                Math.min(1, buttonColor[3] + 0.05),
            ];
            buttonPressedColor = [
                buttonPressedColor[0], buttonPressedColor[1], buttonPressedColor[2],
                Math.min(1, buttonPressedColor[3] + 0.05),
            ];
        }),
        styleStepper("Menu Size", () => {
            menuscale = Math.max(0.7, menuscale - 0.05);
        }, () => {
            menuscale = Math.min(1.2, menuscale + 0.05);
        }),
        styleStepper("Button Height", () => {
            rowButtonHeight = Math.max(0.054, rowButtonHeight - 0.004);
            rowButtonSpacing = Math.max(0.026, rowButtonSpacing - 0.002);
        }, () => {
            rowButtonHeight = Math.min(0.082, rowButtonHeight + 0.004);
            rowButtonSpacing = Math.min(0.036, rowButtonSpacing + 0.002);
        }),
        styleStepper("Button Width", () => {
            rowButtonWidth = Math.max(0.56, rowButtonWidth - 0.02);
        }, () => {
            rowButtonWidth = Math.min(0.72, rowButtonWidth + 0.02);
        }),
        styleStepper("Disconnect Width", () => {
            disconnectButtonWidth = Math.max(0.5, disconnectButtonWidth - 0.03);
        }, () => {
            disconnectButtonWidth = Math.min(0.76, disconnectButtonWidth + 0.03);
        }),
        styleStepper("Page Button Width", () => {
            pageButtonWidth = Math.max(0.1, pageButtonWidth - 0.01);
        }, () => {
            pageButtonWidth = Math.min(0.19, pageButtonWidth + 0.01);
        }),
        styleStepper("Row Spacing", () => {
            rowButtonSpacing = Math.max(0.025, rowButtonSpacing - 0.0015);
        }, () => {
            rowButtonSpacing = Math.min(0.036, rowButtonSpacing + 0.0015);
        }),
        styleStepper("Title Size", () => {
            titleWidth = Math.max(0.48, titleWidth - 0.04);
            titleHeight = Math.max(0.048, titleHeight - 0.003);
        }, () => {
            titleWidth = Math.min(0.72, titleWidth + 0.04);
            titleHeight = Math.min(0.068, titleHeight + 0.003);
        }),
        styleStepper("PC Distance", () => {
            pcMenuDistance = Math.max(0.48, pcMenuDistance - 0.05);
        }, () => {
            pcMenuDistance = Math.min(1.05, pcMenuDistance + 0.05);
        }),
        styleStepper("VR Menu Height", () => {
            vrMenuUpOffset = Math.max(-0.2, vrMenuUpOffset - 0.02);
            menuSnapNextFrame = true;
        }, () => {
            vrMenuUpOffset = Math.min(0.35, vrMenuUpOffset + 0.02);
            menuSnapNextFrame = true;
        }),
        styleStepper("VR Palm Offset", () => {
            vrMenuPalmInset = Math.max(0, vrMenuPalmInset - 0.01);
            menuSnapNextFrame = true;
        }, () => {
            vrMenuPalmInset = Math.min(0.12, vrMenuPalmInset + 0.01);
            menuSnapNextFrame = true;
        }),
        styleStepper("VR Menu Tilt", () => {
            vrMenuTilt = Math.max(-30, vrMenuTilt - 2);
            menuSnapNextFrame = true;
        }, () => {
            vrMenuTilt = Math.min(20, vrMenuTilt + 2);
            menuSnapNextFrame = true;
        }),
        styleToggleButton("Right-Hand Menu", righthand, () => {
            righthand = true;
            menuSnapNextFrame = true;
        }, () => {
            righthand = false;
            menuSnapNextFrame = true;
        }, "Use the right controller for the regular hand menu."),
        styleActionButton("Compact Spacing", () => {
            rowButtonHeight = 0.056;
            rowButtonSpacing = 0.0265;
        }),
        (() => {
            const smoothMenuButton = new ButtonInfo({
                buttonText: "Smooth Menu",
                enableMethod: () => {
                    LerpMenu = true;
                    menuSnapNextFrame = true;
                },
                disableMethod: () => {
                    LerpMenu = false;
                },
                isTogglable: true,
                toolTip: "Smoothly follows your hand or head.",
            });
            smoothMenuButton.enabled = LerpMenu;
            return smoothMenuButton;
        })(),
        styleStepper("Menu Smoothness", () => {
            menuFollowSmoothness = Math.max(2, menuFollowSmoothness - 1);
        }, () => {
            menuFollowSmoothness = Math.min(30, menuFollowSmoothness + 1);
        }),
        styleStepper("Animation Speed", () => {
            menuOpenSpeed = Math.max(2.5, menuOpenSpeed - 0.75);
            menuCloseSpeed = Math.max(3.0, menuCloseSpeed - 0.75);
        }, () => {
            menuOpenSpeed = Math.min(10, menuOpenSpeed + 0.75);
            menuCloseSpeed = Math.min(12, menuCloseSpeed + 0.75);
        }),
        styleActionButton("Reset Menu Settings", () => {
            menuscale = 1.15;
            menuOutlineColor = [0.05, 0.1, 0.35, 1];
            pageOutlineColor = menuOutlineColor;
            buttonOutlineColor = menuOutlineColor;
            menuOutlineThickness = 0.009;
            controlOutlineThickness = 0.0075;
            rowOutlineThickness = 0.0065;
            outlinesEnabled = true;
            rowButtonHeight = 0.065;
            rowButtonWidth = 0.65;
            rowButtonSpacing = 0.032;
            disconnectButtonWidth = 0.62;
            pageButtonWidth = 0.135;
            cornerRoundness = 0.28;
            titleWidth = 0.64;
            titleHeight = 0.063;
            pcMenuDistance = 0.7;
            vrMenuUpOffset = 0.08;
            vrMenuPalmInset = 0.045;
            vrMenuRightOffset = 0.025;
            vrMenuTilt = -8;
            bgColor = [0.02, 0.04, 0.15, 0.98];
            buttonColor = [0.04, 0.08, 0.25, 0.95];
            buttonPressedColor = [0.08, 0.14, 0.5, 0.95];
            textColor = [0.95, 0.95, 0.95, 1];
            textGradientEnabled = true;
            textGradientSpeed = 2.4;
            textGradientDarkTone = 112;
            textGradientLightTone = 222;
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.05, 0.1, 0.35, 1];
            menuOpenSpeed = 2.5;
            menuCloseSpeed = 3.0;
            LerpMenu = true;
            menuFollowSmoothness = 15;
            menuSnapNextFrame = true;
            righthand = false;
            const smoothMenuButton = findExistingButton("Smooth Menu");
            if (smoothMenuButton)
                smoothMenuButton.enabled = true;
            const textGradientButton = findExistingButton("Text Gradient");
            if (textGradientButton)
                textGradientButton.enabled = true;
            const menuHandButton = findExistingButton("Right-Hand Menu");
            if (menuHandButton)
                menuHandButton.enabled = false;
        }),
        styleActionButton("Theme: Blue", () => {
            bgColor = [0.02, 0.04, 0.15, 0.98];
            buttonColor = [0.04, 0.08, 0.25, 0.95];
            buttonPressedColor = [0.08, 0.14, 0.5, 0.95];
            textColor = [0.95, 0.95, 0.95, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.05, 0.1, 0.35, 1];
        }),
        styleActionButton("Theme: Plasma Purple", () => {
            bgColor = [0.075, 0.045, 0.11, 0.98];
            buttonColor = [0.2, 0.1, 0.29, 0.96];
            buttonPressedColor = [0.46, 0.2, 0.68, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.3, 0.16, 0.42, 1];
        }),
        styleActionButton("Theme: Toxic Green", () => {
            bgColor = [0.035, 0.075, 0.045, 0.98];
            buttonColor = [0.08, 0.19, 0.1, 0.96];
            buttonPressedColor = [0.16, 0.5, 0.22, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.1, 0.3, 0.14, 1];
        }),
        styleActionButton("Theme: Blood Red", () => {
            bgColor = [0.09, 0.035, 0.04, 0.98];
            buttonColor = [0.22, 0.07, 0.08, 0.96];
            buttonPressedColor = [0.56, 0.12, 0.14, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.34, 0.08, 0.09, 1];
        }),
        styleActionButton("Theme: Ocean", () => {
            bgColor = [0.025, 0.07, 0.1, 0.98];
            buttonColor = [0.04, 0.16, 0.23, 0.96];
            buttonPressedColor = [0.05, 0.38, 0.56, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.06, 0.25, 0.36, 1];
        }),
        styleActionButton("Theme: Gold", () => {
            bgColor = [0.1, 0.075, 0.025, 0.98];
            buttonColor = [0.22, 0.16, 0.04, 0.96];
            buttonPressedColor = [0.58, 0.4, 0.08, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.36, 0.26, 0.06, 1];
        }),
        styleActionButton("Theme: Ice", () => {
            bgColor = [0.055, 0.085, 0.11, 0.98];
            buttonColor = [0.11, 0.2, 0.27, 0.96];
            buttonPressedColor = [0.32, 0.64, 0.82, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.2, 0.42, 0.56, 1];
        }),
    ];
    buttons = Array.from({ length: 12 }, () => [] as ButtonInfo[]);
    buttons[0] = [
        openTemplateCategory("Settings", 10),
        openTemplateCategory("Player", 2),
        openTemplateCategory("Others", 3),
        openTemplateCategory("Users", 4),
        openTemplateCategory("Items", 5),
        openTemplateCategory("Combat", 6),
        openTemplateCategory("World", 7),
        openTemplateCategory("Overpowered", 8),
        openTemplateCategory("Blueprints", 9),
        openTemplateCategory("Credits", 11),
    ];
    buttons[1] = [
        new ButtonInfo({
            buttonText: "Disconnect",
            method: () => {
                const networkrunner = SFXManager.method("get__currentRunner").invoke();
                const manager = NManager.method("get_instance").invoke();
                manager.method("OnPlayerLeft").invoke(networkrunner, networkrunner.method("get_LocalPlayer").invoke());
            },
            isTogglable: false,
            toolTip: "Disconnects you from the room.",
        }),
        new ButtonInfo({
            buttonText: "PreviousPage",
            method: () => {
                const lastPage = Math.max(Math.ceil(buttons[currentCategory].length / getButtonsPerPage()) - 1, 0);
                currentPage = currentPage <= 0 ? lastPage : currentPage - 1;
            },
            isTogglable: false,
        }),
        new ButtonInfo({
            buttonText: "NextPage",
            method: () => {
                const pageCount = Math.max(Math.ceil(buttons[currentCategory].length / getButtonsPerPage()), 1);
                currentPage = (currentPage + 1) % pageCount;
            },
            isTogglable: false,
        }),
        templateBackButton("GlobalReturn", 0),
    ];
    for (let category = 2; category <= 9; category++) {
        buttons[category] = [templateBackButton()];
    }
    buttons[11] = [templateBackButton()];
    function findExistingButton(label: string): ButtonInfo | null {
        for (const page of buttons) {
            const found = page.find((button) => button.buttonText === label);
            if (found)
                return found;
        }
        const pending = allSettingsButtons.find((button) => button.buttonText === label);
        return pending || null;
    }
    function settingsRange(startLabel: string, endLabel: string | null): ButtonInfo[] {
        const start = allSettingsButtons.findIndex((button) => button.buttonText === startLabel);
        const end = endLabel
            ? allSettingsButtons.findIndex((button) => button.buttonText === endLabel)
            : allSettingsButtons.length;
        if (start < 0)
            return [];
        return allSettingsButtons.slice(start, end >= 0 ? end : allSettingsButtons.length);
    }
    const appearanceCategory = buttons.length;
    const layoutCategory = appearanceCategory + 1;
    const motionCategory = appearanceCategory + 2;
    const themesCategory = appearanceCategory + 3;
    buttons.push([templateBackButton("Back to Settings", 10), ...settingsRange("Outlines", "Menu Size")], [templateBackButton("Back to Settings", 10), ...settingsRange("Menu Size", "Smooth Menu")], [templateBackButton("Back to Settings", 10), ...settingsRange("Smooth Menu", "Reset Menu Settings")], [templateBackButton("Back to Settings", 10), ...settingsRange("Theme: Dark", null)]);
    const resetMenuSettings = allSettingsButtons.find((button) => button.buttonText === "Reset Menu Settings");
    buttons[10] = [
        templateBackButton(),
        ...(resetMenuSettings ? [resetMenuSettings] : []),
        openTemplateCategory("Appearance", appearanceCategory),
        openTemplateCategory("Layout", layoutCategory),
        openTemplateCategory("Motion", motionCategory),
        openTemplateCategory("Themes", themesCategory),
    ];
    function installTemplateButtons(additions: MenuTemplateAddition[]) {
        const categoryIndexes: Record<string, number> = {
            main: 0,
            player: 2,
            others: 3,
            users: 4,
            items: 5,
            combat: 6,
            world: 7,
            overpowered: 8,
            blueprints: 9,
            settings: 10,
            credits: 11,
        };
        for (const addition of additions) {
            const categoryIndex = categoryIndexes[addition.category.toLowerCase()];
            if (categoryIndex === undefined || !buttons[categoryIndex]) {
                syteError("Unknown template category: " + addition.category);
                continue;
            }
            buttons[categoryIndex].push(...addition.entries.map((entry) => new ButtonInfo(entry)));
        }
    }
    function installTemplateCategory(definition: MenuTemplateCategory, parentCategory: number, parentTitle: string): number {
        const categoryIndex = buttons.length;
        buttons.push([]);
        const pageButtons: ButtonInfo[] = [
            new ButtonInfo(menuButton("Back to " + parentTitle, () => {
                currentCategory = parentCategory;
                currentPage = 0;
                _pcMenuSelector = 0;
            })),
        ];
        for (const entry of definition.entries) {
            if ((entry as MenuTemplateCategory).kind === "category") {
                const child = entry as MenuTemplateCategory;
                const childIndex = installTemplateCategory(child, categoryIndex, definition.title);
                pageButtons.push(new ButtonInfo(menuButton(child.title, () => {
                    currentCategory = childIndex;
                    currentPage = 0;
                    _pcMenuSelector = 0;
                }, child.toolTip || child.title)));
            }
            else {
                pageButtons.push(new ButtonInfo(entry as ButtonInfoConfig));
            }
        }
        buttons[categoryIndex] = pageButtons;
        return categoryIndex;
    }
    function installTemplateMenu(definitions: MenuTemplateCategory[]) {
        const mainButtons: ButtonInfo[] = [];
        for (const definition of definitions) {
            const categoryIndex = installTemplateCategory(definition, 0, "Main");
            mainButtons.push(new ButtonInfo(menuButton(definition.title, () => {
                currentCategory = categoryIndex;
                currentPage = 0;
                _pcMenuSelector = 0;
            }, definition.toolTip || definition.title)));
        }
        const creditsIndex = buttons[0].findIndex((button) => button.buttonText === "Credits");
        const insertAt = creditsIndex >= 0 ? creditsIndex : buttons[0].length;
        buttons[0].splice(insertAt, 0, ...mainButtons);
    }
    installTemplateMenu(TEMPLATE_MENU_CATEGORIES);
    let buttonMap: Map<string, ButtonInfo> = new Map();
    function rebuildButtonMap(): void {
        buttonMap.clear();
        buttons.forEach(function (buttonArray, categoryIndex) {
            buttonArray.forEach(function (button) {
                buttonMap.set(button.activationId, button);
                if (categoryIndex === 1)
                    buttonMap.set(button.buttonText, button);
                if (button.stepDown)
                    buttonMap.set(button.stepDown.activationId, button.stepDown);
                if (button.stepUp)
                    buttonMap.set(button.stepUp.activationId, button.stepUp);
            });
        });
    }
    rebuildButtonMap();
    function getIndex(activationId: string): ButtonInfo {
        return buttonMap.get(activationId)!;
    }
    const ButtonActivation = GorillaReportButton.method("OnTriggerEnter");
    ButtonActivation.implementation = function (collider) {
        const rawName = this.method("get_name").invoke().toString();
        if (rawName.length > 1 && rawName[1] == "@") {
            if (collider.handle.equals(referenceCollider.handle)) {
                const goName = rawName.substring(2, rawName.length - 1);
                const _time = Time.method("get_time").invoke();
                if (_time > buttonClickDelay) {
                    buttonClickDelay = _time + 0.2;
                    const button = getIndex(goName);
                    playButtonSound();
                    if (button) {
                        if (button.isTogglable) {
                            button.enabled = !button.enabled;
                            reloadMenu();
                            if (button.enabled) {
                                button.enableMethod?.();
                                if (button.toolTip) console.log("[ON] " + button.toolTip);
                            }
                            else {
                                button.disableMethod?.();
                                if (button.toolTip) console.log("[OFF] " + button.toolTip);
                            }
                        }
                        else {
                            reloadMenu();
                            button.method?.();
                            if (button.toolTip) console.log("[OK] " + button.toolTip);
                        }
                    }
                }
            }
            return;
        }
        return this.method("OnTriggerEnter").invoke(collider);
    };
    function updateInput() {
        const leftDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(4);
        const rightDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(5);
        const outBool = Il2Cpp.alloc(1);
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("primaryButton").value, outBool);
        leftPrimary = outBool.readU8() !== 0;
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("secondaryButton").value, outBool);
        leftSecondary = outBool.readU8() !== 0;
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("gripButton").value, outBool);
        leftGrab = outBool.readU8() !== 0;
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("triggerButton").value, outBool);
        leftTrigger = outBool.readU8() !== 0;
        leftDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
        leftStick = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("primaryButton").value, outBool);
        rightPrimary = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("secondaryButton").value, outBool);
        rightSecondary = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("triggerButton").value, outBool);
        rightTrigger = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("gripButton").value, outBool);
        rightGrab = outBool.readU8() !== 0;
        rightDevice
            .method("TryGetFeatureValue", 2)
            .invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
        rightStick = outBool.readU8() !== 0;
    }
    const LateUpdate = syteValid(GTPlayer)
        ? GTPlayer.method("OnLateUpdate")
        : GTPlayerClass.method("OnLateUpdate");
    let menuAnimTime: number = 0;
    const OriginalLateUpdate = LateUpdate.nativeFunction;
    let updateCrashLogged = false;
    LateUpdate.implementation = function () {
        try {
            if (!Time || Time.handle.isNull())
                return OriginalLateUpdate(this.handle);
            deltaTime = Time.method("get_deltaTime").invoke();
            time = Time.method("get_time").invoke();
            frameCount++;
            if (InputDevices && !InputDevices.handle.isNull()) {
                updateInput();
            }
            updateCustomClickLoad();
            initPcWin32Input();
            if (_GAKS) {
                const _qDown = _pcKeyDown(_VK_Q);
                if (_qDown && !_pcQWasDown) {
                    if (!_pcMode) {
                        _pcMode = true;
                        _pcMenuOpen = false;
                        _pcFlyEnabled = true;
                        flyVelocity = [0, 0, 0];
                        try {
                            instance = instanceField ? instanceField.value : GTPlayer;
                            if (syteValid(instance)) {
                                playerRigidBody = instance.field("_playerRigidBody").value;
                                rigidbody = playerRigidBody;
                            }
                        }
                        catch (_) { }
                        _pcLastCursorX = -1;
                        syteLog("PC Mode ON  Q=toggle menu  WASD+RMB=fly  Esc=exit");
                    }
                    else {
                        _pcMenuOpen = !_pcMenuOpen;
                        _pcMenuSelector = 0;
                    }
                }
                _pcQWasDown = _qDown;
                const _escDown = _pcKeyDown(_VK_ESCAPE);
                if (_escDown && !_pcEscWasDown && _pcMode) {
                    _pcMode = false;
                    _pcMenuOpen = false;
                    _pcFlyEnabled = false;
                    flyVelocity = [0, 0, 0];
                    try {
                        playerRigidBody?.method("set_useGravity").invoke(true);
                    }
                    catch (_) { }
                    syteLog("PC Mode OFF");
                }
                _pcEscWasDown = _escDown;
                if (_pcMode) {
                    const _rmbDown = _pcKeyDown(_VK_RBUTTON);
                    const _lmbDown = _pcKeyDown(_VK_LBUTTON);
                    if (!_pcMenuOpen) {
                        rightGrab = _rmbDown;
                        rightTrigger = _lmbDown;
                    }
                    if (_rmbDown && _GCP) {
                        try {
                            _GCP(_pcPoint);
                            const _cx = _pcPoint.readS32();
                            const _cy = _pcPoint.add(4).readS32();
                            if (_pcLastCursorX >= 0) {
                                const _dx = _cx - _pcLastCursorX;
                                const _dy = _cy - _pcLastCursorY;
                                _pcYaw = (_pcYaw + _dx * _pcMouseSensitivity) % 360;
                                _pcPitch = Math.max(-89, Math.min(89, _pcPitch - _dy * _pcMouseSensitivity));
                            }
                            _pcLastCursorX = _cx;
                            _pcLastCursorY = _cy;
                        }
                        catch (_) { }
                    }
                    else {
                        _pcLastCursorX = -1;
                    }
                    _pcSmoothYaw = lerp(_pcSmoothYaw, _pcYaw, deltaTime * 18.0);
                    _pcSmoothPitch = lerp(_pcSmoothPitch, _pcPitch, deltaTime * 18.0);
                    if (_pcFlyEnabled)
                        try {
                            const _yawR = (_pcSmoothYaw * Math.PI) / 180;
                            const _pitR = (_pcSmoothPitch * Math.PI) / 180;
                            const _cosPit = Math.cos(_pitR);
                            const _fwdX = _cosPit * Math.sin(_yawR);
                            const _fwdY = -Math.sin(_pitR);
                            const _fwdZ = _cosPit * Math.cos(_yawR);
                            const _rightX = Math.cos(_yawR);
                            const _rightZ = -Math.sin(_yawR);
                            let _moveX = 0, _moveY = 0, _moveZ = 0;
                            let _moving = false;
                            if (_pcKeyDown(_VK_W)) {
                                _moveX += _fwdX;
                                _moveY += _fwdY;
                                _moveZ += _fwdZ;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_S)) {
                                _moveX -= _fwdX;
                                _moveY -= _fwdY;
                                _moveZ -= _fwdZ;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_A)) {
                                _moveX -= _rightX;
                                _moveZ -= _rightZ;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_D)) {
                                _moveX += _rightX;
                                _moveZ += _rightZ;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_SPACE_PC)) {
                                _moveY += 1.0;
                                _moving = true;
                            }
                            if (_pcKeyDown(_VK_SHIFT_PC)) {
                                _moveY -= 1.0;
                                _moving = true;
                            }
                            const _spd = flySpeeds && flySpeeds[flySpeedIndex]
                                ? flySpeeds[flySpeedIndex]
                                : 25;
                            const _accelFactor = _moving
                                ? deltaTime * _pcFlyAcceleration
                                : deltaTime * _pcFlyDeceleration;
                            const _dragFactor = Math.pow(0.5, deltaTime);
                            if (_moving) {
                                const _mag = Math.sqrt(_moveX * _moveX + _moveY * _moveY + _moveZ * _moveZ) || 1;
                                flyVelocity[0] = lerp(flyVelocity[0], (_moveX / _mag) * _spd, _accelFactor);
                                flyVelocity[1] = lerp(flyVelocity[1], (_moveY / _mag) * _spd, _accelFactor);
                                flyVelocity[2] = lerp(flyVelocity[2], (_moveZ / _mag) * _spd, _accelFactor);
                            }
                            else {
                                flyVelocity[0] *= _dragFactor;
                                flyVelocity[1] *= _dragFactor;
                                flyVelocity[2] *= _dragFactor;
                            }
                            if (playerRigidBody && !playerRigidBody.isNull()) {
                                playerRigidBody.method("set_useGravity").invoke(false);
                                syteSetVelocity(playerRigidBody, [
                                    flyVelocity[0],
                                    flyVelocity[1],
                                    flyVelocity[2],
                                ]);
                                if (_moving &&
                                    Math.sqrt(flyVelocity[0] ** 2 + flyVelocity[2] ** 2) > 0.1) {
                                    const targetRot = Quaternion.method("LookRotation", 1).invoke([
                                        flyVelocity[0],
                                        0,
                                        flyVelocity[2],
                                    ]);
                                    const currentRot = getTransform(instance)
                                        .method("get_rotation")
                                        .invoke();
                                    const smoothRot = Quaternion.method("Slerp").invoke(currentRot, targetRot, deltaTime * 3.0);
                                    getTransform(instance).method("set_rotation").invoke(smoothRot);
                                }
                            }
                            if (headCollider && !headCollider.isNull()) {
                                getTransform(headCollider)
                                    .method("set_rotation")
                                    .invoke(Quaternion.method("Euler").invoke(_pcSmoothPitch, _pcSmoothYaw, 0));
                            }
                        }
                        catch (e) { }
                }
            }
            if (_pcMenuOpen) {
                const _buttonsPerPage = getButtonsPerPage();
                const _pageBtns = (buttons[currentCategory] || []).slice(currentPage * _buttonsPerPage, (currentPage + 1) * _buttonsPerPage);
                const _cnt = _pageBtns.length || 1;
                const _upDown = _pcKeyDown(_VK_UP_PC);
                if (_upDown && !_pcUpWasDown) {
                    _pcMenuSelector = (_pcMenuSelector - 1 + _cnt) % _cnt;
                    reloadMenu();
                }
                _pcUpWasDown = _upDown;
                const _downDown = _pcKeyDown(_VK_DOWN_PC);
                if (_downDown && !_pcDownWasDown) {
                    _pcMenuSelector = (_pcMenuSelector + 1) % _cnt;
                    reloadMenu();
                }
                _pcDownWasDown = _downDown;
                const _entDown = _pcKeyDown(_VK_RETURN_PC) || _pcKeyDown(_VK_SPACE_PC);
                if (_entDown && !_pcEnterWasDown) {
                    const _btn = _pageBtns[_pcMenuSelector];
                    if (_btn) {
                        playButtonSound();
                        if (_btn.isTogglable) {
                            _btn.enabled = !_btn.enabled;
                            try {
                                if (_btn.enabled && _btn.enableMethod)
                                    _btn.enableMethod();
                            }
                            catch (_) { }
                            try {
                                if (!_btn.enabled && _btn.disableMethod)
                                    _btn.disableMethod();
                            }
                            catch (_) { }
                        }
                        else {
                            try {
                                if (_btn.method)
                                    _btn.method();
                            }
                            catch (_) { }
                        }
                        if (_btn.toolTip) { const state = _btn.isTogglable ? (_btn.enabled ? "ON" : "OFF") : "OK"; console.log("[" + state + "] " + _btn.toolTip); }
                        reloadMenu();
                    }
                }
                _pcEnterWasDown = _entDown;
                const _selectedSetting = _pageBtns[_pcMenuSelector];
                const _minusDown = _pcKeyDown(_VK_OEM_MINUS_PC) || _pcKeyDown(_VK_SUBTRACT_PC);
                if (_minusDown && !_pcMinusWasDown && _selectedSetting?.stepDown) {
                    playButtonSound();
                    try {
                        _selectedSetting.stepDown.method?.();
                    }
                    catch (_) { }
                    reloadMenu();
                }
                _pcMinusWasDown = _minusDown;
                const _plusDown = _pcKeyDown(_VK_OEM_PLUS_PC) || _pcKeyDown(_VK_ADD_PC);
                if (_plusDown && !_pcPlusWasDown && _selectedSetting?.stepUp) {
                    playButtonSound();
                    try {
                        _selectedSetting.stepUp.method?.();
                    }
                    catch (_) { }
                    reloadMenu();
                }
                _pcPlusWasDown = _plusDown;
                const _leftDown = _pcKeyDown(_VK_LEFT_PC);
                if (_leftDown && !_pcLeftWasDown) {
                    playButtonSound();
                    const _maxPage = Math.max(Math.ceil((buttons[currentCategory] || []).length / _buttonsPerPage) - 1, 0);
                    currentPage--;
                    if (currentPage < 0)
                        currentPage = _maxPage;
                    _pcMenuSelector = 0;
                    reloadMenu();
                }
                _pcLeftWasDown = _leftDown;
                const _rightDown = _pcKeyDown(_VK_RIGHT_PC);
                if (_rightDown && !_pcRightWasDown) {
                    playButtonSound();
                    const _maxPage = Math.max(Math.ceil((buttons[currentCategory] || []).length / _buttonsPerPage) - 1, 0);
                    currentPage++;
                    if (currentPage > _maxPage)
                        currentPage = 0;
                    _pcMenuSelector = 0;
                    reloadMenu();
                }
                _pcRightWasDown = _rightDown;
            }
            const menuRequested = (!_pcMode &&
                ((righthand && rightSecondary) || (!righthand && leftSecondary))) ||
                (_pcMode && _pcMenuOpen);
            if (menuRequested) {
                if (menu == null) {
                    menuAnimation = menuClosing ? menuAnimation : 0;
                    renderMenu();
                    if (!menuReloading)
                        playButtonSound();
                    menuReloading = false;
                }
                else {
                    recenterMenu();
                }
                menuClosing = false;
                updateMenuAnimation(true);
            }
            else {
                if (menu != null) {
                    if (!menuClosing) {
                        menuClosing = true;
                        playButtonSound();
                    }
                    updateMenuAnimation(false);
                    if (menuAnimation <= 0) {
                        Destroy(menu);
                        menu = null;
                        menuClosing = false;
                    }
                }
            }
            updateAnimatedMenuText();
            if (menu == null) {
                if (reference != null) {
                    Destroy(reference);
                    reference = null;
                    referenceCollider = null;
                }
            }
            else {
                if (reference == null) {
                    renderReference();
                }
            }
            try {
                if (GunPointer != null) {
                    if (!GunPointer.method("get_activeSelf").invoke()) { Destroy(GunPointer); GunPointer = null; }
                    else GunPointer.method("SetActive").invoke(false);
                }
                if (GunLine != null) {
                    const lineObj = GunLine.method("get_gameObject").invoke();
                    if (lineObj != null) {
                        if (!lineObj.method("get_activeSelf").invoke()) { Destroy(lineObj); GunLine = null; }
                        else lineObj.method("SetActive").invoke(false);
                    }
                }
            } catch (_) {}
            buttons
                .flat()
                .filter((button) => button.enabled)
                .forEach((button) => {
                if (button.method) {
                    try {
                        button.method();
                    }
                    catch (error) {
                        console.error(`Error in button '${button.buttonText}':`, error);
                    }
                }
            });
            if (frameCount % 60 === 0) {
                try {
                    instance = instanceField ? instanceField.value : null;
                }
                catch (_) {
                    instance = null;
                }
                if (syteValid(instance)) {
                    GTPlayer = instance;
                    rightHandTransform = instance.field("rightHandTransform").value;
                    leftHandTransform = instance.field("leftHandTransform").value;
                    headCollider = instance.field("headCollider").value;
                    bodyCollider = instance.field("bodyCollider").value;
                    playerRigidBody = instance.field("_playerRigidBody").value;
                    rigidbody = playerRigidBody;
                }
            }
        }
        catch (e) {
            if (!updateCrashLogged) {
                syteError("Update loop error: " + e);
                updateCrashLogged = true;
            }
        }
        let originalResult: any = null;
        try {
            originalResult = OriginalLateUpdate(this.handle);
        }
        catch (_) { }
        if (_pcMode && _pcFlyEnabled) {
            try {
                if (playerRigidBody && !playerRigidBody.isNull()) {
                    playerRigidBody.method("set_useGravity").invoke(false);
                    syteSetVelocity(playerRigidBody, flyVelocity);
                }
            }
            catch (_) { }
        }
        return originalResult;
    };
    // ── helpers from menu1.ts ──────────────────────────────────────────────
    function invokeInstance(method: any, instance: any, ...args: any[]) { return method.invokeRaw(instance, ...args); }
    function tryMethodName(klass: any, names: string[], parameterCount: number = -1) {
        for (const name of names) {
            try { return parameterCount >= 0 ? klass.method(name, parameterCount) : klass.method(name); } catch(_) {}
        }
        return null;
    }
    function isClassNamed(obj: any, className: string) {
        try { return obj && !obj.isNull() && obj.class.type.name === className; } catch(_) { return false; }
    }

    // ── Mining Laser: infinite fuel, no overheat, no consumption ──────────
    try {
        const MiningLaserClass = AssemblyCSharp.class("AnimalCompany.MiningLaser");
        try {
            const miningLaserFuel = tryMethodName(MiningLaserClass, ["get__fuel", "get_fuel"]);
            if (miningLaserFuel) miningLaserFuel.implementation = function() {
                try { this.field("_maxDistance").value = 9999.0; } catch(_) {}
                return this.field("_maxFuel").value;
            };
        } catch(_) {}
        try {
            const miningLaserOverheat = tryMethodName(MiningLaserClass, ["get__didOverheat", "get_didOverheat"]);
            if (miningLaserOverheat) miningLaserOverheat.implementation = function() { return false; };
        } catch(_) {}
        try {
            const miningLaserFuelConsumption = tryMethodName(MiningLaserClass, ["ProcessFuelConsumption"]);
            if (miningLaserFuelConsumption) miningLaserFuelConsumption.implementation = function() {};
        } catch(_) {}
    } catch(_) { console.error("[MiningLaser] hooks failed"); }

    // ── Anti-cheat bypass ─────────────────────────────────────────────────
    try {
        const AntiCheatClass = AssemblyCSharp.class("AnimalCompany.AntiCheatSystem");
        const antiCheatTick = tryMethodName(AntiCheatClass, ["Update", "LateUpdate", "FixedUpdate"]);
        if (antiCheatTick) antiCheatTick.implementation = function() {};
    } catch(e) { console.error("[AntiCheat] bypass failed:", e); }

    // ── VPN / isVPNActive bypass ──────────────────────────────────────────
    try {
        const AppStateClass = AssemblyCSharp.class("AnimalCompany.AppState");
        const appStateGetIsVPNActive = AppStateClass.method("get_isVPNActive");
        appStateGetIsVPNActive.implementation = function() {
            if (!isClassNamed(this, "AppState")) {
                try { return invokeInstance(appStateGetIsVPNActive, this); } catch(_) { return false; }
            }
            const sp = invokeInstance(appStateGetIsVPNActive, this);
            if (sp && !sp.isNull()) {
                try { sp.method("set_value").invoke(false); } catch(_) {}
                try { sp.field("_value").value = false; } catch(_) {}
                try { sp.field("value").value = false; } catch(_) {}
            }
            return sp;
        };
    } catch(e) { console.error("[VPN] bypass failed:", e); }

    // ── Rare fishing: always max size / max scale ─────────────────────────
    try {
        const GameplayFishConfigClass = Il2Cpp.domain.assembly("AnimalCompany").image
            .class("AnimalCompany.Fishing.GameplayFishConfig");
        try { GameplayFishConfigClass.method("GetRandomFishSize").implementation = function() { return 127; }; } catch(_) {}
        try {
            GameplayFishConfigClass.method("GetPriceByScaleModifier").implementation = function(basePrice: any) {
                return this.method("GetPriceByScaleModifier").invoke(basePrice, 127);
            };
        } catch(_) {}
    } catch(e) { console.error("[Fishing/Rare] GameplayFishConfig hook failed:", e); }
    try {
        const FishingBobberViewClass = Il2Cpp.domain.assembly("AnimalCompany").image
            .class("AnimalCompany.Fishing.FishingBobberView");
        FishingBobberViewClass.method("RPC_GrantClaimItem").implementation = function(receivingPlayer: any, itemID: any) {
            return this.method("RPC_GrantClaimItem").invoke(receivingPlayer, itemID, 127);
        };
    } catch(e) { console.error("[Fishing/Rare] FishingBobberView hook failed:", e); }

    // ── Sell value spoof: always sell at SELL_VALUE ───────────────────────
    const SELL_VALUE = 999999;
    let sellSurviveEnabled = false;
    let sellSurviveHookInstalled = false;
    function installSellSurviveHooks() {
        if (sellSurviveHookInstalled) return;
        sellSurviveHookInstalled = true;
        try {
            const ItemClass = AssemblyCSharp.class("AnimalCompany.GrabbableItem");
            const _sv = tryMethodName(ItemClass, ["get_sellValue", "get_SellValue"]);
            if (_sv) _sv.implementation = function() { return sellSurviveEnabled ? SELL_VALUE : invokeInstance(_sv, this); };
            const _asv = tryMethodName(ItemClass, ["get_actualSellValue", "get_ActualSellValue"]);
            if (_asv) _asv.implementation = function() { return sellSurviveEnabled ? SELL_VALUE : invokeInstance(_asv, this); };
        } catch(e) { console.error("[SellSurvive] hook failed:", e); }
    }

    // ── Extras menu category ──────────────────────────────────────────────
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("extras", [
        menuToggle("Infinite Health", {
            onEnable: () => { infHealthEnabled = true; },
            onDisable: () => { infHealthEnabled = false; },
            onUpdate: () => {},
            toolTip: "Your max health becomes 999999.",
        }),
        menuToggle("Sell Any Price", {
            onEnable: () => { sellSurviveEnabled = true; installSellSurviveHooks(); },
            onDisable: () => { sellSurviveEnabled = false; },
            onUpdate: () => {},
            toolTip: "All sold items pay out 999999.",
        }),
        menuToggle("Rare Fishing", {
            onEnable: () => {},
            onDisable: () => {},
            onUpdate: () => {},
            toolTip: "Mining laser has infinite fuel and no overheat. Fishing always gives max-size catches. Both are always active once the menu loads — this toggle is a label.",
        }),
        menuToggle("Mining Laser Buffs", {
            onEnable: () => {},
            onDisable: () => {},
            onUpdate: () => {},
            toolTip: "Infinite fuel, no overheat, max range — always active once loaded.",
        }),
    ]));
    installTemplateButtons(TEMPLATE_MENU_BUTTONS);
    rebuildButtonMap();

    console.log(`\x1b[38;2;0;200;255m
  ______   .___  ___. .__   __.  __     .___  ___.  _______ .__   __.  __    __\x1b[0m
\x1b[38;2;0;175;235m /  __  \\  |   \\/   | |  \\ |  | |  |    |   \\/   | |   ____||  \\ |  | |  |  |  |\x1b[0m
\x1b[38;2;0;150;215m|  |  |  | |  \\  /  | |   \\|  | |  |    |  \\  /  | |  |__   |   \\|  | |  |  |  |\x1b[0m
\x1b[38;2;0;125;195m|  |  |  | |  |\\/|  | |  . \`  | |  |    |  |\\/|  | |   __|  |  . \`  | |  |  |  |\x1b[0m
\x1b[38;2;0;100;175m|  \`--'  | |  |  |  | |  |\\   | |  |    |  |  |  | |  |____ |  |\\   | |  \`--'  |\x1b[0m
\x1b[38;2;0;75;155m \\______/  |__|  |__| |__| \\__| |__|    |__|  |__| |_______||__| \\__|  \\______/\x1b[0m
\x1b[38;2;0;150;215m
  [i] omni menu loaded successfully\x1b[0m
  `);
});