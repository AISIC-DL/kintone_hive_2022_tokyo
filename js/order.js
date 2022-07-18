//=============================================================================
//【ファイル名】
//  order.js
//【アプリ名】
//  売上登録
//-----------------------------------------------------------------------------
//  Copyright (c) 2022 AISIC.Inc
//=============================================================================

(() => {
  'use strict';

  // =============================================
  // 定数
  // =============================================

  // =============================================
  // 共通関数
  // =============================================
  // ---------------------------------------------
  // 共通入力画面制御
  // ---------------------------------------------
  const setCommonInputCtrl = record => {
    record.合計.disabled = true;
    record.明細.value.forEach(v => v.value.小計.disabled = true);
  };  // setCommonInputCtrl

  // ---------------------------------------------
  // 合計取得
  // ---------------------------------------------
  const getTotal = table => table.reduce((p, c) => p + Number(c.value.小計.value), 0);

  // =============================================
  // ADD EVENT HANDLER
  // =============================================
  // ---------------------------------------------
  // EVENT:create.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.show'
  ], async event => {
    const record = event.record;

    setCommonInputCtrl(record);

    return event;
  }); // create.show

  // ---------------------------------------------
  // EVENT:create.submit
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.submit'
  ], async event => {
    const record = event.record;

    record.合計.value = getTotal(record.明細.value);

    return event;
  }); // create.submit

  // ---------------------------------------------
  // EVENT:create.submit.success
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.submit.success'
  ], async event => {
    const record = event.record;

    return event;
  }); // create.submit.success

  // // ---------------------------------------------
  // // [Promise非対応]
  // // EVENT:create.change.<field_code>
  // // ---------------------------------------------
  // kintone.events.on([
  //     'app.record.create.change.<field_code>'
  // ], event => {
  //     const record = event.record;

  //     return event;
  // }); // create.change.<field_code>

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:create.change.明細
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.change.明細'
  ], event => {
    const record = event.record;

    record.明細.value.forEach(v => v.value.小計.disabled = true);

    record.合計.value = getTotal(record.明細.value);

    return event;
  }); // create.change.明細

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:create.change.単価
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.change.単価'
  ], event => {
    const record = event.record;

    event.changes.row.value.小計.value = Number(event.changes.row.value.単価.value) * Number(event.changes.row.value.数量.value);

    record.合計.value = getTotal(record.明細.value);

    return event;
  }); // create.change.単価

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:create.change.数量
  // ---------------------------------------------
  kintone.events.on([
    'app.record.create.change.数量'
  ], event => {
    const record = event.record;

    event.changes.row.value.小計.value = Number(event.changes.row.value.単価.value) * Number(event.changes.row.value.数量.value);

    record.合計.value = getTotal(record.明細.value);

    return event;
  }); // create.change.数量

  // ---------------------------------------------
  // EVENT:edit.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.show', 'app.record.index.edit.show'
  ], async event => {
    const record = event.record;

    setCommonInputCtrl(record);

    return event;
  }); // edit.show

  // ---------------------------------------------
  // EVENT:edit.submit
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.submit', 'app.record.index.edit.submit'
  ], async event => {
    const record = event.record;

    return event;
  }); // edit.submit

  // ---------------------------------------------
  // EVENT:edit.submit.success
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.submit.success', 'app.record.index.edit.submit.success'
  ], async event => {
    const record = event.record;

    return event;
  });

  // // ---------------------------------------------
  // // [Promise非対応]
  // // EVENT:edit.change.<field_code>
  // // ---------------------------------------------
  // kintone.events.on([
  //     'app.record.edit.change.<field_code>', 'app.record.index.edit.change.<field_code>'
  // ], event => {
  //     const record = event.record;

  //     return event;
  // }); // edit.change.<field_code>

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:edit.change.明細
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.change.明細', 'app.record.index.edit.change.明細'
  ], event => {
    const record = event.record;

    record.明細.value.forEach(v => v.value.小計.disabled = true);

    record.合計.value = getTotal(record.明細.value);

    return event;
  }); // edit.change.明細

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:edit.change.単価
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.change.単価', 'app.record.index.edit.change.単価'
  ], event => {

    event.changes.row.value.小計.value = Number(event.changes.row.value.単価.value) * Number(event.changes.row.value.数量.value);

    record.合計.value = getTotal(record.明細.value);

    return event;
  }); // edit.change.単価

  // ---------------------------------------------
  // [Promise非対応]
  // EVENT:edit.change.数量
  // ---------------------------------------------
  kintone.events.on([
    'app.record.edit.change.数量', 'app.record.index.edit.change.数量'
  ], event => {

    event.changes.row.value.小計.value = Number(event.changes.row.value.単価.value) * Number(event.changes.row.value.数量.value);

    record.合計.value = getTotal(record.明細.value);

    return event;
  }); // edit.change.数量

  // ---------------------------------------------
  // EVENT:detail.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.detail.show'
  ], async event => {
    const record = event.record;

    return event;
  }); // detail.show

  // ---------------------------------------------
  // EVENT:delete.submit
  // ---------------------------------------------
  kintone.events.on([
    'app.record.detail.delete.submit', 'app.record.index.delete.submit'
  ], async event => {
    const record = event.record;

    return event;
  }); // delete.submit

  // ---------------------------------------------
  // EVENT:process.proceed
  // ---------------------------------------------
  kintone.events.on([
    'app.record.detail.process.proceed'
  ], async event => {
    const record = event.record;

    return event;
  }); // process.proceed

  // ---------------------------------------------
  // EVENT:index.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.index.show'
  ], async event => {
    const records = event.records;

    return event;
  }); // index.show

  // ---------------------------------------------
  // EVENT:print.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.print.show'
  ], async event => {
    const record = event.record;

    return event;
  }); // print.show

  // ---------------------------------------------
  // EVENT:report.show
  // ---------------------------------------------
  kintone.events.on([
    'app.record.report.show'
  ], async event => {
    const record = event.record;

    return event;
  }); // report.show

})();

