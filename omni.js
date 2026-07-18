"use strict";
// @ts-nocheck
const CLICK_PCM_BASE64 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/f8AAAAAAwAAAAAA/f8DAAAAAAAAAP3/AwAAAAYA+v8DAP3/AwD6/xMABgAGAPb/EwDt//D/" +
    "/f8QAPb/AwANAP3/8P8DAPP/EwAAAP3/AwAAAGAAzf4DATYD4+sjCGk+xhSBjJ6P7Dr/f6AeAIAD2rZteSNaqYG/vQ4pFRb3hv6QFxMW7QPg/g0EQwJj+9b5Sv2K/nP9hv0j/xoAsP+t/wMAZgAgAPb/GgBaAEMAKgAKADoAKgAKABYAEAAWAAoAAwAWAB0AGgDz/xMA9v8AAAoADQADAO3/AwDt/wAAEAAqAP3/AAAAABoA9v8AAAMAIAD9//b/" +
    "6v8NAP3//f8WAAAAAwD6/w0A9v/j/wMA9v/6//3/+v/2/w0A8/8QAAMAEwDz/wAAEwANAPr/HQD9//r//f8NAP3/AwD9/wMA/f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
const CLICK_PCM_SAMPLES = 384;
const CLICK_PCM_RATE = 8000;
function lerp(a, b, t) {
    return a + (b - a) * t;
}
let nextButtonActivationId = 0;
class ButtonInfo {
    constructor(config) {
        this.enabled = false;
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
    il2cpp_init: () => Il2Cpp.module.findExportByName("xCDPJp_mzeS"),
    il2cpp_init_utf16: () => Il2Cpp.module.findExportByName("ZqbXCVjOfjp"),
    il2cpp_shutdown: () => Il2Cpp.module.findExportByName("AaFj_FHKudI"),
    il2cpp_set_config_dir: () => Il2Cpp.module.findExportByName("QWQedEgddFi"),
    il2cpp_set_data_dir: () => Il2Cpp.module.findExportByName("tBQbdjbhTnh"),
    il2cpp_set_temp_dir: () => Il2Cpp.module.findExportByName("rMCuOKP_EvH"),
    il2cpp_set_commandline_arguments: () => Il2Cpp.module.findExportByName("jJGXLQGlGcl"),
    il2cpp_set_commandline_arguments_utf16: () => Il2Cpp.module.findExportByName("ytrbfsCtOFH"),
    il2cpp_set_config_utf16: () => Il2Cpp.module.findExportByName("OSLVcqAjjGg"),
    il2cpp_set_config: () => Il2Cpp.module.findExportByName("ZEsAwVRbLGQ"),
    il2cpp_set_memory_callbacks: () => Il2Cpp.module.findExportByName("qEZlbwRBnvD"),
    il2cpp_memory_pool_set_region_size: () => Il2Cpp.module.findExportByName("ZN_l_dtjQtw"),
    il2cpp_memory_pool_get_region_size: () => Il2Cpp.module.findExportByName("nEAqbKLyvcz"),
    il2cpp_get_corlib: () => Il2Cpp.module.findExportByName("IOusicmQMEB"),
    il2cpp_add_internal_call: () => Il2Cpp.module.findExportByName("knKeOmPkPFu"),
    il2cpp_resolve_icall: () => Il2Cpp.module.findExportByName("QEqUHFkCGBP"),
    il2cpp_alloc: () => Il2Cpp.module.findExportByName("AzvdAiTUtOK"),
    il2cpp_free: () => Il2Cpp.module.findExportByName("BQCsCqwLmDN"),
    il2cpp_array_class_get: () => Il2Cpp.module.findExportByName("klQCLLgsDlu"),
    il2cpp_array_length: () => Il2Cpp.module.findExportByName("cIhaTpovMji"),
    il2cpp_array_get_byte_length: () => Il2Cpp.module.findExportByName("HyaujMBtwtt"),
    il2cpp_array_new: () => Il2Cpp.module.findExportByName("hyssMqkRmf_"),
    il2cpp_array_new_specific: () => Il2Cpp.module.findExportByName("gNblELtgcNc"),
    il2cpp_array_new_full: () => Il2Cpp.module.findExportByName("DZvNpefSnzx"),
    il2cpp_bounded_array_class_get: () => Il2Cpp.module.findExportByName("octXFmkeHOi"),
    il2cpp_array_element_size: () => Il2Cpp.module.findExportByName("SUpHqQSgWOX"),
    il2cpp_assembly_get_image: () => Il2Cpp.module.findExportByName("MyRlzDyltOd"),
    il2cpp_class_for_each: () => Il2Cpp.module.findExportByName("XZPYHzJSgah"),
    il2cpp_class_enum_basetype: () => Il2Cpp.module.findExportByName("XjtnskqKVUr"),
    il2cpp_class_is_inited: () => Il2Cpp.module.findExportByName("tklVWUKxaJn"),
    il2cpp_class_is_generic: () => Il2Cpp.module.findExportByName("ktNxjTMasJM"),
    il2cpp_class_is_inflated: () => Il2Cpp.module.findExportByName("zPClcdwnARt"),
    il2cpp_class_is_assignable_from: () => Il2Cpp.module.findExportByName("BuTeBzFsVze"),
    il2cpp_class_is_subclass_of: () => Il2Cpp.module.findExportByName("KoFlWlxVHtU"),
    il2cpp_class_has_parent: () => Il2Cpp.module.findExportByName("zMNOkdKVEIY"),
    il2cpp_class_from_il2cpp_type: () => Il2Cpp.module.findExportByName("aW_yXt_Ffus"),
    il2cpp_class_from_name: () => Il2Cpp.module.findExportByName("blVnIJnzVVL"),
    il2cpp_class_from_system_type: () => Il2Cpp.module.findExportByName("OlenWmqDvgw"),
    il2cpp_class_get_element_class: () => Il2Cpp.module.findExportByName("VTwPlcNQVzK"),
    il2cpp_class_get_events: () => Il2Cpp.module.findExportByName("b_rW_KZHmiz"),
    il2cpp_class_get_fields: () => Il2Cpp.module.findExportByName("vSIhWZQsRnX"),
    il2cpp_class_get_nested_types: () => Il2Cpp.module.findExportByName("EKlvxYUxwdU"),
    il2cpp_class_get_interfaces: () => Il2Cpp.module.findExportByName("lSXRrEylKoi"),
    il2cpp_class_get_properties: () => Il2Cpp.module.findExportByName("koejzmhGwjn"),
    il2cpp_class_get_property_from_name: () => Il2Cpp.module.findExportByName("tIm_XJXEDfJ"),
    il2cpp_class_get_field_from_name: () => Il2Cpp.module.findExportByName("_UWEpsjSZYw"),
    il2cpp_class_get_methods: () => Il2Cpp.module.findExportByName("ubUHIeYuVrf"),
    il2cpp_class_get_method_from_name: () => Il2Cpp.module.findExportByName("MPPHTPLMF_Y"),
    il2cpp_class_get_name: () => Il2Cpp.module.findExportByName("sRGpBOHuNaf"),
    il2cpp_type_get_name_chunked: () => Il2Cpp.module.findExportByName("jEYlDNHXCmx"),
    il2cpp_class_get_namespace: () => Il2Cpp.module.findExportByName("kgbeobvUXbC"),
    il2cpp_class_get_parent: () => Il2Cpp.module.findExportByName("FAWrOGkQtH_"),
    il2cpp_class_get_declaring_type: () => Il2Cpp.module.findExportByName("ufFtNJvyanb"),
    il2cpp_class_instance_size: () => Il2Cpp.module.findExportByName("pHtFKSE_ors"),
    il2cpp_class_num_fields: () => Il2Cpp.module.findExportByName("jzrcPvtNmuP"),
    il2cpp_class_is_valuetype: () => Il2Cpp.module.findExportByName("EJLiPJExPpK"),
    il2cpp_class_value_size: () => Il2Cpp.module.findExportByName("ZDpNRRi_PmD"),
    il2cpp_class_is_blittable: () => Il2Cpp.module.findExportByName("lpTdNKzgedg"),
    il2cpp_class_get_flags: () => Il2Cpp.module.findExportByName("zQMAyFZSnTi"),
    il2cpp_class_is_abstract: () => Il2Cpp.module.findExportByName("CcyQCTySBRG"),
    il2cpp_class_is_interface: () => Il2Cpp.module.findExportByName("GVeJnHPGmwJ"),
    il2cpp_class_array_element_size: () => Il2Cpp.module.findExportByName("tsokykYhDJM"),
    il2cpp_class_from_type: () => Il2Cpp.module.findExportByName("dXUZcSZh_cf"),
    il2cpp_class_get_type: () => Il2Cpp.module.findExportByName("zWBVAnOvBVc"),
    il2cpp_class_get_type_token: () => Il2Cpp.module.findExportByName("bc_kJCvvdhn"),
    il2cpp_class_has_attribute: () => Il2Cpp.module.findExportByName("xPbYwZEbXMX"),
    il2cpp_class_has_references: () => Il2Cpp.module.findExportByName("MUbKvMPrROI"),
    il2cpp_class_is_enum: () => Il2Cpp.module.findExportByName("tU_olJxtOlw"),
    il2cpp_class_get_image: () => Il2Cpp.module.findExportByName("KI_x_GjRvst"),
    il2cpp_class_get_assemblyname: () => Il2Cpp.module.findExportByName("dkiPtdVzFXd"),
    il2cpp_class_get_rank: () => Il2Cpp.module.findExportByName("XOUiyIAkYDg"),
    il2cpp_class_get_data_size: () => Il2Cpp.module.findExportByName("lzXdecvgfDO"),
    il2cpp_class_get_static_field_data: () => Il2Cpp.module.findExportByName("cJGgwdJsDwS"),
    il2cpp_stats_dump_to_file: () => Il2Cpp.module.findExportByName("cxJSqUeEpgs"),
    il2cpp_stats_get_value: () => Il2Cpp.module.findExportByName("mutbtogsADF"),
    il2cpp_domain_get: () => Il2Cpp.module.findExportByName("TePOWiJYCok"),
    il2cpp_domain_assembly_open: () => Il2Cpp.module.findExportByName("kEaKQRTnpgj"),
    il2cpp_domain_get_assemblies: () => Il2Cpp.module.findExportByName("Uv_hdDcWIQo"),
    il2cpp_raise_exception: () => Il2Cpp.module.findExportByName("TvWzGWcSJHI"),
    il2cpp_exception_from_name_msg: () => Il2Cpp.module.findExportByName("JPzoCcfZKNB"),
    il2cpp_get_exception_argument_null: () => Il2Cpp.module.findExportByName("woOPyBANdzU"),
    il2cpp_format_exception: () => Il2Cpp.module.findExportByName("YlFMOFvcFxH"),
    il2cpp_format_stack_trace: () => Il2Cpp.module.findExportByName("aCcgkapPTNy"),
    il2cpp_unhandled_exception: () => Il2Cpp.module.findExportByName("tFDMvnpznIk"),
    il2cpp_native_stack_trace: () => Il2Cpp.module.findExportByName("KW_ZpWCLTPS"),
    il2cpp_field_get_flags: () => Il2Cpp.module.findExportByName("QXQUthLIhLG"),
    il2cpp_field_get_from_reflection: () => Il2Cpp.module.findExportByName("HNLtKcVGOuK"),
    il2cpp_field_get_name: () => Il2Cpp.module.findExportByName("aKmznHggaKm"),
    il2cpp_field_get_parent: () => Il2Cpp.module.findExportByName("OlixqUaPHfi"),
    il2cpp_field_get_object: () => Il2Cpp.module.findExportByName("IDtZAkSfAwl"),
    il2cpp_field_get_offset: () => Il2Cpp.module.findExportByName("aFGBbDRFjtr"),
    il2cpp_field_get_type: () => Il2Cpp.module.findExportByName("TUvTj_izTIS"),
    il2cpp_field_get_value: () => Il2Cpp.module.findExportByName("IvwAcbuROYe"),
    il2cpp_field_get_value_object: () => Il2Cpp.module.findExportByName("HBIboxJUuhf"),
    il2cpp_field_has_attribute: () => Il2Cpp.module.findExportByName("EOdVXDqQ_iJ"),
    il2cpp_field_set_value: () => Il2Cpp.module.findExportByName("wCxJmKnhFiN"),
    il2cpp_field_static_get_value: () => Il2Cpp.module.findExportByName("KmGlHwQHJJW"),
    il2cpp_field_static_set_value: () => Il2Cpp.module.findExportByName("MwKaQtlaJZL"),
    il2cpp_field_set_value_object: () => Il2Cpp.module.findExportByName("yrAiciIZVYf"),
    il2cpp_field_is_literal: () => Il2Cpp.module.findExportByName("JsfzVppGNYt"),
    il2cpp_gc_collect: () => Il2Cpp.module.findExportByName("YiwtMPVZwDm"),
    il2cpp_gc_collect_a_little: () => Il2Cpp.module.findExportByName("plXriRPHpve"),
    il2cpp_gc_start_incremental_collection: () => Il2Cpp.module.findExportByName("TNcJrkKnuKl"),
    il2cpp_gc_disable: () => Il2Cpp.module.findExportByName("bcRDgxAGPgd"),
    il2cpp_gc_enable: () => Il2Cpp.module.findExportByName("AayXCBRdkWW"),
    il2cpp_gc_is_disabled: () => Il2Cpp.module.findExportByName("XgkoCUUjuyh"),
    il2cpp_gc_set_mode: () => Il2Cpp.module.findExportByName("ekqYnOokWNV"),
    il2cpp_gc_get_max_time_slice_ns: () => Il2Cpp.module.findExportByName("zHhjLRfAHtw"),
    il2cpp_gc_set_max_time_slice_ns: () => Il2Cpp.module.findExportByName("tWdrFlOCFfA"),
    il2cpp_gc_is_incremental: () => Il2Cpp.module.findExportByName("nvyO_jrha_q"),
    il2cpp_gc_get_used_size: () => Il2Cpp.module.findExportByName("FcANNsOgXXu"),
    il2cpp_gc_get_heap_size: () => Il2Cpp.module.findExportByName("QMMderjpggT"),
    il2cpp_gc_wbarrier_set_field: () => Il2Cpp.module.findExportByName("VBefCBvEDBF"),
    il2cpp_gc_has_strict_wbarriers: () => Il2Cpp.module.findExportByName("arqkqHFdkyK"),
    il2cpp_gc_set_external_allocation_tracker: () => Il2Cpp.module.findExportByName("qDJzXPFgIbm"),
    il2cpp_gc_set_external_wbarrier_tracker: () => Il2Cpp.module.findExportByName("XKtCPZLQjVr"),
    il2cpp_gc_foreach_heap: () => Il2Cpp.module.findExportByName("XtjBmxURALb"),
    il2cpp_stop_gc_world: () => Il2Cpp.module.findExportByName("NqDDTahIap_"),
    il2cpp_start_gc_world: () => Il2Cpp.module.findExportByName("gvWaUYvVQWC"),
    il2cpp_gc_alloc_fixed: () => Il2Cpp.module.findExportByName("cDSlEMdELUx"),
    il2cpp_gc_free_fixed: () => Il2Cpp.module.findExportByName("HsOVlPhUH_G"),
    il2cpp_gchandle_new: () => Il2Cpp.module.findExportByName("IRXrpRLnZuH"),
    il2cpp_gchandle_new_weakref: () => Il2Cpp.module.findExportByName("ntsrgtE_gmq"),
    il2cpp_gchandle_get_target: () => Il2Cpp.module.findExportByName("RLikk_EnIAG"),
    il2cpp_gchandle_free: () => Il2Cpp.module.findExportByName("onRQxxCSLFA"),
    il2cpp_gchandle_foreach_get_target: () => Il2Cpp.module.findExportByName("pnDlduSuOKk"),
    il2cpp_object_header_size: () => Il2Cpp.module.findExportByName("LekeWrTFScy"),
    il2cpp_array_object_header_size: () => Il2Cpp.module.findExportByName("rAAImqjcbda"),
    il2cpp_offset_of_array_length_in_array_object_header: () => Il2Cpp.module.findExportByName("mLloeCrWpvu"),
    il2cpp_offset_of_array_bounds_in_array_object_header: () => Il2Cpp.module.findExportByName("zhRdhCZKeff"),
    il2cpp_allocation_granularity: () => Il2Cpp.module.findExportByName("jyKoULDRlpZ"),
    il2cpp_unity_liveness_allocate_struct: () => Il2Cpp.module.findExportByName("ulPxSlEUvZH"),
    il2cpp_unity_liveness_calculation_from_root: () => Il2Cpp.module.findExportByName("cxhmHmcINCG"),
    il2cpp_unity_liveness_calculation_from_statics: () => Il2Cpp.module.findExportByName("mGOJbwSvVav"),
    il2cpp_unity_liveness_finalize: () => Il2Cpp.module.findExportByName("ytCAuoGRrhz"),
    il2cpp_unity_liveness_free_struct: () => Il2Cpp.module.findExportByName("iMItnEgCrfS"),
    il2cpp_method_get_return_type: () => Il2Cpp.module.findExportByName("HcqEPaJBoCO"),
    il2cpp_method_get_declaring_type: () => Il2Cpp.module.findExportByName("fhUctJAvLaL"),
    il2cpp_method_get_name: () => Il2Cpp.module.findExportByName("TyPCyMAhlG_"),
    il2cpp_method_get_from_reflection: () => Il2Cpp.module.findExportByName("pfulaKgFtoJ"),
    il2cpp_method_get_object: () => Il2Cpp.module.findExportByName("OewewtUiUWx"),
    il2cpp_method_is_generic: () => Il2Cpp.module.findExportByName("UCJjTEKvUFc"),
    il2cpp_method_is_inflated: () => Il2Cpp.module.findExportByName("wG_WACTzXNx"),
    il2cpp_method_is_instance: () => Il2Cpp.module.findExportByName("SkUxoHJHsuS"),
    il2cpp_method_get_param_count: () => Il2Cpp.module.findExportByName("an_HGvXfQLu"),
    il2cpp_method_get_param: () => Il2Cpp.module.findExportByName("FgayXDFDIpI"),
    il2cpp_method_get_class: () => Il2Cpp.module.findExportByName("axMoEEmckFA"),
    il2cpp_method_has_attribute: () => Il2Cpp.module.findExportByName("IIsnw__KKrO"),
    il2cpp_method_get_flags: () => Il2Cpp.module.findExportByName("WhUsujwHcdW"),
    il2cpp_method_get_token: () => Il2Cpp.module.findExportByName("RJOJBfkrLid"),
    il2cpp_method_get_param_name: () => Il2Cpp.module.findExportByName("Qv_Lymcbvkr"),
    il2cpp_property_get_flags: () => Il2Cpp.module.findExportByName("vnYGnnrJ_lf"),
    il2cpp_property_get_get_method: () => Il2Cpp.module.findExportByName("hWCNUcLaEsi"),
    il2cpp_property_get_set_method: () => Il2Cpp.module.findExportByName("QdXlfKyFEfa"),
    il2cpp_property_get_name: () => Il2Cpp.module.findExportByName("dpgfxqvhHEu"),
    il2cpp_property_get_parent: () => Il2Cpp.module.findExportByName("rzHjIXbuWtl"),
    il2cpp_object_get_class: () => Il2Cpp.module.findExportByName("hVrBwdNCwuI"),
    il2cpp_object_get_size: () => Il2Cpp.module.findExportByName("fUdjDiUUFY_"),
    il2cpp_object_get_virtual_method: () => Il2Cpp.module.findExportByName("QuqafDpIvuc"),
    il2cpp_object_new: () => Il2Cpp.module.findExportByName("aPSJyQnIbAO"),
    il2cpp_object_unbox: () => Il2Cpp.module.findExportByName("FxIxqSBRXHB"),
    il2cpp_value_box: () => Il2Cpp.module.findExportByName("mIgoLXOpnnJ"),
    il2cpp_monitor_enter: () => Il2Cpp.module.findExportByName("wcDzQpNfhdE"),
    il2cpp_monitor_try_enter: () => Il2Cpp.module.findExportByName("n_OqotbNMro"),
    il2cpp_monitor_exit: () => Il2Cpp.module.findExportByName("VbziibSQxBx"),
    il2cpp_monitor_pulse: () => Il2Cpp.module.findExportByName("hevCYcUmOML"),
    il2cpp_monitor_pulse_all: () => Il2Cpp.module.findExportByName("HEROEtzlsYp"),
    il2cpp_monitor_wait: () => Il2Cpp.module.findExportByName("PYmwlltlPWF"),
    il2cpp_monitor_try_wait: () => Il2Cpp.module.findExportByName("hqdaXxP_UCq"),
    il2cpp_runtime_invoke: () => Il2Cpp.module.findExportByName("LntpjkZasaf"),
    il2cpp_runtime_invoke_convert_args: () => Il2Cpp.module.findExportByName("vRBIyVznVGo"),
    il2cpp_runtime_class_init: () => Il2Cpp.module.findExportByName("eGxBZFieEyc"),
    il2cpp_runtime_object_init: () => Il2Cpp.module.findExportByName("dMFhwnOsYBc"),
    il2cpp_runtime_object_init_exception: () => Il2Cpp.module.findExportByName("ZkaLJGDDFwL"),
    il2cpp_runtime_unhandled_exception_policy_set: () => Il2Cpp.module.findExportByName("eRkLDDEmdDf"),
    il2cpp_string_length: () => Il2Cpp.module.findExportByName("XsCqiguhMOH"),
    il2cpp_string_chars: () => Il2Cpp.module.findExportByName("KoS_BpgbTak"),
    il2cpp_string_new: () => Il2Cpp.module.findExportByName("AExBXYCiFGe"),
    il2cpp_string_new_len: () => Il2Cpp.module.findExportByName("kNTRttbsnWZ"),
    il2cpp_string_new_utf16: () => Il2Cpp.module.findExportByName("AMeNDMLAIsV"),
    il2cpp_string_new_wrapper: () => Il2Cpp.module.findExportByName("hrexVJmWSLR"),
    il2cpp_string_intern: () => Il2Cpp.module.findExportByName("BxWgMYThxdi"),
    il2cpp_string_is_interned: () => Il2Cpp.module.findExportByName("XEHiQJKSLtV"),
    il2cpp_thread_current: () => Il2Cpp.module.findExportByName("pFgkLOJl_FY"),
    il2cpp_thread_attach: () => Il2Cpp.module.findExportByName("dhDzaQfwysn"),
    il2cpp_thread_detach: () => Il2Cpp.module.findExportByName("nYTfgdzWfxx"),
    il2cpp_is_vm_thread: () => Il2Cpp.module.findExportByName("AhBnUZ_WKBr"),
    il2cpp_current_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("yRJzZUHWunq"),
    il2cpp_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("vkDLObbvr_o"),
    il2cpp_current_thread_get_top_frame: () => Il2Cpp.module.findExportByName("EoKydq_pfDJ"),
    il2cpp_thread_get_top_frame: () => Il2Cpp.module.findExportByName("hJTHdEZdxqK"),
    il2cpp_current_thread_get_frame_at: () => Il2Cpp.module.findExportByName("XzzDZJWkSlo"),
    il2cpp_thread_get_frame_at: () => Il2Cpp.module.findExportByName("XTvZokovhlG"),
    il2cpp_current_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("FdFeXcbzcHa"),
    il2cpp_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("dekmbDdgOMd"),
    il2cpp_override_stack_backtrace: () => Il2Cpp.module.findExportByName("jrjOmmZqJqx"),
    il2cpp_type_get_object: () => Il2Cpp.module.findExportByName("xczllKdxClr"),
    il2cpp_type_get_type: () => Il2Cpp.module.findExportByName("fdVJYqNUc_w"),
    il2cpp_type_get_class_or_element_class: () => Il2Cpp.module.findExportByName("ZyPukpQiKfF"),
    il2cpp_type_get_name: () => Il2Cpp.module.findExportByName("dsUWIUQhKAG"),
    il2cpp_type_is_byref: () => Il2Cpp.module.findExportByName("zzQeIVsiLGu"),
    il2cpp_type_get_attrs: () => Il2Cpp.module.findExportByName("ByvGmmQGHOG"),
    il2cpp_type_equals: () => Il2Cpp.module.findExportByName("KyQDrHlskeZ"),
    il2cpp_type_get_assembly_qualified_name: () => Il2Cpp.module.findExportByName("lvxtcieVoQB"),
    il2cpp_type_get_reflection_name: () => Il2Cpp.module.findExportByName("cWhUBwYnAcU"),
    il2cpp_type_is_static: () => Il2Cpp.module.findExportByName("bScpd_EmXLp"),
    il2cpp_type_is_pointer_type: () => Il2Cpp.module.findExportByName("fdvFlvUyQHf"),
    il2cpp_image_get_assembly: () => Il2Cpp.module.findExportByName("bjGrrFSzkl_"),
    il2cpp_image_get_name: () => Il2Cpp.module.findExportByName("DjqPLsMfjjm"),
    il2cpp_image_get_filename: () => Il2Cpp.module.findExportByName("sLbhZgBZvSW"),
    il2cpp_image_get_entry_point: () => Il2Cpp.module.findExportByName("IdotqQlSwUi"),
    il2cpp_image_get_class_count: () => Il2Cpp.module.findExportByName("roRKbmFTcPM"),
    il2cpp_image_get_class: () => Il2Cpp.module.findExportByName("DxBIJtoqWDE"),
    il2cpp_capture_memory_snapshot: () => Il2Cpp.module.findExportByName("KhiWsPmBRXW"),
    il2cpp_free_captured_memory_snapshot: () => Il2Cpp.module.findExportByName("FfekQygnJOr"),
    il2cpp_set_find_plugin_callback: () => Il2Cpp.module.findExportByName("VHIXIMeHdbU"),
    il2cpp_register_log_callback: () => Il2Cpp.module.findExportByName("JbjKRLVfnjX"),
    il2cpp_debugger_set_agent_options: () => Il2Cpp.module.findExportByName("lKurOH_fsOb"),
    il2cpp_is_debugger_attached: () => Il2Cpp.module.findExportByName("fwwiiOgnafK"),
    il2cpp_register_debugger_agent_transport: () => Il2Cpp.module.findExportByName("uDzNAwaEtSw"),
    il2cpp_debug_foreach_method: () => Il2Cpp.module.findExportByName("_smBemAYaQc"),
    il2cpp_debug_get_method_info: () => Il2Cpp.module.findExportByName("PnydcRRsmRk"),
    il2cpp_unity_install_unitytls_interface: () => Il2Cpp.module.findExportByName("A_UWYxBLgcs"),
    il2cpp_custom_attrs_from_class: () => Il2Cpp.module.findExportByName("TN_BVjO_CUL"),
    il2cpp_custom_attrs_from_method: () => Il2Cpp.module.findExportByName("mZudfyxoPyI"),
    il2cpp_custom_attrs_from_field: () => Il2Cpp.module.findExportByName("eReNCAOCeZI"),
    il2cpp_custom_attrs_get_attr: () => Il2Cpp.module.findExportByName("OiBlYkaMLVQ"),
    il2cpp_custom_attrs_has_attr: () => Il2Cpp.module.findExportByName("JtwUJlLotOt"),
    il2cpp_custom_attrs_construct: () => Il2Cpp.module.findExportByName("XQLCEz_yRtI"),
    il2cpp_custom_attrs_free: () => Il2Cpp.module.findExportByName("p_gWLSGMdyA"),
    il2cpp_class_set_userdata: () => Il2Cpp.module.findExportByName("BuMyQxePUCQ"),
    il2cpp_class_get_userdata_offset: () => Il2Cpp.module.findExportByName("MNByCP_XvC_"),
    il2cpp_set_default_thread_affinity: () => Il2Cpp.module.findExportByName("oJvnZgAvEfe"),
    il2cpp_unity_set_android_network_up_state_func: () => Il2Cpp.module.findExportByName("NkAUpWcQZmp"),
};
function n5RemapBridgeExports() {
    const bridgeNames = {
        "il2cpp_init": "xCDPJp_mzeS",
        "il2cpp_init_utf16": "ZqbXCVjOfjp",
        "il2cpp_shutdown": "AaFj_FHKudI",
        "il2cpp_set_config_dir": "QWQedEgddFi",
        "il2cpp_set_data_dir": "tBQbdjbhTnh",
        "il2cpp_set_temp_dir": "rMCuOKP_EvH",
        "il2cpp_set_commandline_arguments": "jJGXLQGlGcl",
        "il2cpp_set_commandline_arguments_utf16": "ytrbfsCtOFH",
        "il2cpp_set_config_utf16": "OSLVcqAjjGg",
        "il2cpp_set_config": "ZEsAwVRbLGQ",
        "il2cpp_set_memory_callbacks": "qEZlbwRBnvD",
        "il2cpp_memory_pool_set_region_size": "ZN_l_dtjQtw",
        "il2cpp_memory_pool_get_region_size": "nEAqbKLyvcz",
        "il2cpp_get_corlib": "IOusicmQMEB",
        "il2cpp_add_internal_call": "knKeOmPkPFu",
        "il2cpp_resolve_icall": "QEqUHFkCGBP",
        "il2cpp_alloc": "AzvdAiTUtOK",
        "il2cpp_free": "BQCsCqwLmDN",
        "il2cpp_array_class_get": "klQCLLgsDlu",
        "il2cpp_array_length": "cIhaTpovMji",
        "il2cpp_array_get_byte_length": "HyaujMBtwtt",
        "il2cpp_array_new": "hyssMqkRmf_",
        "il2cpp_array_new_specific": "gNblELtgcNc",
        "il2cpp_array_new_full": "DZvNpefSnzx",
        "il2cpp_bounded_array_class_get": "octXFmkeHOi",
        "il2cpp_array_element_size": "SUpHqQSgWOX",
        "il2cpp_assembly_get_image": "MyRlzDyltOd",
        "il2cpp_class_for_each": "XZPYHzJSgah",
        "il2cpp_class_enum_basetype": "XjtnskqKVUr",
        "il2cpp_class_is_inited": "tklVWUKxaJn",
        "il2cpp_class_is_generic": "ktNxjTMasJM",
        "il2cpp_class_is_inflated": "zPClcdwnARt",
        "il2cpp_class_is_assignable_from": "BuTeBzFsVze",
        "il2cpp_class_is_subclass_of": "KoFlWlxVHtU",
        "il2cpp_class_has_parent": "zMNOkdKVEIY",
        "il2cpp_class_from_il2cpp_type": "aW_yXt_Ffus",
        "il2cpp_class_from_name": "blVnIJnzVVL",
        "il2cpp_class_from_system_type": "OlenWmqDvgw",
        "il2cpp_class_get_element_class": "VTwPlcNQVzK",
        "il2cpp_class_get_events": "b_rW_KZHmiz",
        "il2cpp_class_get_fields": "vSIhWZQsRnX",
        "il2cpp_class_get_nested_types": "EKlvxYUxwdU",
        "il2cpp_class_get_interfaces": "lSXRrEylKoi",
        "il2cpp_class_get_properties": "koejzmhGwjn",
        "il2cpp_class_get_property_from_name": "tIm_XJXEDfJ",
        "il2cpp_class_get_field_from_name": "_UWEpsjSZYw",
        "il2cpp_class_get_methods": "ubUHIeYuVrf",
        "il2cpp_class_get_method_from_name": "MPPHTPLMF_Y",
        "il2cpp_class_get_name": "sRGpBOHuNaf",
        "il2cpp_type_get_name_chunked": "jEYlDNHXCmx",
        "il2cpp_class_get_namespace": "kgbeobvUXbC",
        "il2cpp_class_get_parent": "FAWrOGkQtH_",
        "il2cpp_class_get_declaring_type": "ufFtNJvyanb",
        "il2cpp_class_instance_size": "pHtFKSE_ors",
        "il2cpp_class_num_fields": "jzrcPvtNmuP",
        "il2cpp_class_is_valuetype": "EJLiPJExPpK",
        "il2cpp_class_value_size": "ZDpNRRi_PmD",
        "il2cpp_class_is_blittable": "lpTdNKzgedg",
        "il2cpp_class_get_flags": "zQMAyFZSnTi",
        "il2cpp_class_is_abstract": "CcyQCTySBRG",
        "il2cpp_class_is_interface": "GVeJnHPGmwJ",
        "il2cpp_class_array_element_size": "tsokykYhDJM",
        "il2cpp_class_from_type": "dXUZcSZh_cf",
        "il2cpp_class_get_type": "zWBVAnOvBVc",
        "il2cpp_class_get_type_token": "bc_kJCvvdhn",
        "il2cpp_class_has_attribute": "xPbYwZEbXMX",
        "il2cpp_class_has_references": "MUbKvMPrROI",
        "il2cpp_class_is_enum": "tU_olJxtOlw",
        "il2cpp_class_get_image": "KI_x_GjRvst",
        "il2cpp_class_get_assemblyname": "dkiPtdVzFXd",
        "il2cpp_class_get_rank": "XOUiyIAkYDg",
        "il2cpp_class_get_data_size": "lzXdecvgfDO",
        "il2cpp_class_get_static_field_data": "cJGgwdJsDwS",
        "il2cpp_stats_dump_to_file": "cxJSqUeEpgs",
        "il2cpp_stats_get_value": "mutbtogsADF",
        "il2cpp_domain_get": "TePOWiJYCok",
        "il2cpp_domain_assembly_open": "kEaKQRTnpgj",
        "il2cpp_domain_get_assemblies": "Uv_hdDcWIQo",
        "il2cpp_raise_exception": "TvWzGWcSJHI",
        "il2cpp_exception_from_name_msg": "JPzoCcfZKNB",
        "il2cpp_get_exception_argument_null": "woOPyBANdzU",
        "il2cpp_format_exception": "YlFMOFvcFxH",
        "il2cpp_format_stack_trace": "aCcgkapPTNy",
        "il2cpp_unhandled_exception": "tFDMvnpznIk",
        "il2cpp_native_stack_trace": "KW_ZpWCLTPS",
        "il2cpp_field_get_flags": "QXQUthLIhLG",
        "il2cpp_field_get_from_reflection": "HNLtKcVGOuK",
        "il2cpp_field_get_name": "aKmznHggaKm",
        "il2cpp_field_get_parent": "OlixqUaPHfi",
        "il2cpp_field_get_object": "IDtZAkSfAwl",
        "il2cpp_field_get_offset": "aFGBbDRFjtr",
        "il2cpp_field_get_type": "TUvTj_izTIS",
        "il2cpp_field_get_value": "IvwAcbuROYe",
        "il2cpp_field_get_value_object": "HBIboxJUuhf",
        "il2cpp_field_has_attribute": "EOdVXDqQ_iJ",
        "il2cpp_field_set_value": "wCxJmKnhFiN",
        "il2cpp_field_static_get_value": "KmGlHwQHJJW",
        "il2cpp_field_static_set_value": "MwKaQtlaJZL",
        "il2cpp_field_set_value_object": "yrAiciIZVYf",
        "il2cpp_field_is_literal": "JsfzVppGNYt",
        "il2cpp_gc_collect": "YiwtMPVZwDm",
        "il2cpp_gc_collect_a_little": "plXriRPHpve",
        "il2cpp_gc_start_incremental_collection": "TNcJrkKnuKl",
        "il2cpp_gc_disable": "bcRDgxAGPgd",
        "il2cpp_gc_enable": "AayXCBRdkWW",
        "il2cpp_gc_is_disabled": "XgkoCUUjuyh",
        "il2cpp_gc_set_mode": "ekqYnOokWNV",
        "il2cpp_gc_get_max_time_slice_ns": "zHhjLRfAHtw",
        "il2cpp_gc_set_max_time_slice_ns": "tWdrFlOCFfA",
        "il2cpp_gc_is_incremental": "nvyO_jrha_q",
        "il2cpp_gc_get_used_size": "FcANNsOgXXu",
        "il2cpp_gc_get_heap_size": "QMMderjpggT",
        "il2cpp_gc_wbarrier_set_field": "VBefCBvEDBF",
        "il2cpp_gc_has_strict_wbarriers": "arqkqHFdkyK",
        "il2cpp_gc_set_external_allocation_tracker": "qDJzXPFgIbm",
        "il2cpp_gc_set_external_wbarrier_tracker": "XKtCPZLQjVr",
        "il2cpp_gc_foreach_heap": "XtjBmxURALb",
        "il2cpp_stop_gc_world": "NqDDTahIap_",
        "il2cpp_start_gc_world": "gvWaUYvVQWC",
        "il2cpp_gc_alloc_fixed": "cDSlEMdELUx",
        "il2cpp_gc_free_fixed": "HsOVlPhUH_G",
        "il2cpp_gchandle_new": "IRXrpRLnZuH",
        "il2cpp_gchandle_new_weakref": "ntsrgtE_gmq",
        "il2cpp_gchandle_get_target": "RLikk_EnIAG",
        "il2cpp_gchandle_free": "onRQxxCSLFA",
        "il2cpp_gchandle_foreach_get_target": "pnDlduSuOKk",
        "il2cpp_object_header_size": "LekeWrTFScy",
        "il2cpp_array_object_header_size": "rAAImqjcbda",
        "il2cpp_offset_of_array_length_in_array_object_header": "mLloeCrWpvu",
        "il2cpp_offset_of_array_bounds_in_array_object_header": "zhRdhCZKeff",
        "il2cpp_allocation_granularity": "jyKoULDRlpZ",
        "il2cpp_unity_liveness_allocate_struct": "ulPxSlEUvZH",
        "il2cpp_unity_liveness_calculation_from_root": "cxhmHmcINCG",
        "il2cpp_unity_liveness_calculation_from_statics": "mGOJbwSvVav",
        "il2cpp_unity_liveness_finalize": "ytCAuoGRrhz",
        "il2cpp_unity_liveness_free_struct": "iMItnEgCrfS",
        "il2cpp_method_get_return_type": "HcqEPaJBoCO",
        "il2cpp_method_get_declaring_type": "fhUctJAvLaL",
        "il2cpp_method_get_name": "TyPCyMAhlG_",
        "il2cpp_method_get_from_reflection": "pfulaKgFtoJ",
        "il2cpp_method_get_object": "OewewtUiUWx",
        "il2cpp_method_is_generic": "UCJjTEKvUFc",
        "il2cpp_method_is_inflated": "wG_WACTzXNx",
        "il2cpp_method_is_instance": "SkUxoHJHsuS",
        "il2cpp_method_get_param_count": "an_HGvXfQLu",
        "il2cpp_method_get_param": "FgayXDFDIpI",
        "il2cpp_method_get_class": "axMoEEmckFA",
        "il2cpp_method_has_attribute": "IIsnw__KKrO",
        "il2cpp_method_get_flags": "WhUsujwHcdW",
        "il2cpp_method_get_token": "RJOJBfkrLid",
        "il2cpp_method_get_param_name": "Qv_Lymcbvkr",
        "il2cpp_property_get_flags": "vnYGnnrJ_lf",
        "il2cpp_property_get_get_method": "hWCNUcLaEsi",
        "il2cpp_property_get_set_method": "QdXlfKyFEfa",
        "il2cpp_property_get_name": "dpgfxqvhHEu",
        "il2cpp_property_get_parent": "rzHjIXbuWtl",
        "il2cpp_object_get_class": "hVrBwdNCwuI",
        "il2cpp_object_get_size": "fUdjDiUUFY_",
        "il2cpp_object_get_virtual_method": "QuqafDpIvuc",
        "il2cpp_object_new": "aPSJyQnIbAO",
        "il2cpp_object_unbox": "FxIxqSBRXHB",
        "il2cpp_value_box": "mIgoLXOpnnJ",
        "il2cpp_monitor_enter": "wcDzQpNfhdE",
        "il2cpp_monitor_try_enter": "n_OqotbNMro",
        "il2cpp_monitor_exit": "VbziibSQxBx",
        "il2cpp_monitor_pulse": "hevCYcUmOML",
        "il2cpp_monitor_pulse_all": "HEROEtzlsYp",
        "il2cpp_monitor_wait": "PYmwlltlPWF",
        "il2cpp_monitor_try_wait": "hqdaXxP_UCq",
        "il2cpp_runtime_invoke": "LntpjkZasaf",
        "il2cpp_runtime_invoke_convert_args": "vRBIyVznVGo",
        "il2cpp_runtime_class_init": "eGxBZFieEyc",
        "il2cpp_runtime_object_init": "dMFhwnOsYBc",
        "il2cpp_runtime_object_init_exception": "ZkaLJGDDFwL",
        "il2cpp_runtime_unhandled_exception_policy_set": "eRkLDDEmdDf",
        "il2cpp_string_length": "XsCqiguhMOH",
        "il2cpp_string_chars": "KoS_BpgbTak",
        "il2cpp_string_new": "AExBXYCiFGe",
        "il2cpp_string_new_len": "kNTRttbsnWZ",
        "il2cpp_string_new_utf16": "AMeNDMLAIsV",
        "il2cpp_string_new_wrapper": "hrexVJmWSLR",
        "il2cpp_string_intern": "BxWgMYThxdi",
        "il2cpp_string_is_interned": "XEHiQJKSLtV",
        "il2cpp_thread_current": "pFgkLOJl_FY",
        "il2cpp_thread_attach": "dhDzaQfwysn",
        "il2cpp_thread_detach": "nYTfgdzWfxx",
        "il2cpp_is_vm_thread": "AhBnUZ_WKBr",
        "il2cpp_current_thread_walk_frame_stack": "yRJzZUHWunq",
        "il2cpp_thread_walk_frame_stack": "vkDLObbvr_o",
        "il2cpp_current_thread_get_top_frame": "EoKydq_pfDJ",
        "il2cpp_thread_get_top_frame": "hJTHdEZdxqK",
        "il2cpp_current_thread_get_frame_at": "XzzDZJWkSlo",
        "il2cpp_thread_get_frame_at": "XTvZokovhlG",
        "il2cpp_current_thread_get_stack_depth": "FdFeXcbzcHa",
        "il2cpp_thread_get_stack_depth": "dekmbDdgOMd",
        "il2cpp_override_stack_backtrace": "jrjOmmZqJqx",
        "il2cpp_type_get_object": "xczllKdxClr",
        "il2cpp_type_get_type": "fdVJYqNUc_w",
        "il2cpp_type_get_class_or_element_class": "ZyPukpQiKfF",
        "il2cpp_type_get_name": "dsUWIUQhKAG",
        "il2cpp_type_is_byref": "zzQeIVsiLGu",
        "il2cpp_type_get_attrs": "ByvGmmQGHOG",
        "il2cpp_type_equals": "KyQDrHlskeZ",
        "il2cpp_type_get_assembly_qualified_name": "lvxtcieVoQB",
        "il2cpp_type_get_reflection_name": "cWhUBwYnAcU",
        "il2cpp_type_is_static": "bScpd_EmXLp",
        "il2cpp_type_is_pointer_type": "fdvFlvUyQHf",
        "il2cpp_image_get_assembly": "bjGrrFSzkl_",
        "il2cpp_image_get_name": "DjqPLsMfjjm",
        "il2cpp_image_get_filename": "sLbhZgBZvSW",
        "il2cpp_image_get_entry_point": "IdotqQlSwUi",
        "il2cpp_image_get_class_count": "roRKbmFTcPM",
        "il2cpp_image_get_class": "DxBIJtoqWDE",
        "il2cpp_capture_memory_snapshot": "KhiWsPmBRXW",
        "il2cpp_free_captured_memory_snapshot": "FfekQygnJOr",
        "il2cpp_set_find_plugin_callback": "VHIXIMeHdbU",
        "il2cpp_register_log_callback": "JbjKRLVfnjX",
        "il2cpp_debugger_set_agent_options": "lKurOH_fsOb",
        "il2cpp_is_debugger_attached": "fwwiiOgnafK",
        "il2cpp_register_debugger_agent_transport": "uDzNAwaEtSw",
        "il2cpp_debug_foreach_method": "_smBemAYaQc",
        "il2cpp_debug_get_method_info": "PnydcRRsmRk",
        "il2cpp_unity_install_unitytls_interface": "A_UWYxBLgcs",
        "il2cpp_custom_attrs_from_class": "TN_BVjO_CUL",
        "il2cpp_custom_attrs_from_method": "mZudfyxoPyI",
        "il2cpp_custom_attrs_from_field": "eReNCAOCeZI",
        "il2cpp_custom_attrs_get_attr": "OiBlYkaMLVQ",
        "il2cpp_custom_attrs_has_attr": "JtwUJlLotOt",
        "il2cpp_custom_attrs_construct": "XQLCEz_yRtI",
        "il2cpp_custom_attrs_free": "p_gWLSGMdyA",
        "il2cpp_class_set_userdata": "BuMyQxePUCQ",
        "il2cpp_class_get_userdata_offset": "MNByCP_XvC_",
        "il2cpp_set_default_thread_affinity": "oJvnZgAvEfe",
        "il2cpp_unity_set_android_network_up_state_func": "NkAUpWcQZmp"
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
let animatedMenuTexts = [];
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
let omniFloatVictims = [];
let omniFloatBalls = [];
let omniKidnapTarget = null;
let prefabGunDelay = 0;
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
const Renderer = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Renderer");
let flySpeed = 10.0;
let flySpeedIndex = 1;
let flySpeeds = [2, 5, 12, 28];
let buttonSound = 44;
let LerpMenu = true;
let menuSnapNextFrame = true;
let menuFollowSmoothness = 15;
let menuscale = 1.15;
let spedlazersEnabled = false;
let spedlazers = [];
let spedlazersSpawnDelay = 0;
let spedlazersWasFiring = false;
let vrMenuUpOffset = 0.08;
let vrMenuPalmInset = 0.045;
let vrMenuRightOffset = 0.025;
let vrMenuTilt = -8;
let menuOutlineColor = [0.05, 0.1, 0.35, 1];
let pageOutlineColor = menuOutlineColor;
let buttonOutlineColor = pageOutlineColor;
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
let tagGunDelay = 0;
let infHealthEnabled = false;
let flyVelocity = [10, 20, 30];
let _pcMouseSensitivity = 0.15;
let _pcSmoothYaw = 0;
let yeetCooldown = 0;
let _pcSmoothPitch = 0;
let _pcFlyAcceleration = 2.5;
let _pcFlyDeceleration = 1.2;
let pcMenuDistance = 0.7;
let menuOpenSpeed = 2.5;
let menuCloseSpeed = 3.0;
function getButtonsPerPage() {
    const effectiveStep = Math.max(rowButtonSpacing, rowButtonHeight * 0.45);
    return Math.max(4, Math.min(8, Math.floor(0.225 / effectiveStep) + 1));
}
let menuAnimation = 0;
let menuClosing = false;
let menuReloading = false;
let customClickClip = null;
let customClickAudioSource = null;
let customClickLoadAttempted = false;
let assemblyImages, acImage, coreImage, physImage, uiImage, uiModuleImage, textRenderImage, fusionImage, tmpImage, xrImage, audioImage, OculusPlatformSettings, GorillaLocomotionCls, NetPlayerCls, ItemVendingMachineViewCls, ElevatorManagerCls, ArenaGameManagerCls, GrabbableObjectCls, ItemSellingMachineControllerCls, PrefabGeneratorCls, GrabbableItemCls, PlayerControllerCls, GrabbableObjectCls2, SFXManagerCls, NetworkManagerCls, ComputerTerminalKeyCls, InputDevicesCls, XRCommonUsagesCls, GameObjectCls, UnityObjectCls, Vector3Cls, QuaternionCls, TimeCls, ResourcesCls, MaterialCls, MeshRendererCls, ShaderCls, RectTransformCls, LineRendererCls, BoxColliderCls, ColliderCls, RigidbodyCls, PhysicsCls, ComponentCls, ParticleManagerCls, ParticleManagerCls2, CanvasCls, CanvasScalerCls, GraphicRaycasterCls, UITextCls, FontCls, gorillaLocomotionInstance, urpUnlitShader, uiDefaultShader, vec3Zero, vec3One, identityRotation, arialFont, nullObjectRef;
let _vx53f, _vx2eb, _omniWlPruneTimer = 0, _vx5c4, _iterItem, _iterMob, _vx574, _vx2a4, _gunOverrideLayer;
let audioManager = null;
let handTextObj = null;
let bgColor = [0.02, 0.04, 0.15, 0.98];
let textColor = [0.95, 0.95, 0.95, 1.0];
let buttonColor = [0.04, 0.08, 0.25, 0.95];
let buttonPressedColor = [
    0.08, 0.14, 0.5, 0.95,
];
let textGradientEnabled = true;
let textGradientSpeed = 2.4;
let textGradientDarkColor = [50, 70, 160];
let textGradientLightColor = [150, 180, 250];
let menuName = "<b>Omni Menu</b>";
let menuBgTexture = null;
let femboyBgTexture = null;
let femboyBgTried = false;
const FEMBOY_BG_B64 = "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";
let themeIndex = 0;
let buttonIndex = 0;
let GunPointer = null;
let GunLine = null;
let GunPointerMaterial = null;
let GunLineObject = null;
let GunLineMaterial = null;
let mimicTarget = null;
let mimicTargetName = "";
let mimicGunDelay = 0;
let physicsRaycastAllVec4 = null;
let physicsRaycastOutVec4 = null;
let physicsRaycastOutVec5 = null;
let forcedevmodething = false;
let removeGravityActive = false;
let gunLastRenderFrame = -1;
let gunResultFrame = -1;
let gunFrameResult = null;
n5RemapBridgeExports();
function menuButton(buttonText, onPress, toolTip = "") {
    return { buttonText, method: onPress, isTogglable: false, toolTip };
}
function menuToggle(buttonText, options) {
    return {
        buttonText,
        enableMethod: options.onEnable,
        disableMethod: options.onDisable,
        method: options.onUpdate,
        isTogglable: true,
        toolTip: options.toolTip || "",
    };
}
function menuStepper(buttonText, decrease, increase, toolTip = "") {
    return {
        buttonText,
        method: increase,
        isTogglable: false,
        toolTip,
        stepDown: new ButtonInfo(menuButton(buttonText + " -", decrease)),
        stepUp: new ButtonInfo(menuButton(buttonText + " +", increase)),
    };
}
function getAllNetPlayersList(includeLocal = true) {
    const players = [];
    try {
        const playerDict = NetPlayerCls.field("playerIDToNetPlayer").value;
        if (!playerDict || playerDict.isNull())
            return players;
        const vals = playerDict.method("get_Values").invoke();
        const en = vals.method("GetEnumerator").invoke();
        while (en.method("MoveNext").invoke()) {
            const p = en.method("get_Current").invoke();
            if (!p || p.isNull?.())
                continue;
            if (!includeLocal && playerIsLocal(p))
                continue;
            players.push(p);
        }
    }
    catch (_) { }
    return players;
}
function playerIsLocal(_p) {
    try {
        return !!_p && _p.method("get_IsMine").invoke();
    }
    catch (_) {
        return false;
    }
}
function omniFindAllClass(_className) {
    try {
        const _cls = acImage.class(_className);
        const _arr = UnityObjectCls.method("FindObjectsOfType", 0)
            .inflate(_cls)
            .invoke();
        const _out = [];
        let _len = 0;
        try {
            if (_arr && typeof _arr.length === "number")
                _len = _arr.length;
        }
        catch (_) { }
        try {
            if (!_len && _arr && _arr.method)
                _len = _arr.method("get_Length").invoke();
        }
        catch (_) { }
        for (let _i = 0; _i < _len; _i++) {
            try {
                let _o = null;
                try {
                    _o = _arr.get ? _arr.get(_i) : null;
                }
                catch (_e) { }
                try {
                    if (!_o && _arr.method)
                        _o = _arr.method("GetValue").invoke(_i);
                }
                catch (_e) { }
                if (!_o)
                    _o = _arr[_i];
                if (_o && (!_o.handle || !_o.handle.isNull()))
                    _out.push(_o);
            }
            catch (_) { }
        }
        return _out;
    }
    catch (_) {
        return [];
    }
}
function omniAllRemoteUsers() {
    const _out = [];
    for (const _pl of omniAllNetPlayers()) {
        try {
            if (!_pl || (_pl.handle && _pl.handle.isNull()) || omniIsLocalPlayer(_pl))
                continue;
            _out.push(_pl);
        }
        catch (_) { }
    }
    return _out;
}
function omniAllNetPlayers() {
    const _out = [];
    const _push = (_pl) => {
        try {
            if (_pl && (!_pl.handle || !_pl.handle.isNull()))
                _out.push(_pl);
        }
        catch (_) { }
    };
    try {
        const _net = acImage.class("AnimalCompany.NetPlayer");
        for (const _src of [
            () => _net.method("get_spawnedPlayers").invoke(),
            () => _net.field("_spawnedPlayers").value,
            () => _net.field("playerIDToNetPlayer").value,
        ]) {
            try {
                for (const _pl of omniCollectionToArray(_src()))
                    _push(_pl);
            }
            catch (_) { }
        }
        try {
            _push(_net.method("get_localPlayer").invoke());
        }
        catch (_) { }
    }
    catch (_) { }
    try {
        const _en = NetPlayerCls.field("playerIDToNetPlayer")
            .value.method("get_Values")
            .invoke()
            .method("GetEnumerator")
            .invoke();
        while (_en.method("MoveNext").invoke())
            _push(_en.method("get_Current").invoke());
    }
    catch (_) { }
    try {
        for (const _pl of omniFindAllClass("AnimalCompany.NetPlayer"))
            _push(_pl);
    }
    catch (_e) { }
    const _dedup = [], _seen = new Set();
    for (const _pl of _out) {
        let _key = "";
        try {
            _key = omniGetPlayerUserId(_pl) || String(_pl.handle || _pl);
        }
        catch (_) {
            _key = String(_pl);
        }
        if (_seen.has(_key))
            continue;
        _seen.add(_key);
        _dedup.push(_pl);
    }
    return _dedup;
}
function omniIsLocalPlayer(_rig) {
    try {
        return !!_rig.method("get_IsMine").invoke();
    }
    catch (_) { }
    try {
        return !!_rig.method("get_IsMine").invoke();
    }
    catch (_) { }
    try {
        return !!_rig.property("IsMine").value;
    }
    catch (_) { }
    return false;
}
function omniGetPlayerUserId(_rig) {
    try {
        const _s = omniValueString(_rig.method("get_userID").invoke());
        if (_s && _s !== "null" && _s !== "???" && _s !== "[object Object]")
            return _s;
    }
    catch (_) { }
    try {
        const _s = omniValueString(_rig.field("_userID").value);
        if (_s && _s !== "null" && _s !== "???" && _s !== "[object Object]")
            return _s;
    }
    catch (_) { }
    try {
        const _s = omniValueString(_rig.field("userID").value);
        if (_s && _s !== "null" && _s !== "???" && _s !== "[object Object]")
            return _s;
    }
    catch (_) { }
    try {
        const _pid = _rig.method("get_playerID").invoke();
        return "pid:" + _pid;
    }
    catch (_) { }
    return "";
}
function omniValueString(_v) {
    try {
        if (_v && typeof _v.content === "string")
            return _v.content;
    }
    catch (_) { }
    try {
        if (_v && _v.value !== undefined)
            return omniValueString(_v.value);
    }
    catch (_) { }
    try {
        if (_v && _v.method)
            return omniValueString(_v.method("get_Value").invoke());
    }
    catch (_) { }
    try {
        const _m = omniManagedString(_v);
        if (_m && _m !== "???" && _m !== "null" && _m !== "undefined" && _m !== "[object Object]")
            return _m;
    }
    catch (_) { }
    try {
        if (_v && _v.toString)
            return String(_v.toString());
    }
    catch (_) { }
    return String(_v || "");
}
function tunrNetPlayerIntoRoboMonke(player) {
    function amethsyTempSpawnItemAtPos(bareID, pos, rot) {
        try {
            const amethsyTempPrefabGen = Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.PrefabGenerator");
            const prefab = amethsyTempPrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(bareID));
            if (prefab && !prefab.isNull()) {
                const result = amethsyTempPrefabGen.method("SpawnItem", 5).invoke(prefab, pos, rot, NULL, 0);
                if (result && !result.isNull())
                    return result;
            }
            const result2 = amethsyTempPrefabGen.method("SpawnItem", 5).invoke(Il2Cpp.string(bareID), pos, rot, NULL, 0);
            if (result2 && !result2.isNull())
                return result2;
            return amethsyTempPrefabGen.method("SpawnItem", 5).invoke(Il2Cpp.string("item_prefab/" + bareID), pos, rot, NULL, 0);
        }
        catch (e) {
            return null;
        }
    }
    const headTransform = player?.field("head").value || null;
    const _obj = amethsyTempSpawnItemAtPos("item_robo_monke", headTransform.method("get_position").invoke(), headTransform.method("get_rotation").invoke());
    const _root = _obj.method("get_gameObject").invoke();
    const _go = _root.method("get_transform").invoke().method("GetChild").invoke(0).method("get_gameObject").invoke();
    const _da_ref = player.method("get_playerRef").invoke();
    const _rmi = _go.method("GetComponent", 1).inflate(Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.RoboMonkeItem")).invoke();
    _rmi.method("set_sourcePlayer").invoke(_da_ref);
    _rmi.method("RPC_Startup").invoke(_da_ref);
}
function omniCollectionToArray(_col) {
    const _out = [];
    if (!_col || (_col.handle && _col.handle.isNull()))
        return _out;
    let _vals = _col;
    try {
        _vals = _col.method("get_Values").invoke();
    }
    catch (_) { }
    try {
        _vals = _col.field("Values").value;
    }
    catch (_) { }
    try {
        const _en = _vals.method("GetEnumerator").invoke();
        while (_en.method("MoveNext").invoke()) {
            let _cur = _en.method("get_Current").invoke();
            try {
                _cur = _cur.method("get_Value").invoke();
            }
            catch (_) { }
            try {
                if (_cur && _cur.field) {
                    const _v = _cur.field("value").value;
                    if (_v)
                        _cur = _v;
                }
            }
            catch (_) { }
            if (_cur && (!_cur.handle || !_cur.handle.isNull()))
                _out.push(_cur);
        }
    }
    catch (_) { }
    if (_out.length === 0) {
        let _len = 0;
        try {
            _len = _vals.length;
        }
        catch (_) { }
        try {
            if (!_len)
                _len = _vals.method("get_Count").invoke();
        }
        catch (_) { }
        try {
            if (!_len)
                _len = _vals.method("get_Length").invoke();
        }
        catch (_) { }
        for (let _i = 0; _i < _len; _i++) {
            let _v = null;
            try {
                _v = _vals.get ? _vals.get(_i) : null;
            }
            catch (_) { }
            try {
                if (!_v)
                    _v = _vals.method("get_Item").invoke(_i);
            }
            catch (_) { }
            try {
                if (!_v)
                    _v = _vals.method("GetValue").invoke(_i);
            }
            catch (_) { }
            if (!_v)
                try {
                    _v = _vals[_i];
                }
                catch (_) { }
            if (_v && (!_v.handle || !_v.handle.isNull()))
                _out.push(_v);
        }
    }
    return _out;
}
function omniManagedString(_s) {
    try {
        if (_s && typeof _s.content === "string")
            return _s.content;
    }
    catch (_) { }
    try {
        if (_s && _s.content)
            return String(_s.content);
    }
    catch (_) { }
    return String(_s);
}
function menuCategory(title, entries, toolTip = "") {
    return { kind: "category", title, entries, toolTip };
}
function menuAddTo(category, entries) {
    return { category, entries };
}
let buttons = [];
let currentCategory = 0, currentPage = 0, righthand = false;
let GTPlayer = null, instance = null, instanceField = null, UberShader = null, TextShader = null;
let rightHandTransform = null, leftHandTransform = null, headCollider = null, bodyCollider = null, playerRigidBody = null, rigidbody = null;
let deltaTime = 0, time = 0, frameCount = 0;
let _pcMode = false, _pcMenuOpen = false, _pcFlyEnabled = false, _pcLastCursorX = -1, _pcLastCursorY = -1, _pcMenuSelector = 0, _pcQWasDown = false, _pcEscWasDown = false, _pcUpWasDown = false, _pcDownWasDown = false, _pcEnterWasDown = false, _pcMinusWasDown = false, _pcPlusWasDown = false, _pcLeftWasDown = false, _pcRightWasDown = false, _pcRmbWasDown = false, _pcLmbMenuWasDown = false;
let _VK_Q = 81, _VK_ESCAPE = 27, _VK_RBUTTON = 2, _VK_LBUTTON = 1, _VK_W = 87, _VK_A = 65, _VK_S = 83, _VK_D = 68, _VK_SPACE_PC = 32, _VK_SHIFT_PC = 16, _VK_UP_PC = 38, _VK_DOWN_PC = 40, _VK_LEFT_PC = 37, _VK_RIGHT_PC = 39, _VK_OEM_MINUS_PC = 0xbd, _VK_OEM_PLUS_PC = 0xbb, _VK_SUBTRACT_PC = 0x6d, _VK_ADD_PC = 0x6b, _VK_RETURN_PC = 13;
let _GAKS = null, _GCP = null, _pcPoint = Memory.alloc(8);
let _pcWin32InitAttempted = false, _pcWin32ReadyLogged = false;
let _pcYaw = 0, _pcPitch = 0;
let _pcFlyVel = [0, 0, 0];
let _pcFlySpeed = 8.0;
Il2Cpp.perform(() => {
    if (globalThis.syteInitialized)
        return;
    globalThis.syteInitialized = true;
    function syteLog(msg) {
    }
    function syteError(msg) {
    }
    function syteInfo(msg) {
    }
    function initPcWin32Input() {
        if (_pcWin32InitAttempted)
            return !!_GAKS;
        _pcWin32InitAttempted = true;
        try {
            let user32 = null;
            try {
                user32 = Process.getModuleByName("user32.dll");
            }
            catch (_) {
                try {
                    user32 = Process.findModuleByName("user32.dll");
                }
                catch (_) { }
            }
            if (!user32) {
                try {
                    user32 = Module.load("user32.dll");
                }
                catch (_) { }
            }
            let gaksPtr = null;
            let gcpPtr = null;
            try {
                gaksPtr = user32?.getExportByName
                    ? user32.getExportByName("GetAsyncKeyState")
                    : Module.getExportByName("user32.dll", "GetAsyncKeyState");
            }
            catch (_) { }
            try {
                gcpPtr = user32?.getExportByName
                    ? user32.getExportByName("GetCursorPos")
                    : Module.getExportByName("user32.dll", "GetCursorPos");
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
    function _pcKeyDown(vk) {
        try {
            if (!_GAKS && !initPcWin32Input())
                return false;
            return (Number(_GAKS(vk)) & 0x8000) !== 0;
        }
        catch (_) {
            return false;
        }
    }
    function syteHookReturn(cls, methodName, condition, value, paramCount = 0) {
        try {
            const method = cls.method(methodName, paramCount);
            const original = method.nativeFunction;
            method.implementation = function (...args) {
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
            if (!appState || appState.isNull()) {
                sendNotification("don't work", false);
                return;
            }
            try {
                const GISCls = acImage.class("AnimalCompany.GameplayItemState");
                GISCls.method("get_isHidden").implementation = function () { return false; };
            }
            catch (_) { }
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
                                    if (!item || item.isNull())
                                        continue;
                                    try {
                                        const isUnlocked = item.method("get_isUnlocked").invoke();
                                        if (isUnlocked && !isUnlocked.isNull())
                                            isUnlocked.method("set_value").invoke(true);
                                    }
                                    catch (_) { }
                                    try {
                                        const depsSatisfied = item.method("get_unlockDependenciesSatisfied").invoke();
                                        if (depsSatisfied && !depsSatisfied.isNull())
                                            depsSatisfied.method("set_value").invoke(true);
                                    }
                                    catch (_) { }
                                    try {
                                        const unlockable = item.method("get_unlockable").invoke();
                                        if (unlockable && !unlockable.isNull())
                                            unlockable.method("set_value").invoke(true);
                                    }
                                    catch (_) { }
                                    unlockedItems++;
                                }
                                catch (_) { }
                            }
                        }
                    }
                }
            }
            catch (e) {
            }
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
                                    if (!item || item.isNull())
                                        continue;
                                    try {
                                        const isOwned = item.method("get_isOwned").invoke();
                                        if (isOwned && !isOwned.isNull())
                                            isOwned.method("set_value").invoke(true);
                                    }
                                    catch (_) { }
                                    try {
                                        const canPurchase = item.method("get_canPurchaseDirectly").invoke();
                                        if (canPurchase && !canPurchase.isNull())
                                            canPurchase.method("set_value").invoke(true);
                                    }
                                    catch (_) { }
                                    try {
                                        const isDevItem = item.method("get_isDevItem")?.invoke();
                                        if (isDevItem && !isDevItem.isNull())
                                            isDevItem.method("set_value").invoke(true);
                                    }
                                    catch (_) { }
                                    unlockedAvatarItems++;
                                }
                                catch (_) { }
                            }
                        }
                    }
                }
            }
            catch (e) {
            }
            sendNotification("don't work" + unlockedItems + " items + " + unlockedAvatarItems + " cosmetics!", false);
        }
        catch (e) {
            sendNotification("don't work" + e, false);
        }
    }
    function resolveGunTargetPlayer(gd, maxDist = 8.0) {
        if (!gd)
            return null;
        try {
            const ray = gd.ray;
            if (ray && !(ray.handle && ray.handle.isNull && ray.handle.isNull())) {
                try {
                    const hc = ray.method("get_collider").invoke();
                    if (hc && !hc.isNull && !hc.isNull()) {
                        try {
                            const dp = hc.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                            if (dp && !dp.isNull())
                                return dp;
                        }
                        catch (_) { }
                        try {
                            const hgo = hc.method("get_gameObject").invoke();
                            if (hgo && !hgo.isNull()) {
                                const hp = hgo.method("GetComponentInParent", 0).inflate(NetPlayerCls).invoke();
                                if (hp && !hp.isNull())
                                    return hp;
                            }
                        }
                        catch (_) { }
                    }
                }
                catch (_) { }
            }
        }
        catch (_) { }
        try {
            const pp = gd.endPosition;
            if (!pp)
                return null;
            let nearest = null, nd = maxDist;
            const players = getAllNetPlayersList(false);
            for (const p of players) {
                try {
                    const pos = getTransform(p).method("get_position").invoke();
                    const d = Vector3Cls.method("Distance").invoke(pp, pos);
                    if (d < nd) {
                        nd = d;
                        nearest = p;
                    }
                }
                catch (_) { }
            }
            return nearest;
        }
        catch (_) {
            return null;
        }
    }
    function getPlayerName(player) {
        try {
            return player.method("get_displayName").invoke()?.content || "player";
        }
        catch (_) {
            return "player";
        }
    }
    function getIsMine(player) {
        return player.method("get_IsMine").invoke();
    }
    function getAllOtherPlayers() {
        const playerMap = NetPlayerClass.field("playerIDToNetPlayer").value;
        const values = playerMap.method("get_Values").invoke();
        const enumerator = values.method("GetEnumerator").invoke();
        const players = [];
        while (enumerator.method("MoveNext").invoke()) {
            const player = enumerator.method("get_Current").invoke();
            if (!player || player.handle.isNull() || getIsMine(player))
                continue;
            players.push(player);
        }
        return players;
    }
    function getAllNetPlayersList(includeLocal = true) {
        const players = [];
        try {
            const playerDict = NetPlayerCls.field("playerIDToNetPlayer").value;
            if (!playerDict || playerDict.isNull())
                return players;
            const vals = playerDict.method("get_Values").invoke();
            const en = vals.method("GetEnumerator").invoke();
            while (en.method("MoveNext").invoke()) {
                const p = en.method("get_Current").invoke();
                if (!p || p.isNull?.())
                    continue;
                if (!includeLocal && playerIsLocal(p))
                    continue;
                players.push(p);
            }
        }
        catch (_) { }
        return players;
    }
    function playerIsLocal(player) {
        try {
            return player.method("get_IsMine").invoke();
        }
        catch (_) {
            return false;
        }
    }
    function syteSafeImage(asmName) {
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
                    versionMethod.implementation = function (...args) {
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
    function spawnNetworkPrefab(prefabName, pos, rot, authPlayerRef = null) {
        try {
            const runner = PrefabGen.field("_instance").value.method("get_runner").invoke();
            if (!runner || runner.isNull())
                return null;
            const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
            const count = sources.method("get_Count").invoke();
            for (let i = 0; i < count; i++) {
                try {
                    const source = sources.method("get_Item").invoke(i);
                    const desc = source.method("get_Description").invoke().toString();
                    if (desc.toLowerCase().includes(String(prefabName).toLowerCase())) {
                        const no = source.method("WaitForResult").invoke();
                        if (!no || no.isNull())
                            return null;
                        const makeZeroForType = (type) => {
                            if (type.class.isEnum || type.isPrimitive)
                                return 0;
                            if (!type.class.isValueType)
                                return NULL;
                            const fields = type.class.fields.filter(f => !f.isStatic);
                            if (fields.length === 0)
                                return 0;
                            return fields.map(f => makeZeroForType(f.type));
                        };
                        const buildNullableArg = (nullableType, hasValue, value) => {
                            const fields = nullableType.class.fields.filter(f => !f.isStatic);
                            return fields.map(f => {
                                const lname = f.name.toLowerCase();
                                if (lname.includes("hasvalue"))
                                    return hasValue ? 1 : 0;
                                if (lname === "value")
                                    return hasValue ? value : makeZeroForType(f.type);
                                return makeZeroForType(f.type);
                            });
                        };
                        const normalizeValue = (type, value) => {
                            if (typeof value === "boolean")
                                return value ? 1 : 0;
                            if (value instanceof Il2Cpp.ValueType) {
                                const fields = type.class.fields.filter(f => !f.isStatic);
                                if (fields.length === 0)
                                    return 0;
                                return fields.map(f => normalizeValue(f.type, f.bind(value).value));
                            }
                            if (Array.isArray(value))
                                return value.map(v => normalizeValue(type, v));
                            return value;
                        };
                        const buildNullableFromValueType = (nullableType, valueType) => {
                            return buildNullableArg(nullableType, true, normalizeValue(valueType.type, valueType));
                        };
                        let spawnMethod = null;
                        for (const m of runner.method("Spawn").overloads()) {
                            if (m.parameterCount !== 6 || m.isGeneric)
                                continue;
                            const p = m.parameters;
                            if (p[0].type.name.includes("Fusion.NetworkObject") &&
                                p[1].type.name.startsWith("System.Nullable") && p[1].type.name.includes("Vector3") &&
                                p[2].type.name.startsWith("System.Nullable") && p[2].type.name.includes("Quaternion") &&
                                p[3].type.name.startsWith("System.Nullable") && p[3].type.name.includes("PlayerRef") &&
                                p[4].type.name.includes("OnBeforeSpawned") &&
                                p[5].type.name.includes("NetworkSpawnFlags")) {
                                spawnMethod = m;
                                break;
                            }
                        }
                        if (!spawnMethod)
                            return null;
                        const posArg = buildNullableFromValueType(spawnMethod.parameters[1].type, pos);
                        const rotArg = buildNullableFromValueType(spawnMethod.parameters[2].type, rot);
                        let authArg;
                        if (authPlayerRef && !authPlayerRef.isNull?.()) {
                            try {
                                authArg = buildNullableFromValueType(spawnMethod.parameters[3].type, authPlayerRef);
                            }
                            catch (_) {
                                authArg = buildNullableArg(spawnMethod.parameters[3].type, false, makeZeroForType(spawnMethod.parameters[3].type));
                            }
                        }
                        else {
                            authArg = buildNullableArg(spawnMethod.parameters[3].type, false, makeZeroForType(spawnMethod.parameters[3].type));
                        }
                        const onBeforeArg = spawnMethod.parameters[4].type.class.isValueType ? makeZeroForType(spawnMethod.parameters[4].type) : NULL;
                        const spawned = spawnMethod.bind(runner).invoke(no, posArg, rotArg, authArg, onBeforeArg, 0);
                        return spawned;
                    }
                }
                catch (_) { }
            }
        }
        catch (e) {
        }
        return null;
    }
    syteApplyVrSpoof();
    const UnityEngineCore = images["UnityEngine.CoreModule"];
    const UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
    const NetSessionRPCsClass = AssemblyCSharp.class("AnimalCompany.NetSessionRPCs");
    const NetPlayerClass = AssemblyCSharp.class("AnimalCompany.NetPlayer");
    const UnityEngineUI = images["UnityEngine.UI"];
    const UnityEngineUIModule = images["UnityEngine.UIModule"];
    const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
    const PhotonFusionNetworking = images["PhotonFusionNetworking"];
    const UnityEngineXR = images["UnityEngine.XRModule"];
    const UnityEngineAudio = images["UnityEngine.AudioModule"];
    let GTPlayerClass = null, PCClass = null, NetPlayer = null, GBIClass = null, PrefabGen = null, SFXManager = null, ParticleManagerClass = null, NetworkObjectClass = null;
    let NManager = null, GorillaReportButton = null, InputDevices = null, CommonUsages = null, GameObject = null, Object = null, Vector3 = null, Quaternion = null, Time = null, Resources = null, Material = null;
    let Renderer = null, Shader = null, Color = null, Mesh = null, MeshFilter = null, RectTransform = null, LineRenderer = null, Camera = null, PlayerPrefs = null, GBOClass = null, Light = null, AudioSource = null, MeshCollider = null, BoxCollider = null, Collider = null, Rigidbody = null, Physics = null;
    let Canvas = null, CanvasScaler = null, GraphicRaycaster = null, Text = null, Font = null;
    GTPlayer = null;
    instance = null;
    UberShader = null;
    TextShader = null;
    GTPlayerClass = AssemblyCSharp.class("AnimalCompany.GorillaLocomotion");
    PCClass = AssemblyCSharp.class("AnimalCompany.PlayerController");
    NetPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer");
    GBIClass = AssemblyCSharp.class("AnimalCompany.GrabbableItem");
    PrefabGen = AssemblyCSharp.class("AnimalCompany.PrefabGenerator");
    let ItemSpawnSourceEnum = null;
    try {
        ItemSpawnSourceEnum = AssemblyCSharp.class("AnimalCompany.ItemSpawnSource");
    }
    catch (_) { }
    const DEFAULT_ITEM_SPAWN_SOURCE = ItemSpawnSourceEnum ? (ItemSpawnSourceEnum.field("Player")?.value ?? ItemSpawnSourceEnum.field("World")?.value ?? 0) : 0;
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
            const comicSansFactory = Font.methods.find((method) => method.name === "CreateDynamicFontFromOSFont" &&
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
    function getComponent(obj, type) {
        return obj.method("GetComponent", 1).inflate(type).invoke();
    }
    function addComponent(obj, type) {
        return obj.method("AddComponent", 1).inflate(type).invoke();
    }
    function getTransform(obj) {
        return obj.method("get_transform").invoke();
    }
    function omniGetHandTransform() {
        try {
            if (rightHandTransform && !rightHandTransform.isNull())
                return rightHandTransform;
        }
        catch (_) { }
        return null;
    }
    function omniGunAimPlayer() {
        try {
            let _o, _f;
            if (_pcMode) {
                const _cam = Camera.method("get_main").invoke();
                if (!_cam || _cam.isNull())
                    return null;
                const _ct = getTransform(_cam);
                _o = _ct.method("get_position").invoke();
                _f = _ct.method("get_forward").invoke();
            }
            else {
                const _h = omniGetHandTransform();
                if (!_h)
                    return null;
                _o = _h.method("get_position").invoke();
                _f = _h.method("get_forward").invoke();
            }
            const _ox = _o.field("x").value, _oy = _o.field("y").value, _oz = _o.field("z").value, _fx = _f.field("x").value, _fy = _f.field("y").value, _fz = _f.field("z").value;
            const LOCK_RADIUS = 3.5, LOCK_RANGE = 300.0;
            let _bestPerp = LOCK_RADIUS, _bestPl = null;
            const _vals = NetPlayerCls.field("playerIDToNetPlayer")
                .value.method("get_Values")
                .invoke();
            const _en = _vals.method("GetEnumerator").invoke();
            while (_en.method("MoveNext").invoke()) {
                const _pl = _en.method("get_Current").invoke();
                if (!_pl || _pl.handle.isNull())
                    continue;
                try {
                    if (_pl.method("get_IsMine").invoke())
                        continue;
                    const _pp = getTransform(_pl).method("get_position").invoke();
                    const _px = _pp.field("x").value, _py = _pp.field("y").value, _pz = _pp.field("z").value;
                    const _dx = _px - _ox, _dy = _py - _oy, _dz = _pz - _oz;
                    const _t = _dx * _fx + _dy * _fy + _dz * _fz;
                    if (_t < 0.5 || _t > LOCK_RANGE)
                        continue;
                    const _cx = _ox + _fx * _t, _cy = _oy + _fy * _t, _cz = _oz + _fz * _t;
                    const _ex = _px - _cx, _ey = _py - _cy, _ez = _pz - _cz;
                    const _perp = Math.sqrt(_ex * _ex + _ey * _ey + _ez * _ez);
                    if (_perp < _bestPerp) {
                        _bestPerp = _perp;
                        _bestPl = _pl;
                    }
                }
                catch (_) { }
            }
            return _bestPl;
        }
        catch (_) {
            return null;
        }
    }
    function syteSetVelocity(rb, velocity) {
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
    function getPlainMenuText(text) {
        return text.replace(/</g, "\u2039").replace(/>/g, "\u203a");
    }
    function makeAnimatedGradientText(text, phase) {
        let result = "";
        let visibleIndex = 0;
        const displayText = getPlainMenuText(text);
        for (const character of displayText) {
            if (character === " " || character === "\n") {
                result += character;
                continue;
            }
            const wave = 0.5 + 0.5 * Math.sin(phase + visibleIndex * 0.48);
            const red = Math.round(textGradientDarkColor[0] + wave * (textGradientLightColor[0] - textGradientDarkColor[0]));
            const green = Math.round(textGradientDarkColor[1] + wave * (textGradientLightColor[1] - textGradientDarkColor[1]));
            const blue = Math.round(textGradientDarkColor[2] + wave * (textGradientLightColor[2] - textGradientDarkColor[2]));
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
    function renderMenuText(canvasObject, text = "", color = [1, 1, 1, 1], pos = zeroVector, size = oneVector) {
        ensureFont();
        const title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
        try {
            const c = getComponent(title, Collider);
            if (c && !c.isNull?.())
                Destroy(c);
        }
        catch (_) { }
        try {
            const rb = getComponent(title, Rigidbody);
            if (rb && !rb.isNull?.())
                Destroy(rb);
        }
        catch (_) { }
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
    function getFemboyBgTexture() {
        if (femboyBgTexture && !femboyBgTexture.isNull?.())
            return femboyBgTexture;
        if (femboyBgTried)
            return null;
        femboyBgTried = true;
        try {
            const Convert = Il2Cpp.domain.assembly("mscorlib").image.class("System.Convert");
            const bytes = Convert.method("FromBase64String", 1).invoke(Il2Cpp.string(FEMBOY_BG_B64));
            if (!bytes || bytes.isNull?.())
                return null;
            const Texture2D = coreImage.class("UnityEngine.Texture2D");
            const tex = Texture2D.alloc();
            tex.method(".ctor", 2).overload("System.Int32", "System.Int32").invoke(2, 2);
            const ImageConversion = Il2Cpp.domain.assembly("UnityEngine.ImageConversionModule").image.class("UnityEngine.ImageConversion");
            const ok = ImageConversion.method("LoadImage", 2).overload("UnityEngine.Texture2D", "System.Byte[]").invoke(tex, bytes);
            if (ok === false)
                return null;
            try {
                tex.method("Apply", 0).invoke();
            }
            catch (_) { }
            femboyBgTexture = tex;
            return tex;
        }
        catch (_) {
            return null;
        }
    }
    function applyMenuBgTexture(obj) {
        try {
            if (!menuBgTexture || menuBgTexture.isNull?.())
                return;
            const rend = getComponent(obj, Renderer);
            if (!rend || rend.isNull?.())
                return;
            const mat = rend.method("get_material").invoke();
            if (!mat || mat.isNull?.())
                return;
            const white = [1, 1, 1, bgColor[3]];
            try {
                mat.method("SetTexture", 2).overload("System.String", "UnityEngine.Texture").invoke(Il2Cpp.string("_BaseMap"), menuBgTexture);
            }
            catch (_) { }
            try {
                mat.method("SetTexture", 2).overload("System.String", "UnityEngine.Texture").invoke(Il2Cpp.string("_MainTex"), menuBgTexture);
            }
            catch (_) { }
            try {
                mat.method("set_mainTexture").invoke(menuBgTexture);
            }
            catch (_) { }
            try {
                mat.method("SetColor", 2).overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string("_BaseColor"), white);
            }
            catch (_) { }
            try {
                mat.method("set_color").invoke(white);
            }
            catch (_) { }
        }
        catch (_) { }
    }
    function createObject(pos = zeroVector, rot = identityQuaternion, scale = oneVector, primitiveType = 3, colorArr = [1, 1, 1, 1], parent = null) {
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
    const roundedMeshCache = new Map();
    function getRoundedBoxMesh(width, height, cornerRadius) {
        const normalizedY = Math.max(0.001, Math.min(0.46, cornerRadius / Math.max(width, 0.001)));
        const normalizedZ = Math.max(0.001, Math.min(0.46, cornerRadius / Math.max(height, 0.001)));
        const cacheKey = normalizedY.toFixed(4) + ":" + normalizedZ.toFixed(4);
        const cached = roundedMeshCache.get(cacheKey);
        if (cached && !cached.isNull?.())
            return cached;
        const perimeter = [];
        const cornerSegments = 10;
        const corners = [
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
        const vertices = [];
        for (const [y, z] of perimeter)
            vertices.push([0.5, y, z]);
        for (const [y, z] of perimeter)
            vertices.push([-0.5, y, z]);
        const ringCount = perimeter.length;
        const frontCenter = vertices.length;
        vertices.push([0.5, 0, 0]);
        const backCenter = vertices.length;
        vertices.push([-0.5, 0, 0]);
        const triangles = [];
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
        try {
            const Vector2Cls = coreImage.class("UnityEngine.Vector2");
            const uvs = [];
            for (const [y, z] of perimeter)
                uvs.push([1 - (y + 0.5), z + 0.5]);
            for (const [y, z] of perimeter)
                uvs.push([1 - (y + 0.5), z + 0.5]);
            uvs.push([0.5, 0.5]);
            uvs.push([0.5, 0.5]);
            const uvArray = Il2Cpp.array(Vector2Cls, uvs.length);
            for (let index = 0; index < uvs.length; index++) {
                uvArray.set(index, Il2Cpp.fromFridaValue(uvs[index], Vector2Cls.type));
            }
            mesh.method("set_uv").invoke(uvArray);
        }
        catch (_) { }
        mesh.method("RecalculateBounds", 0).invoke();
        mesh.method("RecalculateNormals", 0).invoke();
        roundedMeshCache.set(cacheKey, mesh);
        return mesh;
    }
    function createOutlinedRoundedObject(pos, scale, fillColor, outlineColor, parent, interactive = false, outlineSize = 0.025) {
        const createLayer = (center, size, color, keepCollider, cornerRadius) => {
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
                try {
                    const c = getComponent(layer, Collider);
                    if (c && !c.isNull?.())
                        Destroy(c);
                }
                catch (_) { }
            }
            else {
                try {
                    const c = getComponent(layer, Collider);
                    if (c && !c.isNull?.())
                        c.method("set_isTrigger").invoke(true);
                }
                catch (_) { }
            }
            try {
                const rb = getComponent(layer, Rigidbody);
                if (rb && !rb.isNull?.())
                    Destroy(rb);
            }
            catch (_) { }
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
    function sendNotification(_text = "", _reload = true, _t = 5) { void _text; void _reload; void _t; }
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
        try {
            const c = getComponent(menu, Collider);
            if (c && !c.isNull?.())
                Destroy(c);
        }
        catch (_) { }
        try {
            const rb = getComponent(menu, Rigidbody);
            if (rb && !rb.isNull?.())
                Destroy(rb);
        }
        catch (_) { }
        const menuBackground = createOutlinedRoundedObject([0.1, 0, panelCenterZ], [0.1, 0.72, panelScaleZ], bgColor, menuOutlineColor, getTransform(menu), false, menuOutlineThickness);
        applyMenuBgTexture(menuBackground);
        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        try {
            const c = getComponent(canvasObject, Collider);
            if (c && !c.isNull?.())
                Destroy(c);
        }
        catch (_) { }
        try {
            const rb = getComponent(canvasObject, Rigidbody);
            if (rb && !rb.isNull?.())
                Destroy(rb);
        }
        catch (_) { }
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
                ]) {
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
            let targetPos = zeroVector;
            let targetRot = identityQuaternion;
            if (_pcMode) {
                const headTransform = getTransform(headCollider);
                if (headTransform && !headTransform.isNull?.()) {
                    const headPos = headTransform.method("get_position").invoke();
                    const headFwd = headTransform.method("get_forward").invoke();
                    const headRot = headTransform.method("get_rotation").invoke();
                    const dist = pcMenuDistance;
                    targetPos = Vector3.method("op_Addition").invoke(headPos, Vector3.method("op_Multiply", 2).invoke(headFwd, dist));
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
                let viewRightOffset = zeroVector;
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
    function updateMenuAnimation(opening) {
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
    function updateButtonColor(button, buttonData, index = -1) {
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
    function styleActionButton(label, action) {
        return new ButtonInfo({
            buttonText: label,
            method: () => {
                menuBgTexture = null;
                action();
                reloadMenu();
            },
            isTogglable: false,
            toolTip: "tooltip no workie" + label,
        });
    }
    function styleStepper(label, decrease, increase) {
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
    const selectionStepperRefreshers = [];
    function selectionStepper(label, selectedValue, decrease, increase) {
        let selector;
        const refreshLabel = () => {
            selector.buttonText = label + ": " + selectedValue();
        };
        const changeSelection = (change) => {
            change();
            selectionStepperRefreshers.forEach((refresh) => refresh());
            sendNotification("don't work", false);
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
    function styleToggleButton(label, enabled, enable, disable, toolTip) {
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
    function omniVecNum(_p, _i, _f) {
        try {
            let _v = _p[_i];
            if ((_v === undefined || _v === null) && _p.field)
                _v = _p.field(_f).value;
            return Number(_v || 0);
        }
        catch (_) {
            return 0;
        }
    }
    function omniIsGoodPosition(_p) {
        try {
            if (!_p)
                return false;
            const _x = omniVecNum(_p, 0, "x"), _y = omniVecNum(_p, 1, "y"), _z = omniVecNum(_p, 2, "z");
            if (!isFinite(_x) || !isFinite(_y) || !isFinite(_z))
                return false;
            if (Math.abs(_x) + Math.abs(_y) + Math.abs(_z) < 0.01)
                return false;
            if (Math.abs(_x) > 100000 || Math.abs(_y) > 100000 || Math.abs(_z) > 100000)
                return false;
            return true;
        }
        catch (_) {
            return false;
        }
    }
    function omniGetPlayerControllerInstance() {
        try {
            return PCClass.method("get_instance").invoke();
        }
        catch (_e) {
            return null;
        }
    }
    function omniGetLocalPlayer() {
        try {
            return NetPlayer.method("get_localPlayer").invoke();
        }
        catch (_e) {
            return null;
        }
    }
    function omniGetLocalNetPlayerSafe() {
        try {
            return NetPlayer.method("get_localPlayer").invoke();
        }
        catch (_e) {
            return omniGetLocalPlayer();
        }
    }
    function omniGetSafeSelfPosition() {
        try {
            const _p = getTransform(headCollider).method("get_position").invoke();
            if (omniIsGoodPosition(_p))
                return _p;
        }
        catch (_) { }
        try {
            const _pc = omniGetPlayerControllerInstance();
            if (_pc && !_pc.handle.isNull()) {
                const _p = getTransform(_pc).method("get_position").invoke();
                if (omniIsGoodPosition(_p))
                    return _p;
            }
        }
        catch (_) { }
        try {
            const _lp = omniGetLocalNetPlayerSafe();
            if (_lp && !_lp.handle.isNull()) {
                const _p = getTransform(_lp).method("get_position").invoke();
                if (omniIsGoodPosition(_p))
                    return _p;
            }
        }
        catch (_) { }
        try {
            const _p = rightHandTransform.method("get_position").invoke();
            if (omniIsGoodPosition(_p))
                return _p;
        }
        catch (_) { }
        return null;
    }
    function omniRestoreSelfPosition(_pos) {
        if (!omniIsGoodPosition(_pos))
            return false;
        let _ok = false;
        try {
            const _pc = omniGetPlayerControllerInstance();
            if (_pc && !_pc.handle.isNull()) {
                try {
                    getTransform(_pc).method("set_position").invoke(_pos);
                    _ok = true;
                }
                catch (_) { }
            }
        }
        catch (_) { }
        try {
            const _lp = omniGetLocalNetPlayerSafe();
            if (_lp && !_lp.handle.isNull()) {
                try {
                    getTransform(_lp).method("set_position").invoke(_pos);
                    _ok = true;
                }
                catch (_) { }
            }
        }
        catch (_) { }
        return _ok;
    }
    function omniReviveSelf() {
        let _ok = false;
        const _keepPos = omniGetSafeSelfPosition();
        try {
            const _pc = omniGetPlayerControllerInstance();
            if (_pc && !_pc.handle.isNull()) {
                try {
                    _pc.method("CancelReviveInvincibility").invoke();
                }
                catch (_) { }
                try {
                    _pc.method("RealiveWithHealth").invoke(100);
                    _ok = true;
                }
                catch (_) { }
                try {
                    _pc.method("Revive").invoke();
                    _ok = true;
                }
                catch (_) { }
                try {
                    _pc.method("AddPlayerHealth").invoke(999);
                }
                catch (_) { }
                try {
                    _pc.field("_isDie").value = false;
                    _ok = true;
                }
                catch (_) { }
                try {
                    _pc.field("_isInvincible").value = true;
                }
                catch (_) { }
                try {
                    _pc.field("_maxHealth").value = 100;
                }
                catch (_) { }
                try {
                    _pc.field("<healthLost>k__BackingField").value = 0;
                }
                catch (_) { }
                try {
                    _pc.field("<healthHealed>k__BackingField").value = 100;
                }
                catch (_) { }
                try {
                    _pc.method("UpdateReviving").invoke(false);
                }
                catch (_) { }
                try {
                    _pc.field("_deathCoroutine").value = null;
                }
                catch (_) { }
                try {
                    omniRestoreSelfPosition(_keepPos);
                }
                catch (_) { }
            }
        }
        catch (_e) {
        }
        try {
            const _lp = omniGetLocalNetPlayerSafe();
            if (_lp && !_lp.handle.isNull()) {
                try {
                    _lp.method("set_isDie").invoke(false);
                    _ok = true;
                }
                catch (_) { }
                try {
                    _lp.method("set_isInvincible").invoke(true);
                }
                catch (_) { }
                try {
                    _lp.method("set_isControllingBody").invoke(true);
                }
                catch (_) { }
                try {
                    _lp.method("HandleLocalPlayerDie").invoke(false);
                }
                catch (_) { }
                try {
                    _lp.method("RPC_DoPlayerDie").invoke(false);
                    _ok = true;
                }
                catch (_) { }
                try {
                    omniRestoreSelfPosition(_keepPos);
                }
                catch (_) { }
            }
        }
        catch (_e2) {
        }
    }
    function omniIsLocalPlayerController(_self) {
        try {
            const _pc = omniGetPlayerControllerInstance();
            return (_pc && _self && _pc.handle && _self.handle && _pc.handle.equals(_self.handle));
        }
        catch (_) { }
        return true;
    }
    function omniInstallBetterGodModeHook() {
        if (omniBetterGodModeHookSet)
            return true;
        let _ok = false;
        try {
            const _pcCls = PCClass;
            const _blockVoid = (_name, _argc) => {
                try {
                    const _m = _pcCls.method(_name, _argc);
                    _m.implementation = function () {
                        if ((omniBetterGodModeEnabled || omniGodModeEnabled) && omniIsLocalPlayerController(this))
                            return;
                        return this.method(_name, _argc).invoke(...arguments);
                    };
                    _ok = true;
                }
                catch (_) { }
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
                    if ((omniBetterGodModeEnabled || omniGodModeEnabled) && omniIsLocalPlayerController(this))
                        return;
                    return this.method("PlayerDeathEffect").invoke();
                };
                _ok = true;
            }
            catch (_) { }
        }
        catch (_e) {
        }
        try {
            const _npCls = NetPlayer;
            const _hook = (_name, _argc) => {
                try {
                    const _m = _npCls.method(_name, _argc);
                    _m.implementation = function () {
                        if (omniBetterGodModeEnabled || omniGodModeEnabled) {
                            try {
                                if (this.method("get_IsMine").invoke())
                                    return;
                            }
                            catch (_) { }
                            try {
                                if (this.method("get_isMine").invoke())
                                    return;
                            }
                            catch (_) { }
                        }
                        return this.method(_name, _argc).invoke(...arguments);
                    };
                    _ok = true;
                }
                catch (_) { }
            };
            _hook("RPC_PlayerHit", 3);
            _hook("RPC_PlayerHit", 6);
            _hook("RPC_PlayerStun", 4);
            try {
                const _rpcDie = _npCls.method("RPC_DoPlayerDie", 1);
                _rpcDie.implementation = function (isDie) {
                    if ((omniBetterGodModeEnabled || omniGodModeEnabled) && isDie) {
                        try {
                            this.method("set_isDie").invoke(false);
                        }
                        catch (_) { }
                        try {
                            omniReviveSelf();
                        }
                        catch (_) { }
                        return;
                    }
                    return this.method("RPC_DoPlayerDie", 1).invoke(isDie);
                };
                _ok = true;
            }
            catch (_) { }
        }
        catch (_e2) {
        }
        omniBetterGodModeHookSet = _ok;
        return _ok;
    }
    function omniKeepAliveSelf() {
        try {
            const _pc = omniGetPlayerControllerInstance();
            if (_pc && !_pc.handle.isNull()) {
                try {
                    _pc.field("_isDie").value = false;
                }
                catch (_) { }
                try {
                    _pc.field("_isInvincible").value = true;
                }
                catch (_) { }
                try {
                    _pc.field("_maxHealth").value = 100;
                }
                catch (_) { }
                try {
                    _pc.field("<healthLost>k__BackingField").value = 0;
                }
                catch (_) { }
                try {
                    _pc.method("AddPlayerHealth").invoke(999);
                }
                catch (_) { }
                try {
                    if (_pc.method("get_isDead").invoke())
                        omniReviveSelf();
                }
                catch (_) { }
            }
        }
        catch (_) { }
        try {
            const _lp = omniGetLocalNetPlayerSafe();
            if (_lp && !_lp.handle.isNull()) {
                try {
                    _lp.method("set_isDie").invoke(false);
                }
                catch (_) { }
                try {
                    _lp.method("set_isInvincible").invoke(true);
                }
                catch (_) { }
            }
        }
        catch (_) { }
    }
    const TEMPLATE_MENU_CATEGORIES = [];
    const TEMPLATE_MENU_BUTTONS = [];
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("credits", [
        { buttonText: "Qstar - idk", method: () => { }, isTogglable: false },
        { buttonText: "Byte - menu design", method: () => {
                try {
                    Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Application").method("OpenURL", 1).invoke(Il2Cpp.string("https://discord.gg/sU7MwGCwUC"));
                }
                catch (_) { }
            }, isTogglable: false, toolTip: "tooltip no workie" },
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("player", [
        menuToggle("Fly", {
            onUpdate: () => {
                if (!playerRigidBody || playerRigidBody.isNull?.())
                    return;
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
            toolTip: "tooltip no workie",
        }),
        menuStepper("Fly Speed", () => {
            flySpeedIndex = Math.max(0, flySpeedIndex - 1);
            flySpeed = flySpeeds[flySpeedIndex];
            sendNotification("don't work" + flySpeed, false);
        }, () => {
            flySpeedIndex = Math.min(flySpeeds.length - 1, flySpeedIndex + 1);
            flySpeed = flySpeeds[flySpeedIndex];
            sendNotification("don't work" + flySpeed, false);
        }, "adjust fly speed"),
        menuToggle("GodMode", {
            onEnable: () => {
                omniBetterGodModeEnabled = omniInstallBetterGodModeHook();
                if (omniBetterGodModeEnabled)
                    omniKeepAliveSelf();
                sendNotification("don't work", false, 2);
            },
            onDisable: () => {
                omniBetterGodModeEnabled = false;
                sendNotification("don't work", false, 2);
            },
            onUpdate: () => {
                if (omniBetterGodModeEnabled)
                    omniKeepAliveSelf();
            },
            toolTip: "tooltip no workie",
        }),
        menuButton("Unlock All", () => {
            try {
                const AppClass = AssemblyCSharp.class("AnimalCompany.App");
                const appState = AppClass.method("get_state").invoke();
                if (!appState || appState.isNull()) {
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
                                        if (!item || item.isNull())
                                            continue;
                                        try {
                                            const isUnlocked = item.method("get_isUnlocked").invoke();
                                            if (isUnlocked && !isUnlocked.isNull())
                                                isUnlocked.method("set_value").invoke(true);
                                        }
                                        catch (_) { }
                                        try {
                                            const depsSatisfied = item.method("get_unlockDependenciesSatisfied").invoke();
                                            if (depsSatisfied && !depsSatisfied.isNull())
                                                depsSatisfied.method("set_value").invoke(true);
                                        }
                                        catch (_) { }
                                        try {
                                            const unlockable = item.method("get_unlockable").invoke();
                                            if (unlockable && !unlockable.isNull())
                                                unlockable.method("set_value").invoke(true);
                                        }
                                        catch (_) { }
                                        unlockedItems++;
                                    }
                                    catch (_) { }
                                }
                            }
                        }
                    }
                }
                catch (e) {
                }
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
                                        if (!item || item.isNull())
                                            continue;
                                        try {
                                            const isOwned = item.method("get_isOwned").invoke();
                                            if (isOwned && !isOwned.isNull())
                                                isOwned.method("set_value").invoke(true);
                                        }
                                        catch (_) { }
                                        try {
                                            const canPurchase = item.method("get_canPurchaseDirectly").invoke();
                                            if (canPurchase && !canPurchase.isNull())
                                                canPurchase.method("set_value").invoke(true);
                                        }
                                        catch (_) { }
                                        try {
                                            const isDevItem = item.method("get_isDevItem")?.invoke();
                                            if (isDevItem && !isDevItem.isNull())
                                                isDevItem.method("set_value").invoke(true);
                                        }
                                        catch (_) { }
                                        unlockedAvatarItems++;
                                    }
                                    catch (_) { }
                                }
                            }
                        }
                    }
                }
                catch (e) {
                }
            }
            catch (e) {
            }
        }, "Unlocks all gameplay items and avatar cosmetics."),
        menuButton("Dev Mode", () => {
            try {
                const AppClass = AssemblyCSharp.class("AnimalCompany.App");
                const appState = AppClass.method("get_state").invoke();
                if (!appState || appState.isNull()) {
                    return;
                }
                try {
                    const user = appState.method("get_user").invoke();
                    if (user && !user.isNull()) {
                        const isDeveloper = user.method("get_isDeveloper").invoke();
                        if (isDeveloper && !isDeveloper.isNull()) {
                            isDeveloper.method("set_value").invoke(true);
                        }
                    }
                }
                catch (_) { }
                try {
                    const mapMachine = appState.method("get_mapMachine").invoke();
                    if (mapMachine && !mapMachine.isNull()) {
                        const devMode = mapMachine.method("get_useDevMode").invoke();
                        if (devMode && !devMode.isNull()) {
                            devMode.method("set_value").invoke(true);
                        }
                    }
                }
                catch (_) { }
            }
            catch (_) { }
        }, "Enables developer mode and grants dev privileges."),
    ]));
    function getComponentInParent(obj, type) {
        return obj.method("GetComponentInParent", 0).inflate(type).invoke();
    }
    function kickPlayer(player) {
        try {
            const rpcs = AssemblyCSharp.class("AnimalCompany.NetSessionRPCs");
            const netinst = rpcs.field("_instance").value;
            if (!netinst)
                return;
            const plrID = player.field("_userID").value;
            if (!plrID)
                return;
            const parsed = Il2Cpp.corlib.class("System.Guid").method("Parse").invoke(plrID);
            netinst.method("RPC_KickPlayer").invoke(parsed);
            rpcs.method("KickPlayer").invoke(plrID);
        }
        catch (_) { }
    }
    let acAntiCheatBypassInstalled = false;
    function installAntiCheatBypass() {
        try {
            try {
                AssemblyCSharp.class("AnimalCompany.AntiCheatSystem").method("OnUpdate").implementation = function () { return; };
            }
            catch (e) {
            }
            try {
                AssemblyCSharp.class("AnimalCompany.VPNDetector").method("CheckVPNIsActive").implementation = function () { return; };
            }
            catch (e) {
            }
            try {
                AssemblyCSharp.class("AnimalCompany.VPNDetector").method("Update").implementation = function () { return; };
            }
            catch (_) { }
            try {
                const completed = Il2Cpp.corlib.class("System.Threading.Tasks.Task").method("get_CompletedTask").invoke();
                if (completed && !completed.isNull?.()) {
                    AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", 3).implementation = function () { return completed; };
                }
            }
            catch (e) {
            }
            try {
                AssemblyCSharp.class("AnimalCompany.NotificationManager").method("FormatModerationTranscript", 1).implementation = function () { return Il2Cpp.string(""); };
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("Start").implementation = function () { return; };
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("OnSelectedChoice", 1).implementation = function () { return; };
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.NetPlayer").method("set_accumLocalVoiceBroadcastSeconds").implementation = function () { return; };
            }
            catch (_) { }
            for (const argc of [1, 2, 4]) {
                try {
                    const completed2 = Il2Cpp.corlib.class("System.Threading.Tasks.Task").method("get_CompletedTask").invoke();
                    AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", argc).implementation = function () { return completed2; };
                }
                catch (_) { }
            }
            acAntiCheatBypassInstalled = true;
        }
        catch (e) {
        }
    }
    function revertAntiCheatBypass() {
        try {
            try {
                AssemblyCSharp.class("AnimalCompany.AntiCheatSystem").method("OnUpdate").implementation = null;
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VPNDetector").method("CheckVPNIsActive").implementation = null;
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VPNDetector").method("Update").implementation = null;
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", 3).implementation = null;
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.NotificationManager").method("FormatModerationTranscript", 1).implementation = null;
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("Start").implementation = null;
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.VoiceModSurvey").method("OnSelectedChoice", 1).implementation = null;
            }
            catch (_) { }
            try {
                AssemblyCSharp.class("AnimalCompany.NetPlayer").method("set_accumLocalVoiceBroadcastSeconds").implementation = null;
            }
            catch (_) { }
            for (const argc of [1, 2, 4]) {
                try {
                    AssemblyCSharp.class("AnimalCompany.API.AnimalCompanyAPI").method("AntiCheatCheck", argc).implementation = null;
                }
                catch (_) { }
            }
            acAntiCheatBypassInstalled = false;
        }
        catch (_) { }
    }
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("overpowered", [
        menuToggle("Kick Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                const ray = gunData.ray;
                if (!rightTrigger || !ray || ray.isNull?.() || !(time > tagGunDelay))
                    return;
                tagGunDelay = time + 0.3;
                try {
                    const target = getComponentInParent(ray.method("get_collider").invoke(), NetPlayer);
                    if (target && !target.handle.isNull() && !target.method("get_IsMine").invoke())
                        kickPlayer(target);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie",
        }),
        menuToggle("Kick All", {
            onUpdate: () => {
                const players = Object.method("FindObjectsOfType").inflate(NetPlayer).invoke();
                if (players) {
                    for (let i = 0; i < players.length; i++) {
                        const netPlayer = players.get(i);
                        if (playerIsLocal(netPlayer))
                            continue;
                        kickPlayer(netPlayer);
                    }
                }
            },
            toolTip: "tooltip no workie",
        }),
        menuToggle("Float All", {
            onDisable: () => {
                for (let _i = 0; _i < omniFloatBalls.length; _i++) {
                    try {
                        destroyObject(omniFloatBalls[_i]);
                    }
                    catch (_) { }
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
                                try {
                                    destroyObject(_b);
                                }
                                catch (_) { }
                                omniFloatVictims.splice(_i, 1);
                                omniFloatBalls.splice(_i, 1);
                                continue;
                            }
                            _v.method("RPC_Teleport").invoke([
                                _bp.field("x").value,
                                _bp.field("y").value + 0.5,
                                _bp.field("z").value,
                            ]);
                        }
                        catch (_) { }
                    }
                    if (!rightTrigger)
                        return;
                    if (!_pcMode && !rightGrab)
                        return;
                    if (time < tagGunDelay)
                        return;
                    tagGunDelay = time + 0.5;
                    try {
                        const _en = NetPlayer.field("playerIDToNetPlayer").value.method("get_Values").invoke().method("GetEnumerator").invoke();
                        while (_en.method("MoveNext").invoke()) {
                            const _pl = _en.method("get_Current").invoke();
                            if (!_pl || _pl.handle.isNull() || _pl.method("get_IsMine").invoke())
                                continue;
                            let _dup = false;
                            for (let _i = 0; _i < omniFloatVictims.length; _i++) {
                                try {
                                    if (omniFloatVictims[_i] && !omniFloatVictims[_i].isNull() && omniFloatVictims[_i].handle === _pl.handle) {
                                        _dup = true;
                                        break;
                                    }
                                }
                                catch (_) { }
                            }
                            if (_dup)
                                continue;
                            try {
                                const _tp = _pl.method("get_transform").invoke().method("get_position").invoke();
                                const _ball = spawnNetworkPrefab("item_soccer_ball", _tp, identityRotation);
                                if (!_ball || _ball.isNull())
                                    continue;
                                omniFloatVictims.push(_pl);
                                omniFloatBalls.push(_ball);
                            }
                            catch (_) { }
                        }
                    }
                    catch (_e) {
                    }
                }
                catch (_e) {
                }
            },
            toolTip: "tooltip no workie",
        }),
        menuToggle("Yeet Board Spam", () => {
            yeetCooldown = 0;
            notify("Yeet Spam ON", false);
        }, () => {
            notify("Yeet Spam OFF", false);
        }, () => {
            if (!leftGripHeld)
                return;
            if (gameTime <= yeetCooldown)
                return;
            yeetCooldown = gameTime + 0.05;
            try {
                const sessionRPCs = NetSessionRPCsClass.field("_instance").value;
                const localPlayer = NetPlayerClass.method("get_localPlayer").invoke();
                if (sessionRPCs && !sessionRPCs.isNull?.() && localPlayer && !localPlayer.isNull?.()) {
                    const playerID = localPlayer.method("get_playerID").invoke();
                    try {
                        sessionRPCs.method("RPC_NotifyYeetStarted").invoke(playerID, 1);
                    }
                    catch (_) {
                        try {
                            sessionRPCs.method("RPC_NotifyYeetStarted").invoke(playerID, 0);
                        }
                        catch (_) { }
                    }
                }
            }
            catch (_) { }
        }, "Hold trigger to spam the yeet leaderboard."),
        menuToggle("RoboMonke Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                const ray = gunData.ray;
                if (!rightTrigger || !ray || ray.isNull?.())
                    return;
                if (time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.01;
                const target = resolveGunTargetPlayer(gunData, 0.01);
                if (target && !target.isNull?.() && !playerIsLocal(target)) {
                    turnNetPlayerIntoRoboMonke(target);
                }
            },
            toolTip: "Aim at a player and shoot to turn them into a RoboMonke."
        }),
        menuButton("RoboMonke All Players", () => {
            let count = 0;
            for (const p of getAllNetPlayersList(false)) {
                try {
                    if (!p || p.handle.isNull())
                        continue;
                    turnNetPlayerIntoRoboMonke(p);
                    count++;
                }
                catch (_) { }
            }
            sendNotification("robo", false);
        }, "robo."),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("settings", [
        menuToggle("Anticheat Bypass", {
            onEnable: () => { installAntiCheatBypass(); sendNotification("don't work", false); },
            onDisable: () => { revertAntiCheatBypass(); sendNotification("don't work", false); },
            toolTip: "tooltip no workie",
        }),
    ]));
    installAntiCheatBypass();
    function omniGetAimTransform() {
        if (_pcMode) {
            try {
                const _cam = Camera.method("get_main").invoke();
                if (_cam && !_cam.isNull())
                    return getTransform(_cam);
            }
            catch (_) { }
        }
        return rightHandTransform;
    }
    function omniRenderGun(overrideLayerMask = null) {
        try {
            const _aimTf = omniGetAimTransform();
            const startPos = _aimTf.method("get_position").invoke();
            const dir = _aimTf.method("get_forward").invoke();
            const dirDiv = Vector3.method("op_Division").invoke(dir, 4);
            const rayStart = Vector3.method("op_Addition").invoke(startPos, dirDiv);
            const layerMask = overrideLayerMask || -3180559;
            const hits = Physics.method("RaycastAll", 4).invoke(rayStart, dir, 512, layerMask);
            let finalDist = 999999, finalRay = null;
            try {
                for (const hit of hits) {
                    try {
                        const pt = hit.method("get_point").invoke();
                        const d = Vector3.method("Distance").invoke(pt, startPos);
                        if (typeof d === "number" && !isNaN(d) && d < finalDist) {
                            finalRay = hit;
                            finalDist = d;
                        }
                    }
                    catch (_) { }
                }
            }
            catch (_) { }
            let endPos;
            if (finalRay) {
                endPos = finalRay.method("get_point").invoke();
            }
            else {
                endPos = Vector3.method("op_Addition").invoke(startPos, Vector3.method("op_Multiply").invoke(dir, 512));
            }
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
            try {
                ptrMat.method("set_shader").invoke(TextShader);
            }
            catch (_) { }
            const ptrColor = rightTrigger ? [0, 0.25, 0.6, 1] : [0, 0.5, 1, 0.85];
            ptrMat.method("set_color").invoke(ptrColor);
            try {
                const c2 = getComponent(GunPointer, Collider);
                if (c2 != null)
                    Destroy(c2);
            }
            catch (_) { }
            if (!GunLine || (GunLine.isNull?.() ?? true)) {
                const lineObj = createObject(zeroVector, identityQuaternion, oneVector, 0, [0, 0, 0, 0]);
                GunLine = addComponent(lineObj, LineRenderer);
            }
            else {
                GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
            }
            const lineMat = GunLine.method("get_material").invoke();
            try {
                lineMat.method("set_shader").invoke(TextShader);
            }
            catch (_) { }
            const lineColor = [0, 0.5, 1, 0.55];
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
                const right = _aimTf.method("get_right").invoke();
                const up = _aimTf.method("get_up").invoke();
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
            return { ray: finalRay, gunPointer: GunPointer, endPosition: endPos };
        }
        catch (_) {
            return { ray: null, gunPointer: null, endPosition: null };
        }
    }
    function omniGunGetTargetPlayer(gunData) {
        try {
            const ray = gunData && gunData.ray;
            if (!ray || ray.isNull?.())
                return null;
            const hitCol = ray.method("get_collider").invoke();
            if (!hitCol || hitCol.isNull())
                return null;
            let pl = hitCol.method("GetComponentInParent", 0).inflate(NetPlayer).invoke();
            if (!pl || pl.isNull()) {
                const go = hitCol.method("get_gameObject").invoke();
                if (go && !go.isNull())
                    pl = go.method("GetComponentInParent", 0).inflate(NetPlayer).invoke();
            }
            if (!pl || pl.isNull() || pl.method("get_IsMine").invoke())
                return null;
            return pl;
        }
        catch (_) {
            return null;
        }
    }
    function omniGetLocalNetPlayer() {
        try {
            const lp = NetPlayer.method("get_localPlayer").invoke();
            if (lp && !lp.isNull?.())
                return lp;
        }
        catch (_) { }
        return null;
    }
    function omniForEachOtherPlayer(fn) {
        try {
            const _en = NetPlayer.field("playerIDToNetPlayer").value.method("get_Values").invoke().method("GetEnumerator").invoke();
            while (_en.method("MoveNext").invoke()) {
                const _pl = _en.method("get_Current").invoke();
                if (!_pl || _pl.handle.isNull() || _pl.method("get_IsMine").invoke())
                    continue;
                try {
                    fn(_pl);
                }
                catch (_) { }
            }
        }
        catch (_) { }
    }
    function openTemplateCategory(label, category) {
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
    function templateBackButton(label = "Back to Main", category = 0) {
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
    const allSettingsButtons = [
        new ButtonInfo({
            buttonText: "Back to Main",
            method: () => {
                currentCategory = 0;
                currentPage = 0;
            },
            isTogglable: false,
            toolTip: "tooltip no workie",
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
            textGradientDarkColor = [Math.max(10, textGradientDarkColor[0] - 10), Math.max(10, textGradientDarkColor[1] - 10), Math.max(10, textGradientDarkColor[2] - 10)];
        }, () => {
            textGradientDarkColor = [Math.min(200, textGradientDarkColor[0] + 10), Math.min(200, textGradientDarkColor[1] + 10), Math.min(200, textGradientDarkColor[2] + 10)];
        }),
        styleStepper("Gradient Light", () => {
            textGradientLightColor = [Math.max(30, textGradientLightColor[0] - 10), Math.max(30, textGradientLightColor[1] - 10), Math.max(30, textGradientLightColor[2] - 10)];
        }, () => {
            textGradientLightColor = [Math.min(255, textGradientLightColor[0] + 10), Math.min(255, textGradientLightColor[1] + 10), Math.min(255, textGradientLightColor[2] + 10)];
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
                toolTip: "tooltip no workie",
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
            textGradientDarkColor = [50, 70, 160];
            textGradientLightColor = [150, 180, 250];
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
            textGradientDarkColor = [40, 60, 200];
            textGradientLightColor = [100, 150, 255];
        }),
        styleActionButton("Theme: Plasma Purple", () => {
            bgColor = [0.075, 0.045, 0.11, 0.98];
            buttonColor = [0.2, 0.1, 0.29, 0.96];
            buttonPressedColor = [0.46, 0.2, 0.68, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.3, 0.16, 0.42, 1];
            textGradientDarkColor = [80, 40, 160];
            textGradientLightColor = [180, 100, 255];
        }),
        styleActionButton("Theme: Toxic Green", () => {
            bgColor = [0.035, 0.075, 0.045, 0.98];
            buttonColor = [0.08, 0.19, 0.1, 0.96];
            buttonPressedColor = [0.16, 0.5, 0.22, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.1, 0.3, 0.14, 1];
            textGradientDarkColor = [30, 100, 40];
            textGradientLightColor = [80, 220, 100];
        }),
        styleActionButton("Theme: Blood Red", () => {
            bgColor = [0.09, 0.035, 0.04, 0.98];
            buttonColor = [0.22, 0.07, 0.08, 0.96];
            buttonPressedColor = [0.56, 0.12, 0.14, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.34, 0.08, 0.09, 1];
            textGradientDarkColor = [120, 30, 30];
            textGradientLightColor = [255, 80, 80];
        }),
        styleActionButton("Theme: Ocean", () => {
            bgColor = [0.025, 0.07, 0.1, 0.98];
            buttonColor = [0.04, 0.16, 0.23, 0.96];
            buttonPressedColor = [0.05, 0.38, 0.56, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.06, 0.25, 0.36, 1];
            textGradientDarkColor = [20, 80, 140];
            textGradientLightColor = [60, 180, 255];
        }),
        styleActionButton("Theme: Gold", () => {
            bgColor = [0.1, 0.075, 0.025, 0.98];
            buttonColor = [0.22, 0.16, 0.04, 0.96];
            buttonPressedColor = [0.58, 0.4, 0.08, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.36, 0.26, 0.06, 1];
            textGradientDarkColor = [140, 100, 30];
            textGradientLightColor = [255, 210, 80];
        }),
        styleActionButton("Theme: Ice", () => {
            bgColor = [0.055, 0.085, 0.11, 0.98];
            buttonColor = [0.11, 0.2, 0.27, 0.96];
            buttonPressedColor = [0.32, 0.64, 0.82, 0.98];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.2, 0.42, 0.56, 1];
            textGradientDarkColor = [100, 140, 200];
            textGradientLightColor = [180, 220, 255];
        }),
        styleActionButton("Gradient: Red", () => {
            textGradientDarkColor = [100, 20, 20];
            textGradientLightColor = [255, 80, 80];
            sendNotification("don't work", false);
        }),
        styleActionButton("Gradient: Orange", () => {
            textGradientDarkColor = [140, 60, 10];
            textGradientLightColor = [255, 160, 40];
            sendNotification("don't work", false);
        }),
        styleActionButton("Gradient: Yellow", () => {
            textGradientDarkColor = [160, 140, 20];
            textGradientLightColor = [255, 240, 80];
            sendNotification("don't work", false);
        }),
        styleActionButton("Gradient: Green", () => {
            textGradientDarkColor = [30, 100, 30];
            textGradientLightColor = [80, 230, 80];
            sendNotification("don't work", false);
        }),
        styleActionButton("Gradient: Blue", () => {
            textGradientDarkColor = [30, 60, 160];
            textGradientLightColor = [80, 150, 255];
            sendNotification("don't work", false);
        }),
        styleActionButton("Gradient: Purple", () => {
            textGradientDarkColor = [80, 30, 140];
            textGradientLightColor = [180, 80, 255];
            sendNotification("don't work", false);
        }),
        styleActionButton("Gradient: Pink", () => {
            textGradientDarkColor = [160, 50, 100];
            textGradientLightColor = [255, 120, 180];
            sendNotification("don't work", false);
        }),
        styleActionButton("Gradient: Grey", () => {
            textGradientDarkColor = [80, 80, 80];
            textGradientLightColor = [200, 200, 200];
            sendNotification("don't work", false);
        }),
        styleActionButton("Theme: Red", () => {
            bgColor = [0.12, 0.02, 0.02, 0.98];
            buttonColor = [0.25, 0.05, 0.05, 0.96];
            buttonPressedColor = [0.6, 0.1, 0.1, 0.98];
            textColor = [1, 0.85, 0.85, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.4, 0.05, 0.05, 1];
            textGradientDarkColor = [120, 30, 30];
            textGradientLightColor = [255, 80, 80];
        }),
        styleActionButton("Theme: Orange", () => {
            bgColor = [0.12, 0.06, 0.02, 0.98];
            buttonColor = [0.28, 0.14, 0.04, 0.96];
            buttonPressedColor = [0.6, 0.3, 0.05, 0.98];
            textColor = [1, 0.9, 0.75, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.42, 0.2, 0.03, 1];
            textGradientDarkColor = [140, 60, 10];
            textGradientLightColor = [255, 160, 40];
        }),
        styleActionButton("Theme: Yellow", () => {
            bgColor = [0.12, 0.1, 0.02, 0.98];
            buttonColor = [0.25, 0.2, 0.04, 0.96];
            buttonPressedColor = [0.55, 0.45, 0.06, 0.98];
            textColor = [1, 1, 0.8, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.4, 0.32, 0.04, 1];
            textGradientDarkColor = [160, 140, 20];
            textGradientLightColor = [255, 240, 80];
        }),
        styleActionButton("Theme: Green", () => {
            bgColor = [0.02, 0.1, 0.03, 0.98];
            buttonColor = [0.04, 0.22, 0.06, 0.96];
            buttonPressedColor = [0.08, 0.5, 0.12, 0.98];
            textColor = [0.8, 1, 0.8, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.06, 0.32, 0.08, 1];
            textGradientDarkColor = [30, 100, 30];
            textGradientLightColor = [80, 230, 80];
        }),
        styleActionButton("Theme: Purple", () => {
            bgColor = [0.08, 0.02, 0.12, 0.98];
            buttonColor = [0.18, 0.04, 0.28, 0.96];
            buttonPressedColor = [0.42, 0.08, 0.62, 0.98];
            textColor = [0.9, 0.8, 1, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.3, 0.06, 0.44, 1];
            textGradientDarkColor = [80, 30, 140];
            textGradientLightColor = [180, 80, 255];
        }),
        styleActionButton("Theme: Pink", () => {
            bgColor = [0.12, 0.02, 0.06, 0.98];
            buttonColor = [0.28, 0.04, 0.14, 0.96];
            buttonPressedColor = [0.6, 0.1, 0.3, 0.98];
            textColor = [1, 0.8, 0.9, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.38, 0.06, 0.18, 1];
            textGradientDarkColor = [160, 50, 100];
            textGradientLightColor = [255, 120, 180];
        }),
        styleActionButton("Theme: Grey", () => {
            bgColor = [0.06, 0.06, 0.06, 0.98];
            buttonColor = [0.14, 0.14, 0.14, 0.96];
            buttonPressedColor = [0.35, 0.35, 0.35, 0.98];
            textColor = [0.9, 0.9, 0.9, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.22, 0.22, 0.22, 1];
            textGradientDarkColor = [80, 80, 80];
            textGradientLightColor = [200, 200, 200];
        }),
        styleActionButton("Theme: Femboy", () => {
            bgColor = [0.55, 0.32, 0.44, 0.9];
            buttonColor = [0.78, 0.5, 0.62, 0.92];
            buttonPressedColor = [0.33, 0.8, 0.98, 0.95];
            textColor = [1, 0.96, 0.98, 1];
            menuOutlineColor = buttonOutlineColor = pageOutlineColor = [0.96, 0.66, 0.78, 1];
            textGradientDarkColor = [245, 140, 180];
            textGradientLightColor = [130, 220, 255];
            menuBgTexture = getFemboyBgTexture();
        }),
    ];
    buttons = Array.from({ length: 13 }, () => []);
    buttons[0] = [
        openTemplateCategory("Settings", 10),
        openTemplateCategory("Player", 2),
        openTemplateCategory("Others", 3),
        openTemplateCategory("Users", 4),
        openTemplateCategory("Items", 5),
        openTemplateCategory("IDs", 12),
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
            toolTip: "tooltip no workie",
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
    function findExistingButton(label) {
        for (const page of buttons) {
            const found = page.find((button) => button.buttonText === label);
            if (found)
                return found;
        }
        const pending = allSettingsButtons.find((button) => button.buttonText === label);
        return pending || null;
    }
    function settingsRange(startLabel, endLabel) {
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
    const gradientCategory = themesCategory + 1;
    const themeCategory = gradientCategory + 1;
    buttons.push([templateBackButton("Back to Settings", 10), ...settingsRange("Outlines", "Menu Size")], [templateBackButton("Back to Settings", 10), ...settingsRange("Menu Size", "Smooth Menu")], [templateBackButton("Back to Settings", 10), ...settingsRange("Smooth Menu", "Reset Menu Settings")], [templateBackButton("Back to Settings", 10), ...settingsRange("Gradient: Red", "Gradient: Grey")], [templateBackButton("Back to Settings", 10), ...settingsRange("Theme: Blue", "Theme: Ice")], [templateBackButton("Back to Settings", 10), ...settingsRange("Theme: Red", null)]);
    const resetMenuSettings = allSettingsButtons.find((button) => button.buttonText === "Reset Menu Settings");
    buttons[10] = [
        templateBackButton(),
        ...(resetMenuSettings ? [resetMenuSettings] : []),
        openTemplateCategory("Appearance", appearanceCategory),
        openTemplateCategory("Layout", layoutCategory),
        openTemplateCategory("Motion", motionCategory),
        openTemplateCategory("Gradients", gradientCategory),
        openTemplateCategory("Themes", themeCategory),
    ];
    function installTemplateButtons(additions) {
        const categoryIndexes = {
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
            ids: 12,
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
    function installTemplateCategory(definition, parentCategory, parentTitle) {
        const categoryIndex = buttons.length;
        buttons.push([]);
        const pageButtons = [
            new ButtonInfo(menuButton("Back to " + parentTitle, () => {
                currentCategory = parentCategory;
                currentPage = 0;
                _pcMenuSelector = 0;
            })),
        ];
        for (const entry of definition.entries) {
            if (entry.kind === "category") {
                const child = entry;
                const childIndex = installTemplateCategory(child, categoryIndex, definition.title);
                pageButtons.push(new ButtonInfo(menuButton(child.title, () => {
                    currentCategory = childIndex;
                    currentPage = 0;
                    _pcMenuSelector = 0;
                }, child.toolTip || child.title)));
            }
            else {
                pageButtons.push(new ButtonInfo(entry));
            }
        }
        buttons[categoryIndex] = pageButtons;
        return categoryIndex;
    }
    function installTemplateMenu(definitions) {
        const mainButtons = [];
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
    let buttonMap = new Map();
    function rebuildButtonMap() {
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
    function getIndex(activationId) {
        return buttonMap.get(activationId);
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
                    playButtonSound();
                    const button = getIndex(goName);
                    if (button) {
                        if (button.isTogglable) {
                            button.enabled = !button.enabled;
                            reloadMenu();
                            if (button.enabled) {
                                button.enableMethod?.();
                                if (button.toolTip) { }
                            }
                            else {
                                button.disableMethod?.();
                                if (button.toolTip) { }
                            }
                        }
                        else {
                            reloadMenu();
                            button.method?.();
                            if (button.toolTip) { }
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
    let menuAnimTime = 0;
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
                        if (_btn.toolTip) {
                            const state = _btn.isTogglable ? (_btn.enabled ? "ON" : "OFF") : "OK";
                        }
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
                    if (!GunPointer.method("get_activeSelf").invoke()) {
                        Destroy(GunPointer);
                        GunPointer = null;
                    }
                    else
                        GunPointer.method("SetActive").invoke(false);
                }
                if (GunLine != null) {
                    const lineObj = GunLine.method("get_gameObject").invoke();
                    if (lineObj != null) {
                        if (!lineObj.method("get_activeSelf").invoke()) {
                            Destroy(lineObj);
                            GunLine = null;
                        }
                        else
                            lineObj.method("SetActive").invoke(false);
                    }
                }
            }
            catch (_) { }
            buttons
                .flat()
                .filter((button) => button.enabled)
                .forEach((button) => {
                if (button.method) {
                    try {
                        button.method();
                    }
                    catch (error) {
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
        let originalResult = null;
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
    let ejectDupeAmount = 2;
    let ejectDupeIndex = 0;
    const ejectDupeValues = [1, 2, 5, 10, 20, 30, 50, 100];
    let spazMachineDelay = 0;
    let pissCooldown = 0;
    let infSellValueHookInstalled = false;
    let goopSpamDelay = 0;
    let spawnedGoopObjects = [];
    function grabTimeAuthority(gtm) {
        try {
            if (!gtm || gtm.isNull?.()) {
                const GTMClass = AssemblyCSharp.class("AnimalCompany.GameTimeManager");
                gtm = GTMClass.field("_instance").value;
                if (!gtm || gtm.isNull?.()) {
                    const instances = Object.method("FindObjectsByType", 1).inflate(GTMClass).invoke(0);
                    if (instances && !instances.isNull?.() && instances.length > 0)
                        gtm = instances.get(0);
                }
            }
            if (!gtm || gtm.isNull?.())
                return;
            const netObj = gtm.method("get_Object").invoke();
            if (netObj && !netObj.isNull?.()) {
                try {
                    netObj.method("set_StateAuthorityTransfer").invoke(1);
                }
                catch (_) { }
                try {
                    netObj.method("RequestStateAuthority").invoke();
                }
                catch (_) { }
            }
        }
        catch (_) { }
    }
    let _dnsHadAuth = false;
    let _dnsStart = 0;
    function dnsNowNight() {
        return ((Date.now() - _dnsStart) % 200) >= 100;
    }
    let chaosTeleportEnabled = false;
    let chaosTeleportDelay = 0;
    const originalPlayerPositions = new Map();
    let selectedItemID = "item_apple";
    let itemLauncherEnabled = false;
    let itemLauncherDelay = 0;
    const ITEM_LAUNCHER_COOLDOWN = 0.05;
    let moneyPrinterEnabled = false;
    let moneyPrinterDelay = 0;
    let invincibleEnabled = false;
    let voiceGlobalEnabled = false;
    let earrapeEnabled = false;
    let earrapeGain = 14;
    let earrapeHookInstalled = false;
    let infFartEnabled = false;
    let infFartDelay = 0;
    let stashDupeEnabled = false;
    let speedBoostEnabled = false;
    let speedBoostMultiplier = 2.0;
    let noClipEnabled = false;
    let teleportGunEnabled = false;
    let forceGrabEnabled = false;
    let itemESPEnabled = false;
    let itemESPObjects = [];
    let mimicTarget = null;
    let mimicTargetName = "";
    let mimicGunDelay = 0;
    let plungerTarget = null;
    let plungerObject = null;
    let plungerBaseX = 0;
    let plungerBaseZ = 0;
    let plungerBaseY = 0;
    let plungerAcquireDelay = 0;
    function readVec3Components(vec) {
        try {
            return [
                vec.field("x").value || 0,
                vec.field("y").value || 0,
                vec.field("z").value || 0
            ];
        }
        catch (_) {
            return [0, 0, 0];
        }
    }
    function normalizeXZ(x, z) {
        const mag = Math.sqrt((x * x) + (z * z));
        if (mag < 0.0001)
            return [0, 1];
        return [x / mag, z / mag];
    }
    function trySetObjectVelocity(obj, velocity) {
        try {
            if (!obj || obj.isNull?.())
                return false;
            let rb = null;
            try {
                rb = getComponent(obj, Rigidbody);
            }
            catch (_) { }
            if ((!rb || rb.isNull?.()) && obj.method) {
                try {
                    const go = obj.method("get_gameObject").invoke();
                    if (go && !go.isNull())
                        rb = getComponent(go, Rigidbody);
                }
                catch (_) { }
            }
            if (rb && !rb.isNull()) {
                try {
                    rb.method("set_isKinematic").invoke(false);
                }
                catch (_) { }
                try {
                    rb.method("set_useGravity").invoke(true);
                }
                catch (_) { }
                try {
                    rb.method("set_velocity").invoke(velocity);
                    return true;
                }
                catch (_) { }
                try {
                    rb.method("AddForce").invoke(velocity, 2);
                    return true;
                }
                catch (_) { }
            }
        }
        catch (_) { }
        return false;
    }
    function getLaunchForward(sourceTransform, referenceTransform = null) {
        try {
            const refTf = (referenceTransform && !referenceTransform.isNull?.())
                ? referenceTransform
                : (headCollider && !headCollider.isNull?.() ? getTransform(headCollider) : null);
            const referenceForward = refTf && !refTf.isNull?.()
                ? readVec3Components(refTf.method("get_forward").invoke())
                : [0, 0, 1];
            const forwardVec = readVec3Components(sourceTransform.method("get_forward").invoke());
            const dot = (forwardVec[0] * referenceForward[0]) + (forwardVec[1] * referenceForward[1]) + (forwardVec[2] * referenceForward[2]);
            return dot >= 0 ? sourceTransform.method("get_forward").invoke()
                : Vector3.method("op_Multiply", 2).invoke(sourceTransform.method("get_forward").invoke(), -1);
        }
        catch (_) {
            return sourceTransform.method("get_forward").invoke();
        }
    }
    function getLaunchUp(sourceTransform, forward) {
        try {
            const worldUp = [0, 1, 0];
            const dot = Vector3.method("Dot").invoke(worldUp, forward);
            let projected = Vector3.method("op_Subtraction", 2).invoke(worldUp, Vector3.method("op_Multiply", 2).invoke(forward, dot));
            const mag = Vector3.method("Magnitude").invoke(projected);
            if (mag < 0.05)
                projected = sourceTransform.method("get_up").invoke();
            return Vector3.method("Normalize").invoke(projected);
        }
        catch (_) {
            return sourceTransform.method("get_up").invoke();
        }
    }
    function normalizeSpawnPos(pos) {
        if (Array.isArray(pos))
            return pos;
        if (pos == null)
            return [0, 0, 0];
        return readVec3Components(pos);
    }
    let _spawnNullDelegate = undefined;
    function getSpawnNullDelegate() {
        if (_spawnNullDelegate === undefined) {
            try {
                _spawnNullDelegate = Il2Cpp.reference(Il2Cpp.domain.assembly("mscorlib").image.class("System.Object").alloc());
            }
            catch (_) {
                _spawnNullDelegate = NULL;
            }
        }
        return _spawnNullDelegate;
    }
    function resolveItemPrefab(bareID) {
        const bare = String(bareID || "").replace(/^item_prefab\//, "");
        for (const nm of [bare, "item_prefab/" + bare]) {
            try {
                const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(nm));
                if (prefab && !prefab.isNull?.())
                    return prefab;
            }
            catch (_) { }
        }
        return null;
    }
    function spawnItemFromPrefab(prefab, pos, rot) {
        pos = normalizeSpawnPos(pos);
        const rotation = rot || identityQuaternion;
        const del = getSpawnNullDelegate();
        try {
            const r = PrefabGen.method("SpawnItem", 5)
                .overload("AnimalCompany.GrabbableItemPrefab", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                .invoke(prefab, pos, rotation, del, 1);
            if (r && !r.isNull?.())
                return r;
        }
        catch (_) { }
        try {
            const r = PrefabGen.method("SpawnItem", 5).invoke(prefab, pos, rotation, del, 1);
            if (r && !r.isNull?.())
                return r;
        }
        catch (_) { }
        return null;
    }
    function spawnItemAtPos(bareID, pos, rot) {
        pos = normalizeSpawnPos(pos);
        const rotation = rot || identityQuaternion;
        const del = getSpawnNullDelegate();
        const bare = String(bareID || "").replace(/^item_prefab\//, "");
        const variants = [bare];
        if (bare.indexOf("item_") === 0)
            variants.push(bare.substring(5));
        variants.push("item_prefab/" + bare);
        for (const name of variants) {
            let r = null;
            try {
                const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(name));
                if (prefab && !prefab.isNull?.()) {
                    r = PrefabGen.method("SpawnItem", 5)
                        .overload("AnimalCompany.GrabbableItemPrefab", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                        .invoke(prefab, pos, rotation, del, 1);
                }
            }
            catch (_) { }
            if (r && !r.isNull?.())
                return r;
            try {
                r = PrefabGen.method("SpawnItem", 5)
                    .overload("System.String", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                    .invoke(Il2Cpp.string(name), pos, rotation, del, 1);
            }
            catch (_) { }
            if (r && !r.isNull?.())
                return r;
        }
        return null;
    }
    function enableDeveloper() {
        try {
            const app = animalCompanyImage.class('AnimalCompany.App');
            const state = app.method('get_state').invoke();
            if (!state || state.isNull?.())
                return;
            try {
                const user = state.method('get_user').invoke();
                if (user && !user.isNull?.()) {
                    try {
                        user.field('_isDeveloper').value = true;
                    }
                    catch { }
                    try {
                        user.field('isDeveloper').value = true;
                    }
                    catch { }
                    tryInvokeAny(user, ['set_isDeveloper'], 1, true);
                }
            }
            catch { }
            try {
                const mapMachine = state.method('get_mapMachine').invoke();
                if (mapMachine && !mapMachine.isNull?.()) {
                    try {
                        const devMode = mapMachine.method('get_useDevMode').invoke();
                        if (devMode && !devMode.isNull?.()) {
                            try {
                                devMode.method('set_value').invoke(true);
                            }
                            catch { }
                            try {
                                devMode.field('_value').value = true;
                            }
                            catch { }
                            try {
                                devMode.field('value').value = true;
                            }
                            catch { }
                        }
                    }
                    catch { }
                    try {
                        mapMachine.field('_useDevMode').value = true;
                    }
                    catch { }
                    tryInvokeAny(mapMachine, ['set_useDevMode'], 1, true);
                    tryInvokeAny(mapMachine, [
                        'RefreshDevMode', 'Reload', 'RefreshButtons',
                        'UpdateButtons', 'OpenDevMenu', 'OpenDevPanel',
                    ], 0);
                }
            }
            catch { }
        }
        catch { }
    }
    function spawnItemAsync(bareID, pos, rot, delegateCallback) {
        pos = normalizeSpawnPos(pos);
        const rotation = rot || identityQuaternion;
        const prefab = resolveItemPrefab(bareID);
        if (prefab) {
            const r = spawnItemFromPrefab(prefab, pos, rotation);
            if (r && !r.isNull?.())
                return r;
        }
        try {
            const r = hlSpawnItem(bareID, pos, rotation);
            if (r && !r.isNull?.())
                return r;
        }
        catch (_) { }
        try {
            const r = hlSpawnItem2(bareID, pos, rotation);
            if (r && !r.isNull?.())
                return r;
        }
        catch (_) { }
        try {
            const source = hlNewSpawnSource();
            const cb = delegateCallback || NULL;
            return PrefabGen.method("SpawnItemAsync", 5)
                .overload("System.String", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkObjectSpawnDelegate", "AnimalCompany.ItemSpawnSource")
                .invoke(Il2Cpp.string(bareID), pos, rotation, cb, source);
        }
        catch (e) {
            return null;
        }
    }
    let rainbowHue = 0;
    const pendingRainbowItems = [];
    function rainbowHsvColor(hue) {
        try {
            return coreImage.class("UnityEngine.Color").method("HSVToRGB", 3).invoke(hue, 1.0, 1.0);
        }
        catch (_) {
            return null;
        }
    }
    function colorizeObject(obj, hue) {
        try {
            const go = obj.method("get_gameObject").invoke();
            if (!go || go.isNull?.())
                return;
            const rends = go.method("GetComponentsInChildren", 0).inflate(Renderer).invoke();
            const col = rainbowHsvColor(hue);
            if (!col)
                return;
            let len = 0;
            try {
                len = rends.length;
            }
            catch (_) {
                try {
                    len = rends.method("get_Length").invoke();
                }
                catch (_) { }
            }
            for (let i = 0; i < len; i++) {
                let r = null;
                try {
                    r = rends.get(i);
                }
                catch (_) {
                    try {
                        r = rends.method("GetValue").invoke(i);
                    }
                    catch (_) { }
                }
                if (!r || r.isNull?.())
                    continue;
                try {
                    const mat = r.method("get_material").invoke();
                    if (mat && !mat.isNull?.()) {
                        try {
                            mat.method("set_color").invoke(col);
                        }
                        catch (_) { }
                        try {
                            mat.method("SetColor", 2)
                                .overload("System.String", "UnityEngine.Color")
                                .invoke(Il2Cpp.string("_BaseColor"), col);
                        }
                        catch (_) { }
                    }
                }
                catch (_) { }
            }
        }
        catch (_) { }
    }
    function scaleObject(obj, scale) {
        try {
            const t = obj.method("get_transform").invoke();
            if (t && !t.isNull?.())
                t.method("set_localScale").invoke(Vector3.method("op_Multiply", 2).invoke(vec3One, scale));
        }
        catch (_) { }
    }
    function setVoiceGlobal(on) {
        try {
            const me = NetPlayer.method("get_localPlayer").invoke();
            if (me && !me.isNull?.()) {
                try {
                    if (on)
                        me.method("SetCustomVoiceFalloff").invoke(100000.0);
                    else
                        me.method("SetDefaultVoiceFalloff").invoke();
                }
                catch (_) { }
                try {
                    me.method("set_voiceFalloffDistance").invoke(on ? 100000.0 : 12.0);
                }
                catch (_) { }
            }
        }
        catch (_) { }
    }
    function installEarrapeHook() {
        if (earrapeHookInstalled)
            return true;
        try {
            const RecorderClass = Il2Cpp.domain.assembly("PhotonVoice").image.class("Photon.Voice.Unity.Recorder");
            const readMethod = RecorderClass.method("Read", 1);
            readMethod.implementation = function (buffer) {
                const r = this.method("Read", 1).invoke(buffer);
                try {
                    if (earrapeEnabled && buffer && !buffer.isNull?.()) {
                        const n = buffer.length;
                        const base = buffer.elements;
                        const g = earrapeGain;
                        for (let i = 0; i < n; i++) {
                            const off = base.add(i * 4);
                            let v = off.readFloat() * g;
                            if (v > 1)
                                v = 1;
                            else if (v < -1)
                                v = -1;
                            off.writeFloat(v);
                        }
                    }
                }
                catch (_) { }
                return r;
            };
            earrapeHookInstalled = true;
            return true;
        }
        catch (e) {
            return false;
        }
    }
    function getPlayerHeadTransform(player) {
        try {
            const view = player.method("get_view").invoke();
            if (view && !view.isNull()) {
                const head = view.field("_headTransform").value;
                if (head && !head.isNull())
                    return head;
            }
        }
        catch (_) { }
        try {
            const headObj = player.field("_headTransform").value;
            if (headObj && !headObj.isNull())
                return headObj;
        }
        catch (_) { }
        try {
            const playerGO = player.method("get_gameObject").invoke();
            if (playerGO && !playerGO.isNull()) {
                const headBone = playerGO.method("GetComponentInChildren", 0).inflate(Camera).invoke();
                if (headBone && !headBone.isNull())
                    return getTransform(headBone);
            }
        }
        catch (_) { }
        return null;
    }
    const itemIDs = [
        'item_pelican_case', 'item_ac_cola', 'item_taki', 'item_alien_cube', 'item_alphablade', 'item_ampbattery', 'item_ampbattery_mega', 'item_anti_gravity_grenade', 'item_apple', 'item_arena_pistol', 'item_arena_shotgun', 'item_arrow', 'item_arrow_bomb', 'item_arrow_heart', 'item_arrow_lightbulb', 'item_arrow_teleport', 'item_axe', 'item_backpack', 'item_backpack_black', 'item_backpack_fish', 'item_backpack_green', 'item_backpack_large_base', 'item_backpack_large_basketball', 'item_backpack_large_clover', 'item_backpack_monkey', 'item_backpack_pink', 'item_backpack_realistic', 'item_backpack_small_base', 'item_backpack_space', 'item_backpack_white', 'item_backpack_with_flashlight', 'item_bait_beetle', 'item_bait_fly', 'item_bait_glowworm', 'item_bait_magmar_ball', 'item_bait_mouse_trap', 'item_bait_sardine', 'item_bait_shell', 'item_bait_starfish', 'item_bait_wallet', 'item_balloon', 'item_balloon_heart', 'item_bamboo_fishing_rod', 'item_banana', 'item_banana_chips', 'item_baseball_bat', 'item_basic_fishing_rod', 'item_batterycell_hydra', 'item_beans', 'item_big_cup', 'item_bighead_larva', 'item_bloodlust_vial', 'item_blox_cube', 'item_blox_moon', 'item_blox_sphere', 'item_blox_star', 'item_blox_triangle', 'item_boombox', 'item_boombox_fishing', 'item_boombox_neon', 'item_boomerang', 'item_box_fan', 'item_brain_chunk', 'item_brainslug_blue', 'item_brainslug_green', 'item_brainslug_pink', 'item_broccoli_grenade', 'item_broccoli_shrink_grenade', 'item_broom', 'item_broom_halloween', 'item_bubble_gun', 'item_bubble_staff', 'item_burrito', 'item_butcherpipe', 'item_butcherspear', 'item_butchersword', 'item_calculator', 'item_cardboard_box', 'item_cardboard_dragon_body', 'item_cardboard_dragon_head', 'item_carrot', 'item_ceo_plaque', 'item_chakra', 'item_clapper', 'item_cluster_grenade', 'item_coconut_shell', 'item_cola', 'item_cola_large', 'item_company_ration', 'item_company_ration_heal', 'item_cracker', 'item_crate', 'item_crossbow', 'item_crossbow_heart', 'item_crowbar', 'item_cube_frame', 'item_cubetrident', 'item_cuboid_anomaly', 'item_cutie_dead', 'item_d20', 'item_deadmans_draw', 'item_deadmans_draw_card', 'item_deadmans_draw_card_comedy_drama', 'item_deadmans_draw_comedy_drama', 'item_demon_sword', 'item_disc', 'item_disposable_camera', 'item_dragons_claw', 'item_drill', 'item_drill_fists', 'item_drill_galaxy', 'item_drill_neon', 'item_dwarven_hammer', 'item_dynamite', 'item_dynamite_cube', 'item_easter_egg', 'item_egg', 'item_egg_easter_blue', 'item_egg_easter_red', 'item_egg_easter_yellow', 'item_electrical_tape', 'item_energy_axe', 'item_energy_sword_dual', 'item_energy_sword_green', 'item_energy_sword_red', 'item_eraser', 'item_eye_googly', 'item_film_reel', 'item_finger_board', 'item_fish_anglerfish', 'item_fish_big_shark', 'item_fish_boomfish', 'item_fish_boot', 'item_fish_bottled_message', 'item_fish_carp', 'item_fish_chewna', 'item_fish_clam_hookshot', 'item_fish_cowfish', 'item_fish_crappie', 'item_fish_crispie', 'item_fish_cube', 'item_fish_diamond_jade_koi', 'item_fish_dollar_bill', 'item_fish_dragonfish', 'item_fish_fishsword', 'item_fish_ghost_sword', 'item_fish_gold_fish', 'item_fish_hydracarp', 'item_fish_irontusk', 'item_fish_kissy', 'item_fish_license_plate', 'item_fish_magma_carp', 'item_fish_nebula_fish', 'item_fish_nutfish', 'item_fish_pufferfish', 'item_fish_rainbow_trout', 'item_fish_redacted', 'item_fish_rotten_fish', 'item_fish_salmon', 'item_fish_salmonster', 'item_fish_scaldfish', 'item_fish_seahorse', 'item_fish_seamine', 'item_fish_shellfish_shield', 'item_fish_spicy_salmon', 'item_fish_teeth', 'item_fish_triclops', 'item_fish_tuna', 'item_fish_yellowcake', 'item_fishing_terminal_bait_button', 'item_flamethrower', 'item_flamethrower_skull', 'item_flamethrower_skull_ruby', 'item_flaregun', 'item_flashbang', 'item_flashlight', 'item_flashlight_galaxy', 'item_flashlight_mega', 'item_flashlight_red', 'item_flipflop_realistic', 'item_floppy3', 'item_floppy5', 'item_football', 'item_four_leaf_clover', 'item_four_leaf_clover_gold', 'item_four_leaf_radar', 'item_friend_launcher', 'item_frying_pan', 'item_fungi_blue', 'item_fungi_red', 'item_gameboy', 'item_glitched_banana', 'item_glowing_fishing_rod', 'item_glowstick', 'item_goldbar', 'item_goldcoin', 'item_goop', 'item_goopfish', 'item_grappling_hook', 'item_great_sword', 'item_great_sword_galaxy', 'item_grenade', 'item_grenade_gold', 'item_grenade_launcher', 'item_guided_boomerang', 'item_gyroid_anomaly', 'item_hammer_candy_cane', 'item_harddrive', 'item_hatchet', 'item_hawaiian_drum', 'item_heart_chunk', 'item_heart_gun', 'item_heartchocolatebox', 'item_hh_key', 'item_hookshot', 'item_hookshot_galaxy', 'item_hookshot_sword', 'item_hot_cocoa', 'item_hoverpad', 'item_hoverpad_galaxy', 'item_hydra', 'item_impulse_grenade', 'item_jetpack', 'item_joystick', 'item_joystick_inv_y', 'item_katana_big', 'item_katana_medium', 'item_keycard', 'item_lance', 'item_landmine', 'item_landmine_bee', 'item_lantern_cny', 'item_large_banana', 'item_lava_fishing_rod', 'item_love_grenade', 'item_mage_pirate_sword', 'item_mannequin_arm', 'item_mannequin_arm_left', 'item_mannequin_arm_right', 'item_mannequin_head', 'item_mannequin_leg', 'item_mannequin_leg_left', 'item_mannequin_leg_right', 'item_mannequin_torso', 'item_marshmallow_bunny_bomb', 'item_megaphone', 'item_metal_ball', 'item_metal_ball_easter', 'item_metal_ball_xmas', 'item_metal_plate', 'item_metal_plate_small', 'item_metal_plate_xmas', 'item_metal_rod', 'item_metal_rod_curved', 'item_metal_rod_easter', 'item_metal_rod_small', 'item_metal_rod_xmas', 'item_metal_triangle', 'item_midipad', 'item_midipad_animal', 'item_mining_laser', 'item_mining_laser_orange', 'item_module_gun_1', 'item_module_gun_2', 'item_module_gun_3', 'item_module_hull_1', 'item_module_hull_2', 'item_module_hull_3', 'item_module_joust_1', 'item_module_joust_2', 'item_module_joust_3', 'item_module_laser_1', 'item_module_laser_2', 'item_module_laser_3', 'item_module_tether_1', 'item_module_tractor_beam_1', 'item_momboss_box', 'item_moneygun', 'item_moonhorror_key', 'item_moonrock', 'item_moonrock_cheesy', 'item_moonrock_friend', 'item_motor', 'item_mountain_key', 'item_mug', 'item_needle', 'item_nut', 'item_nut_drop', 'item_ogre_hands', 'item_orange', 'item_ore_copper_l', 'item_ore_copper_m', 'item_ore_copper_s', 'item_ore_gold_l', 'item_ore_gold_m', 'item_ore_gold_s', 'item_ore_hell', 'item_ore_silver_l', 'item_ore_silver_m', 'item_ore_silver_s', 'item_painting_canvas', 'item_paperpack', 'item_pennant_spring', 'item_pickaxe', 'item_pickaxe_cny', 'item_pickaxe_cube', 'item_pickaxe_realistic', 'item_pickaxe_realistic_galaxy', 'item_pickaxe_spacedwarf', 'item_pinata_bat', 'item_pineapple', 'item_pipe', 'item_pistol_dragon', 'item_plank', 'item_plank_easter', 'item_plate_round', 'item_plunger', 'item_pogostick', 'item_police_baton', 'item_popcorn', 'item_portable_safe_zone', 'item_portable_teleporter', 'item_prismatic_anomaly', 'item_prop_scanner', 'item_pumpkin_bomb', 'item_pumpkin_pie', 'item_pumpkinjack', 'item_pumpkinjack_small', 'item_pyramidal_anomaly', 'item_quest_gy_skull', 'item_quest_gy_skull_special', 'item_quest_hlal_brain', 'item_quest_hlal_eyeball', 'item_quest_hlal_flesh', 'item_quest_hlal_heart', 'item_quest_key_graveyard', 'item_quest_vhs', 'item_quest_vhs_backlots', 'item_quest_vhs_basement', 'item_quest_vhs_cave', 'item_quest_vhs_circus_day', 'item_quest_vhs_circus_ext', 'item_quest_vhs_circus_fac', 'item_quest_vhs_dam_facility', 'item_quest_vhs_dam_servers', 'item_quest_vhs_dark_forest', 'item_quest_vhs_eden', 'item_quest_vhs_forest', 'item_quest_vhs_foundation', 'item_quest_vhs_graveyard', 'item_quest_vhs_haunted_house', 'item_quest_vhs_hell', 'item_quest_vhs_lab', 'item_quest_vhs_lake', 'item_quest_vhs_lobby', 'item_quest_vhs_megalodon', 'item_quest_vhs_megalodon_lake', 'item_quest_vhs_mines', 'item_quest_vhs_moon', 'item_quest_vhs_moon_horror_rocket', 'item_quest_vhs_mountain', 'item_quest_vhs_mountainbot', 'item_quest_vhs_mountainshack', 'item_quest_vhs_mountainvault', 'item_quest_vhs_obsidianhalls', 'item_quest_vhs_odd_core', 'item_quest_vhs_office', 'item_quest_vhs_office_basement', 'item_quest_vhs_powerplant_microwave', 'item_quest_vhs_powerplant_reactorcore', 'item_quest_vhs_powerplant_security', 'item_quest_vhs_powerplant_supportfacility', 'item_quest_vhs_sandbox', 'item_quest_vhs_sewers', 'item_quest_vhs_vhs-core', 'item_quiver', 'item_quiver_heart', 'item_radiation_gun', 'item_radioactive_broccoli', 'item_radioactive_fishing_rod', 'item_randombox_mobloot_big', 'item_randombox_mobloot_medium', 'item_randombox_mobloot_small', 'item_randombox_mobloot_weapons', 'item_randombox_mobloot_weapons_big', 'item_randombox_mobloot_zombie', 'item_rare_card', 'item_remote_controller', 'item_repair_wrench', 'item_revolver', 'item_revolver_ammo', 'item_revolver_gold', 'item_ring_buoy', 'item_ringmaster_staff', 'item_robo_monke', 'item_robot_arm_left', 'item_robot_arm_left_galaxy', 'item_robot_arm_right', 'item_robot_arm_right_galaxy', 'item_robot_head', 'item_rope', 'item_rpg', 'item_rpg_ammo', 'item_rpg_ammo_egg', 'item_rpg_ammo_shoe', 'item_rpg_ammo_spear', 'item_rpg_cny', 'item_rpg_easter', 'item_rpg_shoe', 'item_rpg_smshr', 'item_rpg_spear', 'item_rubberducky', 'item_ruby', 'item_saddle', 'item_salmoncannon', 'item_sawblade', 'item_sawblade_launcher', 'item_scanner', 'item_scissors', 'item_server_pad', 'item_shadowboss_key', 'item_shield', 'item_shield_bones', 'item_shield_candy_cane', 'item_shield_galaxy', 'item_shield_police', 'item_shield_viking_1', 'item_shield_viking_2', 'item_shield_viking_3', 'item_shield_viking_4', 'item_shotgun', 'item_shotgun_ammo', 'item_shotgun_gold', 'item_shotgun_sawed', 'item_shotgun_viper', 'item_shovel', 'item_shredder', 'item_shrinking_broccoli', 'item_skipole', 'item_skishoe', 'item_skishoe_2', 'item_skishoe_3', 'item_skishoe_4', 'item_snail_friend', 'item_snowball', 'item_snowboard', 'item_snowboard_2', 'item_snowboard_3', 'item_snowboard_4', 'item_snowboard_auto', 'item_snowboard_galaxy', 'item_spear_candy_cane', 'item_special_fishing_rod', 'item_special_fishing_rod_radar_part', 'item_special_fishing_rod_with_radar', 'item_stapler', 'item_stash_grenade', 'item_steel_beam', 'item_steel_beam_xmas', 'item_stellarsword_blue', 'item_stellarsword_gold', 'item_stellate_anomaly', 'item_stick_armbones', 'item_stick_bone', 'item_sticker_dispenser', 'item_sticky_dynamite', 'item_stinky_cheese', 'item_stopwatch', 'item_tablet', 'item_tapedispenser', 'item_tele_grenade', 'item_tele_pearl', 'item_teleport_dagger', 'item_teleport_gun', 'item_teleport_gun_galaxy', 'item_theremin', 'item_timebomb', 'item_toilet_paper', 'item_toilet_paper_mega', 'item_toilet_paper_roll_empty', 'item_token_circus', 'item_trampoline', 'item_treestick', 'item_tripwire_explosive', 'item_trophy', 'item_truss', 'item_truss_easter', 'item_truss_small', 'item_truss_xmas', 'item_turkey_leg', 'item_turkey_whole', 'item_ukulele', 'item_ukulele_gold', 'item_umbrella', 'item_umbrella_clover', 'item_umbrella_squirrel', 'item_unidentified', 'item_upsidedown_loot', 'item_uranium_chunk_l', 'item_uranium_chunk_m', 'item_uranium_chunk_s', 'item_viking_hammer', 'item_viking_hammer_twilight', 'item_war_fan', 'item_wheelhandle', 'item_wheelhandle_big', 'item_whoopie', 'item_wireframe_cube', 'item_wireframe_gun', 'item_wood_log', 'item_wood_pallet', 'item_wood_pallet_easter', 'item_wyrmpiercer', 'item_zipline_gun', 'item_zombie_meat',
        "item_apescalibur", "item_balloon_smiley", "item_grimstaff", "item_soccer_ball", "item_soccer_goalposts", "item_module_minigun_1", "item_module_minigun_2", "item_module_minigun_3", "item_module_gravity_1", "item_module_boost_1", "item_module_boost_2", "item_module_boost_3", "item_module_blast_1", "item_module_blast_2", "item_module_blast_3", "item_module_stasis_1", "item_quest_vhs_asteroids", "item_quest_vhs_derelictvessel", "item_quest_vhs_wormhole", "item_randombox_modules", "item_alienblaster", "item_quest_dball_1", "item_quest_dball_2", "item_quest_dball_3", "item_quest_dball_4", "item_quest_dball_5", "item_quest_dball_6", "item_quest_dball_7", "item_tv_remote", "item_backpack_dragon", "item_hookshot_gold", "item_sticky_dynamite_goldf"
    ];
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("overpowered", [
        menuButton("Give Me 300k Nuts", () => {
            const lp = omniGetLocalNetPlayer();
            if (!lp) {
                sendNotification("don't work", false);
                return;
            }
            try {
                lp.method("RPC_AddPlayerMoney").invoke(300000);
                sendNotification("don't work", false);
            }
            catch (e) {
            }
        }, "Gives yourself the max money per RPC (300k)."),
        menuToggle("Invincible", {
            onEnable: () => { invincibleEnabled = true; sendNotification("don't work", false); },
            onDisable: () => {
                invincibleEnabled = false;
                try {
                    const lp = omniGetLocalNetPlayer();
                    if (lp)
                        lp.method("set_isInvincible").invoke(false);
                }
                catch (_) { }
                sendNotification("don't work", false);
            },
            onUpdate: () => {
                if (!invincibleEnabled)
                    return;
                try {
                    const lp = omniGetLocalNetPlayer();
                    if (lp)
                        lp.method("set_isInvincible").invoke(true);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Global Voice Blast", {
            onEnable: () => {
                try {
                    const lp = omniGetLocalNetPlayer();
                    if (lp)
                        lp.method("SetCustomVoiceFalloff").invoke(9999.0);
                    sendNotification("don't work", false);
                }
                catch (_) { }
            },
            onDisable: () => {
                try {
                    const lp = omniGetLocalNetPlayer();
                    if (lp)
                        lp.method("SetDefaultVoiceFalloff").invoke();
                    sendNotification("don't work", false);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Inf Sell Value", {
            onEnable: () => {
                try {
                    GBIClass.method("get_sellValue").implementation = function () { return 300000; };
                    GBIClass.method("get_additionalSellValue").implementation = function () { return 300000; };
                    infSellValueHookInstalled = true;
                    sendNotification("don't work", false);
                }
                catch (e) {
                }
            },
            onDisable: () => {
                try {
                    GBIClass.method("get_sellValue").implementation = null;
                    GBIClass.method("get_additionalSellValue").implementation = null;
                    infSellValueHookInstalled = false;
                    sendNotification("don't work", false);
                }
                catch (e) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Ammo Pickup Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                const ray = gunData.ray;
                if (!rightTrigger || !ray || ray.isNull?.() || !(time > tagGunDelay))
                    return;
                tagGunDelay = time + 0.15;
                try {
                    const hitPoint = ray.method("get_point").invoke();
                    const PM = AssemblyCSharp.class("AnimalCompany.PickupManager");
                    PM.method("SpawnPickup", 4).invoke(1, hitPoint, 5, true);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Nut Pickup Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                const ray = gunData.ray;
                if (!rightTrigger || !ray || ray.isNull?.() || !(time > tagGunDelay))
                    return;
                tagGunDelay = time + 0.15;
                try {
                    const hitPoint = ray.method("get_point").invoke();
                    const PM = AssemblyCSharp.class("AnimalCompany.PickupManager");
                    PM.method("SpawnPickup", 4).invoke(2, hitPoint, 5, true);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Stash Dupe", {
            onEnable: () => {
                stashDupeEnabled = true;
                try {
                    const StashChute = AssemblyCSharp.class("AnimalCompany.StashMachine.StashMachineTrashChuteView");
                    const EjectItem = StashChute.method("EjectItem");
                    EjectItem.implementation = function (item) {
                        if (stashDupeEnabled) {
                            for (let i = 0; i < ejectDupeAmount; i++) {
                                try {
                                    this.method("EjectItem").invoke(item);
                                }
                                catch (_) { }
                            }
                        }
                        else {
                            return this.method("EjectItem").invoke(item);
                        }
                    };
                }
                catch (e) {
                }
            },
            onDisable: () => {
                stashDupeEnabled = false;
                try {
                    const StashChute = AssemblyCSharp.class("AnimalCompany.StashMachine.StashMachineTrashChuteView");
                    StashChute.method("EjectItem").implementation = null;
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuButton("Change Eject Dupe Amount", () => {
            ejectDupeIndex++;
            ejectDupeIndex %= ejectDupeValues.length;
            ejectDupeAmount = ejectDupeValues[ejectDupeIndex];
            sendNotification("don't work" + ejectDupeAmount, false);
        }, "Cycles through preset dupe amounts (1, 2, 5, 10, 20, 30, 50, 100)."),
        menuToggle("Spaz Explode Machine", {
            onUpdate: () => {
                if (time <= spazMachineDelay)
                    return;
                spazMachineDelay = time + 0.09;
                try {
                    const SMCls = AssemblyCSharp.class("AnimalCompany.ItemSellingMachineController");
                    const machines = Object.method("FindObjectsByType", 1).inflate(SMCls).invoke(0);
                    if (!machines || machines.isNull?.() || machines.length === 0)
                        return;
                    for (let i = 0; i < machines.length; i++) {
                        try {
                            const machine = machines.get(i);
                            if (!machine || machine.isNull?.())
                                continue;
                            const methodNames = ["RPC_ExplodeMachine", "ExplodeMachine", "RPC_Explode", "Explode", "RPC_Detonate", "Detonate"];
                            for (const methodName of methodNames) {
                                try {
                                    machine.method(methodName).invoke();
                                    break;
                                }
                                catch (_) { }
                            }
                        }
                        catch (_) { }
                    }
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("users", [
        menuButton("TP All To Me", () => {
            try {
                let count = 0;
                const myPos = getTransform(headCollider).method("get_position").invoke();
                for (const p of getAllNetPlayersList(false)) {
                    try {
                        if (!p || p.handle.isNull())
                            continue;
                        p.method("RPC_Teleport").invoke(myPos);
                        count++;
                    }
                    catch (_) { }
                }
                sendNotification("don't work" + count + " players to you", false);
            }
            catch (e) {
            }
        }, "Yanks every other player to your exact position."),
        menuToggle("Grab All Players", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                try {
                    const handPos = rightHandTransform.method("get_position").invoke();
                    const hx = handPos.field("x").value;
                    const hy = handPos.field("y").value;
                    const hz = handPos.field("z").value;
                    const targetPos = [hx, hy - 0.5, hz];
                    for (const p of getAllNetPlayersList(false)) {
                        try {
                            if (!p || p.handle.isNull())
                                continue;
                            p.method("RPC_Teleport").invoke(targetPos);
                        }
                        catch (_) { }
                    }
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Insta Kill All Loop", {
            onUpdate: () => {
                try {
                    if (time <= tagGunDelay)
                        return;
                    tagGunDelay = time + 0.5;
                    const dmgInfoClass = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo");
                    const dmgNull = dmgInfoClass.method("get_Null").invoke();
                    for (const p of getAllNetPlayersList(false)) {
                        try {
                            if (!p || p.handle.isNull())
                                continue;
                            const pos = getTransform(p).method("get_position").invoke();
                            p.method("RPC_PlayerHit", 5).invoke(9999, pos, zeroVector, dmgNull, false);
                        }
                        catch (_) { }
                    }
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("items", [
        menuButton("Selected ID: " + selectedItemID, () => { }, "Current selected item ID."),
        menuButton("Spawn at Hand", () => {
            try {
                const pos = rightHandTransform.method("get_position").invoke();
                const rot = rightHandTransform.method("get_rotation").invoke();
                spawnItemAsync(selectedItemID, pos, rot);
                sendNotification("don't work" + selectedItemID, false);
            }
            catch (e) {
            }
        }, "Spawns the selected item at your right hand."),
        menuToggle("Item Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                const ray = gunData.ray;
                if (!rightTrigger || !ray || ray.isNull?.())
                    return;
                if (time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.2;
                try {
                    const hitPoint = ray.method("get_point").invoke();
                    spawnItemAsync(selectedItemID, hitPoint, identityQuaternion);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Rainbow Item Gun", {
            onUpdate: () => {
                for (let i = pendingRainbowItems.length - 1; i >= 0; i--) {
                    const p = pendingRainbowItems[i];
                    let dead = false;
                    try {
                        dead = !p.obj || p.obj.isNull?.();
                    }
                    catch (_) {
                        dead = true;
                    }
                    if (dead || time > p.until) {
                        pendingRainbowItems.splice(i, 1);
                        continue;
                    }
                    if (time >= p.next) {
                        p.next = time + 0.15;
                        try {
                            colorizeObject(p.obj, p.hue);
                            scaleObject(p.obj, p.scale);
                        }
                        catch (_) { }
                    }
                }
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                const hitPoint = gunData.endPosition;
                if (!rightTrigger || !hitPoint || time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.15;
                try {
                    const posArr = readVec3Components(hitPoint);
                    const randomItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                    const spawned = spawnItemAtPos(randomItem, posArr, identityQuaternion);
                    if (!spawned || spawned.isNull?.()) {
                        spawnItemAsync(randomItem, posArr, identityQuaternion);
                        return;
                    }
                    try {
                        rainbowHue = (rainbowHue + 0.085) % 1;
                        const itemScale = 0.3 + Math.random() * 2.7;
                        colorizeObject(spawned, rainbowHue);
                        scaleObject(spawned, itemScale);
                        pendingRainbowItems.push({ obj: spawned, hue: rainbowHue, scale: itemScale, until: time + 1.2, next: time + 0.15 });
                    }
                    catch (_) { }
                    try {
                        const forward = getLaunchForward(rightHandTransform);
                        const rb = spawned.method("GetComponentInChildren", 1).inflate(Rigidbody).invoke();
                        if (rb && !rb.isNull?.()) {
                            rb.method("set_isKinematic").invoke(false);
                            rb.method("set_useGravity").invoke(false);
                            const velocity = Vector3.method("op_Multiply", 2).invoke(forward, 60);
                            rb.method("AddForce", 2).invoke(velocity, 1);
                        }
                        else {
                            trySetObjectVelocity(spawned, Vector3.method("op_Multiply", 2).invoke(forward, 60));
                        }
                    }
                    catch (_) { }
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Dupe Held Item", {
            onUpdate: () => {
                if (!leftSecondary && !rightSecondary)
                    return;
                if (time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.02;
                try {
                    const player = NetPlayer.method("get_localPlayer").invoke();
                    if (!player || player.isNull())
                        return;
                    for (let hand = 0; hand <= 1; hand++) {
                        const isRightHand = (hand === 1);
                        const secondaryPressed = isRightHand ? rightSecondary : leftSecondary;
                        if (!secondaryPressed)
                            continue;
                        const interactor = player.method("GetHandInteractor", 1).invoke(hand);
                        if (!interactor || interactor.isNull())
                            continue;
                        const itemAnchor = interactor.field("_itemAnchor").value;
                        if (!itemAnchor || itemAnchor.isNull())
                            continue;
                        const grabbable = itemAnchor.method("get_grabbableObject").invoke();
                        if (!grabbable || grabbable.isNull())
                            continue;
                        const handTransform = isRightHand ? rightHandTransform : leftHandTransform;
                        const spawnPos = handTransform.method("get_position").invoke();
                        const spawnRot = handTransform.method("get_rotation").invoke();
                        let itemIDStr = "item_treestick";
                        const grabbableItem = grabbable.method("GetComponent", 1).inflate(GBIClass).invoke();
                        if (grabbableItem && !grabbableItem.isNull()) {
                            const idObj = grabbableItem.method("get_itemID").invoke();
                            if (idObj && !idObj.isNull() && idObj.content)
                                itemIDStr = idObj.content;
                        }
                        const result = spawnItemAsync(itemIDStr, spawnPos, spawnRot);
                        if (!result || result.isNull?.()) {
                            sendNotification("don't work" + (isRightHand ? "right" : "left") + " hand item", false);
                            continue;
                        }
                        sendNotification("don't work" + itemIDStr + " from " + (isRightHand ? "right" : "left") + " hand", false);
                    }
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("ids", [
        menuButton("Exit IDs", () => { currentCategory = 0; currentPage = 0; }, "Back to main menu."),
        ...itemIDs.map((id) => menuButton(id, () => {
            selectedItemID = id;
            sendNotification("don't work" + id, false);
        }, "Select " + id))
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("world", [
    // nothin
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("others", [
    // nothing
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("combat", [
        menuToggle("Stinky Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                if (!rightTrigger || time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.5;
                const target = omniGunGetTargetPlayer(gunData);
                if (!target)
                    return;
                try {
                    target.method("RPC_TagAsStinky").invoke();
                    sendNotification("don't work" + getPlayerName(target) + " stinky", false);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Earthquake Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                if (!rightTrigger || time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.4;
                const target = omniGunGetTargetPlayer(gunData);
                if (!target)
                    return;
                try {
                    target.method("RPC_ShakeScreen").invoke(10.0, 0.2, 0.2, 100.0, 10.0);
                    sendNotification("don't work" + getPlayerName(target), false);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Radiation Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                if (!rightTrigger || time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.4;
                const target = omniGunGetTargetPlayer(gunData);
                if (!target)
                    return;
                try {
                    target.method("RPC_SetRadioActive").invoke(30.0, true, 100.0);
                    sendNotification("don't work" + getPlayerName(target), false);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Jelly Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                if (!rightTrigger || time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.4;
                const target = omniGunGetTargetPlayer(gunData);
                if (!target)
                    return;
                try {
                    target.method("RPC_SetJellyEffect").invoke(30.0, 50.0);
                    sendNotification("don't work" + getPlayerName(target), false);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Rainbow Player Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                if (!rightTrigger || time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.3;
                const target = omniGunGetTargetPlayer(gunData);
                if (!target)
                    return;
                try {
                    rainbowHue = (rainbowHue + 0.12) % 1;
                    target.method("RPC_SetColorHSV").invoke(30.0, rainbowHue, 1.0, 1.0);
                    sendNotification("don't work" + getPlayerName(target), false);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Squeaky Voice Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gunData = omniRenderGun();
                if (!rightTrigger || time <= tagGunDelay)
                    return;
                tagGunDelay = time + 0.5;
                const target = omniGunGetTargetPlayer(gunData);
                if (!target)
                    return;
                try {
                    target.method("RPC_SetSqueakyVoiceEnabled").invoke(true);
                    sendNotification("don't work" + getPlayerName(target), false);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuButton("Stinky All Players", () => {
            let n = 0;
            omniForEachOtherPlayer((p) => {
                try {
                    p.method("RPC_TagAsStinky").invoke();
                    n++;
                }
                catch (_) { }
            });
            sendNotification("don't work" + n + " players", false);
        }, "Tags every other player as stinky."),
    ]));
    const mmDamageSourceInfo = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo");
    function mmDmgNull() {
        try {
            return mmDamageSourceInfo.method("get_Null").invoke();
        }
        catch (_) {
            return NULL;
        }
    }
    function mmVec3(a) {
        if (Array.isArray(a))
            return [a[0], a[1], a[2]];
        if (a && typeof a === "object" && a.field) {
            try {
                return [a.field("x").value, a.field("y").value, a.field("z").value];
            }
            catch (_) { }
        }
        return [0, 0, 0];
    }
    function mmAllPlayers(includeLocal) {
        const out = [];
        try {
            const dict = NetPlayer.field("playerIDToNetPlayer").value;
            if (!dict || dict.isNull?.())
                return out;
            const en = dict.method("get_Values").invoke().method("GetEnumerator").invoke();
            while (en.method("MoveNext").invoke()) {
                const p = en.method("get_Current").invoke();
                if (!p || p.isNull?.())
                    continue;
                if (!includeLocal && p.method("get_IsMine").invoke())
                    continue;
                out.push(p);
            }
        }
        catch (_) { }
        return out;
    }
    function mmGunTarget(gunData, maxDist = 30.0) {
        try {
            const t = omniGunGetTargetPlayer(gunData);
            if (t && !t.isNull?.())
                return t;
        }
        catch (_) { }
        try {
            const ptr = getTransform(gunData.gunPointer).method("get_position").invoke();
            let nearest = null, nd = maxDist;
            for (const p of mmAllPlayers(false)) {
                try {
                    const pp = getTransform(p).method("get_position").invoke();
                    const d = Vector3.method("Distance").invoke(ptr, pp);
                    if (d < nd) {
                        nd = d;
                        nearest = p;
                    }
                }
                catch (_) { }
            }
            return nearest;
        }
        catch (_) {
            return null;
        }
    }
    const mmR = {
        addForce(o, v) {
            const [x, y, z] = mmVec3(v);
            try {
                o.method("RPC_AddForce", 1).invoke([x, y, z]);
            }
            catch (_) { }
        },
        playerDie(o, isDie) {
            try {
                o.method("RPC_DoPlayerDie").invoke(isDie);
            }
            catch (_) { }
        },
        teleport(o, v) {
            const [x, y, z] = mmVec3(v);
            try {
                o.method("RPC_Teleport").invoke([x, y, z]);
            }
            catch (_) { }
        },
        setHide(o, h) {
            try {
                o.method("RPC_SetHide").invoke(h);
            }
            catch (_) { }
        },
        setColorHSV(o, d, h, s, v) {
            try {
                o.method("RPC_SetColorHSV").invoke(d, h, s, v);
            }
            catch (_) { }
        },
        tagStinky(o) {
            try {
                o.method("RPC_TagAsStinky").invoke();
            }
            catch (_) { }
        },
        applyBuff(o, id) {
            try {
                o.method("RPC_ApplyBuff", 1).invoke(id | 0);
            }
            catch (_) { }
        },
        playerStun(o, pos, range, dur, atten) {
            const [x, y, z] = mmVec3(pos);
            try {
                o.method("RPC_PlayerStun", 4).invoke([x, y, z], range, dur, atten | 0);
            }
            catch (_) { }
        },
        addExtForce(o, f, mode) {
            const [x, y, z] = mmVec3(f);
            try {
                o.method("RPC_AddExternalForce").invoke([x, y, z], mode | 0);
            }
            catch (_) { }
        },
        playerHit(o, dmg, pos, force, srcInfo, death) {
            const [x, y, z] = mmVec3(pos);
            try {
                o.method("RPC_PlayerHit", 5).invoke(dmg | 0, [x, y, z], force, srcInfo, death);
            }
            catch (_) { }
        },
    };
    function mmSetMuted(p, muted) {
        if (!p || p.isNull?.())
            return;
        try {
            p.method("RPC_SetMuffledVoiceEnabled").invoke(muted);
        }
        catch (_) { }
        try {
            if (muted)
                p.method("SetCustomVoiceFalloff").invoke(0.05);
            else
                p.method("SetDefaultVoiceFalloff").invoke();
        }
        catch (_) { }
        try {
            p.method("set_voiceFalloffDistance").invoke(muted ? 0.05 : 12.0);
        }
        catch (_) { }
    }
    function mmSetSqueaky(p, on) {
        if (p && !p.isNull?.()) {
            try {
                p.method("RPC_SetSqueakyVoiceEnabled").invoke(on);
            }
            catch (_) { }
        }
    }
    function mmLaunchUp(srcTf, forward) {
        try {
            const dot = Vector3.method("Dot").invoke([0, 1, 0], forward);
            let proj = Vector3.method("op_Subtraction", 2).invoke([0, 1, 0], Vector3.method("op_Multiply", 2).invoke(forward, dot));
            const mag = Vector3.method("Magnitude").invoke(proj);
            if (mag < 0.05)
                proj = srcTf.method("get_up").invoke();
            return Vector3.method("Normalize").invoke(proj);
        }
        catch (_) {
            try {
                return srcTf.method("get_up").invoke();
            }
            catch (_) {
                return [0, 1, 0];
            }
        }
    }
    function mmLaunchRot(srcTf, forward, up) {
        try {
            return Quaternion.method("LookRotation", 2).invoke(forward, up);
        }
        catch (_) { }
        try {
            return Quaternion.method("LookRotation", 1).invoke(forward);
        }
        catch (_) { }
        try {
            return srcTf.method("get_rotation").invoke();
        }
        catch (_) {
            return identityQuaternion;
        }
    }
    function mmFrontOfPlayer(dist) {
        try {
            const fwd = readVec3Components(getTransform(headCollider).method("get_forward").invoke());
            const fm = Math.sqrt(fwd[0] * fwd[0] + fwd[2] * fwd[2]) || 1;
            return Vector3.method("op_Addition", 2).invoke(getTransform(bodyCollider).method("get_position").invoke(), [(fwd[0] / fm) * dist, 0.5, (fwd[2] / fm) * dist]);
        }
        catch (_) {
            try {
                return getTransform(bodyCollider).method("get_position").invoke();
            }
            catch (_) {
                return zeroVector;
            }
        }
    }
    function mmHeldGrabbable(player, handIndex) {
        try {
            const it = player.method("GetHandInteractor", 1).invoke(handIndex);
            if (!it || it.isNull?.())
                return null;
            const anchor = it.field("_itemAnchor").value;
            if (!anchor || anchor.isNull?.())
                return null;
            const g = anchor.method("get_grabbableObject").invoke();
            return (g && !g.isNull?.()) ? g : null;
        }
        catch (_) {
            return null;
        }
    }
    function mmLobbyItems() {
        const out = [];
        try {
            const items = Object.method("FindObjectsByType", 1).inflate(GBOClass).invoke(0);
            if (items && !items.isNull?.())
                for (let i = 0; i < items.length; i++) {
                    try {
                        const it = items.get(i);
                        if (it && !it.isNull?.())
                            out.push(it);
                    }
                    catch (_) { }
                }
        }
        catch (_) { }
        return out;
    }
    const mmSpawnedPrefabs = [];
    function mmSpawnNetworkPrefab(prefabName, pos, rot) {
        try {
            const runner = PrefabGen.field("_instance").value.method("get_runner").invoke();
            if (!runner || runner.isNull())
                return null;
            const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
            const count = sources.method("get_Count").invoke();
            for (let i = 0; i < count; i++) {
                try {
                    const source = sources.method("get_Item").invoke(i);
                    const desc = source.method("get_Description").invoke().toString();
                    if (!desc.toLowerCase().includes(String(prefabName).toLowerCase()))
                        continue;
                    const no = source.method("WaitForResult").invoke();
                    if (!no || no.isNull())
                        return null;
                    const makeZero = (type) => {
                        if (type.class.isEnum || type.isPrimitive)
                            return 0;
                        if (!type.class.isValueType)
                            return NULL;
                        const fs = type.class.fields.filter((f) => !f.isStatic);
                        if (fs.length === 0)
                            return 0;
                        return fs.map((f) => makeZero(f.type));
                    };
                    const buildNullable = (nt, has, val) => {
                        const fs = nt.class.fields.filter((f) => !f.isStatic);
                        return fs.map((f) => {
                            const ln = f.name.toLowerCase();
                            if (ln.includes("hasvalue"))
                                return has ? 1 : 0;
                            if (ln === "value")
                                return has ? val : makeZero(f.type);
                            return makeZero(f.type);
                        });
                    };
                    const normalize = (type, value) => {
                        if (typeof value === "boolean")
                            return value ? 1 : 0;
                        if (value instanceof Il2Cpp.ValueType) {
                            const fs = type.class.fields.filter((f) => !f.isStatic);
                            if (fs.length === 0)
                                return 0;
                            return fs.map((f) => normalize(f.type, f.bind(value).value));
                        }
                        if (Array.isArray(value))
                            return value.map((v) => normalize(type, v));
                        return value;
                    };
                    const buildFromVT = (nt, vt) => buildNullable(nt, true, normalize(vt.type, vt));
                    let spawnMethod = null;
                    for (const m of runner.method("Spawn").overloads()) {
                        if (m.parameterCount !== 6 || m.isGeneric)
                            continue;
                        const pr = m.parameters;
                        if (pr[0].type.name.includes("Fusion.NetworkObject") &&
                            pr[1].type.name.startsWith("System.Nullable") && pr[1].type.name.includes("Vector3") &&
                            pr[2].type.name.startsWith("System.Nullable") && pr[2].type.name.includes("Quaternion") &&
                            pr[3].type.name.startsWith("System.Nullable") && pr[3].type.name.includes("PlayerRef") &&
                            pr[4].type.name.includes("OnBeforeSpawned") &&
                            pr[5].type.name.includes("NetworkSpawnFlags")) {
                            spawnMethod = m;
                            break;
                        }
                    }
                    if (!spawnMethod)
                        return null;
                    const posArg = buildFromVT(spawnMethod.parameters[1].type, pos);
                    const rotArg = buildFromVT(spawnMethod.parameters[2].type, rot);
                    const authArg = buildNullable(spawnMethod.parameters[3].type, false, makeZero(spawnMethod.parameters[3].type));
                    const onBefore = spawnMethod.parameters[4].type.class.isValueType ? makeZero(spawnMethod.parameters[4].type) : NULL;
                    const spawned = spawnMethod.bind(runner).invoke(no, posArg, rotArg, authArg, onBefore, 0);
                    if (spawned && !spawned.isNull())
                        mmSpawnedPrefabs.push(spawned);
                    return spawned;
                }
                catch (_) { }
            }
        }
        catch (e) {
        }
        return null;
    }
    let mmKillGunDelay = 0, mmVoidGunDelay = 0, mmExplosiveGunDelay = 0, mmMagnetDelay = 0, mmStealItemDelay = 0, mmFlingGunDelay = 0, mmLaunchGunDelay = 0, mmYeetGunDelay = 0, mmSizeGunDelay = 0, mmMuteGunDelay = 0, mmKillAuraDelay = 0, mmBlackHoleDelay = 0, mmItemStormDelay = 0, mmChaosDelay = 0, mmTornadoDelay = 0, mmReviveAutoDelay = 0, mmStickyDynDelay = 0;
    let mmKillAuraOn = false, mmBlackHoleOn = false, mmItemStormOn = false, mmChaosOn = false, mmTornadoOn = false, mmReviveAutoOn = false;
    const mmVoidReturns = [];
    let hlSpawnSourceCached = null;
    function hlNewSpawnSource() {
        if (hlSpawnSourceCached !== null)
            return hlSpawnSourceCached;
        const cls = acImage.class("AnimalCompany.ItemSpawnSource");
        for (const n of ["None", "Unknown", "Debug", "Spawned", "Shop", "Chest", "Gift", "Default"]) {
            try {
                hlSpawnSourceCached = cls.field(n).value;
                return hlSpawnSourceCached;
            }
            catch (_) { }
        }
        hlSpawnSourceCached = 0;
        return hlSpawnSourceCached;
    }
    function hlSpawnItem(name, pos, rot) {
        pos = normalizeSpawnPos(pos);
        const str = typeof name === "string" ? Il2Cpp.string(name) : name;
        const src = hlNewSpawnSource();
        try {
            const r = PrefabGen.method("SpawnItem", 5)
                .overload("System.String", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                .invoke(str, pos, rot, getSpawnNullDelegate(), src);
            if (r && !r.isNull?.())
                return r;
        }
        catch (_) { }
        try {
            const r = PrefabGen.method("SpawnItem", 5).invoke(str, pos, rot, NULL, src);
            if (r && !r.isNull?.())
                return r;
        }
        catch (_) { }
        try {
            PrefabGen.method("SpawnItemAsync", 5)
                .overload("System.String", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkObjectSpawnDelegate", "AnimalCompany.ItemSpawnSource")
                .invoke(str, pos, rot, NULL, src);
        }
        catch (_) { }
        return null;
    }
    function hlSpawnItem2(name, pos, rot) {
        pos = normalizeSpawnPos(pos);
        try {
            const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(name));
            if (!prefab || prefab.isNull?.())
                return null;
            const r = PrefabGen.method("SpawnItem", 5)
                .overload("AnimalCompany.GrabbableItemPrefab", "UnityEngine.Vector3", "UnityEngine.Quaternion", "Fusion.NetworkRunner.OnBeforeSpawned", "AnimalCompany.ItemSpawnSource")
                .invoke(prefab, pos, rot, getSpawnNullDelegate(), hlNewSpawnSource());
            if (r && !r.isNull?.())
                return r;
        }
        catch (_) { }
        try {
            const prefab = PrefabGen.method("GetItemPrefab", 1).invoke(Il2Cpp.string(name));
            if (!prefab || prefab.isNull?.())
                return null;
            const r = PrefabGen.method("SpawnItem", 5).invoke(prefab, pos, rot, NULL, hlNewSpawnSource());
            if (r && !r.isNull?.())
                return r;
        }
        catch (_) { }
        return null;
    }
    function hlSpawnItemByName(name, pos, rot) {
        try {
            pos = normalizeSpawnPos(pos);
            const bare = String(name || "").replace(/^item_prefab\//, "");
            const full = bare.indexOf("item_prefab/") === 0 ? bare : "item_prefab/" + bare;
            let r = hlSpawnItem(Il2Cpp.string(bare), pos, rot);
            if (r && !r.isNull?.())
                return r;
            r = hlSpawnItem(Il2Cpp.string(full), pos, rot);
            if (r && !r.isNull?.())
                return r;
            r = hlSpawnItem2(bare, pos, rot) || hlSpawnItem2(full, pos, rot);
            if (r && !r.isNull?.())
                return r;
            return hlFindNearestGrabbable(bare, pos, 1.5);
        }
        catch (e) {
            return null;
        }
    }
    function hlFindNearestGrabbable(name, pos, maxDist) {
        try {
            const items = Object.method("FindObjectsByType", 1).inflate(GBOClass).invoke(0);
            let best = null, bestD = maxDist;
            for (let i = 0; i < items.length; i++) {
                try {
                    const it = items.get ? items.get(i) : items[i];
                    if (!it || it.isNull?.())
                        continue;
                    const go = it.method("get_gameObject").invoke();
                    const n = go.method("get_name").invoke().toString().toLowerCase();
                    if (n.indexOf(name.toLowerCase()) < 0)
                        continue;
                    const iPos = getTransform(go).method("get_position").invoke();
                    const dx = iPos.field("x").value - pos[0], dy = iPos.field("y").value - pos[1], dz = iPos.field("z").value - pos[2];
                    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    if (d < bestD) {
                        bestD = d;
                        best = it;
                    }
                }
                catch (_) { }
            }
            return best;
        }
        catch (_) {
            return null;
        }
    }
    function hlSpawnNetworkObject(name, pos, rot) {
        try {
            const runner = PrefabGen.field("_instance").value.method("get_runner").invoke();
            if (!runner || runner.isNull())
                return null;
            const sources = runner.field("_config").value.field("PrefabTable").value.field("_sources").value;
            const count = sources.method("get_Count").invoke();
            const lName = String(name || "").toLowerCase();
            const stripped = lName.replace(/^item_prefab\//, "").replace(/[^a-z0-9]+/g, "");
            let bestDesc = "";
            let bestScore = -1;
            for (let i = 0; i < count; i++) {
                try {
                    const src = sources.method("get_Item").invoke(i);
                    const desc = src.method("get_Description").invoke().toString();
                    const ld = String(desc || "").toLowerCase();
                    const cleaned = ld.replace(/^["']|["']$/g, "").replace(/^resource:\s*/, "").replace(/^static:\s*/, "").replace(/\s*\(fusion\.networkobject\)\s*$/, "");
                    const cStripped = cleaned.replace(/^item_prefab\//, "").replace(/[^a-z0-9]+/g, "");
                    let score = -1;
                    if (cleaned === lName || cStripped === stripped)
                        score = 1000;
                    else if (cleaned.endsWith("/" + lName) || cStripped.endsWith(stripped))
                        score = 850;
                    else if (ld.includes(lName))
                        score = 500 + lName.length;
                    else if (stripped.length > 0 && cStripped.includes(stripped))
                        score = 400 + stripped.length;
                    if (score > bestScore) {
                        bestScore = score;
                        bestDesc = desc;
                    }
                }
                catch (_) { }
            }
            for (let i = 0; i < count; i++) {
                try {
                    const src = sources.method("get_Item").invoke(i);
                    const desc = src.method("get_Description").invoke().toString();
                    const ld = String(desc || "").toLowerCase();
                    const ln = String(name || "").toLowerCase();
                    const dStripped = ld.replace(/[^a-z0-9]+/g, "");
                    const nStripped = ln.replace(/[^a-z0-9]+/g, "");
                    if (bestDesc ? desc === bestDesc : (ld.includes(ln) || (nStripped.length > 0 && dStripped.includes(nStripped)))) {
                        let netObj = null;
                        const isResource = String(desc || "").toLowerCase().indexOf("resource:") >= 0;
                        try {
                            const spawnMethod = runner.method("Spawn", 6);
                            const p3type = spawnMethod.parameters[3].type;
                            const p5type = spawnMethod.parameters[5].type;
                            let p3val, p5val;
                            try {
                                p3val = p3type.class.isValueType ? Il2Cpp.alloc(p3type.class.instanceSize) : NULL;
                            }
                            catch (_) {
                                p3val = NULL;
                            }
                            try {
                                p5val = p5type.class.isValueType ? Il2Cpp.alloc(p5type.class.instanceSize) : NULL;
                            }
                            catch (_) {
                                p5val = NULL;
                            }
                            netObj = spawnMethod.invoke(src, pos, rot, p3val, null, p5val);
                        }
                        catch (_) { }
                        if (!netObj || netObj.isNull?.()) {
                            try {
                                netObj = runner.method("Spawn", 6).invoke(src, pos, rot, NULL, null, NULL);
                            }
                            catch (_) { }
                        }
                        if (!netObj || netObj.isNull?.()) {
                            try {
                                netObj = runner.method("Spawn", 4).invoke(src, pos, rot, null);
                            }
                            catch (_) { }
                        }
                        if (netObj && !netObj.isNull?.()) {
                            let go = null;
                            try {
                                go = netObj.method("get_gameObject").invoke();
                            }
                            catch (_) {
                                go = netObj;
                            }
                            if (go && !go.isNull?.())
                                return netObj;
                        }
                    }
                }
                catch (_) { }
            }
        }
        catch (_) { }
        return null;
    }
    function hlGetGameObject(obj) {
        try {
            if (!obj || obj.isNull?.())
                return null;
            const go = obj.method("get_gameObject").invoke();
            if (go && !go.isNull?.())
                return go;
        }
        catch (_) { }
        return obj;
    }
    function hlGetGameObject9(pos, rot) {
        const ids = ["item_mining_laser", "item_mining_laser_orange"];
        for (const id of ids) {
            try {
                const netObj = hlSpawnItemByName(id, pos, rot);
                if (!netObj || netObj.isNull?.())
                    continue;
                const go = hlGetGameObject(netObj);
                if (go && !go.isNull?.())
                    return { netObj, go, itemId: id };
            }
            catch (_) { }
        }
        for (const id of ids) {
            try {
                const netObj = hlSpawnNetworkObject(id, pos, rot);
                if (!netObj || netObj.isNull?.())
                    continue;
                let go = null;
                try {
                    go = netObj.method("get_gameObject").invoke();
                }
                catch (_) {
                    go = hlGetGameObject(netObj);
                }
                if (go && !go.isNull?.())
                    return { netObj, go, itemId: id };
            }
            catch (_) { }
        }
        return null;
    }
    function hlVec3ToArray(v) {
        try {
            return [v.field("x").value, v.field("y").value, v.field("z").value];
        }
        catch (_) {
            return [0, 0, 0];
        }
    }
    function hlAddVec3(a, b, c) {
        return [a[0] + b[0] + c[0], a[1] + b[1] + c[1], a[2] + b[2] + c[2]];
    }
    function hlScaleVec3(a, s) {
        return [a[0] * s, a[1] * s, a[2] * s];
    }
    function hlGetHeadPoseData(side) {
        try {
            if (!headCollider || headCollider.isNull?.())
                return null;
            const ht = getTransform(headCollider);
            const hPos = hlVec3ToArray(ht.method("get_position").invoke());
            const hFwd = hlVec3ToArray(ht.method("get_forward").invoke());
            const hRight = hlVec3ToArray(ht.method("get_right").invoke());
            const hUp = hlVec3ToArray(ht.method("get_up").invoke());
            const eyePos = hlAddVec3(hPos, hlAddVec3(hlScaleVec3(hFwd, 0.105), hlScaleVec3(hRight, side * 0.034), hlScaleVec3(hUp, 0.018)), [0, 0, 0]);
            return { pos: eyePos, rot: ht.method("get_rotation").invoke(), forward: hFwd };
        }
        catch (_) {
            return null;
        }
    }
    function hlGetMiningLaserComponent(entry) {
        try {
            if (!entry || !entry.go || entry.go.isNull?.())
                return null;
            let ml = entry.laser;
            if (ml && !ml.isNull?.())
                return ml;
            const mlClass = acImage.class("AnimalCompany.MiningLaser");
            ml = getComponent(entry.go, mlClass);
            if (!ml || ml.isNull?.()) {
                try {
                    ml = getComponent(entry.go, mlClass);
                }
                catch (_) { }
            }
            if (!ml || ml.isNull?.()) {
                try {
                    const arr = entry.go.method("GetComponentsInChildren", 1).inflate(ComponentCls).invoke(true);
                    if (arr && !arr.isNull?.()) {
                        for (let i = 0; i < arr.length; i++) {
                            try {
                                const c = arr.get(i);
                                const cn = String(c?.class?.type?.name ?? c?.class?.name ?? "");
                                if (/MiningLaser/i.test(cn)) {
                                    ml = c;
                                    break;
                                }
                            }
                            catch (_) { }
                        }
                    }
                }
                catch (_) { }
            }
            entry.laser = ml;
            return ml;
        }
        catch (_) {
            return null;
        }
    }
    function hlGetGrabbable(entry) {
        try {
            if (!entry || !entry.go || entry.go.isNull?.())
                return null;
            let grb = entry.grabbable;
            if (grb && !grb.isNull?.())
                return grb;
            grb = getComponent(entry.go, GBOClass) || getComponent(entry.go, GBIClass);
            if (!grb || grb.isNull?.()) {
                try {
                    const ml = hlGetMiningLaserComponent(entry);
                    if (ml && !ml.isNull?.())
                        grb = ml.field("_grabbable").value;
                }
                catch (_) { }
            }
            if (!grb || grb.isNull?.()) {
                try {
                    grb = getComponent(entry.go, GBOClass) || getComponent(entry.go, GBIClass);
                }
                catch (_) { }
            }
            entry.grabbable = grb;
            return grb;
        }
        catch (_) {
            return null;
        }
    }
    function hlSetMultipleFields(obj, fields, val) {
        for (const f of fields) {
            try {
                obj.field(f).value = val;
            }
            catch (_) { }
        }
    }
    function hlFindNetworkBool(val) {
        try {
            const assemblies = ["Fusion.Runtime", "Fusion.Common", "Fusion.Realtime", "AnimalCompany"];
            for (const asm of assemblies) {
                try {
                    const cls = Il2Cpp.domain.assembly(asm).image.class("Fusion.NetworkBool");
                    try {
                        return cls.method("op_Implicit", 1).invoke(val);
                    }
                    catch (_) { }
                    try {
                        return cls.method("op_Implicit", 1).invoke(val ? 1 : 0);
                    }
                    catch (_) { }
                    try {
                        const inst = cls.alloc();
                        try {
                            inst.method(".ctor", 1).invoke(val);
                            return inst;
                        }
                        catch (_) { }
                        try {
                            inst.method(".ctor", 1).invoke(val ? 1 : 0);
                            return inst;
                        }
                        catch (_) { }
                    }
                    catch (_) { }
                }
                catch (_) { }
            }
        }
        catch (_) { }
        return val ? 1 : 0;
    }
    function hlSetNetworkBoolField(obj, fieldName, setterName, val) {
        const nb = hlFindNetworkBool(val);
        try {
            obj.field(fieldName).value = nb;
        }
        catch (_) { }
        try {
            obj.field(fieldName).value = val ? 1 : 0;
        }
        catch (_) { }
        try {
            obj.method(setterName).invoke(nb);
        }
        catch (_) { }
        try {
            obj.method(setterName).invoke(val ? 1 : 0);
        }
        catch (_) { }
        try {
            obj.method(setterName).invoke(val);
        }
        catch (_) { }
    }
    function hlSetMaxDistance(ml) {
        const big = 9999999;
        hlSetMultipleFields(ml, [
            "_maxDistance", "maxDistance", "_range", "range", "_maxRange", "maxRange",
            "_laserRange", "laserRange", "_maxLaserRange", "maxLaserRange",
            "_beamRange", "beamRange", "_raycastDistance", "raycastDistance",
            "_laserDistance", "laserDistance", "_maxLaserDistance", "maxLaserDistance"
        ], big);
    }
    function hlSetMaxFuel(ml, firing) {
        hlSetMultipleFields(ml, ["_maxFuel", "maxFuel"], 999999);
        hlSetMultipleFields(ml, ["_fuel", "__fuel", "fuel"], 999999);
        hlSetMultipleFields(ml, ["_didOverheat", "__didOverheat", "didOverheat"], false);
        hlSetMultipleFields(ml, [
            "_triggerHeld", "__triggerHeld", "triggerHeld",
            "_isTriggered", "__isTriggered", "isTriggered",
            "_isFiring", "isFiring", "_firing", "__firing", "firing",
            "_isOn", "__isOn", "isOn", "_isActive", "__isActive", "isActive",
            "_activated", "__activated", "activated"
        ], firing);
        try {
            ml.method("set__fuel").invoke(999999);
        }
        catch (_) { }
        hlSetNetworkBoolField(ml, "__didOverheat", "set__didOverheat", false);
        hlSetNetworkBoolField(ml, "__isFiring", "set__isFiring", firing);
        try {
            ml.method("set_isFiring").invoke(firing);
        }
        catch (_) { }
        try {
            ml.method("set_isOn").invoke(firing);
        }
        catch (_) { }
        try {
            ml.method("set_isActive").invoke(firing);
        }
        catch (_) { }
    }
    function hlFreezeRigidbodies(entry) {
        try {
            const go = entry?.go;
            if (!go || go.isNull?.())
                return;
            try {
                const rbs = go.method("GetComponentsInChildren", 1).inflate(RigidbodyCls).invoke(true);
                if (rbs && !rbs.isNull?.()) {
                    for (let i = 0; i < rbs.length; i++) {
                        try {
                            const rb = rbs.get(i);
                            if (!rb || rb.isNull?.())
                                continue;
                            rb.method("set_isKinematic").invoke(true);
                            rb.method("set_useGravity").invoke(false);
                            try {
                                rb.method("set_velocity").invoke([0, 0, 0]);
                            }
                            catch (_) { }
                            try {
                                rb.method("set_angularVelocity").invoke([0, 0, 0]);
                            }
                            catch (_) { }
                        }
                        catch (_) { }
                    }
                }
            }
            catch (_) { }
            try {
                const cols = go.method("GetComponentsInChildren", 1).inflate(ColliderCls).invoke(true);
                if (cols && !cols.isNull?.()) {
                    for (let i = 0; i < cols.length; i++) {
                        try {
                            const c = cols.get(i);
                            if (c && !c.isNull?.())
                                c.method("set_enabled").invoke(false);
                        }
                        catch (_) { }
                    }
                }
            }
            catch (_) { }
            const grb = hlGetGrabbable(entry);
            if (grb && !grb.isNull?.()) {
                try {
                    grb.method("set_useGravity").invoke(false);
                }
                catch (_) { }
                try {
                    grb.field("_useGravity").value = false;
                }
                catch (_) { }
                try {
                    grb.field("_allowLocomotionWhenNotHeld").value = false;
                }
                catch (_) { }
                try {
                    grb.field("_allowGrabAnywhere").value = false;
                }
                catch (_) { }
            }
        }
        catch (_) { }
    }
    function shootGoopGun(transform, hue = 18, saturation = 96, count = 2, lifetime = 2.2, speed = 8.8) {
        try {
            if (!transform || transform.isNull?.())
                return;
            const position = transform.method("get_position").invoke();
            const forward = readVec3Components(transform.method("get_forward").invoke());
            const [forwardX, forwardZ] = normalizeXZ(forward[0], forward[2]);
            for (let i = 0; i < count; i++) {
                const spawnPos = [
                    position.field("x").value + forwardX * 0.14 + (Math.random() * 0.05 - 0.025),
                    position.field("y").value - 0.28 + (Math.random() * 0.02 - 0.01),
                    position.field("z").value + forwardZ * 0.14 + (Math.random() * 0.05 - 0.025),
                ];
                const goopItem = spawnItemAtPos("item_goop", spawnPos, identityQuaternion);
                if (!goopItem || goopItem.isNull?.())
                    continue;
                spawnedGoopObjects.push({ object: goopItem, expireAt: time + lifetime });
                try {
                    setColorHue(goopItem, hue);
                }
                catch (_) { }
                try {
                    setColorSaturation(goopItem, saturation);
                }
                catch (_) { }
                try {
                    const gameObject = goopItem.method("get_gameObject").invoke();
                    if (gameObject && !gameObject.isNull?.()) {
                        try {
                            const grabbable = gameObject.method("GetComponent", 1).inflate(GBOClass).invoke();
                            if (grabbable && !grabbable.isNull?.()) {
                                try {
                                    setColorHue(grabbable, hue);
                                }
                                catch (_) { }
                                try {
                                    setColorSaturation(grabbable, saturation);
                                }
                                catch (_) { }
                            }
                        }
                        catch (_) { }
                        try {
                            const renderer = getComponent(gameObject, RendererClass);
                            if (renderer && !renderer.isNull?.()) {
                                const material = renderer.method("get_material").invoke();
                                if (material && !material.isNull?.()) {
                                    material.method("set_color").invoke([1, 0.95, 0.12, 1]); // yellow
                                }
                            }
                        }
                        catch (_) { }
                    }
                }
                catch (_) { }
                trySetObjectVelocity(goopItem, [
                    forwardX * speed + (Math.random() * 0.95 - 0.475),
                    -1 + Math.random() * 0.35,
                    forwardZ * speed + (Math.random() * 0.95 - 0.475),
                ]);
            }
        }
        catch (_) { }
    }
    function hlHandleWeaponUse(entry, fire) {
        try {
            const grb = hlGetGrabbable(entry);
            if (!grb || grb.isNull?.())
                return;
            if (fire) {
                try {
                    grb.method("HandleTriggerUse").invoke();
                }
                catch (_) { }
                try {
                    grb.method("HandleUse").invoke();
                }
                catch (_) { }
                try {
                    grb.field("_controllerInput").value = grb.method("GetLocalGrabbedControllerInput").invoke();
                }
                catch (_) { }
            }
            else {
                try {
                    grb.method("HandleTriggerUseUp").invoke();
                }
                catch (_) { }
                try {
                    grb.method("HandleUseUp").invoke();
                }
                catch (_) { }
            }
        }
        catch (_) { }
    }
    function hlSetObjectActive(obj, active) {
        try {
            if (!obj || obj.isNull?.())
                return;
            try {
                obj.method("SetActive").invoke(active);
                return;
            }
            catch (_) { }
            try {
                obj.method("set_enabled").invoke(active);
                return;
            }
            catch (_) { }
            try {
                obj.method("get_gameObject").invoke().method("SetActive").invoke(active);
            }
            catch (_) { }
        }
        catch (_) { }
    }
    function hlConfigureBeamWeapon(entry, fire) {
        try {
            const ml = hlGetMiningLaserComponent(entry);
            if (!ml || ml.isNull?.())
                return;
            const ep = hlGetHeadPoseData(entry.side);
            if (!ep)
                return;
            const pos = ep.pos;
            const fwd = ep.forward || [0, 0, 1];
            const far = 9999999;
            const endPt = [pos[0] + fwd[0] * far, pos[1] + fwd[1] * far, pos[2] + fwd[2] * far];
            hlSetMaxDistance(ml);
            try {
                ml.field("_maxDistance").value = far;
            }
            catch (_) { }
            try {
                ml.field("_hitInterval").value = 0.08;
            }
            catch (_) { }
            try {
                ml.field("_needsBeamRender").value = fire;
            }
            catch (_) { }
            try {
                ml.field("_matBrightnessTarget").value = fire ? 10 : 0;
            }
            catch (_) { }
            try {
                ml.field("_matBrightness").value = fire ? 10 : 0;
            }
            catch (_) { }
            try {
                ml.field("_heatTarget").value = fire ? 1 : 0;
            }
            catch (_) { }
            try {
                ml.field("_heatAmount").value = fire ? 1 : 0;
            }
            catch (_) { }
            try {
                const tip = ml.field("_barrelTip").value;
                if (tip && !tip.isNull?.()) {
                    tip.method("set_position").invoke(pos);
                    tip.method("set_rotation").invoke(ep.rot);
                }
            }
            catch (_) { }
            try {
                const bep = ml.field("_beamEndPoint").value;
                if (bep && !bep.isNull?.()) {
                    bep.method("set_position").invoke(endPt);
                    hlSetObjectActive(bep.method("get_gameObject").invoke(), fire);
                }
            }
            catch (_) { }
            try {
                const lr = ml.field("_lineRenderer").value;
                if (lr && !lr.isNull?.()) {
                    hlSetObjectActive(lr, fire);
                    try {
                        lr.method("set_positionCount").invoke(2);
                    }
                    catch (_) { }
                    try {
                        lr.method("set_useWorldSpace").invoke(true);
                    }
                    catch (_) { }
                    try {
                        lr.method("set_startWidth").invoke(0.035);
                    }
                    catch (_) { }
                    try {
                        lr.method("set_endWidth").invoke(0.02);
                    }
                    catch (_) { }
                    try {
                        lr.method("SetPosition").invoke(0, pos);
                    }
                    catch (_) { }
                    try {
                        lr.method("SetPosition").invoke(1, endPt);
                    }
                    catch (_) { }
                }
            }
            catch (_) { }
            if (fire) {
                if (!entry.nativeLaserStarted) {
                    entry.nativeLaserStarted = true;
                    try {
                        ml.field("_ownsLightBudget").value = true;
                    }
                    catch (_) { }
                    try {
                        ml.field("_ownsParticleBudget").value = true;
                    }
                    catch (_) { }
                    try {
                        ml.field("_ownsAudioBudget").value = true;
                    }
                    catch (_) { }
                    try {
                        ml.method("SetLightBudget").invoke(true);
                    }
                    catch (_) { }
                    try {
                        ml.method("SetParticleBudget").invoke(true);
                    }
                    catch (_) { }
                    try {
                        ml.method("SetAudioBudget").invoke(true);
                    }
                    catch (_) { }
                    try {
                        hlSetObjectActive(ml.field("_muzzleFlash").value, true);
                    }
                    catch (_) { }
                    try {
                        hlSetObjectActive(ml.field("_endPointLight").value, true);
                    }
                    catch (_) { }
                    try {
                        const mp = ml.field("_muzzleParticles").value;
                        if (mp && !mp.isNull?.())
                            mp.method("Play").invoke();
                    }
                    catch (_) { }
                    try {
                        const aud = ml.field("_laserHumAudio").value;
                        if (aud && !aud.isNull?.()) {
                            try {
                                aud.method("set_enabled").invoke(true);
                            }
                            catch (_) { }
                            try {
                                aud.method("set_loop").invoke(true);
                            }
                            catch (_) { }
                            try {
                                aud.method("set_volume").invoke(1);
                            }
                            catch (_) { }
                            try {
                                aud.method("set_spatialBlend").invoke(0.25);
                            }
                            catch (_) { }
                            try {
                                aud.method("set_minDistance").invoke(0.1);
                            }
                            catch (_) { }
                            try {
                                aud.method("set_maxDistance").invoke(80);
                            }
                            catch (_) { }
                            try {
                                aud.method("set_mute").invoke(false);
                            }
                            catch (_) { }
                            try {
                                aud.method("Play").invoke();
                            }
                            catch (_) { }
                        }
                    }
                    catch (_) { }
                }
                try {
                    ml.method("RenderLaserLine").invoke(pos, endPt);
                }
                catch (_) { }
                if (time >= (entry.nextNativeVisualTick ?? 0)) {
                    entry.nextNativeVisualTick = time + 0.12;
                    try {
                        ml.method("FiringUpdate").invoke();
                    }
                    catch (_) { }
                }
                if (time >= (entry.nextNativeDamageTick ?? 0)) {
                    entry.nextNativeDamageTick = time + 0.16;
                    try {
                        ml.method("ProcessDamage").invoke();
                    }
                    catch (_) { }
                }
            }
            else {
                entry.nativeLaserStarted = false;
                entry.nextNativeVisualTick = 0;
                entry.nextNativeDamageTick = 0;
                try {
                    hlSetObjectActive(ml.field("_muzzleFlash").value, false);
                }
                catch (_) { }
                try {
                    hlSetObjectActive(ml.field("_endPointLight").value, false);
                }
                catch (_) { }
                try {
                    const mp = ml.field("_muzzleParticles").value;
                    if (mp && !mp.isNull?.())
                        mp.method("Stop").invoke();
                }
                catch (_) { }
                try {
                    const aud = ml.field("_laserHumAudio").value;
                    if (aud && !aud.isNull?.())
                        aud.method("Stop").invoke();
                }
                catch (_) { }
                try {
                    ml.method("ReleaseBudgetAndUntrack").invoke();
                }
                catch (_) { }
            }
        }
        catch (_) { }
    }
    function hlPositionWeaponModel(entry, eyeData) {
        try {
            if (!entry || !eyeData)
                return;
            const setTf = (obj) => {
                try {
                    if (!obj || obj.isNull?.())
                        return;
                    const t = getTransform(obj);
                    t.method("set_position").invoke(eyeData.pos);
                    t.method("set_rotation").invoke(eyeData.rot);
                    t.method("set_localScale").invoke([0.015, 0.015, 0.015]);
                }
                catch (_) { }
            };
            setTf(entry.go);
            try {
                const ml = hlGetMiningLaserComponent(entry);
                if (ml && !ml.isNull?.())
                    setTf(ml.method("get_gameObject").invoke());
            }
            catch (_) { }
            try {
                const grb = hlGetGrabbable(entry);
                if (grb && !grb.isNull?.())
                    setTf(grb.method("get_gameObject").invoke());
            }
            catch (_) { }
        }
        catch (_) { }
    }
    function hlSetupJetpack(entry) {
        try {
            getTransform(entry.go).method("set_localScale").invoke([0.015, 0.015, 0.015]);
        }
        catch (_) { }
        try {
            hlFreezeRigidbodies(entry);
        }
        catch (_) { }
        try {
            const rb = getComponent(entry.go, RigidbodyCls);
            if (rb && !rb.isNull?.()) {
                try {
                    rb.method("set_isKinematic").invoke(true);
                }
                catch (_) { }
                try {
                    rb.method("set_useGravity").invoke(false);
                }
                catch (_) { }
            }
        }
        catch (_) { }
        try {
            const col = getComponent(entry.go, ColliderCls);
            if (col && !col.isNull?.())
                col.method("set_enabled").invoke(false);
        }
        catch (_) { }
        try {
            const ml = hlGetMiningLaserComponent(entry);
            if (ml && !ml.isNull?.()) {
                hlSetMaxDistance(ml);
                try {
                    ml.field("_maxFuel").value = 999999;
                }
                catch (_) { }
                try {
                    ml.method("set__fuel").invoke(999999);
                }
                catch (_) { }
                try {
                    ml.field("_hitInterval").value = 0.16;
                }
                catch (_) { }
            }
        }
        catch (_) { }
    }
    function hlConfigureLaserCallbacks(entry, fire) {
        try {
            const ml = hlGetMiningLaserComponent(entry);
            if (!ml || ml.isNull?.())
                return;
            const wasFiring = !!entry.lastFiring;
            entry.firing = fire;
            if (time >= (entry.nextRangeRefresh ?? 0)) {
                entry.nextRangeRefresh = time + 1;
                hlSetMaxDistance(ml);
            }
            if (fire && !wasFiring) {
                hlFreezeRigidbodies(entry);
                hlHandleWeaponUse(entry, true);
            }
            if (!fire && wasFiring) {
                hlHandleWeaponUse(entry, false);
            }
            if (fire && !wasFiring) {
                try {
                    ml.method("HandleGrabbedChanged").invoke();
                }
                catch (_) { }
                try {
                    ml.method("HandleTriggerPressed").invoke();
                }
                catch (_) { }
                try {
                    const list = ml.class.field("_allFiringLasers").value;
                    if (list && !list.isNull?.()) {
                        try {
                            list.method("Remove").invoke(ml);
                        }
                        catch (_) { }
                        try {
                            list.method("Add").invoke(ml);
                        }
                        catch (_) { }
                    }
                }
                catch (_) { }
            }
            if (fire !== wasFiring || time >= (entry.nextFuelRefresh ?? 0)) {
                entry.nextFuelRefresh = time + 1;
                hlSetMaxFuel(ml, fire);
            }
            if (fire !== wasFiring) {
                try {
                    ml.method("HandleIsFiringChanged").invoke();
                }
                catch (_) { }
                try {
                    ml.method("HandleFuelChanged").invoke();
                }
                catch (_) { }
            }
            hlConfigureBeamWeapon(entry, fire);
            entry.lastFiring = fire;
        }
        catch (_) { }
    }
    function hlSpawnSpedlazer(side) {
        try {
            const eyeData = hlGetHeadPoseData(side);
            if (!eyeData) {
                return null;
            }
            const result = hlGetGameObject9(eyeData.pos, eyeData.rot);
            if (!result) {
                return null;
            }
            const entry = {
                netObj: result.netObj,
                go: result.go,
                laser: null,
                grabbable: null,
                side: side,
                firing: true,
                lastFiring: false,
                nativeLaserStarted: false,
                nextRangeRefresh: 0,
                nextFuelRefresh: 0,
                nextNativeVisualTick: 0,
                nextNativeDamageTick: 0
            };
            hlSetupJetpack(entry);
            hlPositionWeaponModel(entry, eyeData);
            hlConfigureLaserCallbacks(entry, true);
            return entry;
        }
        catch (e) {
            return null;
        }
    }
    function hlUpdateSpedlazers() {
        if (!spedlazersEnabled)
            return;
        try {
            const firing = !!(leftGrab || (_pcMode && rightGrab));
            if (!firing) {
                if (spedlazersWasFiring)
                    hlCleanupWeaponMods();
                spedlazersWasFiring = false;
                return;
            }
            if (spedlazers.length < 2 && time >= spedlazersSpawnDelay) {
                spedlazersSpawnDelay = time + 0.15;
                spedlazers = spedlazers.filter((e) => e && e.go && !e.go.isNull?.());
                if (!spedlazers.some((e) => e.side === -1)) {
                    const l = hlSpawnSpedlazer(-1);
                    if (l)
                        spedlazers.push(l);
                }
                if (!spedlazers.some((e) => e.side === 1)) {
                    const l = hlSpawnSpedlazer(1);
                    if (l)
                        spedlazers.push(l);
                }
            }
            for (const entry of spedlazers) {
                try {
                    if (!entry || !entry.go || entry.go.isNull?.())
                        continue;
                    const eyeData = hlGetHeadPoseData(entry.side);
                    if (!eyeData)
                        continue;
                    hlPositionWeaponModel(entry, eyeData);
                    hlConfigureLaserCallbacks(entry, firing);
                }
                catch (_) { }
            }
            spedlazersWasFiring = firing;
        }
        catch (_) { }
    }
    function hlCleanupWeaponMods() {
        try {
            for (const entry of spedlazers) {
                try {
                    hlConfigureLaserCallbacks(entry, false);
                }
                catch (_) { }
                try {
                    if (entry?.go && !entry.go.isNull?.())
                        Destroy(entry.go);
                }
                catch (_) { }
            }
        }
        catch (_) { }
        spedlazers = [];
        spedlazersWasFiring = false;
    }
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("combat", [
        menuToggle("Laser Eyes", {
            onEnable: () => { spedlazersEnabled = true; sendNotification("don't work", false); },
            onDisable: () => { spedlazersEnabled = false; hlCleanupWeaponMods(); sendNotification("don't work", false); },
            onUpdate: () => { hlUpdateSpedlazers(); },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Kill Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time <= mmKillGunDelay)
                    return;
                mmKillGunDelay = time + 0.3;
                const t = mmGunTarget(gd, 30.0);
                if (!t || t.isNull?.() || t.method("get_IsMine").invoke()) {
                    sendNotification("don't work", false);
                    return;
                }
                try {
                    const pos = getTransform(t).method("get_position").invoke();
                    mmR.playerHit(t, 100, pos, zeroVector, mmDmgNull(), false);
                    sendNotification("don't work" + getPlayerName(t) + " (100dmg)", false);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Blind Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time <= mmStickyDynDelay)
                    return;
                mmStickyDynDelay = time + 0.2;
                const t = mmGunTarget(gd, 30.0);
                if (!t || t.isNull?.()) {
                    sendNotification("don't work", false);
                    return;
                }
                try {
                    let facePos;
                    try {
                        const head = t.field("head").value;
                        facePos = readVec3Components(head.method("get_position").invoke());
                    }
                    catch (_) {
                        facePos = readVec3Components(getTransform(t).method("get_position").invoke());
                    }
                    const count = 100;
                    const radius = 0.14;
                    for (let i = 0; i < count; i++) {
                        try {
                            const y = 1 - (i / (count - 1)) * 2;
                            const r = Math.sqrt(1 - y * y);
                            const theta = i * 2.399963229728653;
                            const px = facePos[0] + Math.cos(theta) * r * radius;
                            const py = facePos[1] + y * radius;
                            const pz = facePos[2] + Math.sin(theta) * r * radius;
                            spawnItemAsync("item_sticky_dynamite_gold", [px, py, pz], identityQuaternion);
                        }
                        catch (_) { }
                    }
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuButton("Blind All (LAGGY)", () => {
            const count = 100;
            const radius = 0.14;
            for (const p of mmAllPlayers(false)) {
                try {
                    let facePos;
                    try {
                        const head = p.field("head").value;
                        facePos = readVec3Components(head.method("get_position").invoke());
                    }
                    catch (_) {
                        facePos = readVec3Components(getTransform(p).method("get_position").invoke());
                    }
                    for (let i = 0; i < count; i++) {
                        try {
                            const y = 1 - (i / (count - 1)) * 2;
                            const r = Math.sqrt(1 - y * y);
                            const theta = i * 2.399963229728653;
                            const px = facePos[0] + Math.cos(theta) * r * radius;
                            const py = facePos[1] + y * radius;
                            const pz = facePos[2] + Math.sin(theta) * r * radius;
                            spawnItemAsync("item_sticky_dynamite_gold", [px, py, pz], identityQuaternion);
                        }
                        catch (_) { }
                    }
                }
                catch (_) { }
            }
            sendNotification("don't work", false);
        }),
        menuToggle("Explosive Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time <= mmExplosiveGunDelay)
                    return;
                mmExplosiveGunDelay = time + 0.18;
                try {
                    const forward = getLaunchForward(rightHandTransform);
                    const up = mmLaunchUp(rightHandTransform, forward);
                    const position = Vector3.method("op_Addition").invoke(rightHandTransform.method("get_position").invoke(), Vector3.method("op_Multiply", 2).invoke(forward, 0.85));
                    const rotation = mmLaunchRot(rightHandTransform, forward, up);
                    mmSpawnNetworkPrefab("RPGRocket", position, rotation);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Steal Item Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time <= mmStealItemDelay)
                    return;
                mmStealItemDelay = time + 0.3;
                const t = mmGunTarget(gd, 30.0);
                if (!t || t.isNull?.() || t.method("get_IsMine").invoke()) {
                    sendNotification("don't work", false);
                    return;
                }
                try {
                    const myPos = rightHandTransform.method("get_position").invoke();
                    const myRot = rightHandTransform.method("get_rotation").invoke();
                    let got = false;
                    for (const hand of [1, 0]) {
                        const held = mmHeldGrabbable(t, hand);
                        if (held && !held.isNull?.()) {
                            try {
                                held.method("RPC_Release", 6).invoke(myPos, myRot, zeroVector, zeroVector, true, false);
                                got = true;
                            }
                            catch (_) { }
                            if (got)
                                break;
                        }
                    }
                    sendNotification("don't work", false);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Fling Player Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time <= mmFlingGunDelay)
                    return;
                mmFlingGunDelay = time + 0.4;
                const t = mmGunTarget(gd, 30.0);
                if (!t || t.isNull?.() || t.method("get_IsMine").invoke()) {
                    sendNotification("don't work", false);
                    return;
                }
                try {
                    mmR.addForce(t, [(Math.random() * 1000) - 500, 1200, (Math.random() * 1000) - 500]);
                    sendNotification("don't work" + getPlayerName(t), false);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Muffle Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time <= mmMuteGunDelay)
                    return;
                mmMuteGunDelay = time + 0.3;
                const t = mmGunTarget(gd, 30.0);
                if (!t || t.isNull?.() || t.method("get_IsMine").invoke()) {
                    sendNotification("don't work", false);
                    return;
                }
                try {
                    mmSetMuted(t, true);
                    sendNotification("don't work" + getPlayerName(t), false);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Squeaky Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time <= mmMuteGunDelay)
                    return;
                mmMuteGunDelay = time + 0.3;
                const t = mmGunTarget(gd, 30.0);
                if (!t || t.isNull?.() || t.method("get_IsMine").invoke()) {
                    sendNotification("don't work", false);
                    return;
                }
                try {
                    mmSetSqueaky(t, true);
                    sendNotification("don't work" + getPlayerName(t), false);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("overpowered", [
        menuButton("TP All Players To Me", () => {
            let n = 0, pos;
            try {
                pos = readVec3Components(getTransform(bodyCollider).method("get_position").invoke());
            }
            catch (_) {
                pos = [0, 0, 0];
            }
            for (const p of mmAllPlayers(false)) {
                try {
                    mmR.teleport(p, [pos[0], pos[1] + 0.3, pos[2]]);
                    n++;
                }
                catch (_) { }
            }
            sendNotification("don't work" + n + " players to you", false);
        }, "yank every other player to your position."),
        menuButton("Launch All Players", () => {
            let n = 0;
            for (const p of mmAllPlayers(false)) {
                try {
                    mmR.addForce(p, [(Math.random() * 400) - 200, 1500, (Math.random() * 400) - 200]);
                    n++;
                }
                catch (_) { }
            }
            sendNotification("don't work" + n + " players", false);
        }, "fling every other player into the air."),
        menuButton("Nuke All", () => {
            let c = 0;
            const dn = mmDmgNull();
            for (const p of mmAllPlayers(false)) {
                try {
                    const pos = getTransform(p).method("get_position").invoke();
                    mmR.playerHit(p, 999, pos, zeroVector, dn, true);
                    try {
                        mmR.addForce(p, [0, 1400, 0]);
                    }
                    catch (_) { }
                    c++;
                }
                catch (_) { }
            }
            sendNotification("don't work" + c + " players", false);
        }, "999 damage + launch on every other player."),
        menuButton("Kill All Players", () => {
            let n = 0;
            for (const p of mmAllPlayers(false)) {
                try {
                    mmR.playerDie(p, true);
                    n++;
                }
                catch (_) { }
            }
            sendNotification("don't work" + n + " players", false);
        }, "instantly kill every other player."),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("others", [
        menuButton("Squeaky Everyone", () => {
            let n = 0;
            for (const p of mmAllPlayers(false)) {
                try {
                    mmSetSqueaky(p, true);
                    n++;
                }
                catch (_) { }
            }
            sendNotification("don't work" + n + " players", false);
        }, "make every other player's voice squeaky."),
        menuButton("Muffle Everyone", () => {
            let n = 0;
            for (const p of mmAllPlayers(false)) {
                try {
                    mmSetMuted(p, true);
                    n++;
                }
                catch (_) { }
            }
            sendNotification("don't work" + n + " players", false);
        }, "mute/muffle every other player."),
        menuButton("Unmute Everyone", () => {
            let n = 0;
            for (const p of mmAllPlayers(false)) {
                try {
                    mmSetMuted(p, false);
                    mmSetSqueaky(p, false);
                    n++;
                }
                catch (_) { }
            }
            sendNotification("don't work" + n + " players", false);
        }, "restore voice for every player (clears mute + squeaky)."),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("world", [
        menuToggle("Item Storm", {
            onEnable: () => { mmItemStormOn = true; sendNotification("don't work", false); },
            onDisable: () => { mmItemStormOn = false; sendNotification("don't work", false); },
            onUpdate: () => {
                if (!mmItemStormOn || !rightSecondary || time <= mmItemStormDelay)
                    return;
                mmItemStormDelay = time + 0.08;
                try {
                    const base = readVec3Components(getTransform(headCollider).method("get_position").invoke());
                    const id = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                    spawnItemAsync(id, [base[0] + (Math.random() * 6 - 3), base[1] + 5, base[2] + (Math.random() * 6 - 3)], identityQuaternion);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Tornado All", {
            onEnable: () => { mmTornadoOn = true; sendNotification("don't work", false); },
            onDisable: () => { mmTornadoOn = false; sendNotification("don't work", false); },
            onUpdate: () => {
                if (!mmTornadoOn || time <= mmTornadoDelay)
                    return;
                mmTornadoDelay = time + 0.05;
                let b;
                try {
                    b = readVec3Components(getTransform(bodyCollider).method("get_position").invoke());
                }
                catch (_) {
                    return;
                }
                const ang = time * 3.0, r = 4.0;
                let idx = 0;
                for (const p of mmAllPlayers(false)) {
                    try {
                        const a = ang + (idx * 1.3);
                        const h = 2 + ((idx % 5) * 1.5);
                        mmR.teleport(p, [b[0] + Math.cos(a) * r, b[1] + h, b[2] + Math.sin(a) * r]);
                        idx++;
                    }
                    catch (_) { }
                }
            },
            toolTip: "tooltip no workie"
        }),
    ]));
    function mmAddCategory(title, entries, toolTip = "") {
        const idx = buttons.length;
        const page = [
            new ButtonInfo(menuButton("Back to Main", () => { currentCategory = 0; currentPage = 0; _pcMenuSelector = 0; })),
        ];
        for (const e of entries)
            page.push(new ButtonInfo(e));
        buttons.push(page);
        const mainBtn = new ButtonInfo(menuButton(title, () => { currentCategory = idx; currentPage = 0; _pcMenuSelector = 0; }, toolTip || title));
        const creditsIndex = buttons[0].findIndex((b) => b.buttonText === "Credits");
        const insertAt = creditsIndex >= 0 ? creditsIndex : buttons[0].length;
        buttons[0].splice(insertAt, 0, mainBtn);
        return idx;
    }
    function mmFindAll(className) {
        const out = [];
        try {
            const cls = AssemblyCSharp.class(className);
            if (!cls)
                return out;
            const all = Object.method("FindObjectsByType", 1).inflate(cls).invoke(0);
            if (all && !all.isNull?.())
                for (let i = 0; i < all.length; i++) {
                    try {
                        const o = all.get(i);
                        if (o && !o.isNull?.())
                            out.push(o);
                    }
                    catch (_) { }
                }
        }
        catch (_) { }
        return out;
    }
    function mmLaunchObj(obj, dirVec, power) {
        try {
            const go = obj.method("get_gameObject").invoke();
            if (!go || go.isNull?.())
                return;
            let rb = null;
            try {
                rb = go.method("GetComponent", 1).inflate(Rigidbody).invoke();
            }
            catch (_) { }
            if ((!rb || rb.handle.isNull()) && go) {
                try {
                    rb = go.method("GetComponentInChildren", 1).inflate(Rigidbody).invoke();
                }
                catch (_) { }
            }
            if (rb && !rb.handle.isNull()) {
                try {
                    rb.method("set_isKinematic").invoke(false);
                }
                catch (_) { }
                const vel = Vector3.method("op_Multiply", 2).invoke(dirVec, power);
                try {
                    rb.method("set_velocity").invoke(vel);
                }
                catch (_) {
                    try {
                        rb.method("AddForce", 2).invoke(vel, 2);
                    }
                    catch (__) { }
                }
            }
        }
        catch (_) { }
    }
    let mmLauncherDelay = 0, mmThunderGunDelay = 0, mmWorldSpamDelay = 0;
    function mmFireLauncher(prefabName, label, power, cooldown = 0) {
        if (!rightGrab)
            return;
        omniRenderGun(); // draw the gun pointer/line while grip is held
        if (!rightTrigger || time < mmLauncherDelay)
            return;
        mmLauncherDelay = time + cooldown;
        try {
            const handPos = rightHandTransform.method("get_position").invoke();
            const handRot = rightHandTransform.method("get_rotation").invoke();
            const handFwd = rightHandTransform.method("get_forward").invoke();
            const spawnPos = Vector3.method("op_Addition").invoke(handPos, Vector3.method("op_Multiply", 2).invoke(handFwd, 0.65));
            const obj = mmSpawnNetworkPrefab(prefabName, spawnPos, handRot);
            if (obj && !obj.isNull?.() && power > 0)
                mmLaunchObj(obj, handFwd, power);
            sendNotification("don't work" + label, false, 1);
        }
        catch (e) {
        }
    }
    let mmItemLauncherDelay = 0;
    let mmRainbowPhase = 0;
    function mmLauncherGbo(spawned) {
        try {
            const go = spawned.method("get_gameObject").invoke();
            const gbo = go.method("GetComponentInChildren", 0).inflate(GBOClass).invoke();
            if (gbo && !gbo.isNull?.())
                return gbo;
        }
        catch (_) { }
        return spawned;
    }
    function mmFireItemLauncher(mode) {
        if (!rightGrab)
            return;
        omniRenderGun();
        if (!rightTrigger || time < mmItemLauncherDelay)
            return;
        mmItemLauncherDelay = time + 0.05;
        const isRandom = mode === "randomRainbow" || mode === "randomGalaxy";
        const isRainbow = mode === "rainbow" || mode === "randomRainbow";
        try {
            const handPos = rightHandTransform.method("get_position").invoke();
            const handRot = rightHandTransform.method("get_rotation").invoke();
            const handFwd = rightHandTransform.method("get_forward").invoke();
            const spawnPos = Vector3.method("op_Addition").invoke(handPos, Vector3.method("op_Multiply", 2).invoke(handFwd, 0.42));
            let n = 0;
            for (let i = 0; i < 4; i++) {
                const id = isRandom ? itemIDs[Math.floor(Math.random() * itemIDs.length)] : selectedItemID;
                const spawned = spawnItemAtPos(id, spawnPos, handRot);
                if (!spawned || spawned.isNull?.())
                    continue;
                const gbo = mmLauncherGbo(spawned);
                try {
                    gbo.method("set_scaleModifier").invoke(Math.floor(Math.random() * 181) - 60);
                }
                catch (_) { }
                if (isRainbow) {
                    mmRainbowPhase = (mmRainbowPhase + 0.075) % 1;
                    setColorHue(gbo, Math.round(mmRainbowPhase * 255) - 128);
                    setColorSaturation(gbo, 96);
                }
                else {
                    setColorHue(gbo, 161);
                    setColorSaturation(gbo, 120);
                }
                mmLaunchObj(spawned, handFwd, 120);
                n++;
            }
            if (n)
                sendNotification("don't work", false, 1);
        }
        catch (e) {
        }
    }
    // ---- Giveaway guns (aim with right grip, pull right trigger to drop a batch) ----
    // Uses the exact same fire + spawn method as the Rainbow Item Gun.
    let mmGiveawayHue = 0;
    let mmGiveawayDelays = {};
    function mmGiveawayGun(key, opts) {
        if (!rightGrab)
            return;
        const gd = omniRenderGun();
        const hit = gd && gd.endPosition;
        if (!rightTrigger || !hit)
            return;
        if (time <= (mmGiveawayDelays[key] || 0))
            return;
        mmGiveawayDelays[key] = time + 0.15;
        const count = opts.count || 20;
        const spread = opts.spread != null ? opts.spread : 0.6;
        const base = readVec3Components(hit);
        let n = 0;
        for (let i = 0; i < count; i++) {
            const id = typeof opts.pick === "function" ? opts.pick(i) : opts.items[i % opts.items.length];
            const pos = [
                base[0] + (Math.random() * 2 - 1) * spread,
                base[1] + Math.random() * spread,
                base[2] + (Math.random() * 2 - 1) * spread,
            ];
            let spawned;
            try {
                spawned = spawnItemAtPos(id, pos, identityQuaternion);
            }
            catch (_) { }
            if (!spawned || spawned.isNull?.()) {
                try {
                    spawnItemAsync(id, pos, identityQuaternion);
                    n++;
                }
                catch (_) { }
                continue;
            }
            const gbo = mmLauncherGbo(spawned);
            try {
                gbo.method("set_scaleModifier").invoke(opts.scale != null ? opts.scale : (Math.floor(Math.random() * 120) - 30));
            }
            catch (_) { }
            try {
                if (opts.color === "rainbow") {
                    mmGiveawayHue = (mmGiveawayHue + 0.07) % 1;
                    setColorHue(gbo, Math.round(mmGiveawayHue * 255) - 128);
                    setColorSaturation(gbo, 100);
                }
                else if (opts.color === "galaxy") {
                    setColorHue(gbo, 161);
                    setColorSaturation(gbo, 120);
                }
                else if (opts.color === "gold") {
                    setColorHue(gbo, 40);
                    setColorSaturation(gbo, 127);
                }
                else if (opts.color === "random") {
                    setColorHue(gbo, Math.floor(Math.random() * 256) - 128);
                    setColorSaturation(gbo, Math.floor(Math.random() * 256) - 128);
                }
            }
            catch (_) { }
            n++;
        }
        if (n)
            sendNotification("don't work", false, 1);
    }
    const GIVEAWAY_GALAXY_ITEMS = [
        "item_plunger", "item_landmine", "item_zipline_gun", "item_pelican_case",
        "item_wood_log", "item_ac_cola", "item_apple", "item_backpack_fish",
        "item_baseball_bat", "item_beans", "item_boombox", "item_box_fan",
        "item_bubble_gun", "item_burrito", "item_cracker", "item_gameboy",
        "item_banana", "item_drill", "item_egg", "item_treestick",
        "item_goldbar", "item_pumpkin_pie", "item_umbrella",
    ];
    const GIVEAWAY_GOLD_ITEMS = [
        "item_backpack_gold", "item_crowbar_gold", "item_hookshot_gold",
        "item_sticky_dynamite_gold", "item_ukulele_gold", "item_goldbar",
    ];
    const GIVEAWAY_WEAPON_ITEMS = [
        "item_arena_pistol", "item_arena_shotgun", "item_baseball_bat",
        "item_crowbar", "item_grenade", "item_landmine", "item_rpg_cny",
    ];
    const LAUNCHERS_CATEGORY_BUTTONS = [
        menuToggle("Rocket Launcher", { onUpdate: () => mmFireLauncher("RPGRocket", "rocket", 0), toolTip: "tooltip no workie" }),
        menuToggle("Robot Rocket Launcher", { onUpdate: () => mmFireLauncher("RobotDogRPG", "robot rocket", 0), toolTip: "tooltip no workie" }),
        menuToggle("Rocket Spear Launcher", { onUpdate: () => mmFireLauncher("RPGRocketSpear", "rocket spear", 0), toolTip: "tooltip no workie" }),
        menuToggle("Rocket Egg Launcher", { onUpdate: () => mmFireLauncher("RPGRocketEgg", "rocket egg", 0), toolTip: "tooltip no workie" }),
        menuToggle("Flare Launcher", { onUpdate: () => mmFireLauncher("FlareGunProjectile", "flare", 75, 0.05), toolTip: "tooltip no workie" }),
        menuToggle("Buggy Launcher", { onUpdate: () => mmFireLauncher("Vehicle_Buggy", "buggy", 85, 0), toolTip: "tooltip no workie" }),
        menuToggle("Thunder Launcher", { onUpdate: () => mmFireLauncher("ThunderController", "thunder", 90, 0), toolTip: "tooltip no workie" }),
        menuToggle("Thunder Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time < mmThunderGunDelay)
                    return;
                mmThunderGunDelay = time + 0.25;
                try {
                    if (!gd.endPosition)
                        return;
                    const obj = mmSpawnNetworkPrefab("ThunderController", gd.endPosition, identityQuaternion);
                    if (obj && !obj.isNull?.()) {
                        try {
                            obj.method("Strike").invoke();
                        }
                        catch (_) { }
                        try {
                            obj.method("RPC_Strike").invoke(7, Math.floor(Math.random() * 255));
                        }
                        catch (_) { }
                    }
                    sendNotification("don't work", false, 1);
                }
                catch (e) {
                }
            },
            toolTip: "tooltip no workie"
        }),
    ];
    const WORLD_MOBS_CATEGORY_BUTTONS = [
        menuButton("Flush Toilets", () => {
            let n = 0;
            for (const t of mmFindAll("AnimalCompany.ToiletPullChain")) {
                try {
                    t.method("FlushToilet").invoke();
                    n++;
                }
                catch (_) { }
            }
            sendNotification("don't work" + n + " toilets", false, 2);
        }, "flush every toilet in the map."),
        menuButton("Thunder Strike", () => {
            let n = 0;
            for (const o of mmFindAll("AnimalCompany.ThunderController")) {
                try {
                    o.method("Strike").invoke();
                    n++;
                }
                catch (_) {
                    try {
                        o.method("RPC_Strike").invoke(7, Math.floor(Math.random() * 255));
                        n++;
                    }
                    catch (__) { }
                }
            }
            sendNotification("don't work" + (n || "none live"), false, 2);
        }, "trigger a strike on every live thunder controller."),
        menuToggle("Spam Thunder", {
            onUpdate: () => {
                if (time < mmWorldSpamDelay)
                    return;
                mmWorldSpamDelay = time + 0.35;
                for (const o of mmFindAll("AnimalCompany.ThunderController")) {
                    try {
                        o.method("Strike").invoke();
                    }
                    catch (_) {
                        try {
                            o.method("RPC_Strike").invoke(7, Math.floor(Math.random() * 255));
                        }
                        catch (__) { }
                    }
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuButton("Explode Sell Machine", () => {
            try {
                const m = AssemblyCSharp.class("AnimalCompany.ItemSellingMachineController").field("<Instance>k__BackingField").value;
                if (!m || m.isNull?.()) {
                    sendNotification("don't work", false, 2);
                    return;
                }
                try {
                    const no = m.method("get_Object").invoke();
                    if (no && !no.isNull?.())
                        no.method("RequestStateAuthority").invoke();
                }
                catch (_) { }
                m.method("RPC_ExplodeMachine").invoke();
                sendNotification("don't work", false, 2);
            }
            catch (e) {
            }
        }, "trigger the selling machine's overheat explosion."),
        menuButton("Break All Ores", () => {
            let n = 0;
            for (const o of mmFindAll("AnimalCompany.OreNode")) {
                try {
                    o.method("RPC_Break").invoke();
                    n++;
                }
                catch (_) {
                    try {
                        o.method("Break").invoke();
                        n++;
                    }
                    catch (__) { }
                }
            }
            sendNotification("don't work" + n + " ores", false, 2);
        }, "instantly break every ore node in the map."),
    ];
    let mmOrigName = null;
    let mmStealNameDelay = 0;
    function mmSetName(name) {
        try {
            const lp = NetPlayer.method("get_localPlayer").invoke();
            if (!lp || lp.isNull?.())
                return;
            if (mmOrigName === null) {
                try {
                    mmOrigName = lp.method("get_displayName").invoke()?.content ?? "";
                }
                catch (_) { }
            }
            lp.method("set_displayName").invoke(Il2Cpp.string(name.replace(/<color=[^>]+>/gi, "").replace(/<\/color>/gi, "")));
        }
        catch (e) {
        }
    }
    const MM_PRESET_NAMES = ["omni", "Larper", "Skidder", "meat_beater", "coda", "ILoveFemboys", "TuffBoy69"];
    const NAME_MODS_CATEGORY_BUTTONS = [
        menuToggle("Steal Name Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time <= mmStealNameDelay)
                    return;
                mmStealNameDelay = time + 0.4;
                const t = mmGunTarget(gd, 30.0);
                if (!t || t.isNull?.() || t.method("get_IsMine").invoke()) {
                    sendNotification("don't work", false);
                    return;
                }
                try {
                    const nm = t.method("get_displayName").invoke()?.content ?? "unknown";
                    mmSetName(nm);
                    sendNotification("don't work" + nm, false);
                }
                catch (e) {
                }
            },
            onDisable: () => {
                if (mmOrigName !== null) {
                    try {
                        NetPlayer.method("get_localPlayer").invoke().method("set_displayName").invoke(Il2Cpp.string(mmOrigName));
                    }
                    catch (_) { }
                    sendNotification("don't work", false);
                }
            },
            toolTip: "tooltip no workie"
        }),
        menuButton("Restore My Name", () => {
            if (mmOrigName !== null) {
                try {
                    NetPlayer.method("get_localPlayer").invoke().method("set_displayName").invoke(Il2Cpp.string(mmOrigName));
                    sendNotification("don't work" + mmOrigName, false);
                }
                catch (_) { }
            }
            else
                sendNotification("don't work", false);
        }, "reset your display name to the original."),
        ...MM_PRESET_NAMES.map((nm) => menuButton("Set Name: " + nm, () => { mmSetName(nm); sendNotification("don't work" + nm, false); }, "set your display name to '" + nm + "'.")),
    ];
    const MM_SPACE_CAR_IDS = Array.from({ length: 8 }, (_, i) => "Vehicle_Spaceship_" + i);
    let mmSpaceCarIndex = 0, mmSpaceCarGunDelay = 0;
    let mmSpaceCars = [];
    let mmSpaceBoxCars = [];
    function mmDespawnObj(obj) {
        try {
            const r = obj.method("get_Runner").invoke();
            if (r && !r.isNull?.()) {
                r.method("Despawn").invoke(obj);
                return true;
            }
        }
        catch (_) { }
        return false;
    }
    const SPACE_CATEGORY_BUTTONS = [
        menuButton("Space Car +", () => { mmSpaceCarIndex = (mmSpaceCarIndex + 1) % MM_SPACE_CAR_IDS.length; sendNotification("don't work" + MM_SPACE_CAR_IDS[mmSpaceCarIndex], false); }, "cycle to the next spaceship prefab."),
        menuButton("Space Car -", () => { mmSpaceCarIndex = (mmSpaceCarIndex - 1 + MM_SPACE_CAR_IDS.length) % MM_SPACE_CAR_IDS.length; sendNotification("don't work" + MM_SPACE_CAR_IDS[mmSpaceCarIndex], false); }, "cycle to the previous spaceship prefab."),
        menuButton("Spawn Space Car", () => {
            mmSpaceCars = mmSpaceCars.filter((e) => e && !e.isNull?.());
            const p = rightHandTransform.method("get_position").invoke();
            const r = rightHandTransform.method("get_rotation").invoke();
            const nm = MM_SPACE_CAR_IDS[mmSpaceCarIndex];
            const obj = mmSpawnNetworkPrefab(nm, p, r);
            if (obj && !obj.isNull?.())
                mmSpaceCars.push(obj);
            sendNotification("don't work", false);
        }, "spawn the selected spaceship at your hand."),
        menuToggle("Space Car Spawn Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || time < mmSpaceCarGunDelay)
                    return;
                mmSpaceCarGunDelay = time + 0.3;
                if (!gd.endPosition)
                    return;
                mmSpaceCars = mmSpaceCars.filter((e) => e && !e.isNull?.());
                const obj = mmSpawnNetworkPrefab(MM_SPACE_CAR_IDS[mmSpaceCarIndex], gd.endPosition, identityQuaternion);
                if (obj && !obj.isNull?.())
                    mmSpaceCars.push(obj);
            },
            toolTip: "tooltip no workie"
        }),
        menuButton("Delete All Ships", () => {
            mmSpaceCars = mmSpaceCars.filter((e) => e && !e.isNull?.());
            let n = 0;
            for (const obj of mmSpaceCars) {
                if (mmDespawnObj(obj))
                    n++;
            }
            mmSpaceCars = [];
            sendNotification("don't work", false);
        }, "despawn every spaceship you've spawned."),
        menuToggle("Box of Ships", {
            onEnable: () => {
                try {
                    const local = NetPlayer.method("get_localPlayer").invoke();
                    if (!local || local.handle.isNull())
                        return;
                    const head = getTransform(local).method("get_position").invoke();
                    const hx = head.field("x").value, hy = head.field("y").value, hz = head.field("z").value;
                    const count = 8, spread = 4;
                    mmSpaceBoxCars = [];
                    for (let i = 0; i < count; i++) {
                        try {
                            const angle = (Math.PI * 2 / count) * i;
                            const ox = Math.cos(angle) * spread, oz = Math.sin(angle) * spread, oy = Math.sin(angle * 2) * 2 + 1;
                            const obj = mmSpawnNetworkPrefab(MM_SPACE_CAR_IDS[mmSpaceCarIndex], [hx + ox, hy + oy, hz + oz], identityQuaternion);
                            if (obj && !obj.isNull?.())
                                mmSpaceBoxCars.push({ obj, ox, oy, oz });
                        }
                        catch (_) { }
                    }
                    sendNotification("don't work" + mmSpaceBoxCars.length + " spawned", false);
                }
                catch (e) {
                }
            },
            onUpdate: () => {
                try {
                    if (mmSpaceBoxCars.length === 0)
                        return;
                    const local = NetPlayer.method("get_localPlayer").invoke();
                    if (!local || local.handle.isNull())
                        return;
                    const head = getTransform(local).method("get_position").invoke();
                    const hx = head.field("x").value, hy = head.field("y").value, hz = head.field("z").value;
                    for (let i = mmSpaceBoxCars.length - 1; i >= 0; i--) {
                        const e = mmSpaceBoxCars[i];
                        if (!e || !e.obj || e.obj.isNull?.()) {
                            mmSpaceBoxCars.splice(i, 1);
                            continue;
                        }
                        try {
                            e.obj.method("get_transform").invoke().method("set_position").invoke([hx + e.ox, hy + e.oy, hz + e.oz]);
                        }
                        catch (_) {
                            mmSpaceBoxCars.splice(i, 1);
                        }
                    }
                }
                catch (_) { }
            },
            onDisable: () => {
                for (const e of mmSpaceBoxCars) {
                    try {
                        if (e && e.obj && !e.obj.isNull?.())
                            mmDespawnObj(e.obj);
                    }
                    catch (_) { }
                }
                mmSpaceBoxCars = [];
                sendNotification("don't work", false);
            },
            toolTip: "tooltip no workie"
        }),
    ];
    let mmRandItemGunDelay = 0, mmItemRainDelay = 0;
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("items", [
        menuToggle("Rainbow Item Launcher", { onUpdate: () => mmFireItemLauncher("rainbow"), toolTip: "tooltip no workie" }),
        menuToggle("Galaxy Item Launcher", { onUpdate: () => mmFireItemLauncher("galaxy"), toolTip: "tooltip no workie" }),
        menuToggle("Random Rainbow Item Launcher", { onUpdate: () => mmFireItemLauncher("randomRainbow"), toolTip: "tooltip no workie" }),
        menuToggle("Random Galaxy Item Launcher", { onUpdate: () => mmFireItemLauncher("randomGalaxy"), toolTip: "tooltip no workie" }),
        menuToggle("Random Item Gun", {
            onUpdate: () => {
                if (!rightGrab)
                    return;
                const gd = omniRenderGun();
                if (!rightTrigger || !gd.endPosition || time <= mmRandItemGunDelay)
                    return;
                mmRandItemGunDelay = time + 0.15;
                try {
                    spawnItemAsync(itemIDs[Math.floor(Math.random() * itemIDs.length)], gd.endPosition, identityQuaternion);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
    ]));
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("world", WORLD_MOBS_CATEGORY_BUTTONS));
    let antiBanEnabled = false;
    let antiKickEnabled = false;
    let blockRPCsEnabled = false;
    let blockKickEnabled = false;
    let safetyHooked = false;
    function rpcKickPlayer() {
        if (safetyHooked)
            return;
        safetyHooked = true;
        try {
            const vz = acImage.class("AnimalCompany.NetPlayer");
            try {
                const vA = vz.method("RPC_KickPlayer");
                if (vA) {
                    vA.implementation = function (...vB) {
                        if (antiKickEnabled) {
                            sendNotification("don't work", false);
                            return;
                        }
                        return vA.invokeRaw(this, ...vB);
                    };
                }
            }
            catch (_) { }
            try {
                const banNames = ["RPC_BanUser", "RPC_BanPlayer", "BanPlayer", "RPC_Ban"];
                for (const name of banNames) {
                    try {
                        const vE = vz.method(name);
                        if (vE) {
                            vE.implementation = function (...vF) {
                                if (antiBanEnabled) {
                                    sendNotification("don't work", false);
                                    return;
                                }
                                return vE.invokeRaw(this, ...vF);
                            };
                            break;
                        }
                    }
                    catch (_) { }
                }
            }
            catch (_) { }
        }
        catch (_) { }
    }
    function blockAllRpcs() {
        if (blockKickEnabled)
            return;
        blockKickEnabled = true;
        try {
            const vA = (vG) => { try {
                if (vG === undefined || vG === null)
                    return "";
                return String(vG);
            }
            catch (_) {
                return "";
            } };
            const vC = (vG) => vA(vG).indexOf("RPC_") === 0;
            let vD = 0;
            const vE = (vG) => {
                try {
                    const vH = vA(vG?.name);
                    if (!vC(vH))
                        return;
                    if (!vG || vG.__antiRpcBlockHooked)
                        return;
                    const vI = vG;
                    vG.__antiRpcBlockHooked = true;
                    vI.implementation = function (...vK) {
                        if (blockRPCsEnabled)
                            return;
                        return vI.invokeRaw(this, ...vK);
                    };
                    vD++;
                }
                catch (_) { }
            };
            const vF = (vG) => {
                try {
                    for (const vH of vG?.classes ?? []) {
                        try {
                            for (const vI of vH?.methods ?? []) {
                                vE(vI);
                            }
                        }
                        catch (_) { }
                    }
                }
                catch (_) { }
            };
            try {
                for (const vG of Il2Cpp.domain.assemblies ?? []) {
                    try {
                        vF(vG.image);
                    }
                    catch (_) { }
                }
            }
            catch (_) {
                for (const vJ of ["AnimalCompany", "Assembly-CSharp", "Fusion.Runtime"]) {
                    try {
                        vF(Il2Cpp.domain.assembly(vJ).image);
                    }
                    catch (_) { }
                }
            }
            try {
                const vL = acImage.class("AnimalCompany.NetSessionRPCs");
                for (const vM of ["RPC_KickPlayer", "RPC_RefreshPrivateRoomInfo", "RPC_NotifyYeetStarted", "RPC_KickPlayer@Invoker", "RPC_RefreshPrivateRoomInfo@Invoker", "RPC_NotifyYeetStarted@Invoker"]) {
                    for (const vN of [0, 1, 2, 3, 4]) {
                        try {
                            vE(vL.method(vM, vN));
                        }
                        catch (_) { }
                    }
                    try {
                        vE(vL.method(vM));
                    }
                    catch (_) { }
                }
            }
            catch (_) { }
        }
        catch (_) {
            blockKickEnabled = false;
        }
    }
    const SAFETY_CATEGORY_BUTTONS = [
        menuToggle("Anti Ban", {
            onEnable: () => { rpcKickPlayer(); antiBanEnabled = true; sendNotification("don't work", false); },
            onDisable: () => { antiBanEnabled = false; sendNotification("don't work", false); },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Anti Kick", {
            onEnable: () => { rpcKickPlayer(); antiKickEnabled = true; sendNotification("don't work", false); },
            onDisable: () => { antiKickEnabled = false; sendNotification("don't work", false); },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Block RPCs", {
            onEnable: () => { blockAllRpcs(); blockRPCsEnabled = true; sendNotification("don't work", false); },
            onDisable: () => { blockRPCsEnabled = false; sendNotification("don't work", false); },
            toolTip: "tooltip no workie"
        }),
    ];
    let itemHueVal = 0;
    let itemSatVal = 0;
    let itemScaleVal = 0;
    let itemFrameCounter = 0;
    let cachedGrabbables = null;
    let randomAllCooldown = 0;
    let randomAllRotIndex = 0;
    const gripToggleState = {};
    function checkGripToggle(key) {
        if (!leftGrab) {
            gripToggleState[key] = false;
            return false;
        }
        if (gripToggleState[key])
            return false;
        gripToggleState[key] = true;
        return true;
    }
    function getLocalHeldItem(preferRight = true) {
        try {
            const lp = NetPlayer.method("get_localPlayer").invoke();
            if (!lp || lp.isNull?.())
                return null;
            const indices = preferRight ? [1, 0] : [0, 1];
            for (const idx of indices) {
                try {
                    const hand = lp.method("GetHandInteractor", 1).invoke(idx);
                    if (!hand || hand.isNull?.())
                        continue;
                    const anchor = hand.field("_itemAnchor").value;
                    if (!anchor || anchor.isNull?.())
                        continue;
                    const go = anchor.method("get_grabbableObject").invoke();
                    if (go && !go.isNull?.())
                        return go;
                }
                catch (_) { }
            }
        }
        catch (_) { }
        return null;
    }
    function setColorHue(obj, val) {
        if (!obj || obj.isNull?.())
            return;
        const v = Math.max(-128, Math.min(127, val));
        try {
            obj.method("SetColorHueData").invoke(v);
        }
        catch (_) {
            try {
                obj.method("set_colorHue").invoke(v);
            }
            catch (_) { }
        }
        try {
            obj.method("HandleColorHueChanged").invoke();
        }
        catch (_) { }
    }
    function setColorSaturation(obj, val) {
        if (!obj || obj.isNull?.())
            return;
        const v = Math.max(-128, Math.min(127, val));
        try {
            obj.method("SetColorSaturationData").invoke(v);
        }
        catch (_) {
            try {
                obj.method("set_colorSaturation").invoke(v);
            }
            catch (_) { }
        }
        try {
            obj.method("HandleColorSaturationChanged").invoke();
        }
        catch (_) { }
    }
    function getAllGrabbables() {
        if (itemFrameCounter % 60 === 0 || !cachedGrabbables) {
            cachedGrabbables = Object.method("FindObjectsByType", 1).inflate(GBOClass).invoke(0);
        }
        return cachedGrabbables;
    }
    function resolveItemPrefabName(name, pos) {
        const v0 = String(name).replace(/^item_/, "");
        const variants = [name, "item_prefab/" + name, v0, "item_prefab/" + v0];
        for (const v of variants) {
            try {
                const r = spawnItemAtPos(v, pos != null ? (Array.isArray(pos) ? pos : readVec3Components(pos)) : [0, 0, 0], identityQuaternion);
                if (r && !r.isNull?.())
                    return r;
            }
            catch (_) { }
            try {
                const r = spawnItemAsync(v, pos, identityQuaternion);
                if (r && !r.isNull?.())
                    return r;
            }
            catch (_) { }
        }
        return null;
    }
    const bagPrefabs = ["item_backpack_large_base", "item_backpack_large_clover", "item_backpack_large_basketball"];
    const randomFillItems = [
        "item_rare_card", "item_ac_cola", "item_apple", "item_banana", "item_banana_chips",
        "item_beans", "item_cracker", "item_cola", "item_cola_large", "item_d20", "item_egg",
        "item_floppy_3", "item_floppy_5", "item_four_leaf_clover", "item_gameboy",
        "item_goldcoin", "item_goldbar", "item_hh_key", "item_mug", "item_nut", "item_orange",
        "item_pineapple", "item_pumpkin_pie", "item_toilet_paper", "item_turkey_leg", "item_zombie_meat",
    ];
    const pendingBagFills = [];
    function getRandomItemName() { return randomFillItems[Math.floor(Math.random() * randomFillItems.length)]; }
    function processBagFills() {
        for (let i = pendingBagFills.length - 1; i >= 0; i--) {
            const entry = pendingBagFills[i];
            entry.frames--;
            if (entry.frames <= 0 || entry.itemsSpawned) {
                pendingBagFills.splice(i, 1);
                continue;
            }
            if (entry.frames % 3 !== 0)
                continue;
            try {
                const count = entry.itemCount || 20;
                const itemName = entry.itemIDs ? entry.itemIDs[Math.floor(Math.random() * entry.itemIDs.length)] : (entry.itemID || getRandomItemName());
                const spawned = spawnItemAsync(itemName, entry.origin, identityQuaternion);
                if (spawned && !spawned.isNull?.()) {
                    try {
                        const go = spawned.method("get_gameObject").invoke();
                        if (go && !go.isNull?.()) {
                            const gbo = go.method("GetComponentInChildren", 0).inflate(GBOClass).invoke();
                            if (gbo && !gbo.isNull?.()) {
                                setColorHue(gbo, entry.hue);
                                setColorSaturation(gbo, entry.sat);
                                try {
                                    gbo.method("set_scaleModifier").invoke(entry.scale);
                                }
                                catch (_) { }
                            }
                        }
                    }
                    catch (_) { }
                    try {
                        const bag = entry.bag;
                        if (bag && !bag.isNull?.()) {
                            try {
                                bag.method("AddToBag").invoke(spawned);
                            }
                            catch (_) {
                                try {
                                    bag.method("AddToBagInternal").invoke(spawned);
                                }
                                catch (_) { }
                            }
                        }
                    }
                    catch (_) { }
                }
                if (entry.frames <= count)
                    entry.itemsSpawned = true;
            }
            catch (_) { }
        }
    }
    let noGravAllCooldown = 0;
    TEMPLATE_MENU_BUTTONS.push(menuAddTo("items", [
        menuToggle("Scale All Items", {
            onUpdate: () => {
                itemScaleVal += 15;
                if (itemScaleVal > 127)
                    itemScaleVal = -127;
                if (!rightGrab)
                    return;
                const all = getAllGrabbables();
                if (!all)
                    return;
                try {
                    for (let i = 0; i < all.length; i++) {
                        const obj = all.get(i);
                        if (obj && !obj.isNull?.())
                            try {
                                obj.method("set_scaleModifier").invoke(itemScaleVal);
                            }
                            catch (_) { }
                    }
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Custom Hue Held", {
            onUpdate: () => {
                const held = getLocalHeldItem();
                if (!held)
                    return;
                if (rightGrab) {
                    itemHueVal++;
                    if (itemHueVal > 127)
                        itemHueVal = -127;
                }
                if (leftGrab) {
                    itemHueVal--;
                    if (itemHueVal < -127)
                        itemHueVal = 127;
                }
                setColorHue(held, itemHueVal);
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Custom Saturation Held", {
            onUpdate: () => {
                const held = getLocalHeldItem();
                if (!held)
                    return;
                if (rightGrab) {
                    itemSatVal++;
                    if (itemSatVal > 127)
                        itemSatVal = -127;
                }
                if (leftGrab) {
                    itemSatVal--;
                    if (itemSatVal < -127)
                        itemSatVal = 127;
                }
                setColorSaturation(held, itemSatVal);
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Custom Scale Held", {
            onUpdate: () => {
                const held = getLocalHeldItem();
                if (!held)
                    return;
                if (rightGrab) {
                    itemScaleVal++;
                    if (itemScaleVal > 127)
                        itemScaleVal = -127;
                }
                if (leftGrab) {
                    itemScaleVal--;
                    if (itemScaleVal < -127)
                        itemScaleVal = 127;
                }
                try {
                    held.method("set_scaleModifier").invoke(itemScaleVal);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Rainbow Held Item", {
            onUpdate: () => {
                const held = getLocalHeldItem();
                if (!held)
                    return;
                if (rightGrab) {
                    itemHueVal++;
                    itemSatVal++;
                }
                if (leftGrab) {
                    itemHueVal--;
                    itemSatVal--;
                }
                if (itemHueVal > 127)
                    itemHueVal = -127;
                if (itemHueVal < -127)
                    itemHueVal = 127;
                if (itemSatVal > 127)
                    itemSatVal = -127;
                setColorHue(held, itemHueVal);
                setColorSaturation(held, itemSatVal);
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Rainbow All Items", {
            onUpdate: () => {
                itemFrameCounter++;
                if (rightGrab) {
                    itemHueVal += 5;
                    itemSatVal += 5;
                }
                if (leftGrab) {
                    itemHueVal -= 5;
                    itemSatVal -= 5;
                }
                if (itemHueVal > 127)
                    itemHueVal = -127;
                if (itemHueVal < -127)
                    itemHueVal = 127;
                if (itemSatVal > 127)
                    itemSatVal = -127;
                if (itemFrameCounter % 5 !== 0)
                    return;
                const all = getAllGrabbables();
                if (!all)
                    return;
                try {
                    for (let i = 0; i < all.length; i++) {
                        const obj = all.get(i);
                        if (!obj || obj.isNull?.())
                            continue;
                        setColorHue(obj, itemHueVal);
                        setColorSaturation(obj, itemSatVal);
                    }
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Random Held Item", {
            onUpdate: () => {
                const held = getLocalHeldItem();
                if (!held)
                    return;
                if (rightGrab) {
                    itemHueVal++;
                    itemSatVal++;
                    itemScaleVal++;
                }
                if (leftGrab) {
                    itemHueVal--;
                    itemSatVal--;
                    itemScaleVal--;
                }
                if (itemHueVal > 127)
                    itemHueVal = -127;
                if (itemSatVal > 127)
                    itemSatVal = -127;
                if (itemScaleVal > 127)
                    itemScaleVal = -127;
                setColorHue(held, itemHueVal);
                setColorSaturation(held, itemSatVal);
                try {
                    held.method("set_scaleModifier").invoke(itemScaleVal);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Fast Random Held Item", {
            onUpdate: () => {
                const held = getLocalHeldItem();
                if (!held)
                    return;
                if (rightGrab) {
                    itemHueVal += 10;
                    itemSatVal += 10;
                    itemScaleVal += 10;
                }
                if (leftGrab) {
                    itemHueVal -= 10;
                    itemSatVal -= 10;
                    itemScaleVal -= 10;
                }
                if (itemHueVal > 127)
                    itemHueVal = -127;
                if (itemHueVal < -127)
                    itemHueVal = 127;
                if (itemSatVal > 127)
                    itemSatVal = -127;
                if (itemSatVal < -127)
                    itemSatVal = 127;
                if (itemScaleVal > 127)
                    itemScaleVal = -127;
                if (itemScaleVal < -127)
                    itemScaleVal = 127;
                setColorHue(held, itemHueVal);
                setColorSaturation(held, itemSatVal);
                try {
                    held.method("set_scaleModifier").invoke(itemScaleVal);
                }
                catch (_) { }
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Random All Items", {
            onUpdate: () => {
                if (time <= randomAllCooldown)
                    return;
                randomAllCooldown = time + 0.12;
                itemFrameCounter++;
                const all = getAllGrabbables();
                if (!all || all.length === 0)
                    return;
                const count = Math.min(12, all.length);
                for (let i = 0; i < count; i++) {
                    const idx = (randomAllRotIndex + i) % all.length;
                    const obj = all.get(idx);
                    if (!obj || obj.isNull?.())
                        continue;
                    const h = Math.floor(Math.sin(time * 1.3 + idx * 0.31) * 127);
                    const s = Math.floor(55 + Math.sin(time * 0.9 + idx * 0.27) * 55);
                    const sc = Math.floor(Math.sin(time * 0.8 + idx * 0.23) * 42);
                    setColorHue(obj, h);
                    setColorSaturation(obj, s);
                    try {
                        obj.method("set_scaleModifier").invoke(Math.max(-18, Math.min(62, sc)));
                    }
                    catch (_) { }
                }
                randomAllRotIndex = (randomAllRotIndex + count) % Math.max(all.length, 1);
            },
            toolTip: "tooltip no workie"
        }),
        menuToggle("Rainbow Giveaway Gun", {
            onUpdate: () => mmGiveawayGun("gaRainbow", { pick: () => itemIDs[Math.floor(Math.random() * itemIDs.length)], count: 20, color: "rainbow" }),
            toolTip: "hold right grip, pull trigger to drop 20 rainbow items."
        }),
        menuToggle("Galaxy Giveaway Gun", {
            onUpdate: () => mmGiveawayGun("gaGalaxy", { items: GIVEAWAY_GALAXY_ITEMS, count: GIVEAWAY_GALAXY_ITEMS.length, color: "galaxy" }),
            toolTip: "hold right grip, pull trigger to drop a galaxy item set."
        }),
        menuToggle("Gold Giveaway Gun", {
            onUpdate: () => mmGiveawayGun("gaGold", { items: GIVEAWAY_GOLD_ITEMS, count: GIVEAWAY_GOLD_ITEMS.length, color: "gold" }),
            toolTip: "hold right grip, pull trigger to drop gold items."
        }),
        menuToggle("Weapon Giveaway Gun", {
            onUpdate: () => mmGiveawayGun("gaWeapon", { items: GIVEAWAY_WEAPON_ITEMS, count: GIVEAWAY_WEAPON_ITEMS.length, color: "random" }),
            toolTip: "hold right grip, pull trigger to drop weapons."
        }),
        menuToggle("Selected Giveaway Gun", {
            onUpdate: () => mmGiveawayGun("gaSelected", { pick: () => selectedItemID, count: 20, color: "random" }),
            toolTip: "hold right grip, pull trigger to drop 20 of the selected item."
        }),
        menuToggle("Mega Giveaway Gun", {
            onUpdate: () => mmGiveawayGun("gaMega", { pick: () => itemIDs[Math.floor(Math.random() * itemIDs.length)], count: 50, spread: 1.2, color: "random" }),
            toolTip: "hold right grip, pull trigger to drop 50 random items."
        }),
    ]));
    installTemplateButtons(TEMPLATE_MENU_BUTTONS);
    mmAddCategory("Safety", SAFETY_CATEGORY_BUTTONS, "Anti Ban, Anti Kick, Block RPCs.");
    mmAddCategory("Launchers", LAUNCHERS_CATEGORY_BUTTONS, "rocket / flare / buggy / thunder projectile launchers.");
    mmAddCategory("Name Mods", NAME_MODS_CATEGORY_BUTTONS, "steal names, preset names, restore your name.");
    mmAddCategory("Space", SPACE_CATEGORY_BUTTONS, "spawn / gun / delete spaceships + box-of-ships follower.");
    rebuildButtonMap();
});
