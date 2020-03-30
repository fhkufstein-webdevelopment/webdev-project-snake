<?php

echo $this->header;

?>
<div id="main">
    <div>
        <input type="number" id="xInput" value="10">
        <input type="number" id="yInput" value="10">
        <button type="button" id="input">Eingeben</button>
        <button type="button" id="loeschen">Löschen</button>
        <p id="info">points: </p>
        <canvas id="gameCanvas" width="800" height="800"></canvas>
        <script type="text/javascript" src="js/snake.js"></script>
    </div>
</div>



<div class="modal fade" tabindex="-1" role="dialog" id="editModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button>
                <button type="button" class="btn btn-primary"></button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<?php

echo $this->footer;

?>