/**
 * Created by tt on 2016/11/5.
 */

function Error(code,msg) {
    this.code = code;
    this.msg = msg;
}
ERRORS = {
    NO_DATA:new Error('data_err:no such record','没有相应记录!'),
    UPDATE_FAIL:new Error('data_err:update fail','更新记录失败!'),
    INTERNAL:new Error('execute_err:internal error','系统内部错误!')
}


module.exports = {
    Error:Error,
    ERRORS:ERRORS
};